import{s as a,r as l,$ as e}from"./030fe872.js";import{S as t,R as u}from"./ddb24a65.js";import"./3c29fe1d.js";import"./92722af5.js";import"./389ba782.js";import"./c6bbac32.js";import"./6233536b.js";import"./5c68dd7f.js";import"./534c56b6.js";import"./20fb55ab.js";import"./bf743f71.js";import"./fd1a57d4.js";
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */class v extends(t(a)){static get styles(){return[...super.styles,l`simple-picker-option{justify-content:space-around}#icon{margin-left:calc(-.125 * var(--simple-picker-icon-size,16px))}`]}static get properties(){return{...super.properties,symbolTypes:{name:"symbolTypes",type:Array,attribute:"symbol-types"}}}static get tag(){return"simple-symbol-picker"}constructor(){super(),this.icon="editor:functions",this.label="Symbol",this.symbolTypes=["symbols","math","characters","greek","misc"],this.titleAsHtml=!0}firstUpdated(a){super.firstUpdated&&super.firstUpdated(a);let l=[{alt:null,icon:this.icon,value:null}];this.symbolTypes.forEach((a=>window.SimplePickerSymbols[a].forEach((a=>l.push(a))))),l=this._setPickerOptions(l),this.options=l}_setPickerOptions(a=this.options||[]){let l=[],e=Math.sqrt(a.length)<11?Math.ceil(Math.sqrt(a.length)):10;return a.forEach(((a,t)=>{let u=Math.floor(t/e),v=t-u*e;l[u]||(l[u]=[]),l[u][v]=a})),l}_setSelectedOption(){this.options.length>1&&super._setSelectedOption()}}window.SimplePickerSymbols=window.SimplePickerSymbols||{symbols:[{value:"&iexcl;",alt:"&iexcl;"},{value:"&cent;",alt:"&cent;"},{value:"&pound;",alt:"&pound;"},{value:"&curren;",alt:"&curren;"},{value:"&yen;",alt:"&yen;"},{value:"&brvbar;",alt:"&brvbar;"},{value:"&sect;",alt:"&sect;"},{value:"&uml;",alt:"&uml;"},{value:"&copy;",alt:"&copy;"},{value:"&ordf;",alt:"&ordf;"},{value:"&laquo;",alt:"&laquo;"},{value:"&not;",alt:"&not;"},{value:"&shy;",alt:"&shy;"},{value:"&reg;",alt:"&reg;"},{value:"&macr;",alt:"&macr;"},{value:"&deg;",alt:"&deg;"},{value:"&plusmn;",alt:"&plusmn;"},{value:"&sup2;",alt:"&sup2;"},{value:"&sup3;",alt:"&sup3;"},{value:"&acute;",alt:"&acute;"},{value:"&micro;",alt:"&micro;"},{value:"&para;",alt:"&para;"},{value:"&cedil;",alt:"&cedil;"},{value:"&sup1;",alt:"&sup1;"},{value:"&ordm;",alt:"&ordm;"},{value:"&raquo;",alt:"&raquo;"},{value:"&frac14;",alt:"&frac14;"},{value:"&frac12;",alt:"&frac12;"},{value:"&frac34;",alt:"&frac34;"},{value:"&iquest;",alt:"&iquest;"},{value:"&times;",alt:"&times;"},{value:"&divide;",alt:"&divide;"}],math:[{value:"&forall;",alt:"&forall;"},{value:"&part;",alt:"&part;"},{value:"&exist;",alt:"&exist;"},{value:"&empty;",alt:"&empty;"},{value:"&nabla;",alt:"&nabla;"},{value:"&isin;",alt:"&isin;"},{value:"&notin;",alt:"&notin;"},{value:"&ni;",alt:"&ni;"},{value:"&prod;",alt:"&prod;"},{value:"&sum;",alt:"&sum;"},{value:"&minus;",alt:"&minus;"},{value:"&lowast;",alt:"&lowast;"},{value:"&radic;",alt:"&radic;"},{value:"&prop;",alt:"&prop;"},{value:"&infin;",alt:"&infin;"},{value:"&ang;",alt:"&ang;"},{value:"&and;",alt:"&and;"},{value:"&or;",alt:"&or;"},{value:"&cap;",alt:"&cap;"},{value:"&cup;",alt:"&cup;"},{value:"&int;",alt:"&int;"},{value:"&there4;",alt:"&there4;"},{value:"&sim;",alt:"&sim;"},{value:"&cong;",alt:"&cong;"},{value:"&asymp;",alt:"&asymp;"},{value:"&ne;",alt:"&ne;"},{value:"&equiv;",alt:"&equiv;"},{value:"&le;",alt:"&le;"},{value:"&ge;",alt:"&ge;"},{value:"&sub;",alt:"&sub;"},{value:"&sup;",alt:"&sup;"},{value:"&nsub;",alt:"&nsub;"},{value:"&sube;",alt:"&sube;"},{value:"&supe;",alt:"&supe;"},{value:"&oplus;",alt:"&oplus;"},{value:"&otimes;",alt:"&otimes;"},{value:"&perp;",alt:"&perp;"},{value:"&sdot;",alt:"&sdot;"}],characters:[{value:"&Agrave;",alt:"&Agrave;"},{value:"&Aacute;",alt:"&Aacute;"},{value:"&Acirc;",alt:"&Acirc;"},{value:"&Atilde;",alt:"&Atilde;"},{value:"&Auml;",alt:"&Auml;"},{value:"&Aring;",alt:"&Aring;"},{value:"&AElig;",alt:"&AElig;"},{value:"&Ccedil;",alt:"&Ccedil;"},{value:"&Egrave;",alt:"&Egrave;"},{value:"&Eacute;",alt:"&Eacute;"},{value:"&Ecirc;",alt:"&Ecirc;"},{value:"&Euml;",alt:"&Euml;"},{value:"&Igrave;",alt:"&Igrave;"},{value:"&Iacute;",alt:"&Iacute;"},{value:"&Icirc;",alt:"&Icirc;"},{value:"&Iuml;",alt:"&Iuml;"},{value:"&ETH;",alt:"&ETH;"},{value:"&Ntilde;",alt:"&Ntilde;"},{value:"&Ograve;",alt:"&Ograve;"},{value:"&Oacute;",alt:"&Oacute;"},{value:"&Ocirc;",alt:"&Ocirc;"},{value:"&Otilde;",alt:"&Otilde;"},{value:"&Ouml;",alt:"&Ouml;"},{value:"&Oslash;",alt:"&Oslash;"},{value:"&Ugrave;",alt:"&Ugrave;"},{value:"&Uacute;",alt:"&Uacute;"},{value:"&Ucirc;",alt:"&Ucirc;"},{value:"&Uuml;",alt:"&Uuml;"},{value:"&Yacute;",alt:"&Yacute;"},{value:"&THORN;",alt:"&THORN;"},{value:"&szlig;",alt:"&szlig;"},{value:"&agrave;",alt:"&agrave;"},{value:"&aacute;",alt:"&aacute;"},{value:"&acirc;",alt:"&acirc;"},{value:"&atilde;",alt:"&atilde;"},{value:"&auml;",alt:"&auml;"},{value:"&aring;",alt:"&aring;"},{value:"&aelig;",alt:"&aelig;"},{value:"&ccedil;",alt:"&ccedil;"},{value:"&egrave;",alt:"&egrave;"},{value:"&eacute;",alt:"&eacute;"},{value:"&ecirc;",alt:"&ecirc;"},{value:"&euml;",alt:"&euml;"},{value:"&igrave;",alt:"&igrave;"},{value:"&iacute;",alt:"&iacute;"},{value:"&icirc;",alt:"&icirc;"},{value:"&iuml;",alt:"&iuml;"},{value:"&eth;",alt:"&eth;"},{value:"&ntilde;",alt:"&ntilde;"},{value:"&ograve;",alt:"&ograve;"},{value:"&oacute;",alt:"&oacute;"},{value:"&ocirc;",alt:"&ocirc;"},{value:"&otilde;",alt:"&otilde;"},{value:"&ouml;",alt:"&ouml;"},{value:"&oslash;",alt:"&oslash;"},{value:"&ugrave;",alt:"&ugrave;"},{value:"&uacute;",alt:"&uacute;"},{value:"&ucirc;",alt:"&ucirc;"},{value:"&uuml;",alt:"&uuml;"},{value:"&yacute;",alt:"&yacute;"},{value:"&thorn;",alt:"&thorn;"},{value:"&yuml;",alt:"&yuml;"}],greek:[{value:"&Alpha;",alt:"&Alpha;"},{value:"&Beta;",alt:"&Beta;"},{value:"&Gamma;",alt:"&Gamma;"},{value:"&Delta;",alt:"&Delta;"},{value:"&Epsilon;",alt:"&Epsilon;"},{value:"&Zeta;",alt:"&Zeta;"},{value:"&Eta;",alt:"&Eta;"},{value:"&Theta;",alt:"&Theta;"},{value:"&Iota;",alt:"&Iota;"},{value:"&Kappa;",alt:"&Kappa;"},{value:"&Lambda;",alt:"&Lambda;"},{value:"&Mu;",alt:"&Mu;"},{value:"&Nu;",alt:"&Nu;"},{value:"&Xi;",alt:"&Xi;"},{value:"&Omicron;",alt:"&Omicron;"},{value:"&Pi;",alt:"&Pi;"},{value:"&Rho;",alt:"&Rho;"},{value:"&Sigma;",alt:"&Sigma;"},{value:"&Tau;",alt:"&Tau;"},{value:"&Upsilon;",alt:"&Upsilon;"},{value:"&Phi;",alt:"&Phi;"},{value:"&Chi;",alt:"&Chi;"},{value:"&Psi;",alt:"&Psi;"},{value:"&Omega;",alt:"&Omega;"},{value:"&alpha;",alt:"&alpha;"},{value:"&beta;",alt:"&beta;"},{value:"&gamma;",alt:"&gamma;"},{value:"&delta;",alt:"&delta;"},{value:"&epsilon;",alt:"&epsilon;"},{value:"&zeta;",alt:"&zeta;"},{value:"&eta;",alt:"&eta;"},{value:"&theta;",alt:"&theta;"},{value:"&iota;",alt:"&iota;"},{value:"&kappa;",alt:"&kappa;"},{value:"&lambda;",alt:"&lambda;"},{value:"&mu;",alt:"&mu;"},{value:"&nu;",alt:"&nu;"},{value:"&xi;",alt:"&xi;"},{value:"&omicron;",alt:"&omicron;"},{value:"&pi;",alt:"&pi;"},{value:"&rho;",alt:"&rho;"},{value:"&sigmaf;",alt:"&sigmaf;"},{value:"&sigma;",alt:"&sigma;"},{value:"&tau;",alt:"&tau;"},{value:"&upsilon;",alt:"&upsilon;"},{value:"&phi;",alt:"&phi;"},{value:"&chi;",alt:"&chi;"},{value:"&psi;",alt:"&psi;"},{value:"&omega;",alt:"&omega;"},{value:"&thetasym;",alt:"&thetasym;"},{value:"&upsih;",alt:"&upsih;"},{value:"&piv;",alt:"&piv;"},{value:"&otilde;",alt:"&otilde;"},{value:"&ouml;",alt:"&ouml;"},{value:"&oslash;",alt:"&oslash;"},{value:"&ugrave;",alt:"&ugrave;"},{value:"&uacute;",alt:"&uacute;"},{value:"&ucirc;",alt:"&ucirc;"},{value:"&uuml;",alt:"&uuml;"},{value:"&yacute;",alt:"&yacute;"},{value:"&thorn;",alt:"&thorn;"},{value:"&yuml;",alt:"&yuml;"}],misc:[{value:"&OElig;",alt:"&OElig;"},{value:"&oelig;",alt:"&oelig;"},{value:"&Scaron;",alt:"&Scaron;"},{value:"&scaron;",alt:"&scaron;"},{value:"&Yuml;",alt:"&Yuml;"},{value:"&fnof;",alt:"&fnof;"},{value:"&circ;",alt:"&circ;"},{value:"&tilde;",alt:"&tilde;"},{value:"&ensp;",alt:"&ensp;"},{value:"&emsp;",alt:"&emsp;"},{value:"&thinsp;",alt:"&thinsp;"},{value:"&zwnj;",alt:"&zwnj;"},{value:"&zwj;",alt:"&zwj;"},{value:"&lrm;",alt:"&lrm;"},{value:"&rlm;",alt:"&rlm;"},{value:"&ndash;",alt:"&ndash;"},{value:"&mdash;",alt:"&mdash;"},{value:"&lsquo;",alt:"&lsquo;"},{value:"&rsquo;",alt:"&rsquo;"},{value:"&sbquo;",alt:"&sbquo;"},{value:"&ldquo;",alt:"&ldquo;"},{value:"&rdquo;",alt:"&rdquo;"},{value:"&bdquo;",alt:"&bdquo;"},{value:"&dagger;",alt:"&dagger;"},{value:"&Dagger;",alt:"&Dagger;"},{value:"&bull;",alt:"&bull;"},{value:"&hellip;",alt:"&hellip;"},{value:"&permil;",alt:"&permil;"},{value:"&prime;",alt:"&prime;"},{value:"&Prime;",alt:"&Prime;"},{value:"&lsaquo;",alt:"&lsaquo;"},{value:"&rsaquo;",alt:"&rsaquo;"},{value:"&oline;",alt:"&oline;"},{value:"&euro;",alt:"&euro;"},{value:"&trade;",alt:"&trade;"},{value:"&larr;",alt:"&larr;"},{value:"&uarr;",alt:"&uarr;"},{value:"&rarr;",alt:"&rarr;"},{value:"&darr;",alt:"&darr;"},{value:"&harr;",alt:"&harr;"},{value:"&crarr;",alt:"&crarr;"},{value:"&lceil;",alt:"&lceil;"},{value:"&rceil;",alt:"&rceil;"},{value:"&lfloor;",alt:"&lfloor;"},{value:"&rfloor;",alt:"&rfloor;"},{value:"&loz;",alt:"&loz;"},{value:"&spades;",alt:"&spades;"},{value:"&clubs;",alt:"&clubs;"},{value:"&hearts;",alt:"&hearts;"},{value:"&diams;",alt:"&diams;"},{value:"&upsih;",alt:"&upsih;"},{value:"&piv;",alt:"&piv;"},{value:"&otilde;",alt:"&otilde;"},{value:"&ouml;",alt:"&ouml;"},{value:"&oslash;",alt:"&oslash;"},{value:"&ugrave;",alt:"&ugrave;"},{value:"&uacute;",alt:"&uacute;"},{value:"&ucirc;",alt:"&ucirc;"},{value:"&uuml;",alt:"&uuml;"},{value:"&yacute;",alt:"&yacute;"},{value:"&thorn;",alt:"&thorn;"},{value:"&yuml;",alt:"&yuml;"}]},window.customElements.define(v.tag,v);
/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
class i extends(u(a)){static get tag(){return"rich-text-editor-symbol-picker"}render(){return e` <simple-symbol-picker id="button" ?allow-null="${this.allowNull}" class="rtebutton ${this.labelVisibleClass}-label ${this.toggled?"toggled":""}" .controls="${super.controls}" ?disabled="${this.disabled}" @keydown="${this._pickerFocus}" .label="${this.currentLabel}" @mouseover="${this._pickerFocus}" .symbol-types="${this.symbolTypes}" tabindex="0" title-as-html ?toggled="${this.toggled}" @value-changed="${this._pickerChange}"> </simple-symbol-picker> ${super.tooltipTemplate} `}static get properties(){return{...super.properties,symbolTypes:{name:"symbolTypes",type:Array,attribute:"symbol-types"}}}constructor(){super(),this.icon="editor:functions",this.label="Insert symbol",this.symbolTypes=["symbols","math","characters","greek","misc"],this.command="insertHTML"}_setOptions(){}}window.customElements.define(i.tag,i);export{i as RichTextEditorSymbolPicker};
