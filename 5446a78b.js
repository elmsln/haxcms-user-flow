import{s as e,r as o,$ as t}from"./ad13e776.js";class n extends e{static get tag(){return"app-hax-user-menu"}constructor(){super(),this.isOpen=!1,this.icon="account-circle"}static get properties(){return{isOpen:{type:Boolean,reflect:!0},icon:{type:String,reflect:!0}}}static get styles(){return o`:host{font-family:'Press Start 2P',sans-serif;text-align:center;display:inline-block;margin:0;padding:0}.menuToggle{--simple-icon-width:60px;--simple-icon-height:60px;cursor:pointer}.user-menu{display:none}.user-menu.open{display:block;top:48px;right:0;position:absolute;border:1px solid var(--app-hax-accent-color);background-color:var(--app-hax-background-color)}.user-menu.open ::slotted(*){display:block;width:100%;margin:0;font-size:16px;text-align:left;font-family:'Press Start 2P',sans-serif;color:var(--app-hax-accent-color);background-color:var(--app-hax-background-color)}.user-menu.open ::slotted(:active),.user-menu.open ::slotted(:focus),.user-menu.open ::slotted(:hover){background-color:var(--app-hax-background-color-active);color:var(--app-hax-background-color)}.user-menu ::slotted(button){cursor:pointer}.user-menu ::slotted(*) simple-icon-lite{padding-right:16px}`}toggleMenu(){this.isOpen=!this.isOpen}render(){return t` <div class="entireComponent"> <div class="menuToggle" part="menuToggle" @click="${this.toggleMenu}" @keydown="${this.toggleMenu}"> <slot name="menuButton"><simple-icon-lite icon="${this.icon}"></simple-icon-lite></slot> </div> <div class="user-menu ${this.isOpen?"open":""}"> <div class="pre-menu"> <slot name="pre-menu"></slot> </div> <div class="main-menu"> <slot name="main-menu"></slot> </div> <div class="post-menu"> <slot name="post-menu"></slot> </div> </div> </div> `}}customElements.define(n.tag,n);export{n as AppHaxUserMenu};
