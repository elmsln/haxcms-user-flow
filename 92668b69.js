import{s as e,r as t,$ as s}from"./6cf7fdd1.js";import"./521ea089.js";import{g as a,h as i,i as c}from"./8f976951.js";import"./ef4e55aa.js";import"./92722af5.js";import"./f960972e.js";import"./5c68dd7f.js";import"./db303aa9.js";import"./3cf00702.js";import"./89cc34ce.js";class r extends e{static get styles(){return[...a,t`:host{display:block}.search-label{display:flex;align-items:center;justify-content:space-between;width:100%}#cancel{flex:0 0 auto}`]}constructor(){super()}render(){return s` <h5 class="search-label"> ${this.label} <hax-tray-button id="cancel" class="${this.searching?"":"visibility-hidden"}" icon="close" label="Cancel Search" event-name="cancel-search"> </hax-tray-button> </h5> <simple-fields id="form" .schema="${this.schema}" .schematizer="${i}" .elementizer="${c}" @value-changed="${this.searchValuesChanged}"></simple-fields> `}searchValuesChanged(e){"string"!=typeof e.detail.value&&this.dispatchEvent(new CustomEvent("search-values-changed",{detail:e.detail.value}))}static get tag(){return"hax-app-search-inputs"}static get properties(){return{schema:{type:Object}}}}window.customElements.define(r.tag,r);export{r as HaxAppSearchInputs};