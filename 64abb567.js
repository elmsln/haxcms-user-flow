import"./f1ba93eb.js";import"./b33d865a.js";import"./6d8d5c07.js";import"./aa803003.js";import"./5cf9862e.js";import"./92722af5.js";import"./5c68dd7f.js";import"./ed3cae70.js";import"./185a8c34.js";import"./cb9a62d4.js";import"./765646de.js";import"./8f4cf15b.js";class e extends HTMLElement{static get tag(){return"simple-login-avatar"}constructor(t=!1){super(),this.tag=e.tag,this.template=document.createElement("template"),this.attachShadow({mode:"open"}),t||this.render()}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}_copyAttribute(e,t){const a=this.shadowRoot.querySelectorAll(t),i=this.getAttribute(e),o=null==i?"removeAttribute":"setAttribute";for(const t of a)t[o](e,i)}render(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}get html(){return'\n    <style>\n      :host {\n        margin: 0;\n        display: block;\n        @apply --simple-login-avatar;\n        max-width: 100%; \n      }\n      :host([hidden]){\n        display: none;\n      }\n      #svg {\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        right: 0;\n        fill: var(--simple-login-avatar-background, white);\n      }\n      .avatar {\n        position:relative;\n        margin: 0 auto;\n        display: block;\n        overflow: hidden;\n        text-decoration: none;\n        line-height: 240%;\n        color: var(--simple-login-avatar-background, white);\n        background: var(--simple-login-avatar-color, #36bed4);\n        border-radius: var(--simple-login-avatar-border-radius, 100%);\n      }\n    </style>\n    <div class="avatar">\n      <svg id="svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block;"><g><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></g></svg>\n      <slot></slot>\n    </div>'}}window.customElements.define(e.tag,e);class t extends HTMLElement{static get tag(){return"simple-login-camera"}constructor(){super(),window.WCGlobalBasePath?this.basePath=window.WCGlobalBasePath:this.basePath=new URL("./../../../",import.meta.url).href,this.t={record:"Record",pause:"Pause record",stopSave:"Stop & Save",clickToTakePhoto:"Click to take photo"},window.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{context:this,namespace:"simple-login",localesPath:new URL("../locales",import.meta.url).href,updateCallback:"render",locales:["es"]}}));const e=`${this.basePath}msr/MediaStreamRecorder.min.js`;window.ESGlobalBridge.requestAvailability().load("msr",e),window.addEventListener("es-bridge-msr-loaded",this._msrLoaded.bind(this)),this.template=document.createElement("template"),this._shadow=this.attachShadow({mode:"closed"}),this.render(),this._video=this._shadow.querySelector("video"),this._error=this._shadow.querySelector("p"),this._record=this._shadow.querySelector("button.record"),this._pauseRecord=this._shadow.querySelector("button.pause-record"),document.addEventListener("DOMContentLoaded",this.documentLoaded.bind(this)),this.hasAttribute("record")?(this._record.addEventListener("click",(()=>this._record.hasAttribute("recording")?(this._record.innerText=this.t.record,this._record.removeAttribute("recording"),this._stopRecording()):(this._record.innerText=this.t.stopSave,this._record.setAttribute("recording",""),this._startRecording()))),this._pauseRecord.addEventListener("click",(()=>this._pauseRecord.hasAttribute("resume")?(this._pauseRecord.innerText="Pause record",this._pauseRecord.removeAttribute("resume"),this._resumeRecording()):(this._pauseRecord.innerText="Resume record",this._pauseRecord.setAttribute("resume",""),this._pauseRecording())))):(this._record.remove(),this._pauseRecord.remove())}render(){this._shadow.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this._shadow.appendChild(this.template.content.cloneNode(!0))}static get observedAttributes(){return["autoplay","controls","audio"]}_startRecording(){this._pauseRecord.removeAttribute("hidden"),this.MediaStreamRecorder.start(100)}_stopRecording(){this._pauseRecord.setAttribute("hidden",""),this._pauseRecord.removeAttribute("resume"),this.MediaStreamRecorder.stop()}_pauseRecording(){this._record.setAttribute("disabled",""),this.MediaStreamRecorder.pause()}_resumeRecording(){this._record.removeAttribute("disabled"),this.MediaStreamRecorder.resume()}_saveVideo(e){const t=e.type.split("/").pop();this.MediaStreamRecorder.save(e,`my-camera-${(new Date).toISOString().replace(/:|\./g,"-")}.${t}`)}_cameraStream(){return navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({video:{width:{min:320,ideal:1280,max:1920},height:{min:240,ideal:720,max:1080},facingMode:"user"},audio:this.hasAttribute("audio")}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}takeASnap(){const e=document.createElement("canvas"),t=e.getContext("2d");return e.width=this._video.videoWidth,e.height=this._video.videoHeight,t.drawImage(this._video,0,0),new Promise(((t,a)=>{e.toBlob(t,"image/jpeg")}))}renderImage(e){let t=document.createElement("img");return t.src=URL.createObjectURL(e),t}imageBlob(e){return e}download(e){let t=document.createElement("a");t.href=URL.createObjectURL(e),t.download="screenshot.jpg",document.body.appendChild(t),t.click()}_addVideoAtributes(){this._video.autoplay=this.hasAttribute("autoplay"),this._video.controls=this.hasAttribute("controls")}_msrLoaded(e){this._applyMSR(),this._shadow.querySelector("#wrapper").addEventListener("click",(()=>{this.dispatchEvent(new CustomEvent("site-listing-video-activate",{detail:this,bubbles:!0,composed:!0}))}))}async _applyMSR(){window.addEventListener("site-listing-video-activate",(async()=>{try{this._video.srcObject=await this._cameraStream(),window.stream=this._video.srcObject,this._addVideoAtributes(),this.hasAttribute("record")&&(this.MediaStreamRecorder=new MediaStreamRecorder(this._video.srcObject),this.MediaStreamRecorder.ondataavailable=this._saveVideo.bind(this)),setTimeout((()=>{this.dispatchEvent(new CustomEvent("simple-login-camera-icon-click",{detail:this,bubbles:!0,composed:!0}))}),100),this._error.remove()}catch(e){if(this._video.remove(),this._record.remove(),this._pauseRecord.remove(),"ConstraintNotSatisfiedError"===e.name)this._error.innerText="The resolution is not supported by your device.";else{if("NotAllowedError"!==e.name)throw this._error.innerText=e.message,Error(e);this._error.innerText="Permissions have not been granted to use your camera and microphone, you need to allow the page access to your devices in order for the demo to work."}}}))}connectedCallback(){!0===window.ESGlobalBridge.requestAvailability().imports.msr&&this._applyMSR(),this._t={...this.t}}documentLoaded(e){!0===window.ESGlobalBridge.requestAvailability().imports.msr&&this._applyMSR()}disconnectedCallback(){document.removeEventListener("DOMContentLoaded",this.documentLoaded.bind(this)),window.removeEventListener("es-bridge-msr-loaded",this._msrLoaded.bind(this))}attributeChangedCallback(e,t,a){}get html(){return`\n      <style>\n        :host {\n          display: flex;\n        }\n        #wrapper {\n          overflow: hidden;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          flex-direction: column;\n          flex-wrap: wrap;\n          position: relative;\n          background-color: var(--simple-login-camera-background, var(--background-color, #ccc));\n        }\n        video {\n          margin-left: calc(100% * var(--simple-login-camera-aspect, 1) / 2 - 177.77777777777% / 2);          \n          width: calc(177.77777777777% / var(--simple-login-camera-aspect, 1));\n          background-color: rgba(0, 0, 0, 0);\n        }\n        .error {\n          color: black;\n          background-color: white;\n          font-size: 26px;\n          text-align: center;\n          padding: 10px;\n          position: absolute;\n        }\n        .custom-controls {\n          top: 8px;\n          right: 8px;\n          position: absolute;\n        }\n        .custom-controls button {\n          padding: 8px 10px;\n        }\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <div id="wrapper" part="wrapper">\n        <video part="video"></video>\n        <p class="error" part="error">${this.t.clickToTakePhoto}</p>\n        <div class="custom-controls" part="controls">\n          <button class="record" part="record">${this.t.record}</button>\n          <button class="pause-record" hidden part="pause">${this.t.pause}</button>\n        </div>\n      </div>\n    `}}navigator.mediaDevices&&window.customElements.define(t.tag,t);class a extends HTMLElement{constructor(e=!1){super(),this.tag=a.tag,this.t={takePhoto:"Take Photo"},window.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{context:this,namespace:"simple-login",localesPath:new URL("../locales",import.meta.url).href,updateCallback:"render",locales:["es"]}})),this.template=document.createElement("template"),this.attachShadow({mode:"open"}),e||this.render()}static get tag(){return"simple-camera-snap"}render(){this.shadowRoot.innerHTML=null,this.template.innerHTML=this.html,window.ShadyCSS&&window.ShadyCSS.prepareTemplate(this.template,this.tag),this.shadowRoot.appendChild(this.template.content.cloneNode(!0))}get html(){return`\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        flex-direction: column;\n        /* style simple-login-camera according to simple-login-snap styles */\n        --simple-login-camera-background: var(--simple-camera-snap-color, #36bed4);\n        --simple-login-camera-error: var(--simple-camera-snap-error, red);\n        --simple-login-avatar-color: var(--simple-camera-snap-color, #36bed4);\n        --simple-login-camera-size: var(--simple-camera-snap-height, calc(var(--simple-camera-snap-width, unset) * 16/9));\n\n        /* style simple-login-avatar according to simple-login-snap styles */\n        --simple-login-avatar-background: var(--simple-camera-snap-background, white);\n        --simple-login-avatar-border-radius: var(--simple-camera-snap-border-radius,100%);\n      }\n      :host([hidden]) {\n        display: none !important;\n      }\n      #selfie {\n        position: absolute;\n        margin: 0;\n        display: flex;\n        justify-content: center;\n        width: 100%;\n        overflow: hidden;\n      }\n      #snap {\n        color: var(--simple-camera-snap-color, #36bed4);\n        background-color: var(--simple-camera-snap-background, white);\n        border-radius: var(--simple-camera-snap-button-border-radius);\n        opacity: var(--simple-camera-snap-button-opacity);\n      }\n      .has-snap {\n        z-index: 3;\n      }\n      #selfie img {\n        z-index: 2;        \n        width: calc(177.77777777777% / var(--simple-login-camera-aspect, 1));\n        background-color: rgba(0, 0, 0, 0);\n      }\n      .buttons {\n        display: flex;\n        width: 100%;\n        justify-content: space-around;\n        position: var(--simple-camera-snap-button-container-position);\n        bottom: var(--simple-camera-snap-button-container-bottom);\n        z-index: var(--simple-camera-snap-button-container-z-index);\n      }\n    </style>\n    <simple-login-avatar part="avatar">\n      <div id="selfie" part="selfie"></div>\n      <simple-login-camera id="camera" autoplay part="camera"></simple-login-camera>\n    </simple-login-avatar>\n    <div class="buttons">\n      <simple-icon-button-lite id="snap" icon="image:camera-alt" part="snap-button"></simple-icon-button-lite>\n      <simple-tooltip for="snap" part="snap-tooltip">${this.t.takePhoto}</simple-tooltip>\n      <slot></slot>\n    </div>\n    `}connectedCallback(){navigator.mediaDevices||(this.shadowRoot.querySelector("#snap").style.display="none"),this.shadowRoot.querySelector("#snap").addEventListener("click",this.snapPhoto.bind(this)),this._t={...this.t}}disconnectedCallback(){this.shadowRoot.querySelector("#snap").removeEventListener("click",this.snapPhoto.bind(this))}async snapPhoto(e){const t=this.shadowRoot.querySelector("#camera");if(t.hasAttribute("autoplay")){let e=await t.takeASnap(),a=await t.takeASnap().then(t.renderImage);t.removeAttribute("autoplay");const i=this.shadowRoot.querySelector("#selfie");i.innerHTML="",i.appendChild(a),this.dispatchEvent(new CustomEvent("simple-camera-snap-image",{bubbles:!0,composed:!0,cancelable:!0,detail:{img:a,raw:e}})),i.classList.add("has-snap")}else this.clearPhoto(e)}clearPhoto(e){this.shadowRoot.querySelector("#camera").setAttribute("autoplay","autoplay");const t=this.shadowRoot.querySelector("#selfie");t.innerHTML="",t.classList.remove("has-snap")}}window.customElements.define(a.tag,a);export{a as SimpleCameraSnap};
