Last login: Wed May 27 17:58:21 on ttys000
rafaelfagundes@MacBook-Pro---Rafael-Fagundes ~ % echo '{
  "name": "Resumo de Aula",
  "short_name": "Resumo Aula",
  "description": "Ferramenta para professores de música registrarem resumos de aula",
  "start_url": "/resumo-aula/",
  "display": "standalone",
  "background_color": "#F5F2EE",
  "theme_color": "#2C2825",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}' | pbcopy
rafaelfagundes@MacBook-Pro---Rafael-Fagundes ~ % 
  
Last login: Wed May 27 18:00:43 on ttys000
rafaelfagundes@MacBook-Pro---Rafael-Fagundes ~ % echo 'const CACHE = "resumo-aula-v1";
const ASSETS = [
  "/resumo-aula/",
  "/resumo-aula/index.html",
  "/resumo-aula/manifest.json",
  "/resumo-aula/icon-192.png",
  "/resumo-aula/icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});' | pbcopy
rafaelfagundes@MacBook-Pro---Rafael-Fagundes ~ % 








































