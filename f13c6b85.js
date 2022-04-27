import{P as e,s as t,r as n,$ as a,M as i,U as o}from"./92303069.js";
/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */window.customElements.define("monaco-element",class extends t{static get styles(){return[n`:host{display:block}iframe{border:none;width:100%;height:100%;padding:0;margin:0;resize:vertical}`]}constructor(){super(),this.iframe=null,this.value="",this.fontSize=16,this.wordWrap=!1,this.tabSize=2,this.readOnly=!1,this.eventTypes={ready:"ready",focus:"focus",blur:"blur",valueChanged:"valueChanged",languageChanged:"languageChanged",themeChanged:"themeChanged"},this.language="javascript",this.theme="vs-dark",this.libPath="node_modules/monaco-editor/min/vs",this.autofocus=!1,this.hideLineNumbers=!1,this.editorReference=this.generateUUID()}render(){return a` <iframe id="iframe" frameborder="0"></iframe>`}static get properties(){return{value:{type:String},fontSize:{type:Number,attribute:"font-size"},wordWrap:{type:Boolean,attribute:"word-wrap"},readOnly:{type:Boolean,attribute:"read-only"},uniqueKey:{type:String,attribute:"unique-key"},eventTypes:{type:Object},language:{type:String},theme:{type:String},libPath:{type:String,attribute:"lib-path"},editorReference:{type:String,reflect:!0,attribute:"editor-reference"},autofocus:{type:Boolean,reflect:!0},hideLineNumbers:{type:Boolean,attribute:"hide-line-numbers"},tabSize:{type:Number,attribute:"tab-size"}}}generateUUID(){return"ss-s-s-s-sss".replace(/s/g,this._uuidPart)}_uuidPart(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}get document(){if(this.iframe&&this.iframe.contentWindow)return this.iframe.contentWindow.document}updated(e){e.forEach(((e,t)=>{"value"==t&&this.monacoValueChanged(this[t]),"language"==t&&this.monacoLanguageChanged(this[t]),"theme"==t&&this.monacoThemeChanged(this[t])}))}firstUpdated(e){super.firstUpdated(e),this.__init||setTimeout((()=>{this.initIFrame()}),500)}connectedCallback(){super.connectedCallback(),this.__init||this.initIFrame(),window.addEventListener("message",(e=>{this.handleMessage(e)}))}disconnectedCallback(){window.removeEventListener("message",(e=>{this.handleMessage(e)})),this.__init=!1,super.disconnectedCallback()}initIFrame(){if(this.iframe=this.shadowRoot.querySelector("#iframe"),this.document&&!this.__init){this.__init=!0;const t=document.createElement("div");t.id="container",this.document.body.appendChild(t);var e=`\n  var eventTypes = {\n    ready: 'ready',\n    focus: 'focus',\n    blur: "blur",\n    valueChanged: 'valueChanged',\n    languageChanged: 'languageChanged',\n    themeChanged: 'themeChanged',\n  };\n\n  class MonacoEditor {\n    constructor(editorReference) {\n      this._editorReference_ = editorReference;\n      this.language = 'javascript';\n      this.value = '';\n      this.editor = null;\n      this.setupEventListener('message', this.handleMessage.bind(this));\n      this.setupEditor();\n    }\n\n    setupEditor() {\n      require.config({ paths: { vs: '${this.libPath}' } });\n      require(['vs/editor/editor.main'], () => {\n        this.editor = monaco.editor.create(document.getElementById('container'), {\n          value: this.value,\n          language: '${this.language}',\n          scrollBeyondLastLine: false,\n          automaticLayout: true,\n          ${this.hideLineNumbers?"lineNumbers: 'false',":""}\n          fontSize: ${this.fontSize},\n          wordWrap: ${this.wordWrap},\n          readOnly: ${this.readOnly},\n          automaticLayout: true,\n          minimap: {\n            enabled: true\n          },\n          tabSize: ${this.tabSize},\n          autoIndent: true,\n        });\n        const model = this.editor.getModel();\n        model.onDidChangeContent(() => {\n          const value = model.getValue();\n          this.onValueChanged(value);\n        });\n        this.ready();\n      });\n    }\n\n    ready() {\n      setTimeout(root => {\n        this.postMessage(eventTypes.ready, null);\n        if(${this.autofocus}) this.editor.focus();\n        this.setupEventListener(\n          eventTypes.valueChanged,\n          this.onValueChanged.bind(this)\n        );\n        this.editor.onDidFocusEditorText(e=>{\n          this.postMessage(eventTypes.focus, null);\n        });\n        this.editor.onDidBlurEditorText(e=>{\n          this.postMessage(eventTypes.blur, null);\n        });\n        this.editor.onDidFocusEditorWidget(e=>{\n          this.postMessage(eventTypes.focus, null);\n        });\n        this.editor.onDidBlurEditorWidget(e=>{\n          this.postMessage(eventTypes.blur, null);\n        });\n      }, 100);\n    }\n\n    _handleMessage(data) {\n      switch (data.event) {\n        case eventTypes.valueChanged:\n          this.onInputValueChanged(data.payload);\n          break;\n        case eventTypes.languageChanged:\n          this.onLanguageChanged(data.payload);\n          break;\n        case eventTypes.themeChanged:\n          this.onThemeChanged(data.payload);\n          break;\n        default:\n          break;\n      }\n    }\n\n    handleMessage(message) {\n      try {\n        const data = JSON.parse(message.data);\n        this._handleMessage(data);\n      } catch (error) {\n        console.warn(error);\n        return;\n      }\n    }\n\n    postMessage(event, payload) {\n      var msg = {\n        event: event,\n        payload: payload,\n        editorReference: this._editorReference_\n      }\n      window.parent.postMessage(msg, window.parent.location.href);\n    }\n\n    setupEventListener(type, callback) {\n      window.addEventListener(type, data => {\n        callback(data);\n      });\n    }\n\n    onInputValueChanged(newValue) {\n      if (newValue !== this.value) {\n        this.value = newValue;\n        this.editor.getModel().setValue(newValue);\n        this.postMessage(eventTypes.valueChanged, newValue);\n      }\n    } \n\n    onValueChanged(newValue) {\n      if (newValue !== this.value) {\n        this.value = newValue;\n        this.postMessage(eventTypes.valueChanged, newValue);\n      }\n    }\n\n    onLanguageChanged(newLang) {\n      monaco.editor.setModelLanguage(this.editor.getModel(), newLang);\n    }\n\n    onThemeChanged(newValue) {\n      monaco.editor.setTheme(newValue);\n    }\n  }\n\n  new MonacoEditor("${this.editorReference}");`;this.insertScriptElement({src:`${this.libPath}/loader.js`,onload:()=>{this.insertScriptElement({text:e}),this.insertStyle()}})}this.autofocus&&this.iframe&&this.iframe.focus()}handleMessage(e){try{let t=e.data;"string"==typeof e.data&&(t=JSON.parse(e.data)),this._handleMessage(t)}catch(e){return void console.warn("[monaco-element] Error while parsing message:",e)}}_handleMessage(e){if(e.editorReference===this.editorReference)if(e.event===this.eventTypes.valueChanged){const t=new CustomEvent("value-changed",{bubbles:!0,cancelable:!0,detail:e.payload});this.dispatchEvent(t)}else e.event===this.eventTypes.ready?this.onIFrameReady():e.event===this.eventTypes.focus?this.onIFrameFocus():e.event===this.eventTypes.blur&&this.onIFrameBlur()}onIFrameFocus(){this.dispatchEvent(new CustomEvent("code-editor-focus",{bubbles:!0,composed:!0,cancelable:!0,detail:!0}))}onIFrameBlur(){this.dispatchEvent(new CustomEvent("code-editor-blur",{bubbles:!0,composed:!0,cancelable:!0,detail:!0}))}onIFrameReady(){this.monacoValueChanged(this.value),this.monacoLanguageChanged(this.language),this.monacoThemeChanged(this.theme),setTimeout((()=>{this.dispatchEvent(new CustomEvent("monaco-element-ready",{bubbles:!0,composed:!0,cancelable:!0,detail:!0}))}),10)}monacoValueChanged(e){this.postMessage(this.eventTypes.valueChanged,e)}monacoLanguageChanged(e){this.postMessage(this.eventTypes.languageChanged,e)}monacoThemeChanged(e){this.postMessage(this.eventTypes.themeChanged,e)}postMessage(e,t){this.iframe&&null!=this.iframe.contentWindow&&this.iframe.contentWindow.postMessage(JSON.stringify({event:e,payload:t}),window.location.href)}insertScriptElement({src:e,text:t,onload:n}){var a=this.document.createElement("script");e&&(a.src=e),t&&(a.text=t),n&&(a.onload=n),this.document.head.appendChild(a)}insertStyle(){var e="\n    body {\n      height: 100vh;\n      overflow: hidden;\n      margin: 0;\n    }    \n    #container {\n      width: 100%;\n      height: 100%;\n    }\n    .debug-red {\n      background : red;\n    }\n    .debug-green {\n      background : green;\n    }\n    html,body {\n      margin : 0px;\n    }";const t=this.document.head,n=this.document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=e:n.appendChild(this.document.createTextNode(e)),t.appendChild(n)}}),window.MonacoData=window.MonacoData||{},
/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
Element.prototype.replaceWith||(Element.prototype.replaceWith=i),CharacterData.prototype.replaceWith||(CharacterData.prototype.replaceWith=i),DocumentType.prototype.replaceWith||(DocumentType.prototype.replaceWith=i);class s extends(function(t){return class extends t{constructor(){super(),this.schemaResourceID="",this.schemaMap={prefix:{oer:"http://oerschema.org/",schema:"http://schema.org/",dc:"http://purl.org/dc/terms/",foaf:"http://xmlns.com/foaf/0.1/",cc:"http://creativecommons.org/ns#",bib:"http://bib.schema.org"}}}static get properties(){return{...super.properties,schemaMap:{type:Object,readOnly:!0,observer:"_schemaMapChanged"}}}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{"schemaMap"==t&&this._schemaMapChanged(this[t],e)}))}_schemaMapChanged(t,n){if(void 0!==t){this.schemaResourceID=this.getAttribute("resource"),""!=this.schemaResourceID&&null!=this.schemaResourceID&&"null"!=this.schemaResourceID||(this.schemaResourceID=e(),this.setAttribute("resource",this.schemaResourceID));let n=t.prefix,i="";for(var a in n)n.hasOwnProperty(a)&&(i+=a+":"+n[a]+" ");""!=i&&this.setAttribute("prefix",i)}}}}(t)){static get styles(){return[n`:host{display:flex;flex-direction:column;font-family:unset;align-items:stretch;margin:var(--code-pen-margin,16px 0);width:calc(100% - 2px);background-color:#1e1e1e;color:#c6c6c6;border:var(--code-editor-code-border);border-radius:var(--code-editor-code-border-radius);border:1px solid var(--code-editor-label-color,#ddd)}:host([theme-colors=vs-dark]){background-color:#1e1e1e;color:#c6c6c6;border:1px solid var(--code-editor-label-color,#000)}:host([theme-colors=vs]){background-color:#fffffe;color:#000;border:1px solid var(--code-editor-label-color,#ddd)}:host([hidden]){display:none!important}.code-pen-container:not([hidden]){width:calc(100% - 2 * var(--code-editor-margin,12px));display:flex;height:40px;justify-content:flex-end;align-items:center;margin:var(--code-editor-margin,12px)}.code-pen-container span{display:inline-flex;line-height:16px;font-size:16px;padding:12px 0}code-pen-button{float:right;height:40px;flex:0 0 40px}:host([theme-colors=vs]) code-pen-button::part(button){filter:invert(1)}label{color:var(--code-editor-label-color,#444);transition:all .5s;flex:0 0 auto;margin:var(--code-editor-margin,12px)}:host([theme-colors=vs]) label{color:var(--code-editor-label-color,#444)}:host([theme-colors=vs-dark]) label{color:var(--code-editor-label-color,#bbb)}:host([hidden]){display:none!important}:host([focused]) label{color:var(--code-editor-float-label-active-color,var(--code-editor-label-color,currentColor))}#loading{padding:0 74px;flex:1 1 auto;overflow:hidden;white-space:pre-wrap;text-overflow:ellipsis;font-family:monospace}#codeeditor{flex:1 1 auto;height:100%}#codeeditor[data-hidden]{height:0}:host([focused]) #codeeditor{border:var(--code-editor-focus-code-border)}`]}constructor(){super(),this.haxUIElement=!0,this.showCodePen=!1,this.readOnly=!1,this.theme="vs-dark",this.language="javascript",this.fontSize=16,this.wordWrap=!1,this.tabSize=2,this.autofocus=!1,this.hideLineNumbers=!1,this.focused=!1,window.WCGlobalBasePath?this.libPath=window.WCGlobalBasePath:this.libPath=new URL("./../../",import.meta.url).href,this.libPath+="monaco-editor/min/vs",setTimeout((()=>{this.addEventListener("monaco-element-ready",this.editorReady.bind(this))}),0)}render(){return a` <label for="codeeditor" ?hidden="${!this.title}" part="label">${this.title}</label> <monaco-element id="codeeditor" ?data-hidden="${!this.ready}" ?autofocus="${this.autofocus}" ?hide-line-numbers="${this.hideLineNumbers}" lib-path="${this.libPath}" language="${this.language}" tab-size="${this.tabSize}" theme="${this.getTheme(this.theme)}" @value-changed="${this._editorDataChanged}" font-size="${this.fontSize}" ?word-wrap="${this.wordWrap}" ?read-only="${this.readOnly}" @code-editor-focus="${this._handleFocus}" @code-editor-blur="${this._handleBlur}" @monaco-element-ready="${e=>this.ready=!0}" part="code"> </monaco-element> <pre id="loading" ?hidden="${this.ready}" style="font-size:${this.fontSize}px" part="preview"><code>
  ${this.placeholder}</code></pre> <slot hidden></slot> ${this.showCodePen?a`<div class="code-pen-container" part="code-pen"> <span>Check it out on code pen: </span><code-pen-button .data="${this.codePenData}"></code-pen-button> </div>`:""} `}getTheme(e){let t=window.matchMedia&&"auto"==e,n=t&&window.matchMedia("(prefers-color-scheme: dark)").matches,a=t&&window.matchMedia("(prefers-color-scheme: light)").matches,i=n?"vs-dark":a?"vs":e&&"auto"!=e?e:"vs-dark";return this.setAttribute("theme-colors",i),i}get placeholder(){return`${this.editorValue||this.innerHTML}`.replace(/\s*<\/?template.*>\s*/gm,"")}static get tag(){return"code-editor"}static get properties(){return{...super.properties,libPath:{type:String},title:{type:String},showCodePen:{type:Boolean,reflect:!0,attribute:"show-code-pen"},readOnly:{type:Boolean,reflect:!0,attribute:"read-only"},codePenData:{type:Object,attribute:"code-pen-data"},editorValue:{type:String,attribute:"editor-value"},value:{type:String},theme:{type:String,reflect:!0,attribute:"theme"},mode:{type:String},language:{type:String},fontSize:{type:Number,attribute:"font-size"},wordWrap:{type:Boolean,attribute:"word-wrap"},autofocus:{type:Boolean,reflect:!0},hideLineNumbers:{type:Boolean,attribute:"hide-line-numbers"},focused:{type:Boolean,reflect:!0},tabSize:{type:Number,attribute:"tab-size"},ready:{type:Boolean}}}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{"editorValue"==t&&this._editorValueChanged(this[t]),"mode"==t&&this._modeChanged(this[t],e),"showCodePen"===t&&(this.dispatchEvent(new CustomEvent("show-code-pen-changed",{detail:{value:this[t]}})),this[t]&&!window.customElements.get("code-pen-button")&&import("./27311786.js")),"value"===t&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this[t]}})),"focused"===t&&this.dispatchEvent(new CustomEvent("focused-changed",{detail:{focused:this[t]}})),["title","value"].includes(t)&&(this.codePenData=this._computeCodePenData(this.title,this.value))}))}_computeCodePenData(e,t){return{title:e,html:t,head:'<script>window.WCGlobalCDNPath="https://cdn.webcomponents.psu.edu/cdn/";<\/script><script src="https://cdn.webcomponents.psu.edu/cdn/build.js"><\/script>'}}_handleFocus(e){this.focused=!0}_handleBlur(e){this.focused=!1}_modeChanged(e){this.language=this.mode}_editorDataChanged(e){this.value=e.detail}updateEditorValue(){var e="",t=this.children;if(this.childNodes[0]&&"TEMPLATE"!==this.childNodes[0].tagName){if((t=this.childNodes).length>0)for(var n=0,a=t.length;n<a;n++)t[n].tagName?e+=t[n].outerHTML:e+=t[n].textContent}else t[0]&&(e=t[0].innerHTML);e&&("html"===this.language&&(e=o(e)),this.shadowRoot.querySelector("#codeeditor").value=e.trim())}_editorValueChanged(e){e&&(this.innerHTML="",this.innerHTML=`<template>${e}</template>`,this.updateEditorValue())}haxHooks(){return{preProcessNodeToContent:"haxpreProcessNodeToContent",activeElementChanged:"haxactiveElementChanged"}}haxactiveElementChanged(e,t){if(!t){let t=this.getValueAsNode(e);e&&e.replaceWith(t),e=t}return e}haxpreProcessNodeToContent(e){return e.editorValue=null,e.codePenData=null,e.value=null,e.removeAttribute("value"),e.removeAttribute("code-pen-data"),e}getValueAsNode(e=null){return null==e&&(e=document.createElement("p")),this.value&&(e.innerHTML=o(this.value)),e.firstElementChild&&1===e.children.length&&e.firstElementChild.tagName===e.tagName?e.firstElementChild:e}connectedCallback(){super.connectedCallback(),this._observer=new MutationObserver((e=>{this.updateEditorValue()}))}disconnectedCallback(){this._observer&&(this._observer.disconnect(),this._observer=null),super.disconnectedCallback()}editorReady(e){this.editorValue?this.shadowRoot.querySelector("#codeeditor").value=this.editorValue:this.updateEditorValue(),this._observer&&this._observer.observe(this,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}}window.customElements.define(s.tag,s);export{s as CodeEditor};
