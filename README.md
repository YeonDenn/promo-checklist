# promo-checklist

해외 커뮤니티 활동을 날짜별로 체크하는 개인용 체크리스트.

- `docs/` : 웹페이지 (GitHub Pages). 할 일 내용은 `docs/data.js` 만 고치면 된다.
- `android/` : 위 페이지를 띄우는 안드로이드 웹뷰 앱. 페이지의 "앱 열기" 버튼을 받아 다른 앱을 실행한다.

빌드: `cd android && ./gradlew assembleDebug` (JDK 17, Android SDK 32)
