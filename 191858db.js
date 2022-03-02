import{f as t,r as n,$ as e}from"./68bab227.js";import"./b9bb5cf7.js";
/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class a extends t{static get styles(){return[n`:host{display:block}`]}render(){return e` <slot></slot>`}static get properties(){return{...super.properties,commands:{name:"commands",type:Object},respondsTo:{name:"respondsTo",type:String,attribute:"responds-to"},debug:{name:"debug",type:Boolean},auto:{name:"auto",type:Boolean,reflect:!0},enabled:{name:"enabled",type:Boolean,reflect:!0},pitch:{name:"pitch",type:Number,reflect:!0},rate:{name:"rate",type:Number,reflect:!0},language:{name:"language",type:String,reflect:!0}}}static get tag(){return"hal-9000"}constructor(){super(),this.commands={},this.respondsTo="(hal)",this.debug=!1,this.pitch=.9,this.rate=.9,this.language="en-US",window.Hal9000=window.Hal9000||{},window.Hal9000.instance=this;const t=`${new URL("./",import.meta.url).href}lib/annyang/annyang.min.js`;if(window.addEventListener("es-bridge-annyang-loaded",this._annyangLoaded.bind(this)),window.ESGlobalBridge.requestAvailability().load("annyang",t),void 0!==window.speechSynthesis){this.synth=window.speechSynthesis,this.voices=this.synth.getVoices();for(var n=0;n<this.voices.length;n++)this.voices[n].default&&(this.defaultVoice=this.voices[n].name)}}_commandsChanged(t){this.addCommands(t)}addCommands(t){this.annyang&&this.annyang.addCommands(t)}speak(t){this.__text=t,this.synth?(this.utter=new SpeechSynthesisUtterance(this.__text),this.utter.pitch=this.pitch,this.utter.rate=this.rate,this.utter.lang=this.language,this.utter.voice=this.defaultVoice,this.synth.speak(this.utter)):console.warn("I have no voice...")}_annyangLoaded(){if(this.annyang=window.annyang,this.annyang){this.annyang.addCommands(this.commands),this.annyang.debug(this.debug),this.auto?this.annyang.start({autoRestart:!0,continuous:!0}):this.enabled&&this.annyang.start();const t=new CustomEvent("hal-9000-online",{bubbles:!0,cancelable:!1,detail:!0});this.dispatchEvent(t)}}_respondsToChanged(t,n){this.annyang&&this.annyang.removeCommands();var e={};for(var a in this.commands)a.replace(n,t)!==a?e[a.replace(n,t)]=this.commands[a]:e[a]=this.commands[a];e.length>0&&(this.commands={...e})}_autoChanged(t){this.enabled=t}_enabledChanged(t){this.annyang&&(t?this.auto?this.annyang.start({autoRestart:!0,continuous:!0}):this.annyang.start():this.annyang.abort())}_debugChanged(t,n){this.annyang&&this.annyang.debug(t)}updated(t){t.forEach(((t,n)=>{"commands"==n&&this._commandsChanged(this[n],t),"respondsTo"==n&&this._respondsToChanged(this[n],t),"debug"==n&&this._debugChanged(this[n],t),"auto"==n&&this._autoChanged(this[n],t),"enabled"==n&&this._enabledChanged(this[n],t)}))}disconnectedCallback(){window.removeEventListener("es-bridge-annyang-loaded",this._annyangLoaded.bind(this)),super.disconnectedCallback()}}window.customElements.define(a.tag,a),window.Hal9000=window.Hal9000||{},window.Hal9000.requestAvailability=()=>{window.Hal9000.instance||(window.Hal9000.instance=new a)};export{a as Hal9000};
