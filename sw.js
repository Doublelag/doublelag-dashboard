// Service worker: network-first para la página (siempre fresca si hay conexión),
// cache-first para recursos estáticos (Chart.js CDN, icono) para funcionar offline.
const CACHE = 'doublelag-dashboard-v3-1';
const PRECACHE = [
  './',
  'index.html',
  'icon.svg',
  'manifest.webmanifest',
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // data.json siempre por red (datos frescos), sin guardar en cache
  if (req.url.includes('data.json')) return;
  if (req.mode === 'navigate' || req.destination === 'document') {
    // network-first: la página siempre actualizada; cache como respaldo offline
    e.respondWith(
      fetch(req)
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('index.html')))
    );
    return;
  }
  // cache-first para estáticos
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return res;
    }))
  );
});
