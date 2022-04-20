import{s as e,a as t,r as i,$ as s}from"./c6fb384b.js";class a extends e{static get tag(){return"app-hax-search-bar"}constructor(){super(),this.searchTerm="",this.disabled=!1,this.showSearch=!1}static get properties(){return{searchTerm:{type:String},showSearch:{type:Boolean,reflect:!0,attribute:"show-search"},disabled:{type:Boolean,reflect:!0}}}updated(e){e.forEach(((e,i)=>{"searchItems"===i?this.displayItems=[...this.searchItems]:"searchTerm"===i?t.searchTerm=this.searchTerm:"showSearch"===i&&void 0!==e&&(this[i]?window.history.pushState({},null,"search"):window.history.pushState(null,null,t.location.baseUrl),!1===this[i]&&(this.searchTerm=""))}))}static get styles(){return[i`:host{overflow:hidden}input{visibility:none;opacity:0;width:0;transition:all ease-in-out .3s;padding:4px;font-family:'Press Start 2P',sans-serif;font-size:20px;margin:2px 0 0 16px}:host([show-search]) input{visibility:visible;opacity:1;width:250px;max-width:25vw}@media (max-width:780px){:host([show-search]) input{width:250px;max-width:20vw}}@media (max-width:600px){:host([show-search]) input{width:200px;max-width:20vw}}simple-icon-button-lite{color:#000;--simple-icon-width:40px;--simple-icon-height:40px;padding:2px;margin:0;background-color:#fff}simple-icon-button-lite[disabled]{background-color:#ccc;pointer-events:none;cursor:help}simple-icon-button-lite:focus,simple-icon-button-lite:hover{background-color:#eee}`]}search(){t.appEl.playSound("click"),this.searchTerm=this.shadowRoot.querySelector("#searchField").value}render(){return s` <simple-icon-button-lite ?disabled="${this.disabled}" label="Search" icon="icons:search" @click="${this.toggleSearch}"></simple-icon-button-lite> <input ?disabled="${!this.showSearch}" id="searchField" @input="${this.search}" type="text" placeholder="Search.."> `}toggleSearch(){this.disabled||(t.appEl.playSound("click"),this.showSearch=!this.showSearch,setTimeout((()=>{this.shadowRoot.querySelector("#searchField").focus()}),300))}}customElements.define(a.tag,a);export{a as AppHaxSearchBar};
