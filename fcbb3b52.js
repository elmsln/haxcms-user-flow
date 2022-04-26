import{W as t,B as e,r as i,$ as s,d as o,e as n,f as r,i as a,n as h}from"./1a95873b.js";var d=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},c=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let l=class extends t{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver((()=>{this.svg&&this.wiredRender(!0)})))}static get styles(){return[e,i`:host{display:inline-block;font-size:14px}path{transition:transform 50ms ease}button{position:relative;user-select:none;border:none;background:0 0;font-family:inherit;font-size:inherit;cursor:pointer;letter-spacing:1.25px;text-transform:uppercase;text-align:center;padding:10px;color:inherit;outline:0}button[disabled]{opacity:.6!important;background:rgba(0,0,0,.07);cursor:default;pointer-events:none}button:active path{transform:scale(.97) translate(1.5%,1.5%)}button:focus path{stroke-width:1.5}button::-moz-focus-inner{border:0}`]}render(){return s` <button ?disabled="${this.disabled}"> <slot @slotchange="${this.wiredRender}"></slot> <div id="overlay"> <svg></svg> </div> </button> `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const t=this.button.getBoundingClientRect(),e=Math.min(Math.max(1,this.elevation),5);return[t.width+2*(e-1),t.height+2*(e-1)]}return this.lastSize}draw(t,e){const i=Math.min(Math.max(1,this.elevation),5),s={width:e[0]-2*(i-1),height:e[1]-2*(i-1)};o(t,0,0,s.width,s.height,this.seed);for(let e=1;e<i;e++)n(t,2*e,s.height+2*e,s.width+2*e,s.height+2*e,this.seed).style.opacity=""+(75-10*e)/100,n(t,s.width+2*e,s.height+2*e,s.width+2*e,2*e,this.seed).style.opacity=""+(75-10*e)/100,n(t,2*e,s.height+2*e,s.width+2*e,s.height+2*e,this.seed).style.opacity=""+(75-10*e)/100,n(t,s.width+2*e,s.height+2*e,s.width+2*e,2*e,this.seed).style.opacity=""+(75-10*e)/100}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};d([r({type:Number}),c("design:type",Object)],l.prototype,"elevation",void 0),d([r({type:Boolean,reflect:!0}),c("design:type",Object)],l.prototype,"disabled",void 0),d([a("button"),c("design:type",HTMLButtonElement)],l.prototype,"button",void 0),l=d([h("wired-button"),c("design:paramtypes",[])],l);export{l as WiredButton};
