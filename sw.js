if(!self.define){let e,i={};const t=(t,n)=>(t=new URL(t+".js",n).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let s={};const d=e=>t(e,o),c={module:{uri:o},exports:s,require:d};i[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),s)))}}define(["./workbox-8a7d9033"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"51d6db3f.js",revision:"cca9d51007606e3ed53f953344cb2eb8"},{url:"d01bb28f.js",revision:"043cbfa408416db259ddc599a3b0f3e4"},{url:"index.html",revision:"52457ef3a045b0be0d4936acf5088634"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
