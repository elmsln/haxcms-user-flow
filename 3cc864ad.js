import{D as e}from"./ad13e776.js";var t,i;function r(e=!1,i="*",r=":not(:defined)"){clearTimeout(t),t=setTimeout((()=>{let t=i+"[laser-loader]"+r;e&&(t=i+r),[...document.body.querySelectorAll("replace-tag,"+t)].map((t=>{e&&t.setAttribute("laser-loader","laser-loader");const i=t.getBoundingClientRect();t.style.setProperty("--laserEdgeAni-width",i.width+"px"),t.style.setProperty("--laserEdgeAni-innerWidth",i.width-2+"px"),t.style.setProperty("--laserEdgeAni-innerHeight",i.height-2+"px"),t.style.setProperty("--laserEdgeAni-height",i.height+"px"),customElements.whenDefined(t.localName).then((e=>{"replace-tag"!=t.localName&&(t.setAttribute("loaded","loaded"),t.removeAttribute("laser-loader"),t.style.setProperty("--laserEdgeAni-width",null),t.style.setProperty("--laserEdgeAni-innerWidth",null),t.style.setProperty("--laserEdgeAni-height",null),t.style.setProperty("--laserEdgeAni-innerHeight",null),setTimeout((()=>{t.removeAttribute("popup-loader"),setTimeout((()=>{t.removeAttribute("loaded")}),1e3)}),1e3))}))}))}),10)}const n=function(){clearTimeout(i),i=setTimeout((()=>{document.body.querySelectorAll("replace-tag,:not(:defined)").length>0?r():window.removeEventListener("resize",n)}),100)};window.addEventListener("resize",n);class o extends(function(t){return class extends t{constructor(){super()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this.evaluateReplaceMethod()}performanceBasedReplacement(){this.setAttribute("laser-loader","laser-loader"),this.importingText||(this.importingText="Loading..."),this.render(),this.runReplacement()}async evaluateReplaceMethod(){r();let t=await e.badDevice();"view"!=this.getAttribute("import-method")&&null==this.getAttribute("import-only")&&t&&(this.importingText||(this.importingText="Click to load"),this.addEventListener("click",this.performanceBasedReplacement)),t&&null==this.getAttribute("import-only")&&"view"!=this.getAttribute("import-method")||(this.setAttribute("laser-loader","laser-loader"),this.importingText||(this.importingText="Loading..."),this.intersectionObserver||(this.intersectionObserver=new IntersectionObserver(this.handleIntersectionCallback.bind(this),{rootMargin:"0px",threshold:[0,.25,.5,.75,1],delay:150}),this.intersectionObserver.observe(this))),this.render()}handleIntersectionCallback(e){for(let t of e){Number(t.intersectionRatio).toFixed(2)>=.25&&(this.intersectionObserver&&this.intersectionObserver.disconnect(),this.intersectionObserver=null,this.runReplacement())}}runReplacement(){this.getAttribute("with")?import("./d583898b.js").then((()=>{window.WCAutoload.process().then((()=>{window.WCAutoload.requestAvailability().registry.loadDefinition(this.getAttribute("with"))}))})):console.warn("replace-tag requires use of with attribute for what to upgrade to")}}}(HTMLElement)){constructor(){if(super(),this.getAttribute("importing-text")&&(this.importingText=this.getAttribute("importing-text")),customElements.get(this.getAttribute("with"))){let r={};if(null!=this.getAttribute("import-only"))this.remove();else{for(var e=0,t=this.attributes,i=t.length;e<i;e++)r[t[e].nodeName]=t[e].nodeValue;let n=document.createElement(r.with);for(var e in r)null!=r[e]&&n.setAttribute(e,r[e]);n.removeAttribute("laser-loader"),n.removeAttribute("with"),n.removeAttribute("import-method"),n.removeAttribute("importing-text"),n.innerHTML=this.innerHTML,this.replaceWith(n)}}else customElements.whenDefined(this.getAttribute("with")).then((e=>{let t={};if(null!=this.getAttribute("import-only"))this.remove();else{for(var i=0,r=this.attributes,n=r.length;i<n;i++)t[r[i].nodeName]=r[i].nodeValue;let e=document.createElement(t.with);for(var i in e.setAttribute("popup-loader","popup-loader"),t)null!=t[i]&&e.setAttribute(i,t[i]);e.removeAttribute("laser-loader"),e.innerHTML=this.innerHTML,this.replaceWith(e),setTimeout((()=>{e.removeAttribute("popup-loader"),e.removeAttribute("with"),e.removeAttribute("import-method"),e.removeAttribute("importing-text"),e.removeAttribute("laser-loader"),e.style.setProperty("--laserEdgeAni-width",null),e.style.setProperty("--laserEdgeAni-innerWidth",null),e.style.setProperty("--laserEdgeAni-height",null),e.style.setProperty("--laserEdgeAni-innerHeight",null)}),250)}setTimeout((()=>{document.body.querySelectorAll('replace-tag[with="'+t.with+'"]').forEach((e=>{e.runReplacement()}))}),0)}));this.template=document.createElement("template"),this.attachShadow({mode:"open"})}static get tag(){return"replace-tag"}get html(){return`\n    <style>\n    :host {\n      display: block;\n      opacity: .3;\n      transition: .3s linear opacity,.3s linear outline,.3s linear visibility,.3s linear display;\n    }\n    :host([import]) {\n      opacity: .1 !important;\n      background-color: transparent !important;\n      color: transparent !important;\n      padding: 0 !important;\n      margin: 0 !important;\n      font-size: 2px !important;\n      line-height: 2px !important;\n      height:2px;\n    }\n    :host(:not([import-method="click"])) {\n      background-color: #EEEEEE;\n      color: #444444;\n      font-size: 16px;\n      opacity: .8;\n      margin: 16px;\n      padding: 16px;\n    }\n    :host(:not([import-method="click"]):hover) {\n      opacity: 1 !important;\n      outline: 1px solid black;\n      cursor: pointer;\n    }\n    :host([hidden]) {\n      display: none;\n    }\n    </style>\n<div>${this.importingText}</div>`}render(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}}customElements.define(o.tag,o);export{o as ReplaceTag};