import{s as t,r as e,$ as r,c as o,S as s,b as i,t as a,a as l,l as n}from"./77e5801b.js";import"./1da87056.js";import"./8a8bbad4.js";import"./35d5b9a8.js";import"./c6beb6dd.js";const c=document.createElement("template");c.innerHTML='<style>*{box-sizing:border-box}:host{--fade-in-transition-duration:150ms;--fade-out-transition-duration:800ms;--fade-out-transition-delay:300ms;--fill-color-transition-duration:150ms;--viewport-overflow-x:auto;--viewport-overflow-y:auto;--viewport-scroll-snap-type:none;--viewport-scroll-behavior:auto;--viewport-overscroll-behavior:auto;--viewport-z-index:0;--scrollbar-width:16px;--scrollbar-padding:2px;--scrollbar-fill-color:transparent;--scrollbar-fill-color-hover:transparent;--scrollbar-border-width:0;--scrollbar-border-style:none;--scrollbar-border-color:#999;--scrollbar-border-radius:0;--scrollbar-box-shadow:none;--scrollbar-z-index-hover:30;--vertical-scrollbar-padding:var(--scrollbar-padding);--vertical-scrollbar-background:none;--vertical-scrollbar-background-size:auto;--vertical-scrollbar-z-index:20;--horizontal-scrollbar-padding:var(--scrollbar-padding);--horizontal-scrollbar-background:none;--horizontal-scrollbar-background-size:auto;--horizontal-scrollbar-z-index:10;--scrollbar-track-fill-color:transparent;--scrollbar-track-fill-color-hover:transparent;--scrollbar-track-border-width:0;--scrollbar-track-border-style:none;--scrollbar-track-border-color:#999;--scrollbar-track-border-radius:0;--scrollbar-track-box-shadow:none;--vertical-scrollbar-track-background:none;--vertical-scrollbar-track-background-size:auto;--horizontal-scrollbar-track-background:none;--horizontal-scrollbar-track-background-size:auto;--scrollbar-thumb-fill-color:#ccc;--scrollbar-thumb-fill-color-hover:#aaa;--scrollbar-thumb-border-width:0;--scrollbar-thumb-border-style:none;--scrollbar-thumb-border-color:#999;--scrollbar-thumb-border-radius:var(--scrollbar-width);--scrollbar-thumb-box-shadow:none;--vertical-scrollbar-thumb-background:none;--vertical-scrollbar-thumb-background-size:auto;--horizontal-scrollbar-thumb-background:none;--horizontal-scrollbar-thumb-background-size:auto;--content-padding:0;position:relative;overflow:hidden;display:grid;grid-template:1fr/1fr}.viewport{z-index:var(--viewport-z-index);display:grid;overflow-x:var(--viewport-overflow-x);overflow-y:var(--viewport-overflow-y);scrollbar-width:none;outline:0;scroll-behavior:var(--viewport-scroll-behavior);overscroll-behavior:var(--viewport-overscroll-behavior);scroll-snap-type:var(--viewport-scroll-snap-type)}.viewport::-webkit-scrollbar{width:0;height:0}.content{padding:var(--content-padding)}.content.restrict-width{width:var(--viewport-width)}.content.restrict-height{height:var(--viewport-height)}.scrollbar{user-select:none;touch-action:none;position:absolute;border-width:var(--scrollbar-border-width);border-style:var(--scrollbar-border-style);border-color:var(--scrollbar-border-color);border-radius:var(--scrollbar-border-radius);box-shadow:var(--scrollbar-box-shadow);opacity:0;transition:opacity var(--fade-out-transition-duration) ease-in-out var(--fade-out-transition-delay),background-color var(--fill-color-transition-duration) ease-out}.vertical-scrollbar{z-index:var(--vertical-scrollbar-z-index);width:var(--scrollbar-width);right:0;top:0;bottom:0;padding:var(--vertical-scrollbar-padding);background:var(--vertical-scrollbar-background);background-color:var(--scrollbar-fill-color);background-size:var(--vertical-scrollbar-background-size)}.vertical-scrollbar.left-position{left:0;right:auto}.horizontal-scrollbar{z-index:var(--horizontal-scrollbar-z-index);height:var(--scrollbar-width);left:0;right:0;bottom:0;padding:var(--horizontal-scrollbar-padding);background:var(--horizontal-scrollbar-background);background-color:var(--scrollbar-fill-color);background-size:var(--horizontal-scrollbar-background-size)}.horizontal-scrollbar.top-position{top:0;bottom:auto}.scrollbar:hover,.scrollbar.scrolling-with-thumb,.viewport:hover~.scrollbar,.viewport:not(:focus):focus-within~.scrollbar,.viewport.touch~.scrollbar{opacity:1;transition:opacity var(--fade-in-transition-duration) ease-in-out 0s,background-color var(--fill-color-transition-duration) ease-out}.viewport.scrollbar-visible~.scrollbar{opacity:1;transition:none}.scrollbar:hover,.scrollbar.scrolling-with-thumb{z-index:var(--scrollbar-z-index-hover);background-color:var(--scrollbar-fill-color-hover)}.scrollbar.hidden{display:none}.scrollbar .scrollbar-track{height:100%;width:100%;border-width:var(--scrollbar-track-border-width);border-style:var(--scrollbar-track-border-style);border-color:var(--scrollbar-track-border-color);border-radius:var(--scrollbar-track-border-radius);box-shadow:var(--scrollbar-track-box-shadow);transition:background-color var(--fill-color-transition-duration) ease-out}.vertical-scrollbar .scrollbar-track{background:var(--vertical-scrollbar-track-background);background-color:var(--scrollbar-track-fill-color);background-size:var(--vertical-scrollbar-track-background-size)}.horizontal-scrollbar .scrollbar-track{background:var(--horizontal-scrollbar-track-background);background-color:var(--scrollbar-track-fill-color);background-size:var(--horizontal-scrollbar-track-background-size)}.scrollbar-track:hover,.scrollbar.scrolling-with-thumb .scrollbar-track{background-color:var(--scrollbar-track-fill-color-hover)}.scrollbar .scrollbar-thumb{height:100%;width:100%;border-width:var(--scrollbar-thumb-border-width);border-style:var(--scrollbar-thumb-border-style);border-color:var(--scrollbar-thumb-border-color);border-radius:var(--scrollbar-thumb-border-radius);transform:translate3d(0,0,0);box-shadow:var(--scrollbar-thumb-box-shadow);transition:background-color var(--fill-color-transition-duration) ease-out}.vertical-scrollbar .scrollbar-thumb{background:var(--vertical-scrollbar-thumb-background);background-color:var(--scrollbar-thumb-fill-color);background-size:var(--vertical-scrollbar-thumb-background-size)}.horizontal-scrollbar .scrollbar-thumb{background:var(--horizontal-scrollbar-thumb-background);background-color:var(--scrollbar-thumb-fill-color);background-size:var(--horizontal-scrollbar-thumb-background-size)}.scrollbar .scrollbar-thumb:hover,.scrollbar.scrolling-with-thumb .scrollbar-thumb{background-color:var(--scrollbar-thumb-fill-color-hover)}</style><div class="viewport" tabindex="-1"><div class="content"><slot></slot></div></div><div class="scrollbar vertical-scrollbar hidden"><div class="scrollbar-track"><div class="scrollbar-thumb"></div></div></div><div class="scrollbar horizontal-scrollbar hidden"><div class="scrollbar-track"><div class="scrollbar-thumb"></div></div></div>';const h=Symbol("vertical"),p=Symbol("horizontal"),d=[{key:h,name:"vertical",size:"height",o:"offsetHeight",l:"scrollHeight",position:"top",t:"scrollTop",i:"overflow-y",h:"clientY",v:"pageY"},{key:p,name:"horizontal",size:"width",o:"offsetWidth",l:"scrollWidth",position:"left",t:"scrollLeft",i:"overflow-x",h:"clientX",v:"pageX"}];class u extends HTMLElement{constructor(){super(),this.u(),this.p(),this.g()}static get observedAttributes(){return["scrollbar-visibility","vertical-scrollbar-position","horizontal-scrollbar-position"]}connectedCallback(){this.k(),this.m(),this.S()}attributeChangedCallback(t,e,r){"scrollbar-visibility"===t?this.viewport.classList.toggle("scrollbar-visible","always"===r):"vertical-scrollbar-position"===t?this.elements[h].C.classList.toggle("left-position","left"===r):"horizontal-scrollbar-position"===t&&this.elements[p].C.classList.toggle("top-position","top"===r)}u(){this.viewport,this.content,this.elements={},this.cache={},this.T={},this.$=null;for(let t of d)this.elements[t.key]={C:null,W:null,T:null},this.cache[t.key]={A:!1,F:!1,M:0,O:0,P:1},this.T[t.key]={q:!0,L:1,R:{v:0,t:0}}}p(){this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(c.content.cloneNode(!0)),this.viewport=this.shadowRoot.querySelector(".viewport"),this.content=this.viewport.querySelector(".content");for(let t of d){const e=this.elements[t.key];e.C=this.shadowRoot.querySelector(`.${t.name}-scrollbar`),e.W=e.C.querySelector(".scrollbar-track"),e.T=e.W.querySelector(".scrollbar-thumb")}}g(){const t=new ResizeObserver((()=>{this.H()}));t.observe(this.viewport),t.observe(this.content);for(let e of d){const r=this.elements[e.key];t.observe(r.W),r.W.addEventListener("pointerdown",(t=>{t.preventDefault(),t.stopPropagation(),this.D(e,t)}));const o=t=>{this.X(e,t)};r.T.addEventListener("pointerdown",(t=>{t.preventDefault(),t.stopPropagation(),r.T.addEventListener("pointermove",o,{passive:!0}),r.T.setPointerCapture(t.pointerId),this.Y(e,t)})),r.T.addEventListener("pointerup",(t=>{r.T.removeEventListener("pointermove",o,{passive:!0}),r.T.releasePointerCapture(t.pointerId),this.j(e)}),{passive:!0})}this.viewport.addEventListener("scroll",(()=>{this.B()}),{passive:!0}),this.viewport.addEventListener("touchstart",(()=>{this.G()}),{passive:!0}),this.viewport.addEventListener("touchend",(()=>{this.I()}),{passive:!0})}D(t,e){const r=this.elements[t.key],o=this.cache[t.key],s=r.W.getBoundingClientRect(),i=r.T.getBoundingClientRect(),a=e[t.h]-s[t.position]-i[t.size]/2,l=o.O/s[t.size],n=a/o.P*l;requestAnimationFrame((()=>{this.viewport.scrollTo({[t.position]:n,behavior:"smooth"}),this.viewport.focus({preventScroll:!0})}))}Y(t,e){const r=this.elements[t.key],o=this.T[t.key],s=r.W.getBoundingClientRect();o.q=!0,o.L=this.cache[t.key].O/s[t.size],o.R.v=e.touches?e.touches[0][t.v]:e[t.v],o.R.t=this.viewport[t.t],requestAnimationFrame((()=>{this.viewport.classList.add(`scrolling-with-${t.name}-thumb`),r.C.classList.add("scrolling-with-thumb"),this.viewport.focus({preventScroll:!0})}))}X(t,e){const r=this.T[t.key];if(r.q){const o=((e.touches?e.touches[0][t.v]:e[t.v])-r.R.v)/this.cache[t.key].P*r.L,s=r.R.t+o;this.viewport[t.t]=s}}j(t){const e=this.T[t.key];e.q&&(e.q=!1,this.viewport.classList.remove(`scrolling-with-${t.name}-thumb`),this.elements[t.key].C.classList.remove("scrolling-with-thumb"))}G(){this.viewport.classList.add("touch")}I(){this.viewport.classList.remove("touch")}B(){null===this.$&&(this.$=requestAnimationFrame((()=>{this.S(),this.$=null})))}H(){this.k(),null===this.$&&(this.$=requestAnimationFrame((()=>{this.m(),this.S(),this.$=null})))}k(){const t=getComputedStyle(this.viewport);for(let e of d){const r=this.cache[e.key];r.F="hidden"===t.getPropertyValue(e.i).trim(),r.M=Math.floor(10*this.viewport[e.o])/10,r.O=Math.floor(10*this.elements[e.key].W[e.o])/10,r.P=r.O/this.viewport[e.l],r.A=!r.F&&this.viewport[e.l]>Math.ceil(r.M)}}m(){for(let t of d){const e=this.elements[t.key],r=this.cache[t.key];if(this.shadowRoot.host.style.setProperty(`--viewport-${t.size}`,`${r.M}px`),this.content.classList.toggle(`restrict-${t.size}`,r.F),e.C.classList.toggle("hidden",!r.A),r.A){const o=r.M*r.P;e.T.style[t.size]=`${o}px`}}}S(){for(let t of d){const e=this.cache[t.key];if(e.A){const r=this.viewport[t.t]*e.P;this.elements[t.key].T.style.transform=t.key===h?`translate3D(0, ${r}px, 0)`:`translate3D(${r}px, 0, 0)`}}}}window.customElements.define("scrollable-component",u);
/**
 * Copyright 2022 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class b extends t{static get tag(){return"promise-progress-lite"}constructor(){super(),this.list=[],this.value=0,this.max=100,this.showCount=!1,this.canLoad=!1}static get styles(){let t=[];return super.styles&&(t=super.styles),[...t,e`:host{display:block;position:relative}`]}static get properties(){return{...super.properties,max:{type:Number},value:{type:Number,reflect:!0},list:{type:Array},showCount:{type:Boolean,attribute:"show-count"},canLoad:{type:Boolean}}}render(){return r` <progress part="progress" max="${this.max}" value="${this.value}"></progress> ${this.list&&this.showCount?r`${this.value} / ${this.max}`:""} <slot></slot> `}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.loadingBar=this.shadowRoot.querySelector("progress")}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{["value","max"].includes(e)&&this.shadowRoot&&this.dispatchEvent(new CustomEvent(`${e}-changed`,{detail:{value:this[e]}})),"list"==e&&this[e]&&this[e].length>0&&this.max!==this.value&&(this.canLoad=!0)}))}async process(){const t=this.list;if(this.canLoad){var e=0;const r=await t.map((async t=>await t().then((t=>{e+=1,this.value=Math.round(e/this.list.length*100),this.loadingBar.textContent=`Loading ${this.value} of ${this.max}`,resolve(t)})).catch((t=>{reject(t)}))));await Promise.allSettled(r).then((()=>{this.loadingBar.textContent="Loading Finished",this.value=this.max,setTimeout((()=>{this.dispatchEvent(new CustomEvent("promise-progress-finished",{detail:{value:!0}}))}),100)}))}}}customElements.define(b.tag,b);
/**
 * Copyright 2022 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class v extends(o(b)){constructor(){super()}static get tag(){return"promise-progress"}render(){return r` <progress part="progress" max="${this.max}" value="${this.value}"></progress> ${this.list&&this.showCount?r`${this.value} / ${this.max}`:""} <slot></slot> `}}customElements.define(v.tag,v);class g extends s{static get tag(){return"app-hax-hat-progress"}constructor(){super(),this.promises=[],this.max=100,i((()=>{this.promises=a(l.newSitePromiseList)})),i((()=>{this.dark=a(l.darkMode)}))}static get properties(){return{...super.properties,promises:{type:Array}}}process(){this.shadowRoot.querySelector("#progress2").process()}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.dispatchEvent(new CustomEvent("progress-ready",{detail:!0})),setTimeout((()=>{this.shadowRoot.querySelector("#progress2").addEventListener("value-changed",(t=>{this.shadowRoot.querySelector("#value").textContent=t.detail.value})),this.shadowRoot.querySelector("#progress2").addEventListener("max-changed",(t=>{this.max=t.detail.value})),this.shadowRoot.querySelector("#progress2").addEventListener("promise-progress-finished",(t=>{if(t.detail.value){this.dispatchEvent(new CustomEvent("promise-progress-finished",{detail:!0}));const t=l.AppHaxAPI.lastResponse.createSite,e=document.createElement("button");this.shadowRoot.querySelector("#value").textContent=this.max,e.textContent="Let's go!",e.classList.add("game"),e.addEventListener("pointerdown",(()=>{l.appEl.playSound("click")})),e.addEventListener("click",(()=>{window.location=a(l.sitesBase).concat(t.slug)})),this.shadowRoot.querySelector("#progress2").parentNode.appendChild(e),l.toast(`${t.title} looks awesome, come see!`,6e3,{hat:"random",walking:!0})}}))}),0)}static get styles(){return[...super.styles,e`:host{display:block;height:400px;width:400px}img{width:400px;height:400px;pointer-events:none}.progress{margin:-148px 0 0 10px;z-index:-1}.progress::part(progress){height:100px;width:338px;margin-top:-1px 0 0 -4px}.progress::part(progress)::-moz-progress-bar{background-color:red;height:50px;margin:24px 0 0 0;border:none}.count{color:var(--simple-colors-default-theme-grey-1,#fff);font-family:'Press Start 2P',sans-serif;width:350px;text-align:center;position:relative;display:block;font-size:30px;margin-top:-250px;margin-left:30px}.game{font-family:'Press Start 2P',sans-serif;font-size:28px;font-weight:700;text-align:center;width:310px;background-color:var(--simple-colors-default-theme-red-7,red);color:var(--simple-colors-default-theme-grey-1,#fff);border:0;height:54px;display:block;position:relative;margin:138px 0 0 52px;padding:0;box-sizing:border-box}.game:focus,.game:hover{cursor:pointer;background-color:var(--simple-colors-default-theme-red-8);color:var(--simple-colors-default-theme-grey-2)}.game:active{cursor:progress;background-color:var(--simple-colors-default-theme-red-10);color:var(--simple-colors-default-theme-grey-5)}`]}render(){return r` <img src="${new URL(new URL("16f881fc.svg",import.meta.url).href,import.meta.url).href}" alt=""> <promise-progress id="progress2" accent-color="red" ?dark="${this.dark}" class="progress" .list="${this.promises}"></promise-progress> <div class="count"><span id="value">0</span>%</div> `}}customElements.define(g.tag,g);class m extends t{static get tag(){return"app-hax-button"}constructor(){super(),this.icon="save",this.type=null,this.value=null,this.disabled=!1,this.elevation=2,this.active=!1,this.addEventListener("click",this._handleClick),this.addEventListener("click",this._handleClick),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur),this.addEventListener("mouseover",this._handleFocus),this.addEventListener("mouseout",this._handleBlur)}_handleFocus(){this.active=!0,this.elevation="4"}_handleBlur(){this.active=!1,this.elevation="2"}_handleClick(){this.disabled||this.shadowRoot.querySelector(".haxButton").blur()}static get properties(){return{icon:{type:String},type:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},elevation:{type:Number},active:{type:Boolean,reflect:!0}}}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),t.forEach(((t,e)=>{if("type"===e)switch(this.type){case"Technology":this.icon="hardware:desktop-mac",this.value="technology";break;case"Business":this.icon="maps:local-atm",this.value="business";break;case"Art":this.icon="image:palette",this.value="art";break;case"6w":this.icon="hax:messages-6",this.value="6 Week";break;case"15w":this.icon="social:school",this.value="15 Week";break;case"training":this.icon="hax:bricks",this.value="Training";break;default:this.icon="image:photo-filter",this.value="own",this.type="Create Your Own"}}))}static get styles(){return[e`:host{display:block;--background-color:transparent;--background-color-active:white;font-family:'Press Start 2P',sans-serif}:host([active]) .haxButton{color:var(--app-hax-background-color,var(--background-color-active));background-color:var(--app-hax-accent-color,var(--accent-color))}:host([active]) simple-icon-lite{--simple-icon-color:var(
          --app-hax-background-color,
          var(--background-color-active)
        )}:host([active]) .type{background-color:var(--app-hax-accent-color,var(--accent-color));color:var(--app-hax-background-color,var(--background-color-active))}#container{display:flex;flex-direction:column;align-items:center;justify-content:space-around;width:132px;height:112px}.haxButton{background-color:var(--app-hax-background-color,var(--background-color));color:var(--app-hax-accent-color,var(--accent-color));display:inline-flex}simple-icon-lite{--simple-icon-width:60px;--simple-icon-height:60px;--simple-icon-color:var(--app-hax-accent-color, var(--accent-color))}.type{font-size:10px;color:var(--app-hax-accent-color,var(--accent-color))}@media (max-width:800px){#container{width:100px;height:75px}}`]}render(){return r` <wired-button elevation="${this.elevation}" ?disabled="${this.disabled}" class="haxButton"> <div id="container"> <simple-icon-lite icon="${this.icon}"> </simple-icon-lite> <div class="type">${this.type}</div> </div> </wired-button> `}}customElements.define(m.tag,m);class x extends s{static get tag(){return"app-hax-steps"}constructor(){super(),this.stepRoutes=[],this._progressReady=!1,this.step=null,this.loaded=!1,this.themeNames=[],this.appSettings={},i((()=>{this.appSettings=a(l.appSettings),this.themeNames=Object.keys(this.appSettings.themes)})),i((()=>{n("app-hax-step",a(l.step))})),i((()=>{n("app-hax-site",a(l.site)),this.step=l.stepTest(this.step)})),i((()=>{a(l.createSiteSteps)&&(a(l.location),this.step=l.stepTest(this.step))})),i((()=>{const t=a(l.routes);this.stepRoutes=t.filter((t=>t.step))}))}static get properties(){return{...super.properties,step:{type:Number,reflect:!0},stepRoutes:{type:Array},themeNames:{type:Array},loaded:{type:Boolean,reflect:!0},appSettings:{type:Object}}}chooseStructure(t){const{value:e}=t.target;l.site.structure=e,l.appEl.playSound("click2")}chooseType(t){const{value:e}=t.target;l.site.type=e,l.appEl.playSound("click2")}chooseTheme(t){const{value:e}=t.target;l.site.theme=e,l.appEl.playSound("click2")}chooseName(t){const e=this.shadowRoot.querySelector("#sitename").value;l.site.name=e,l.appEl.playSound("click2")}progressReady(t){t.detail&&(this._progressReady=!0,5===this.step&&setTimeout((()=>{this.shadowRoot.querySelector("app-hax-hat-progress").process()}),300))}updated(t){super.updated&&super.updated(t),t.forEach(((t,e)=>{4===this.step&&"step"===e&&this.shadowRoot&&(this.shadowRoot.querySelector("#sitename").value=a(l.site.name)),5===this.step&&"step"===e&&this.shadowRoot&&this._progressReady&&setTimeout((()=>{this.shadowRoot.querySelector("app-hax-hat-progress").process()}),600),"step"===e&&(l[e]=this[e])}))}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this.maintainScroll.bind(this))}disconnectedCallback(){window.removeEventListener("resize",this.maintainScroll.bind(this)),super.disconnectedCallback()}maintainScroll(){this.shadowRoot&&this.step&&(this.scrollToThing(`#step-${this.step}`,{behavior:"instant",block:"start",inline:"nearest"}),setTimeout((()=>{this.scrollToThing(`#step-${this.step}`,{behavior:"instant",block:"start",inline:"nearest"})}),100))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),setTimeout((()=>{null===this.step&&(this.step=1),this.scrollToThing(`#step-${this.step}`,{behavior:"instant",block:"start",inline:"nearest"})}),100),i((()=>{if(a(l.createSiteSteps)&&a(l.appReady)){const t=a(l.location);t.route&&t.route.step&&t.route.id&&setTimeout((()=>{this.scrollToThing("#".concat(t.route.id),{behavior:"smooth",block:"start",inline:"nearest"})}),300)}})),i((()=>{if(this.shadowRoot&&a(l.createSiteSteps)&&a(l.appReady)){const t=a(l.activeItem);t&&t.step&&!this.__overrideProgression&&this.shadowRoot.querySelector("#link-".concat(t.id)).click()}}))}scrollToThing(t,e){const r=void 0!==window.safari;this.shadowRoot.querySelector(".carousel-with-snapping-item.active-step")&&this.shadowRoot.querySelector(".carousel-with-snapping-item.active-step").classList.remove("active-step"),r?this.shadowRoot.querySelector(t).scrollIntoView():this.shadowRoot.querySelector(t).scrollIntoView(e),this.shadowRoot.querySelector(t).classList.add("active-step")}static get styles(){return[...super.styles,e`:host{display:block;color:var(--app-hax-accent-color,var(--accent-color))}scrollable-component{--scrollbar-width:0px;--scrollbar-height:0px;--scrollbar-padding:0;--viewport-overflow-x:hidden;overflow:hidden}#grid-container{display:grid;grid-template-columns:200px 200px;background:0 0}.carousel-with-snapping-track{display:grid;grid-auto-flow:column;grid-gap:30px}.carousel-with-snapping-item{display:flex;flex-direction:column;align-items:center;justify-content:normal;scroll-snap-align:center;scroll-snap-stop:always;width:var(--viewport-width);font-size:1.5rem;text-align:center;overflow-x:hidden;max-height:60vh;padding-top:2vh}#step-links{padding:0;margin:0}li,ul{list-style:none}li{display:inline-flex;margin:4px}li{border:1px solid #000;border-radius:50%;background-color:#000}li a{padding:5px;width:5px;height:5px;margin:0;display:block}li a[disabled]{pointer-events:none}li[disabled]{background-color:grey}li.active-step{background-color:orange}app-hax-button{padding:10px 0 10px 0;background:0 0}#theme-container{display:flex;flex-direction:row;align-items:center;justify-content:center}img{pointer-events:none}#themeContainer{width:70vw;height:55vh}.theme-button{background-color:transparent;border:none;margin:8px;padding:8px;width:245px}.theme-button div{font-family:'Press Start 2P',sans-serif;font-size:16px;margin-top:16px}.theme-button:focus,.theme-button:hover{outline:4px solid var(--app-hax-accent-color,var(--accent-color));outline-offset:4px;background-color:transparent;border:none;cursor:pointer}#sitename{font-family:'Press Start 2P',sans-serif;font-size:64px;padding:8px;width:40vw;text-align:center}app-hax-site-button{justify-content:center;--app-hax-site-button-width:30vw;--app-hax-site-button-min-width:240px}app-hax-hat-progress{height:400px;width:400px;display:block}@media (max-width:800px){.theme-button{width:unset;padding:0}.theme-button div{font-size:12px;margin-top:8px}.theme-button img{height:70px}app-hax-site-button{width:320px;max-width:60vw;--app-hax-site-button-font-size:2.5vw}#sitename{width:70vw;font-size:20px}#grid-container{grid-template-columns:150px 150px}}@media (max-height:600px){.carousel-with-snapping-item{padding-top:4px;max-height:57vh}#sitename{width:40vw;font-size:14px}app-hax-hat-progress{transform:scale(.5);margin-top:-18vh}}@media (max-width:500px){app-hax-hat-progress{transform:scale(.5);margin-top:-15vh}}@media (max-height:400px){.carousel-with-snapping-item{padding-top:4px;max-height:40vh}app-hax-hat-progress{transform:scale(.3)}.carousel-with-snapping-item.active-step app-hax-hat-progress{position:fixed;top:20%;left:20%}}`]}progressFinished(t){t.detail&&(this.loaded=!0,l.appEl.playSound("success"))}typeKey(){l.appEl.playSound("click")}stepLinkClick(t){const e=parseInt(t.target.getAttribute("data-step"));this.step<e?t.preventDefault():this.step>e&&(1===e?(l.site.structure=null,l.site.type=null,l.site.theme=null):2===e?(l.site.type=null,l.site.theme=null):3===e&&(l.site.theme=null),this.step=e)}renderTypes(t){const e=a(l.site.structure);var o=r``;if("portfolio"===e)o=r` <app-hax-button tabindex="${2!==t?"-1":""}" @click="${this.chooseType}" type="Technology"></app-hax-button> <app-hax-button tabindex="${2!==t?"-1":""}" @click="${this.chooseType}" type="Business"></app-hax-button> <app-hax-button tabindex="${2!==t?"-1":""}" @click="${this.chooseType}" type="Art"></app-hax-button> <app-hax-button tabindex="${2!==t?"-1":""}" @click="${this.chooseType}"></app-hax-button>`;else o=r` <app-hax-button tabindex="${2!==t?"-1":""}" @click="${this.chooseType}" type="6w"></app-hax-button> <app-hax-button tabindex="${2!==t?"-1":""}" @click="${this.chooseType}" type="15w"></app-hax-button> <app-hax-button tabindex="${2!==t?"-1":""}" @click="${this.chooseType}" type="training"></app-hax-button> <app-hax-button tabindex="${2!==t?"-1":""}" @click="${this.chooseType}"></app-hax-button>`;return o}render(){return r` <div id="container"> <ul id="step-links"> ${this.stepRoutes.map((t=>r`<li ?disabled="${this.step<t.step}" class="${this.step===t.step?"active-step":""}"> <a href="${t.path}" ?disabled="${this.step<t.step}" @click="${this.stepLinkClick}" id="link-${t.id}" title="${t.label}" data-step="${t.step}"></a> </li>`))} </ul> <scrollable-component> <div class="carousel-with-snapping-track"> <div class="carousel-with-snapping-item" id="step-1"> <div class="step-wrapper"> <app-hax-site-button tabindex="${1!==this.step?"-1":""}" label="> Course" value="course" @click="${this.chooseStructure}"></app-hax-site-button> <app-hax-site-button tabindex="${1!==this.step?"-1":""}" label="> Portfolio" value="portfolio" @click="${this.chooseStructure}"></app-hax-site-button> </div> </div> <div class="carousel-with-snapping-item" id="step-2"> <div id="grid-container"> ${this.renderTypes(this.step)} </div> </div> <div class="carousel-with-snapping-item" id="step-3"> <div id="themeContainer"> ${this.appSettings&&this.appSettings.themes?this.themeNames.map((t=>r` <button aria-label="${this.appSettings.themes[t].name} theme" value="${t}" class="theme-button" @click="${this.chooseTheme}" tabindex="${3!==this.step?"-1":""}"> <img class="theme-img" src="${this.appSettings.themes[t].thumbnail}" alt="" loading="lazy" decoding="async"> <div>${this.appSettings.themes[t].name}</div> </button> `)):""} </div> </div> <div class="carousel-with-snapping-item" id="step-4"> <input id="sitename" @input="${this.typeKey}" tabindex="${4!==this.step?"-1":""}"> <app-hax-site-button class="sitenamebtn" tabindex="${4!==this.step?"-1":""}" label="> Create journey" @click="${this.chooseName}"></app-hax-site-button> </div> <div class="carousel-with-snapping-item" id="step-5"> <app-hax-hat-progress @progress-ready="${this.progressReady}" @promise-progress-finished="${this.progressFinished}" tabindex="${5!==this.step?"-1":""}"></app-hax-hat-progress> </div> </div></scrollable-component> </div> `}}customElements.define(x.tag,x);export{x as AppHaxSteps};
