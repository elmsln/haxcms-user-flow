if(!self.define){let e,a={};const b=(b,d)=>(b=new URL(b+".js",d).href,a[b]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=b,e.onload=a,document.head.appendChild(e)}else e=b,importScripts(b),a()})).then((()=>{let e=a[b];if(!e)throw new Error(`Module ${b} didn’t register its module`);return e})));self.define=(d,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(a[r])return;let f={};const s=e=>b(e,r),c={module:{uri:r},exports:f,require:s};a[r]=Promise.all(d.map((e=>c[e]||s(e)))).then((e=>(i(...e),f)))}}define(["./workbox-a953cab6"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"02dea146.js",revision:"2b3c6e98bf0c25e01d875986274dc810"},{url:"0a270091.js",revision:"5f912fa6303e79a370df6514c67ff94d"},{url:"16cdf419.js",revision:"9d79ca541fc74ddea034df57c266c02b"},{url:"178d48b7.js",revision:"06673aefe23b5716f7a1a06378a033ce"},{url:"2a455de0.js",revision:"8734e0dc2aa79005b931db132e5521f8"},{url:"33c03476.js",revision:"a9012d8b121d6238dc25a85cb955c88b"},{url:"35964d5a.js",revision:"27e06c985636a83de87fb239c60e5dd0"},{url:"3a7172ce.js",revision:"89d1cb0181bad380408d0097d46f7439"},{url:"43b27239.js",revision:"bd7fe289462bf4df710a7f8c28ea3182"},{url:"524dbf22.js",revision:"04d852bc1ccca9b59cdcd421da141e0f"},{url:"58df453a.js",revision:"aaad22cb5c938cdfffaffbc00a496542"},{url:"5c68dd7f.js",revision:"8e791c60f6703dd9c44e7d1507ccf002"},{url:"64536cd0.js",revision:"5d66b1d1f7e63a7382ae1b8e0487aa95"},{url:"69681bc7.js",revision:"c6b6d616c2b1ec6a5246eae9fba0570c"},{url:"773947dc.js",revision:"5edab3cf84f6ee42cedd5835a0f83d14"},{url:"786c3c53.js",revision:"aa3556a417e31a458dc2df6d1fc9cf58"},{url:"7f7c9dcc.js",revision:"adcc40022e7fe3371b01d3d2898421bb"},{url:"80a31830.js",revision:"d7e1166f69e7886ff2230db0ee4a7d31"},{url:"8308d473.js",revision:"94dcb457c7648b0d5646e2726304441f"},{url:"86807616.js",revision:"f7db4a61caf08b190bf66644147b368e"},{url:"8f2bc2a4.js",revision:"ab0754a0e8bdfc95cdbe93e592546320"},{url:"90d557e3.js",revision:"d941809881e85411c73290bbef758a6a"},{url:"92722af5.js",revision:"dbda4c07e4cd74b16c349c21e8efbda6"},{url:"99e5f598.js",revision:"77b9d19640cebae85f40342b9b032011"},{url:"99f4b640.js",revision:"c5117fdcebfa810d826c95b7ed54d801"},{url:"9e221ba1.js",revision:"96725b1f67ac47a1fa5d7a161b01003b"},{url:"a1274eff.js",revision:"0188887edac619e8d3e2eabf27a6f507"},{url:"a309021e.js",revision:"06a699a129e2e9921a2f7c30923b8992"},{url:"a5f30315.js",revision:"941eee7b13fa81b2ae8f56bf2f3af955"},{url:"a7293a12.js",revision:"21450310897bef88984a8bda822d6756"},{url:"ad3a98df.js",revision:"84e76514580b22a8af1cab964030a83a"},{url:"b07a6414.js",revision:"b64883b9a36961db49243a6c89dc6b22"},{url:"c1c66938.js",revision:"33c0e294dabc34cdd06c7d4a5bb9ddac"},{url:"c22b0fe8.js",revision:"e133f4f03046e6e51c1dd5b50054aac3"},{url:"d01bb28f.js",revision:"043cbfa408416db259ddc599a3b0f3e4"},{url:"d5232936.js",revision:"46876b90f5098babcf86f0c98b3f551a"},{url:"d583898b.js",revision:"8e18c17a7099050df9a059a248586a1d"},{url:"e23c73c6.js",revision:"13af35d216ae482e702ba156a2588b6e"},{url:"e32c8e62.js",revision:"0c1eb47aab4cb813a6e10b7b80f8c586"},{url:"ee24d9c3.js",revision:"a478e6f659c1f71927357aea7f7deaa1"},{url:"f884a431.js",revision:"8bb8f120abf3afed832ee972b2c83bb3"},{url:"fc1dcb6f.js",revision:"a9ec3340e0d7ce99bbdfd2ff6dd39bab"},{url:"fe216e88.js",revision:"ae8ab2110098106d8edee14f220c3f7f"},{url:"index.html",revision:"434309ebceedac8abe294db9797ef695"},{url:"lib/random-word/random-word.js",revision:"3bcabf1fecff75e048f5e4e57431ea4f"},{url:"lib/rpg-character-toast/rpg-character-toast.js",revision:"603960fb04675c97193ebca8bd28596b"},{url:"lib/v1/app-hax-button.js",revision:"650f32bef87bb9b1457c04255b7b9255"},{url:"lib/v1/app-hax-hat-progress.js",revision:"dc1b4ee1ccaafe3129f85df5274438b2"},{url:"lib/v1/app-hax-label.js",revision:"5c5f0a7ae39e18eb10c67073dd7a2aa7"},{url:"lib/v1/app-hax-search-bar.js",revision:"4f6a2e8aceadabb66405b064df0610f7"},{url:"lib/v1/app-hax-search-results.js",revision:"ac41e01d17dc89f9eccd52dd85ed091e"},{url:"lib/v1/app-hax-site-bar.js",revision:"173538b676ecb36ff1ff048caaa1244a"},{url:"lib/v1/app-hax-site-button.js",revision:"7a00e9065fdaba8388d4cecd693b0b25"},{url:"lib/v1/app-hax-site-details.js",revision:"42b8513eb8926a1be5bbf323149f25c9"},{url:"lib/v1/app-hax-site-login.js",revision:"2ad34b0126d24f97aba4815bd6fd6f8b"},{url:"lib/v1/app-hax-steps.js",revision:"96d39414d5c633de9003bf7038f1b25f"},{url:"lib/v1/app-hax-toast.js",revision:"136313baefe0be7defa2395aa919af8d"},{url:"lib/v1/app-hax-top-bar.js",revision:"0a18b6016295b6c23183f5101f69df2b"},{url:"lib/v1/app-hax-wired-toggle.js",revision:"357304203b1593b05852d38132fe1397"},{url:"lib/v1/AppHaxBackendAPI.js",revision:"b203da61916cde11df8f7be75deead98"},{url:"lib/v1/AppHaxRouter.js",revision:"ccf590d613fc0f2349943b4c2df9f5b7"},{url:"lib/v1/AppHaxStore.js",revision:"363437fdba81f016909238cad155e5cd"},{url:"lib/wired-darkmode-toggle/wired-darkmode-toggle.js",revision:"11b5f31aefedc748cf9c0800d7b1a774"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
