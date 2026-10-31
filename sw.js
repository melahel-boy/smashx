var C='smashx-v2';
var FILES=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./logo.jpg','./logo-mark.png'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(FILES);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C;}).map(function(x){return caches.delete(x);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){
  var r=e.request,u=new URL(r.url);
  if(r.method!=='GET')return;
  var ok=u.origin===location.origin||(u.hostname==='www.gstatic.com'&&u.pathname.indexOf('/firebasejs/')===0);
  if(!ok)return;
  e.respondWith(fetch(r).then(function(res){var cp=res.clone();if(res.ok)caches.open(C).then(function(c){c.put(r,cp);});return res;}).catch(function(){return caches.match(r).then(function(m){return m||caches.match('./index.html');});}));
});
