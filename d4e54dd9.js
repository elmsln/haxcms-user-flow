import{s as e,r as t,$ as s}from"./030fe872.js";import"./389ba782.js";import{g as a,h as i,i as c}from"./3c29fe1d.js";import"./c6bbac32.js";import"./92722af5.js";import"./6233536b.js";import"./5c68dd7f.js";import"./534c56b6.js";import"./20fb55ab.js";import"./bf743f71.js";class r extends e{static get styles(){return[...a,t`:host{display:block}.search-label{display:flex;align-items:center;justify-content:space-between;width:100%}#cancel{flex:0 0 auto}`]}constructor(){super()}render(){return s` <h5 class="search-label"> ${this.label} <hax-tray-button id="cancel" class="${this.searching?"":"visibility-hidden"}" icon="close" label="Cancel Search" event-name="cancel-search"> </hax-tray-button> </h5> <simple-fields id="form" .schema="${this.schema}" .schematizer="${i}" .elementizer="${c}" @value-changed="${this.searchValuesChanged}"></simple-fields> `}searchValuesChanged(e){"string"!=typeof e.detail.value&&this.dispatchEvent(new CustomEvent("search-values-changed",{detail:e.detail.value}))}static get tag(){return"hax-app-search-inputs"}static get properties(){return{schema:{type:Object}}}}window.customElements.define(r.tag,r);export{r as HaxAppSearchInputs};