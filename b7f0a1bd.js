import{s as t,r as e,$ as n}from"./77449c57.js";import"./a690d339.js";import"./c4b82a6c.js";import"./7613a8bb.js";import"./c7615776.js";import"./5c68dd7f.js";import"./695cc705.js";
/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class a extends t{static get styles(){return[e`:host{display:block}`]}render(){return n` <slot></slot>`}static get properties(){return{...super.properties,commands:{name:"commands",type:Object},respondsTo:{name:"respondsTo",type:String,attribute:"responds-to"},debug:{name:"debug",type:Boolean},auto:{name:"auto",type:Boolean,reflect:!0},enabled:{name:"enabled",type:Boolean,reflect:!0},pitch:{name:"pitch",type:Number,reflect:!0},rate:{name:"rate",type:Number,reflect:!0},language:{name:"language",type:String,reflect:!0}}}static get tag(){return"hal-9000"}constructor(){super(),this.commands={},this.respondsTo="(hal)",this.debug=!1,this.pitch=.9,this.rate=.9,this.language=navigator.language,window.Hal9000=window.Hal9000||{},window.Hal9000.instance=this;const t=`${new URL(new URL("64536cd0.js",import.meta.url).href,import.meta.url).href}`;if(window.addEventListener("es-bridge-annyang-loaded",this._annyangLoaded.bind(this)),window.ESGlobalBridge.requestAvailability().load("annyang",t),void 0!==window.speechSynthesis){this.synth=window.speechSynthesis,this.voices=this.synth.getVoices();for(var e=0;e<this.voices.length;e++)this.voices[e].default&&(this.defaultVoice=this.voices[e].name)}}_commandsChanged(t){this.addCommands(t)}addCommands(t){this.annyang&&this.annyang.addCommands(t)}speak(t){this.__text=t,this.synth?(this.utter=new SpeechSynthesisUtterance(this.__text),this.utter.pitch=this.pitch,this.utter.rate=this.rate,this.utter.lang=this.language,this.utter.voice=this.defaultVoice,this.synth.speak(this.utter)):console.warn("I have no voice...")}_annyangLoaded(){if(this.annyang=window.annyang,this.annyang){this.annyang.addCommands(this.commands),this.annyang.debug(this.debug),this.auto?this.annyang.start({autoRestart:!0,continuous:!0}):this.enabled&&this.annyang.start();const t=new CustomEvent("hal-9000-online",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(t)}}_respondsToChanged(t,e){this.annyang&&this.annyang.removeCommands();var n={};for(var a in this.commands)a.replace(e,t)!==a?n[a.replace(e,t)]=this.commands[a]:n[a]=this.commands[a];n.length>0&&(this.commands={...n})}_autoChanged(t){this.enabled=t}_enabledChanged(t){this.annyang&&(t?this.auto?this.annyang.start({autoRestart:!0,continuous:!0}):this.annyang.start():this.annyang.abort())}_debugChanged(t,e){this.annyang&&this.annyang.debug(t)}updated(t){t.forEach(((t,e)=>{"commands"==e&&this._commandsChanged(this[e],t),"respondsTo"==e&&this._respondsToChanged(this[e],t),"debug"==e&&this._debugChanged(this[e],t),"auto"==e&&this._autoChanged(this[e],t),"enabled"==e&&this._enabledChanged(this[e],t)}))}disconnectedCallback(){window.removeEventListener("es-bridge-annyang-loaded",this._annyangLoaded.bind(this)),super.disconnectedCallback()}}window.customElements.define(a.tag,a),window.Hal9000=window.Hal9000||{},window.Hal9000.requestAvailability=()=>{window.Hal9000.instance||(window.Hal9000.instance=new a)};export{a as Hal9000};
