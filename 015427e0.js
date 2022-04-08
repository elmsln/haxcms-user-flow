import{s as e,b as t,r as s,$ as i}from"./38e3f26b.js";import"./a0655968.js";import"./7468af7d.js";import"./92722af5.js";import"./815f35f6.js";class r extends e{static get tag(){return"app-hax-search-bar"}constructor(){super(),this.searchTerm="",this.showSearch=!1}static get properties(){return{searchTerm:{type:String},showSearch:{type:Boolean,reflect:!0,attribute:"show-search"}}}updated(e){e.forEach(((e,s)=>{"searchItems"===s?this.displayItems=[...this.searchItems]:"searchTerm"===s?t.searchTerm=this.searchTerm:"showSearch"===s&&void 0!==e&&(this[s]?window.history.pushState({},null,"search"):history.back())}))}static get styles(){return[s`:host{overflow:hidden}input{visibility:none;opacity:0;width:0;transition:all ease-in-out .3s;padding:4px;font-family:'Press Start 2P',sans-serif;font-size:20px;margin:2px 0 0 16px}:host([show-search]) input{visibility:visible;opacity:1;width:250px;max-width:25vw}simple-icon-button-lite{color:#000;--simple-icon-width:40px;--simple-icon-height:40px;padding:2px;margin:0;background-color:#fff}simple-icon-button-lite:focus,simple-icon-button-lite:hover{background-color:#eee}`]}search(e){this.searchTerm=this.shadowRoot.querySelector("#searchField").value}render(){return i` <simple-icon-button-lite label="Search" icon="icons:search" @click="${this.toggleSearch}"></simple-icon-button-lite> <input ?disabled="${!this.showSearch}" id="searchField" @input="${this.search}" type="text" placeholder="Search.."> `}toggleSearch(){this.showSearch=!this.showSearch,setTimeout((()=>{this.shadowRoot.querySelector("#searchField").focus()}),300)}}customElements.define(r.tag,r);export{r as AppHaxSearchBar};
