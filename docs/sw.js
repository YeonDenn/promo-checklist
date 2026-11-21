// 인터넷이 되면 항상 새 내용을 받고, 안 되면 마지막으로 받은 내용을 보여 준다.
var CACHE = 'promo-checklist-v6';
var FILES = ['./', 'index.html', 'data.js', 'manifest.json', 'icon.png', 'logo.png'];
self.addEventListener('install', function (e) {
  // cache: 'reload' 로 받아야 브라우저가 들고 있던 예전 사본이 저장되지 않는다.
  e.waitUntil(caches.open(CACHE).then(function (c) {
    return c.addAll(FILES.map(function (f) { return new Request(f, { cache: 'reload' }); }));
  }).catch(function () {}));
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
    // 주소로 새 요청을 만든다. 페이지 이동 요청(e.request)에 옵션을 붙여 그대로 다시 보내면
    // 브라우저가 오류를 내서 늘 저장본이 나온다.
    fetch(e.request.url, { cache: 'no-cache' }).then(function (res) {
      if (res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put(e.request.url, copy); });
      }
      return res;
    }).catch(function () {
      return caches.open(CACHE).then(function (c) {
        return c.match(e.request.url, { ignoreSearch: true }).then(function (hit) { return hit || c.match('index.html'); });
      });
    })
  );
});
