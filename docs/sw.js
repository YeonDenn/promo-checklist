// 인터넷이 되면 항상 새 내용을 받고, 안 되면 마지막으로 받은 내용을 보여 준다.
var CACHE = 'promo-checklist-v4';
self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(['./', 'index.html', 'data.js', 'manifest.json', 'icon.png', 'logo.png']); }).catch(function () {}));
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  // 예전 저장본을 지운다. 남겨 두면 인터넷이 잠깐 끊겼을 때 낡은 화면이 나온다.
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request, { cache: 'no-cache' }).then(function (res) {
      if (res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.open(CACHE).then(function (c) {
        return c.match(e.request, { ignoreSearch: true }).then(function (hit) { return hit || c.match('index.html'); });
      });
    })
  );
});
