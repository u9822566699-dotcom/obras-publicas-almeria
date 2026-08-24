const CACHE_NAME="obras-publicas-almeria-definitiva-v1";
const APP_SHELL=["./","./index.html","./app.js","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET")return;
  const u=new URL(e.request.url);
  if(u.hostname.includes("script.google.com"))return;
  e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{
    if(r&&r.ok&&u.origin===self.location.origin){const cp=r.clone();caches.open(CACHE_NAME).then(x=>x.put(e.request,cp));}
    return r;
  }).catch(()=>caches.match("./index.html"))));
});
