import{s as e,r as t,$ as a}from"./2ae1595f.js";import"./3c262d28.js";import{g as s,h as i,i as c}from"./a5c3ac8c.js";import"./745aa4ed.js";import"./92722af5.js";import"./ad3c8620.js";import"./5c68dd7f.js";import"./cf769d61.js";import"./e45430bf.js";import"./120aa880.js";class r extends e{static get styles(){return[...s,t`:host{display:block}.search-label{display:flex;align-items:center;justify-content:space-between;width:100%}#cancel{flex:0 0 auto}`]}constructor(){super()}render(){return a` <h5 class="search-label"> ${this.label} <hax-tray-button id="cancel" class="${this.searching?"":"visibility-hidden"}" icon="close" label="Cancel Search" event-name="cancel-search"> </hax-tray-button> </h5> <simple-fields id="form" .schema="${this.schema}" .schematizer="${i}" .elementizer="${c}" @value-changed="${this.searchValuesChanged}"></simple-fields> `}searchValuesChanged(e){"string"!=typeof e.detail.value&&this.dispatchEvent(new CustomEvent("search-values-changed",{detail:e.detail.value}))}static get tag(){return"hax-app-search-inputs"}static get properties(){return{schema:{type:Object}}}}window.customElements.define(r.tag,r);export{r as HaxAppSearchInputs};