import{s as e,r as t,$ as s}from"./dff398a9.js";import"./54970fbe.js";import"./327f6e3f.js";function i(e){return(e|=0)<10?`0${e}`:`${Math.min(e,99)}`}function r(){function e(e,t){return new Promise(((s,i)=>{const r=new XMLHttpRequest;r.open("GET",e),r.responseType="arraybuffer",r.onload=()=>{s(WebAssembly.instantiate(r.response,t))},r.onerror=i,r.send()}))}let t=null,s=5242880;function i(e){const t=s;return s+=e,t}function r(e){postMessage({type:"internal-error",data:e})}let n=null,a=null,o=null;onmessage=s=>{const c=s.data;switch(c.type){case"init":const{wasmURL:s,shimURL:d}=c.data;Promise.resolve().then((()=>(self.WebAssembly&&!function(){const e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),t=new WebAssembly.Module(e);return 0!==new WebAssembly.Instance(t,{}).exports.test(4)}()&&delete self.WebAssembly,self.WebAssembly||importScripts(d),t=new WebAssembly.Memory({initial:256,maximum:256}),{memory:t,pow:Math.pow,exit:r,powf:Math.pow,exp:Math.exp,sqrtf:Math.sqrt,cos:Math.cos,log:Math.log,sin:Math.sin,sbrk:i}))).then((t=>function(t,s){if(!WebAssembly.instantiateStreaming)return e(t,s);const i=fetch(t,{credentials:"same-origin"});return WebAssembly.instantiateStreaming(i,s).catch((i=>{if(i.message&&i.message.indexOf("Argument 0 must be provided and must be a Response")>0)return e(t,s);throw i}))}(s,{env:t}))).then((e=>{n=e.instance.exports,postMessage({type:"init",data:null})})).catch((e=>{postMessage({type:"init-error",data:e.toString()})}));break;case"start":if(!function(e){if(a=n.vmsg_init(e),!a)return!1;const s=new Uint32Array(t.buffer,a,1)[0];return o=new Float32Array(t.buffer,s),!0}(c.data))return postMessage({type:"error",data:"vmsg_init"});break;case"data":if(l=c.data,o.set(l),!(n.vmsg_encode(a,l.length)>=0))return postMessage({type:"error",data:"vmsg_encode"});break;case"stop":const h=function(){if(n.vmsg_flush(a)<0)return null;const e=new Uint32Array(t.buffer,a+4,1)[0],s=new Uint32Array(t.buffer,a+8,1)[0],i=new Uint8Array(t.buffer,e,s),r=new Blob([i],{type:"audio/mpeg"});return n.vmsg_free(a),a=null,o=null,r}();if(!h)return postMessage({type:"error",data:"vmsg_flush"});postMessage({type:"stop",data:h})}var l}}class n{constructor(e={},t=null){this.wasmURL=new URL(e.wasmURL||"/static/js/vmsg.wasm",location).href,this.shimURL=new URL(e.shimURL||"/static/js/wasm-polyfill.js",location).href,this.onStop=t,this.pitch=e.pitch||0,this.stream=null,this.audioCtx=null,this.gainNode=null,this.pitchFX=null,this.encNode=null,this.worker=null,this.workerURL=null,this.blob=null,this.blobURL=null,this.resolve=null,this.reject=null,Object.seal(this)}close(){this.encNode&&this.encNode.disconnect(),this.encNode&&(this.encNode.onaudioprocess=null),this.stream&&this.stopTracks(),this.audioCtx&&this.audioCtx.close(),this.worker&&this.worker.terminate(),this.workerURL&&URL.revokeObjectURL(this.workerURL),this.blobURL&&URL.revokeObjectURL(this.blobURL)}initAudio(){return(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?function(e){return navigator.mediaDevices.getUserMedia(e)}:function(e){const t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(s,i){t.call(navigator,e,s,i)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))})({audio:!0}).then((e=>{this.stream=e;const t=this.audioCtx=new(window.AudioContext||window.webkitAudioContext),s=t.createMediaStreamSource(e),i=this.gainNode=(t.createGain||t.createGainNode).call(t);i.gain.value=1,s.connect(i);const r=this.pitchFX=new l(t);r.setPitchOffset(this.pitch);const n=this.encNode=(t.createScriptProcessor||t.createJavaScriptNode).call(t,0,1,1);r.output.connect(n),i.connect(0===this.pitch?n:r.input)}))}initWorker(){if(!this.stream)throw new Error("missing audio initialization");const e=new Blob(["(",r.toString(),")()"],{type:"application/javascript"}),t=this.workerURL=URL.createObjectURL(e),s=this.worker=new Worker(t),{wasmURL:i,shimURL:n}=this;return s.postMessage({type:"init",data:{wasmURL:i,shimURL:n}}),new Promise(((e,t)=>{s.onmessage=s=>{const i=s.data;switch(i.type){case"init":e();break;case"init-error":t(new Error(i.data));break;case"error":case"internal-error":console.error("Worker error:",i.data),this.reject&&this.reject(i.data);break;case"stop":this.blob=i.data,this.blobURL=URL.createObjectURL(i.data),this.onStop&&this.onStop(),this.resolve&&this.resolve(this.blob)}}}))}init(){return this.initAudio().then(this.initWorker.bind(this))}startRecording(){if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");this.blob=null,this.blobURL&&URL.revokeObjectURL(this.blobURL),this.blobURL=null,this.resolve=null,this.reject=null,this.worker.postMessage({type:"start",data:this.audioCtx.sampleRate}),this.encNode.onaudioprocess=e=>{const t=e.inputBuffer.getChannelData(0);this.worker.postMessage({type:"data",data:t})},this.encNode.connect(this.audioCtx.destination)}stopRecording(){if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");return this.encNode.disconnect(),this.encNode.onaudioprocess=null,this.stopTracks(),this.worker.postMessage({type:"stop",data:null}),new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}stopTracks(){this.stream.getTracks&&this.stream.getTracks().forEach((e=>e.stop()))}}class a{constructor(e={},t=document.body,s,i){this.recorder=new n(e,this.onStop.bind(this)),this.resolve=s,this.reject=i,this.target=t,this.renderArea=null,this.recordBtn=null,this.stopBtn=null,this.timer=null,this.audio=null,this.saveBtn=null,this.tid=0,this.start=0,Object.seal(this),this.recorder.initAudio().then((()=>this.drawInit())).then((()=>this.recorder.initWorker())).then((()=>this.drawAll())).catch((e=>this.drawError(e)))}drawInit(){const e=this.renderArea=document.createElement("div");e.className="vmsg-popup",e.addEventListener("click",(e=>e.stopPropagation()));const t=document.createElement("div");t.className="vmsg-progress";for(let e=0;e<3;e++){const e=document.createElement("div");e.className="vmsg-progress-dot",t.appendChild(e)}e.appendChild(t),this.target.appendChild(e)}drawTime(e){const t=Math.round(e/1e3);this.timer.textContent=i(t/60)+":"+i(t%60)}drawAll(){this.drawInit(),this.clearAll();const e=document.createElement("div");e.className="vmsg-record-row",this.renderArea.appendChild(e);const t=this.recordBtn=document.createElement("button");t.className="vmsg-button vmsg-record-button",t.textContent="●",t.addEventListener("click",(()=>this.startRecording())),e.appendChild(t);const s=this.stopBtn=document.createElement("button");s.className="vmsg-button vmsg-stop-button",s.style.display="none",s.textContent="■",s.addEventListener("click",(()=>this.stopRecording())),e.appendChild(s);const i=this.audio=new Audio;i.autoplay=!0;const r=this.timer=document.createElement("span");r.className="vmsg-timer",r.addEventListener("click",(()=>{i.paused?this.recorder.blobURL&&(i.src=this.recorder.blobURL):i.pause()})),this.drawTime(0),e.appendChild(r);const n=this.saveBtn=document.createElement("button");n.className="vmsg-button vmsg-save-button",n.textContent="✓",n.disabled=!0,n.addEventListener("click",(()=>this.close(this.recorder.blob))),e.appendChild(n);const a=document.createElement("div");a.className="vmsg-slider-wrapper vmsg-gain-slider-wrapper";const o=document.createElement("input");o.className="vmsg-slider vmsg-gain-slider",o.setAttribute("type","range"),o.min=0,o.max=2,o.step=.2,o.value=1,o.onchange=()=>{const e=+o.value;this.recorder.gainNode.gain.value=e},a.appendChild(o),this.renderArea.appendChild(a);const c=document.createElement("div");c.className="vmsg-slider-wrapper vmsg-pitch-slider-wrapper";const l=document.createElement("input");l.className="vmsg-slider vmsg-pitch-slider",l.setAttribute("type","range"),l.min=-1,l.max=1,l.step=.2,l.value=this.recorder.pitch,l.onchange=()=>{const e=+l.value;this.recorder.pitchFX.setPitchOffset(e),this.recorder.gainNode.disconnect(),this.recorder.gainNode.connect(0===e?this.recorder.encNode:this.recorder.pitchFX.input)},c.appendChild(l),this.renderArea.appendChild(c),this.target.dispatchEvent(new CustomEvent("vmsg-ready",{detail:{value:!0}}))}drawError(e){console.error(e),this.drawInit(),this.clearAll();const t=document.createElement("div");t.className="vmsg-error",t.textContent=e.toString(),this.renderArea.appendChild(t)}clearAll(){this.renderArea&&(this.renderArea.innerHTML="")}close(e){this.audio&&this.audio.pause(),this.tid&&clearTimeout(this.tid),this.recorder.close(),e?this.resolve(e):this.reject(new Error("No record made"))}onStop(){this.recordBtn.style.display="",this.stopBtn.style.display="none",this.stopBtn.disabled=!1,this.saveBtn.disabled=!1}startRecording(){this.audio.pause(),this.start=Date.now(),this.updateTime(),this.recordBtn.style.display="none",this.stopBtn.style.display="",this.saveBtn.disabled=!0,this.recorder.startRecording()}stopRecording(){clearTimeout(this.tid),this.tid=0,this.stopBtn.disabled=!0,this.recorder.stopRecording()}updateTime(){this.drawTime(Date.now()-this.start),this.tid=setTimeout((()=>this.updateTime()),300)}}let o=!1;function c(e,t,s,i){for(var r=t*e.sampleRate,n=r+(t-2*s)*e.sampleRate,a=e.createBuffer(1,n,e.sampleRate),o=a.getChannelData(0),c=0;c<r;++c)o[c]=i?(r-c)/n:c/r;for(c=r;c<n;++c)o[c]=0;return a}function l(e){this.context=e;var t=(e.createGain||e.createGainNode).call(e),s=(e.createGain||e.createGainNode).call(e);this.input=t,this.output=s;var i=e.createBufferSource(),r=e.createBufferSource(),n=e.createBufferSource(),a=e.createBufferSource();this.shiftDownBuffer=c(e,.1,.05,!1),this.shiftUpBuffer=c(e,.1,.05,!0),i.buffer=this.shiftDownBuffer,r.buffer=this.shiftDownBuffer,n.buffer=this.shiftUpBuffer,a.buffer=this.shiftUpBuffer,i.loop=!0,r.loop=!0,n.loop=!0,a.loop=!0;var o=(e.createGain||e.createGainNode).call(e),l=(e.createGain||e.createGainNode).call(e),d=(e.createGain||e.createGainNode).call(e);d.gain.value=0;var h=(e.createGain||e.createGainNode).call(e);h.gain.value=0,i.connect(o),r.connect(l),n.connect(d),a.connect(h);var u=(e.createGain||e.createGainNode).call(e),m=(e.createGain||e.createGainNode).call(e),p=(e.createDelay||e.createDelayNode).call(e),g=(e.createDelay||e.createDelayNode).call(e);o.connect(u),l.connect(m),d.connect(u),h.connect(m),u.connect(p.delayTime),m.connect(g.delayTime);var f=e.createBufferSource(),v=e.createBufferSource(),w=function(e,t,s){for(var i=t*e.sampleRate,r=i+(t-2*s)*e.sampleRate,n=e.createBuffer(1,r,e.sampleRate),a=n.getChannelData(0),o=s*e.sampleRate,c=o,l=i-o,d=0;d<i;++d){var h;h=d<c?Math.sqrt(d/o):d>=l?Math.sqrt(1-(d-l)/o):1,a[d]=h}for(d=i;d<r;++d)a[d]=0;return n}(e,.1,.05);f.buffer=w,v.buffer=w,f.loop=!0,v.loop=!0;var b=(e.createGain||e.createGainNode).call(e),y=(e.createGain||e.createGainNode).call(e);b.gain.value=0,y.gain.value=0,f.connect(b.gain),v.connect(y.gain),t.connect(p),t.connect(g),p.connect(b),g.connect(y),b.connect(s),y.connect(s);var R=e.currentTime+.05,U=R+.1-.05;i.start(R),r.start(U),n.start(R),a.start(U),f.start(R),v.start(U),this.mod1=i,this.mod2=r,this.mod1Gain=o,this.mod2Gain=l,this.mod3Gain=d,this.mod4Gain=h,this.modGain1=u,this.modGain2=m,this.fade1=f,this.fade2=v,this.mix1=b,this.mix2=y,this.delay1=p,this.delay2=g,this.setDelay(.1)}l.prototype.setDelay=function(e){this.modGain1.gain.setTargetAtTime(.5*e,0,.01),this.modGain2.gain.setTargetAtTime(.5*e,0,.01)},l.prototype.setPitchOffset=function(e){e>0?(this.mod1Gain.gain.value=0,this.mod2Gain.gain.value=0,this.mod3Gain.gain.value=1,this.mod4Gain.gain.value=1):(this.mod1Gain.gain.value=1,this.mod2Gain.gain.value=1,this.mod3Gain.gain.value=0,this.mod4Gain.gain.value=0),this.setDelay(.1*Math.abs(e))};
/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
class d extends e{static get styles(){return[t`:host{display:inline-flex}`]}render(){return s` <button @click="${this.recordState}"> <simple-icon icon="${this.iconState}"></simple-icon>${this.textState} </button> <slot></slot> `}static get properties(){return{iconState:{type:String},textState:{type:String},recording:{type:Boolean}}}static get tag(){return"voice-recorder"}constructor(){super(),this.recording=!1,setTimeout((()=>{this.addEventListener("vmsg-ready",this.vmsgReady.bind(this))}),0)}recordState(e){this.recording=!this.recording}updated(e){e.forEach(((e,t)=>{"recording"==t&&(this[t]?(this.textState="stop",this.iconState="av:stop"):(this.textState="Record",this.iconState="av:play-arrow"),this.toggleRecording(this[t],e))}))}vmsgReady(e){console.warn(e.detail.value)}toggleRecording(e,t){var s,i;e&&(s={wasmURL:new URL("./../../",import.meta.url).href+"node_modules/vmsg/vmsg.wasm"},i=this,new Promise(((e,t)=>{if(o)throw new Error("Record form is already opened");o=!0,new a(s,i,e,t)})).then((e=>(o=!1,e)),(e=>{throw o=!1,e}))).then((e=>{this.dispatchEvent(new CustomEvent("voice-recorder-recording",{value:e}))}))}}customElements.define(d.tag,d);export{d as VoiceRecorder};
