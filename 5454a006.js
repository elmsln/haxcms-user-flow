import{s as e,r as t,$ as i}from"./432ac660.js";import{d as a,H as s,t as o}from"./ac712e78.js";import"./e485da0e.js";import"./5d7cbd53.js";import"./9a8d07a0.js";import"./5c68dd7f.js";import"./bee6703b.js";class r extends e{static get styles(){return[t`:host{display:block}hexagon-loader{display:none;margin:0 auto;z-index:1000;--hexagon-color:var(--hax-tray-accent-color)}hexagon-loader[loading]{display:block;opacity:.8}.card-content{padding:0}.card-content p{padding:0;margin:0}#itemlist{min-height:172px;text-align:center;align-items:center}hax-app-search-inputs{min-height:80px;padding:0}hax-app-pagination{min-height:32px;font-size:var(--hax-ui-font-size-sm);display:none;justify-content:flex-end;justify-content:center}.tos-text{font-size:var(--hax-ui-font-size-sm)}.tos-text ul{padding:0;margin:0}.tos-text a{font-size:var(--hax-ui-font-size-sm);color:var(--hax-tray-accent-color);text-decoration:underline}.tos-text a:active,.tos-text a:focus,.tos-text a:hover{outline:2px solid var(--hax-tray-accent-color)}`]}constructor(){super(),this.auto=!1,this.headers={},this.method="GET",this.loading=!1,this.requestData={},this.media=[],this.tos=[],this.resultMap={},import("./e485da0e.js").then((function(e){return e.g})),import("./e485da0e.js").then((function(e){return e.s})),import("./26574143.js"),import("./f2db4772.js"),import("./fa99a0f5.js"),import("./ac712e78.js").then((function(e){return e.j})),import("./ac712e78.js").then((function(e){return e.s})),a((()=>{this.activeApp=o(s.activeApp)}))}render(){return i` ${this.tos.length>0?i` <div class="tos-text">Terms of service:</div> <ul class="tos-text"> ${this.tos.map((e=>i` <li> <a href="${e.link}" target="_blank" rel="noopener nofollow noreferrer">${e.title}</a> </li> `))} </ul> `:""} <hax-app-search-inputs id="searchinput" .label="${this.label}" .schema="${this.searchSchema}" @search-values-changed="${this._searchValuesChanged}"></hax-app-search-inputs> <hax-app-pagination id="pagerbottom" .request-data="${this.requestData}" .pagination="${this.pagination}"></hax-app-pagination> <hexagon-loader size="medium" item-count="4" ?loading="${this.loading}" aria-roledescription="Loading"></hexagon-loader> <simple-button-grid class="${this.searching?"collapse-hide":""}" always-expanded columns="2"> ${this.media.map((e=>i` <hax-app-search-result image="${e.image}" title="${e.title}" details="${e.details}" .map="${e.map}" type="${e.type}"></hax-app-search-result> `))} </simple-button-grid> `}async loadAppData(){this.loading=!0;let e=this.requestUrl(this.requestEndPoint,this.requestParams);await fetch(e,{headers:this.headers,method:this.method}).then((e=>{if(e.ok)return e.json()})).then((e=>{this._requestDataChanged(e)}))}updated(e){e.forEach(((e,t)=>{["auto","method","headers","requestEndPoint","requestParams"].includes(t)&&(clearTimeout(this.__debounce),this.__debounce=setTimeout((()=>{this.requestEndPoint&&this.loadAppData()}),100)),"activeApp"==t&&(this.requestParams={},this.searchSchema={},setTimeout((()=>{this.searchSchema={properties:{}},this._resetAppSearch(this.activeApp)}),10))}))}requestUrl(e="",t={}){var i="";if(null!=s.connectionRewrites.appendUploadEndPoint&&t.__HAXAPPENDUPLOADENDPOINT__&&(i=s.connectionRewrites.appendUploadEndPoint+"&"),null!=s.connectionRewrites.appendJwt&&t.__HAXJWT__&&(t[s.connectionRewrites.appendJwt]=function(e){try{return localStorage.getItem(e)}catch(e){return!1}}(s.connectionRewrites.appendJwt)),i+=this.queryStringData(t)){var a=e.indexOf("?")>=0?"&":"?";return e+a+i}return e}queryStringData(e){var t,i,a=[];for(t in e)if(i=e[t],"__HAXJWT__"==t||"__HAXAPPENDUPLOADENDPOINT__"==t);else if(Array.isArray(i))for(var s=0;s<i.length;s++)a.push(t+"="+window.encodeURIComponent(i[s]));else null!==i?a.push(t+"="+window.encodeURIComponent(i)):a.push(t);return a.join("&")}static get tag(){return"hax-app-search"}static get properties(){return{activeApp:{type:Object},tos:{type:Array},auto:{type:Boolean},searchSchema:{type:Object},headers:{type:Object},method:{type:String},loading:{type:Boolean},requestData:{type:Object},media:{type:Array},requestEndPoint:{type:String},requestParams:{type:Object},resultMap:{type:Object}}}_searchValuesChanged(e){let t=this.requestParams;for(let i in e.detail)""!=e.detail[i]&&(t[i]=e.detail[i]);this.requestParams={...this.requestParams}}_resetAppSearch(e){if(e&&e.details){let s=e;var t={};this.label=s.details.title,s.details.tos&&s.details.tos.length>0?this.tos=[...s.details.tos]:this.tos=[],this.label=s.details.title,this.auto=!1,this.media=[],void 0!==s.connection.data&&(t=s.connection.data),void 0!==s.connection.operations.browse.data&&(t=Object.assign(t,s.connection.operations.browse.data)),this.method=s.connection.operations.browse.method,this.headers={},void 0!==s.connection.headers&&(this.headers=s.connection.headers),this.requestParams={...t};var i=s.connection.protocol+"://"+s.connection.url;"/"!=i.substr(i.length-1)&&(i+="/"),void 0!==s.connection.operations.browse.endPoint&&(i+=s.connection.operations.browse.endPoint),this.requestEndPoint=i;var a={properties:{}};void 0!==s.connection.operations.browse.search&&(a.properties=s.connection.operations.browse.search,this.searchSchema={...a}),this.resultMap=s.connection.operations.browse.resultMap,this.pagination={},void 0!==s.connection.operations.browse.pagination&&(this.pagination=s.connection.operations.browse.pagination),void 0!==s.connection.auto?this.auto=s.connection.auto:this.auto=!0}}_requestDataChanged(e){if(this.resultMap&&typeof e!={}){let a=[],o=this.resultMap,r=[];if(this.resultMap.items?void 0!==this._resolveObjectPath(o.items,e)?r=this._resolveObjectPath(o.items,e):null!=e&&(r=e):r=e,null!=r){for(var t=0;t<r.length;t++){if(a[t]={title:this._resolveObjectPath(o.preview.title,r[t]),details:this._resolveObjectPath(o.preview.details,r[t]),type:o.defaultGizmoType,map:{}},void 0!==a[t].details&&null!=a[t].details&&(a[t].details=a[t].details.replace(/(<([^>]+)>)/gi,"")),o.preview.id.constructor===Object){let e=this._resolveObjectPath(o.preview.id.property,r[t]);"split"===o.preview.id.op&&(e=e.split(o.preview.id.delimiter),a[t].id=e[o.preview.id.position])}else a[t].id=this._resolveObjectPath(o.preview.id,r[t]);for(var i in void 0!==o.preview.image?a[t].image=this._resolveObjectPath(o.preview.image,r[t]):void 0!==o.image?a[t].image=o.image:a[t].image="",o.gizmo)if("_url_source"===i){let e="";e=void 0!==a[t].map.__id?a[t].map.__id:this._resolveObjectPath(o.gizmo.id,r[t]),a[t].map.source=o.gizmo._url_source.replace("<%= id %>",e),a[t].map.url=a[t].map.source}else if(o.gizmo[i].constructor===Object){let e=this._resolveObjectPath(o.gizmo[i].property,r[t]);"split"===o.gizmo[i].op&&(e=e.split(o.gizmo[i].delimiter),a[t].map[i]=e[o.gizmo[i].position],"id"===i&&(a[t].map.__id=a[t].map[i]))}else a[t].map[i]=this._resolveObjectPath(o.gizmo[i],r[t]);void 0===a[t].map.url&&void 0!==a[t].map.source&&(a[t].map.url=a[t].map.source),void 0!==o.gizmo.type?a[t].type=this._resolveObjectPath(o.gizmo.type,r[t]):void 0!==o.gizmo.mimetype?a[t].type=s.mimeTypeToGizmoType(this._resolveObjectPath(o.gizmo.mimetype,r[t])):"*"!=s.guessGizmoType(o.gizmo)&&(a[t].type=s.guessGizmoType(o.gizmo))}this.media=[...a]}}this.loading=!1}_resolveObjectPath(e,t){return e.split(".").reduce((function(e,t){return e?e[t]:null}),t||self)}}window.customElements.define(r.tag,r);export{r as HaxAppSearch};
