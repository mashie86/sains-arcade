const CACHE='sains-arcade-v11';const ASSETS=['./','./index.html','./energy-run.html','./rekod-markah.html','./pwa.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./semakan-soalan-sains.md'];self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('sains-arcade-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(fetch(event.request).then(response=>{if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(event.request,copy)));}return response;}).catch(()=>caches.match(event.request).then(response=>response||new Response('Belum tersedia offline. Buka halaman ini sekali ketika ada internet.',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}}))));});










