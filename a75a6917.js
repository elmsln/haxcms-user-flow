import{s as e,r as t,$ as s}from"./5cf9862e.js";import"./b33d865a.js";import{g as a,h as i,i as c}from"./f1ba93eb.js";import"./6d8d5c07.js";import"./765646de.js";import"./92722af5.js";import"./aa803003.js";import"./5c68dd7f.js";import"./ed3cae70.js";import"./185a8c34.js";import"./cb9a62d4.js";import"./8f4cf15b.js";class r extends e{static get styles(){return[...a,t`:host{display:block}.search-label{display:flex;align-items:center;justify-content:space-between;width:100%}#cancel{flex:0 0 auto}`]}constructor(){super()}render(){return s` <h5 class="search-label"> ${this.label} <hax-tray-button id="cancel" class="${this.searching?"":"visibility-hidden"}" icon="close" label="Cancel Search" event-name="cancel-search"> </hax-tray-button> </h5> <simple-fields id="form" .schema="${this.schema}" .schematizer="${i}" .elementizer="${c}" @value-changed="${this.searchValuesChanged}"></simple-fields> `}searchValuesChanged(e){"string"!=typeof e.detail.value&&this.dispatchEvent(new CustomEvent("search-values-changed",{detail:e.detail.value}))}static get tag(){return"hax-app-search-inputs"}static get properties(){return{schema:{type:Object}}}}window.customElements.define(r.tag,r);export{r as HaxAppSearchInputs};