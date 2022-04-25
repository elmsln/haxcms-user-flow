import{S as e,r as t,$ as i,y as r}from"./61d850e7.js";
/**
 * Copyright 2022 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */const s=["bunny","coffee","construction","cowboy","education","knight","ninja","party","pirate","watermelon"];class h extends e{static get tag(){return"rpg-character"}constructor(){super(),this.height=142,this.width=113,this.accessories=0,this.base=0,this.face=0,this.faceItem=0,this.hair=0,this.pants=0,this.shirt=0,this.skin=0,this.accentColor="orange",this.seed=null,this.walking=!1,this.leg="",this.speed=500,this.__walkingTimeout=null,this.circle=!1,this.hat="none",this.hatColor=0,this.demo=!1,this.fire=!1,this.reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches}randomColor(e=null){return null===e&&(e=""+Math.floor(Math.random()*Object.keys(this.colors).length)),Object.keys(this.colors)[e]}static get properties(){return{...super.properties,accessories:{type:Number},height:{type:Number},width:{type:Number},base:{type:Number},face:{type:Number},faceItem:{type:Number},hair:{type:Number},pants:{type:Number},shirt:{type:Number},skin:{type:Number},hatColor:{type:Number},hat:{type:String},walking:{type:Boolean,reflect:!0},leg:{type:String},seed:{type:String,reflect:!0},speed:{type:Number},circle:{type:Boolean,reflect:!0},fire:{type:Boolean,reflect:!0},demo:{type:Boolean},reduceMotion:{type:Boolean}}}static get styles(){let e=[];return super.styles&&(e=super.styles),[...e,t`:host{display:inline-block;margin:0;padding:0;text-align:initial;position:relative}img,svg{position:absolute;margin:0;padding:0;text-align:initial}div{transition:.3s ease-in-out background-color;margin:0;padding:0;text-align:initial}#demo{height:30px;padding-top:10px;text-align:center;background-color:#000;color:#fff;font-weight:700}`]}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),null===this.seed&&(this.seed=Math.random().toString(36).substring(2,12))}render(){const e=new URL(`./lib/accessories/${this.accessories}.svg`,import.meta.url).href,t=new URL(`./lib/base/${this.base}${this.leg}.svg`,import.meta.url).href,r=new URL(`./lib/base/${this.leg}.svg`,import.meta.url).href,h=new URL(`./lib/face/${this.face}.svg`,import.meta.url).href,a=new URL(`./lib/faceItem/${this.faceItem}.svg`,import.meta.url).href,o=new URL(`./lib/hair/${this.hair}.svg`,import.meta.url).href,n=new URL(`./lib/pants/${this.pants}.svg`,import.meta.url).href,l=new URL(`./lib/shirt/${this.shirt}.svg`,import.meta.url).href,c=new URL(`./lib/skin/${this.skin}.svg`,import.meta.url).href;let d=this.hat;this.fire&&"none"===this.hat?d="coffee":"random"===this.hat&&(d=s[Math.floor(Math.random()*s.length)]);const p=new URL(`./lib/hat/${d}.svg`,import.meta.url).href,g=new URL(`./lib/hatColor/${this.hatColor}.svg`,import.meta.url).href,m=new URL("./lib/base/fire.svg",import.meta.url).href,u=new URL("./lib/circle.svg",import.meta.url).href;return i` <div class="wrapper"> ${this.renderPiece(c)} ${1===this.base?this.renderPiece(o):""} ${this.renderPiece(h)} ${this.renderPiece(a)} ${this.renderPiece(l)} ${this.renderPiece(n)} ${this.renderPiece(e)} ${this.renderPiece(t)} ${""!==this.leg?this.renderPiece(r):""} ${this.renderPiece(g)} ${this.fire?this.renderPiece(m):""} ${"none"!==d?this.renderPiece(p):""} ${this.circle?this.renderPiece(u):""} </div> ${this.demo?i`<div id="demo">${this.seed}</div>`:""} <style>#cardcircle{fill:var(--simple-colors-default-theme-${this.accentColor}-8,var(--simple-colors-default-theme-accent-8,#ff0))}div{width:${this.width+"px"}}.wrapper{height:${this.height+"px"}}</style> `}renderPiece(e){return r`
    <svg xmlns="http://www.w3.org/2000/svg" part="rpg-character-item" viewBox="0 0 ${this.width} ${this.height}" preserveAspectRatio="xMidYMid meet">
      <image
        href="${e}"
        width="${this.width}px"
        height="${this.height}px"
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
      ></image>
    </svg>`}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{if("fire"===t&&(this.speed=this[t]?100:500),"demo"===t&&(this[t]?this.shadowRoot.querySelector(".wrapper").addEventListener("click",(e=>{this.seed=Math.random().toString(36).substring(2,12)})):this.shadowRoot.querySelector(".wrapper").removeEventListener("click",(e=>{e.target.seed=Math.random().toString(36).substring(2,12)}))),"leg"!==t&&"walking"!==t||!this.walking||this.reduceMotion||(clearTimeout(this.__walkingTimeout),this.__walkingTimeout=setTimeout((()=>{switch(this.leg){case"":this.leg="R";break;case"R":this.leg="L";break;case"L":this.leg=""}}),this.speed)),"seed"===t&&this[t]){let e=54;for(let t=0;t<this.seed.length;t++)t<64&&(e*=this.seed.charCodeAt(t));const i={zpg:"7501517984378880262144",edtechjoker:"712215550",btopro:"7122155501"};e=BigInt(e).toString(),Object.keys(i).includes(this[t])&&(e=i[this[t]]);const r={accessories:9,base:1,leg:["","R","L"],face:5,faceItem:9,hair:9,pants:9,shirt:9,skin:9,hatColor:9};Object.keys(r).forEach(((t,i)=>{void 0!==e[i]?this[t]="leg"===t?r[t][Math.floor(Math.random()*Object.keys(r[t]).length)]:"base"===t?e[i]>=5?1:0:"face"===t&&e[i]>5?1:e[i]:this[t]=0}))}}))}static get haxProperties(){return new URL(`./lib/${this.tag}.haxProperties.json`,import.meta.url).href}}customElements.define(h.tag,h);export{h as RpgCharacter};
