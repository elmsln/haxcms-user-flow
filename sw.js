if(!self.define){let e,a={};const b=(b,d)=>(b=new URL(b+".js",d).href,a[b]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=b,e.onload=a,document.head.appendChild(e)}else e=b,importScripts(b),a()})).then((()=>{let e=a[b];if(!e)throw new Error(`Module ${b} didn’t register its module`);return e})));self.define=(d,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let r={};const s=e=>b(e,i),f={module:{uri:i},exports:r,require:s};a[i]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(c(...e),r)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"07aa5548.js",revision:"4a41e9487717d5d71cc21fe12c406152"},{url:"11e3c82d.js",revision:"04b3188a858b72879472def7d14bdbba"},{url:"120aa880.js",revision:"c88f80bde56b963d9cdd4508d4ee5c10"},{url:"2231346a.js",revision:"82eea6a835c3ef2e7a7aef375b771670"},{url:"2a2d9b7f.js",revision:"c727f00bad40b479d6e1b41d8baa8b12"},{url:"2ae1595f.js",revision:"3cdc1beb609fdec941b4bf8f6993f0be"},{url:"30946002.js",revision:"d20e9d1848d5c843e639935e83032d05"},{url:"33c03476.js",revision:"a9012d8b121d6238dc25a85cb955c88b"},{url:"359f87b5.js",revision:"4bfb4640197e6be4c533bbd641db42c6"},{url:"35fa442b.js",revision:"9206a85d58130e4a3c852e67af1a5ead"},{url:"3bcbec30.js",revision:"7f259aea1b455304d09d14212590a217"},{url:"3c262d28.js",revision:"2fcf6d40fc393eb8d53374f89fd0d560"},{url:"3d85d0a4.js",revision:"d44d8778f11175ce758037f2880c1f2e"},{url:"5c4332c4.js",revision:"a8428b3e6864ed2fc91cdcae55aad5a5"},{url:"5c68dd7f.js",revision:"8e791c60f6703dd9c44e7d1507ccf002"},{url:"5e07d92c.js",revision:"fdb7ae6b4f0d4517fca4469205822b5a"},{url:"62266fa6.js",revision:"a491fad6b91cdc8e349b5b4d21ac6c16"},{url:"64536cd0.js",revision:"5d66b1d1f7e63a7382ae1b8e0487aa95"},{url:"69681bc7.js",revision:"c6b6d616c2b1ec6a5246eae9fba0570c"},{url:"69e24d28.js",revision:"3cfaf1be34ddfc5100d8408200e95207"},{url:"6bf47089.js",revision:"1ef94f8cf579cb7c45d4abef2908588c"},{url:"6c04bc24.js",revision:"74da9fcd42867078b40331affd269e09"},{url:"745aa4ed.js",revision:"88c5d3e7d55b9a6c40b8ebebd1966463"},{url:"754fd9bd.js",revision:"792a544fd3095f152183d2ff2a7101fd"},{url:"7b3bc5d5.js",revision:"3a8170de8f63debfa4b74c64992b0406"},{url:"8e93f001.js",revision:"a13e406639356ccdd1bb38f8e3e2eb60"},{url:"92722af5.js",revision:"dbda4c07e4cd74b16c349c21e8efbda6"},{url:"a0da888c.js",revision:"06ce786add8991aedb9d6505aee47f52"},{url:"a1e24b77.js",revision:"d4b2d1a64ad2b753515ca1199e066135"},{url:"a5c3ac8c.js",revision:"f7c7b20bda3cd19ce47cec76071fc2ba"},{url:"ad3c8620.js",revision:"50b5743fd1ca017c759a2e03dbd6b0f5"},{url:"b0401d62.js",revision:"30c9844a9ff0f6473ff5fe05c758058e"},{url:"b5891f85.js",revision:"8bbb7c8ac9f932b127cc4123f4ee67f0"},{url:"b8ffc576.js",revision:"56c1154e885929e67fd59cf47c7c6bff"},{url:"c09794c2.js",revision:"b23f3cdfeb21b5c0a437c8985e6d1026"},{url:"ce0a5c66.js",revision:"8e91555552d6afd468e35ac4ce132de8"},{url:"cf769d61.js",revision:"daeb4190bcb840f349e639dee73476b2"},{url:"d01bb28f.js",revision:"043cbfa408416db259ddc599a3b0f3e4"},{url:"d583898b.js",revision:"8e18c17a7099050df9a059a248586a1d"},{url:"e0129f04.js",revision:"58d95baced3d357bd4cebb111aa5ebee"},{url:"e45430bf.js",revision:"461707c3c06774651a37d5905d165ade"},{url:"e7fcf299.js",revision:"fb985698566e71ccdedd0e424ee3db30"},{url:"ee24d9c3.js",revision:"a478e6f659c1f71927357aea7f7deaa1"},{url:"index.html",revision:"7d3d5b7f22ebe87ec55529b4f354cc0c"},{url:"lib/random-word/random-word.js",revision:"3bcabf1fecff75e048f5e4e57431ea4f"},{url:"lib/rpg-character-toast/rpg-character-toast.js",revision:"603960fb04675c97193ebca8bd28596b"},{url:"lib/v1/app-hax-button.js",revision:"650f32bef87bb9b1457c04255b7b9255"},{url:"lib/v1/app-hax-hat-progress.js",revision:"ab7e988b168ca0daad9cca0b25a1f4e1"},{url:"lib/v1/app-hax-label.js",revision:"5c5f0a7ae39e18eb10c67073dd7a2aa7"},{url:"lib/v1/app-hax-search-bar.js",revision:"9bb4a65370a275e2ca5801464115409d"},{url:"lib/v1/app-hax-search-results.js",revision:"ac41e01d17dc89f9eccd52dd85ed091e"},{url:"lib/v1/app-hax-site-bar.js",revision:"173538b676ecb36ff1ff048caaa1244a"},{url:"lib/v1/app-hax-site-button.js",revision:"7a00e9065fdaba8388d4cecd693b0b25"},{url:"lib/v1/app-hax-site-details.js",revision:"42b8513eb8926a1be5bbf323149f25c9"},{url:"lib/v1/app-hax-site-login.js",revision:"9439c8c0b92a5d0e473725932d6172cb"},{url:"lib/v1/app-hax-steps.js",revision:"d06e3d9d062bebca16a89f2e614357be"},{url:"lib/v1/app-hax-toast.js",revision:"1f2a84e1e846d07f203a5bb46b9e7999"},{url:"lib/v1/app-hax-top-bar.js",revision:"0a18b6016295b6c23183f5101f69df2b"},{url:"lib/v1/app-hax-wired-toggle.js",revision:"1bfb4c737b2aacf76b3a8d23b5b88d59"},{url:"lib/v1/AppHaxBackendAPI.js",revision:"b203da61916cde11df8f7be75deead98"},{url:"lib/v1/AppHaxRouter.js",revision:"ccf590d613fc0f2349943b4c2df9f5b7"},{url:"lib/v1/AppHaxStore.js",revision:"363437fdba81f016909238cad155e5cd"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
