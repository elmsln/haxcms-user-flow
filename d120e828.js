import{s as t,r as e,$ as i}from"./437a4af0.js";class a extends t{static get styles(){return[e`:host{display:block}`]}render(){return i` <form action="${this.endPoint}" method="POST" target="_blank"> <input type="hidden" name="data" value="${this.dataString}"> <input type="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-1/cp-arrow-right.svg" width="40" height="40" value="Open code pen in a new window" class="codepen-mover-button" part="button"> </form> `}static get tag(){return"code-pen-button"}firstUpdated(){this.setAttribute("title",this.checkItOut)}constructor(){super(),this.checkItOut="Check it out on codepen",this.endPoint="https://codepen.io/pen/define",this.data={}}updated(t){t.forEach(((t,e)=>{"data"==e&&this[e]&&(this.dataString=this._getDataString(this[e]))}))}static get properties(){return{checkItOut:{type:String,attribute:"check-it-out"},endPoint:{type:String,attribute:"end-point"},dataString:{type:String,attribute:"data-string"},data:{type:Object}}}_getDataString(t){return JSON.stringify(t).replace(/"/g,"&quot;").replace(/'/g,"&apos;")}}window.customElements.define(a.tag,a);export{a as CodePenButton};
