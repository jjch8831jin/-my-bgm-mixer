// 앱 설치용 최소 서비스워커 — 파일을 저장해 두지 않고 항상 새로 받아옴(예전 화면이 남는 문제 방지)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
