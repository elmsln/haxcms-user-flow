if(!self.define){let e,a={};const d=(d,b)=>(d=new URL(d+".js",b).href,a[d]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=a,document.head.appendChild(e)}else e=d,importScripts(d),a()})).then((()=>{let e=a[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(b,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let r={};const s=e=>d(e,i),f={module:{uri:i},exports:r,require:s};a[i]=Promise.all(b.map((e=>f[e]||s(e)))).then((e=>(c(...e),r)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"00bd97c0.js",revision:"01fbf33f918dacf91197243934de7371"},{url:"0fc5c5de.js",revision:"b6ff044a5e68dfbf73d01e43919aa646"},{url:"14b6e266.js",revision:"1be4789f86ad83a0b95aec76254514df"},{url:"200908dd.js",revision:"4cf19740f38bf4ca97eddb81137fcb2f"},{url:"20b1304d.js",revision:"d618ce0f30bf42fcbe4cef49e595810f"},{url:"2a83b780.js",revision:"0262ca72aa438ea2286017c73130b26c"},{url:"2c373cd2.js",revision:"a8dd5cbabfe4795928c2a828b164c862"},{url:"33c03476.js",revision:"a9012d8b121d6238dc25a85cb955c88b"},{url:"3e016596.js",revision:"b68dbefe23873f3c3b56554c8323f579"},{url:"58869df5.js",revision:"bc95be98b2c6e1a0fa10ebb8ce06cec8"},{url:"5aa6e814.js",revision:"0565dae138c18dffd85cc95dc46c2f84"},{url:"5c68dd7f.js",revision:"8e791c60f6703dd9c44e7d1507ccf002"},{url:"62a6e57c.js",revision:"0ba1c40e02c4c69929cb72411dd54ba3"},{url:"64536cd0.js",revision:"5d66b1d1f7e63a7382ae1b8e0487aa95"},{url:"64e26d47.js",revision:"c67c5d3340dbad01eeccd2803d66a875"},{url:"69681bc7.js",revision:"c6b6d616c2b1ec6a5246eae9fba0570c"},{url:"6cbe3b0e.js",revision:"b6185d32c97692bd1ce76e71980d8062"},{url:"6fd03cc8.js",revision:"60b87530c12568cbede5946fb14345cd"},{url:"706227c0.js",revision:"58519acceb204d2778f35d02afa7a631"},{url:"71dcab7b.js",revision:"59460e83257495cd96267d63ab65f890"},{url:"72ab3123.js",revision:"954fa8e80da018cf9ac9adf4338787c4"},{url:"798330d3.js",revision:"670c664bfd88988c868fd982f3824bca"},{url:"7bf229c5.js",revision:"ec5f07a15e2c69e18d09146992801ee1"},{url:"7ded6ef0.js",revision:"c32b28920fdffc7c3578cb96ea034064"},{url:"80349c8a.js",revision:"df488887e81774be5a1dd3a4f5f6a73b"},{url:"895b2488.js",revision:"a6297abdd0fe5e5dbdf6bfbdf95cd47a"},{url:"92722af5.js",revision:"dbda4c07e4cd74b16c349c21e8efbda6"},{url:"9eebea4a.js",revision:"89dd2c2e74e9b0b7e53e632e6a812f6e"},{url:"a0d876db.js",revision:"c64c4bfe7403515499e9c02dbacb6f22"},{url:"a76c72e3.js",revision:"af4d9955b78d6b4fecdb4ab42d4288fc"},{url:"a7734ea6.js",revision:"96c60895431a5b572551f28d7e9e4ac3"},{url:"a7755158.js",revision:"217c550144aa3479c2a5ada528e2f48c"},{url:"a93e2e9a.js",revision:"263a827518ac89c562191e28bbe2e5f7"},{url:"b20c4223.js",revision:"6d52450ce42e7a697902a8310427894b"},{url:"be43f46a.js",revision:"4f02a9b1d59985bca7ddcddad295a28d"},{url:"ca83ec10.js",revision:"0acbbb219086f06932521c6330ba5fd2"},{url:"cadd00cd.js",revision:"ff2154a628f0faff85aa8db6e0ec37ba"},{url:"cec83b98.js",revision:"78dd46bfd1ee55aae833639ba694b732"},{url:"d01bb28f.js",revision:"043cbfa408416db259ddc599a3b0f3e4"},{url:"d583898b.js",revision:"8e18c17a7099050df9a059a248586a1d"},{url:"de1d2168.js",revision:"1578009f2090b7c5e7da12280c9dd3ae"},{url:"de6c9d14.js",revision:"f3c2402c77d1883753f77a06c4e52a43"},{url:"e2aeb477.js",revision:"9fd5a3029d38f99eebbd58d08711bd24"},{url:"e5504649.js",revision:"7f3ea157ab79b719ac519991849b31df"},{url:"e62d60f4.js",revision:"9d4c44d74e341eab58f066db2294bf63"},{url:"e6de10bf.js",revision:"c0a941c453da0827b1ec05ecc6d835e9"},{url:"f16f8ab4.js",revision:"a6e1319296e91c6108ea0ca18b4ca319"},{url:"fc09da33.js",revision:"3dbeecf599645b92718a955b9398455f"},{url:"index.html",revision:"ed1f651178e2ce3a3477de9347272dd7"},{url:"lib/random-word/random-word.js",revision:"3bcabf1fecff75e048f5e4e57431ea4f"},{url:"lib/rpg-character-toast/rpg-character-toast.js",revision:"e589050f282e949133524255079aa462"},{url:"lib/v1/app-hax-button.js",revision:"5de4519b8729d7a02cad23e957cd4ffc"},{url:"lib/v1/app-hax-hat-progress.js",revision:"063dbefabb19e6584f3f6d8379954352"},{url:"lib/v1/app-hax-label.js",revision:"d1c29ea0a587824c3bdc37fb4a5399b5"},{url:"lib/v1/app-hax-search-bar.js",revision:"394af1abe610260ebc53d17b1225f4a8"},{url:"lib/v1/app-hax-search-results.js",revision:"cdbd53abe6c088310fea09165d758ba7"},{url:"lib/v1/app-hax-site-bar.js",revision:"f496e64a532a7de0c5bd59f8337dc9ce"},{url:"lib/v1/app-hax-site-button.js",revision:"83af9721defb3c1968bb5f587375d924"},{url:"lib/v1/app-hax-site-details.js",revision:"b03bec0650f029e517ba86638d250655"},{url:"lib/v1/app-hax-site-login.js",revision:"2ad5e734d5a892b95398553f386eae79"},{url:"lib/v1/app-hax-steps.js",revision:"53c19ac42bfa9c6dd7ab0a3396cb77b9"},{url:"lib/v1/app-hax-toast.js",revision:"136313baefe0be7defa2395aa919af8d"},{url:"lib/v1/app-hax-top-bar.js",revision:"05bff9c6987dca5a0ab60b5426d65516"},{url:"lib/v1/app-hax-wired-toggle.js",revision:"357304203b1593b05852d38132fe1397"},{url:"lib/v1/AppHaxBackendAPI.js",revision:"2dc4fc962eab8fbbf954bdd60cb85df3"},{url:"lib/v1/AppHaxRouter.js",revision:"ccf590d613fc0f2349943b4c2df9f5b7"},{url:"lib/v1/AppHaxStore.js",revision:"263df94e825c80c33587d7eb276d14e7"},{url:"lib/wired-darkmode-toggle/wired-darkmode-toggle.js",revision:"ed82ea9bfdce800e90e4b903305bbebc"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
