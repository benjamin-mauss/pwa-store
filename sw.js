// sw.js

const staticCacheName = "cache_1"
const filesToCache = [
    "/LICENSE",
    // "/app.webmanifest",
    "/index.html",
    "/sw.js",
    "/imgs",
    "/imgs/arrow_down.png",
    "/imgs/handshake.png",
    "/imgs/grafico.png",
    "/imgs/carrinho.png",
    "/imgs/arrow_up.png",
    "/imgs/no-image2.png",
    "/imgs/no-image.png",
    "/offline.html",
    "/README.md",
    "/icon",
    "/icon/512x512.png",
    "/pages",
    "/pages/vendas",
    "/pages/vendas/index.html",
    "/pages/historico",
    "/pages/historico/index.html",
    "/pages/produtos",
    "/pages/produtos/index.html",
    "/pages/produtos/novo",
    "/pages/produtos/novo/index.html",
    "/pages/produtos/editar",
    "/pages/produtos/editar/index.html",
    "/css",
    "/css/novo.css",
    "/css/index.css",
    "/css/produtos.css",
    "/css/vender.css",
    "/css/mandatory.css",
    "/css/historico.css",
    "/favicon.ico",
    "/.gitattributes",
    "/js",
    "/js/libraries",
    "/js/libraries/jquery.min.js",
    "/js/libraries/jquery.min.map",
    "/js/mandatory.js",
    "/fonts",
    "/fonts/BebasNeue-Regular.ttf"
]

this.addEventListener("fetch", event => {
    console.log("fetch")
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          return response || fetch(event.request);
        })
        .catch(() => {
          return caches.match('/offline.html');
        })
    )
  });

// Cache on install
this.addEventListener("install", event => {
    console.log("installing/caching");
    this.skipWaiting();
  
    event.waitUntil(
      caches.open(staticCacheName)
        .then(cache => {
          return cache.addAll(filesToCache);
      })
    )
});

// Clear cache on activate
this.addEventListener('activate', event => {
    console.log("activating/removing old cache");
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => (cacheName.startsWith('cache_')))
            .filter(cacheName => (cacheName !== staticCacheName))
            .map(cacheName => caches.delete(cacheName))
        );
      })
    );
  });
  
