import{s as t,$ as e}from"./38e3f26b.js";class s extends t{static get tag(){return"random-word"}constructor(){super(),this.key=null,this.phrases={},this.word=null}static get properties(){return{key:{type:String},phrases:{type:Object},word:{type:String}}}updated(t){t.forEach(((t,e)=>{["key","phrases"].includes(e)&&this.getNewWord(),"word"===e&&this[e]&&(this.innerHTML="",this.innerHTML=this.word,this.dispatchEvent(new CustomEvent("word-changed",{detail:this.word})))}))}getNewWord(){this.phrases&&this.key&&this.phrases[this.key]&&(this.word=this.phrases[this.key][Math.floor(Math.random()*this.phrases[this.key].length)])}render(){return e`<slot></slot>`}}customElements.define(s.tag,s);export{s as RandomWord};
