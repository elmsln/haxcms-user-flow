if(!self.define){let e,a={};const b=(b,i)=>(b=new URL(b+".js",i).href,a[b]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=b,e.onload=a,document.head.appendChild(e)}else e=b,importScripts(b),a()})).then((()=>{let e=a[b];if(!e)throw new Error(`Module ${b} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let s={};const c=e=>b(e,d),f={module:{uri:d},exports:s,require:c};a[d]=Promise.all(i.map((e=>f[e]||c(e)))).then((e=>(r(...e),s)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"029c2f89.js",revision:"06d22fbbb6dde8df029da80df8f72564"},{url:"1c80ee45.js",revision:"bbe3bf83a5fe402f4872eade1e40b683"},{url:"1f96bf02.js",revision:"f008b2d09063691eaf389fbfffa8a6d3"},{url:"254ee9d2.js",revision:"b82fb1dd52447ba9d4db2cbce428d115"},{url:"3187989d.js",revision:"b03ddea70d669d1e1faec964a669394d"},{url:"33c03476.js",revision:"a9012d8b121d6238dc25a85cb955c88b"},{url:"3a9a9945.js",revision:"8338ac66b0b8ef91315cb307d4070ea3"},{url:"4547e12b.js",revision:"fe9b121fcb513bd6f02935469b7b5d0a"},{url:"488ac5a3.js",revision:"bae22b6bc66c11cd7a4fa78b8cd10aaa"},{url:"4e4ccc8e.js",revision:"8ce1c7fd4b6e2e2e529d3cf3a951190c"},{url:"4ecf716e.js",revision:"205e9eee8eaf1a8978ff179946befcf1"},{url:"58a68415.js",revision:"b96938768b4547ca54672b4fe24a313e"},{url:"59ac14f7.js",revision:"a3c9b5a57dea571730252503b366ed16"},{url:"5c68dd7f.js",revision:"8e791c60f6703dd9c44e7d1507ccf002"},{url:"5ef3ee5b.js",revision:"c56a12613800abf1dfd129ef156e7e22"},{url:"64536cd0.js",revision:"5d66b1d1f7e63a7382ae1b8e0487aa95"},{url:"649a558c.js",revision:"573edb168ae9bb3af32caa21cebd1fbe"},{url:"69681bc7.js",revision:"c6b6d616c2b1ec6a5246eae9fba0570c"},{url:"6d776cf7.js",revision:"74f43f8614b2ee68f14f075c19bf08f9"},{url:"6e196d8d.js",revision:"52a40a9a468043f042994f420617931c"},{url:"70d26201.js",revision:"fcf5d2a9ea8416134ac9792f2c1bfddf"},{url:"7530821a.js",revision:"037a05de777d2221f6e68ab4722a01d4"},{url:"779c5990.js",revision:"8080bb5481371eea7a8a0946ec03599c"},{url:"7f0dc0b3.js",revision:"210668f56b95959d589a3161938a5bae"},{url:"897ecd18.js",revision:"ef9c0e504ccaa4cfe18d7d102139693f"},{url:"957ad13e.js",revision:"0512e1b160c53a47a1daf15db918531a"},{url:"979148f6.js",revision:"daafdbb1b79b74cbbeb2109fd9841fab"},{url:"9ca60bdb.js",revision:"3256c6eaf3d9cca2825a526b71c8e22f"},{url:"a54ecab2.js",revision:"a3d40ded3d39e22885ebae71f0254f60"},{url:"af0a968e.js",revision:"34a9855eeeeb9aed4a1178b155b69e93"},{url:"c6445f3f.js",revision:"edb3a10a25c312ae06e4ee5d688d1964"},{url:"d01bb28f.js",revision:"043cbfa408416db259ddc599a3b0f3e4"},{url:"d583898b.js",revision:"8e18c17a7099050df9a059a248586a1d"},{url:"e8f8a327.js",revision:"4bcf98efdb812b7e9a8b16d00d3706e7"},{url:"e944264e.js",revision:"72ff413b34bd95cae4f48198ec412975"},{url:"ea595cd6.js",revision:"1c88fa3ea6d7a82264c3d2c4034cd019"},{url:"ee24d9c3.js",revision:"a478e6f659c1f71927357aea7f7deaa1"},{url:"f2fce770.js",revision:"5d0b2cc728398117bb6b7b33c6bfb8ee"},{url:"f484066a.js",revision:"f6381b7bac079a3fd16114f4b2760ade"},{url:"index.html",revision:"b04cbdaa0547231d41dc6487f2a0e0ff"},{url:"lib/random-word/random-word.js",revision:"3bcabf1fecff75e048f5e4e57431ea4f"},{url:"lib/rpg-character-toast/rpg-character-toast.js",revision:"603960fb04675c97193ebca8bd28596b"},{url:"lib/v1/app-hax-button.js",revision:"650f32bef87bb9b1457c04255b7b9255"},{url:"lib/v1/app-hax-hat-progress.js",revision:"ab7e988b168ca0daad9cca0b25a1f4e1"},{url:"lib/v1/app-hax-label.js",revision:"5c5f0a7ae39e18eb10c67073dd7a2aa7"},{url:"lib/v1/app-hax-search-bar.js",revision:"9bb4a65370a275e2ca5801464115409d"},{url:"lib/v1/app-hax-search-results.js",revision:"61379f8d901a615d9e2fa358baa084a3"},{url:"lib/v1/app-hax-site-bar.js",revision:"8222d7b51048454a96a1eba344b7b27c"},{url:"lib/v1/app-hax-site-button.js",revision:"7a00e9065fdaba8388d4cecd693b0b25"},{url:"lib/v1/app-hax-site-details.js",revision:"c47bcd9e4d41a31f55c2771c9e1624e0"},{url:"lib/v1/app-hax-site-login.js",revision:"9439c8c0b92a5d0e473725932d6172cb"},{url:"lib/v1/app-hax-steps.js",revision:"d06e3d9d062bebca16a89f2e614357be"},{url:"lib/v1/app-hax-toast.js",revision:"1f2a84e1e846d07f203a5bb46b9e7999"},{url:"lib/v1/app-hax-top-bar.js",revision:"8da5dd8349d705b8ec5f75d68c499b36"},{url:"lib/v1/app-hax-wired-toggle.js",revision:"1bfb4c737b2aacf76b3a8d23b5b88d59"},{url:"lib/v1/AppHaxBackendAPI.js",revision:"b203da61916cde11df8f7be75deead98"},{url:"lib/v1/AppHaxRouter.js",revision:"ccf590d613fc0f2349943b4c2df9f5b7"},{url:"lib/v1/AppHaxStore.js",revision:"363437fdba81f016909238cad155e5cd"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
