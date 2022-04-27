import{r as e,$ as t,y as o,s as r}from"./9e6d0aef.js";String.prototype.replaceAll||(String.prototype.replaceAll=function(e,t){return this.split(e).join(t)});class i extends HTMLElement{static get tag(){return"simple-iconset"}constructor(){super(),this.iconsets={},this.iconlist=[],this.manifest={},this.needsHydrated=[]}registerManifest(e){(e||[]).forEach((e=>{this.manifest[e.name]||(this.manifest[e.name]=e.icons||[],this.manifest[e.name].forEach((t=>{this.iconlist.push(`${e.name}:${t}`)})))}))}registerIconset(e,t={}){if("object"==typeof t?this.iconsets[e]={...t}:"string"==typeof t&&(this.iconsets[e]=t),this.needsHydrated.length>0){let e=[];this.needsHydrated.forEach(((t,o)=>{"function"==typeof t.setSrcByIcon&&t.setSrcByIcon(this)&&e.push(o)})),e.reverse().forEach((e=>{this.needsHydrated.splice(e,1)}))}}getIcon(e,t){let o=e.replaceAll("/","-").split(":");if(1===o.length&&(o=["icons",e]),2==o.length&&this.iconsets[o[0]]){if("string"!=typeof this.iconsets[o[0]]&&this.iconsets[o[0]][o[1]]&&"function"!=typeof this.iconsets[o[0]][o[1]])return this.iconsets[o[0]][o[1]];if(o[1])return`${this.iconsets[o[0]]}${o[1]}.svg`}return t!==this&&t&&this.needsHydrated.push(t),null}}customElements.define(i.tag,i),window.SimpleIconset=window.SimpleIconset||{},window.SimpleIconset.requestAvailability=()=>(null==window.SimpleIconset.instance&&(window.SimpleIconset.instance=document.createElement("simple-iconset")),document.body.appendChild(window.SimpleIconset.instance),window.SimpleIconset.instance);const a=window.SimpleIconset.requestAvailability(),n=function(r){return class extends r{static get styles(){return[super.styles||[],e`:host{display:inline-flex;align-items:center;justify-content:center;position:relative;vertical-align:middle;height:var(--simple-icon-height,24px);width:var(--simple-icon-width,24px);color:var(--simple-icon-color,currentColor)}:host([dir=rtl]) svg{direction:rtl}:host([hidden]){display:none}#svg-polyfill{background-color:var(--simple-icon-color,currentColor);height:var(--simple-icon-height,24px);width:var(--simple-icon-width,24px)}svg{height:var(--simple-icon-height,24px);width:var(--simple-icon-width,24px);max-height:var(--simple-icon-height,24px);max-width:var(--simple-icon-width,24px);filter:var(--simple-icon-color, initial);pointer-events:none}feFlood{flood-color:var(--simple-icon-color,currentColor)}`]}render(){return this.useSafariPolyfill?t` <div id="svg-polyfill" style="mask:${this.safariMask};-webkit-mask:${this.safariMask}"></div> `:o`
        <svg xmlns="http://www.w3.org/2000/svg" part="simple-icon-svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet">
          <filter
            color-interpolation-filters="sRGB"
            x="0"
            y="0"
            height="24px"
            width="24px"
          >
            ${this.feFlood}
            <feComposite operator="in" in="COLOR" in2="SourceAlpha" />
          </filter>
          <image
            xlink:href=""
            width="24px"
            height="24px"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
          ></image>
        </svg>
      `}get feFlood(){return this.noColorize?"":o`<feFlood result="COLOR"/>`}static get properties(){return{...super.properties,dir:{type:String,reflect:!0},src:{type:String},noColorize:{type:Boolean,attribute:"no-colorize"},icon:{type:String,attribute:"icon",reflect:!0}}}constructor(){super(),this.noColorize=!1,this.dir=this.documentDir}get documentDir(){return document.body.getAttribute("xml:dir")||document.body.getAttribute("dir")||document.documentElement.getAttribute("xml:dir")||document.documentElement.getAttribute("dir")||"ltr"}get useSafariPolyfill(){return navigator.userAgent.indexOf("Safari")>-1}get safariMask(){return this.src&&this.useSafariPolyfill?`url(${this.src}) no-repeat center / contain`:""}firstUpdated(e){if(super.firstUpdated&&super.firstUpdated(e),this.useSafariPolyfill)return;const t="f-"+Math.random().toString().slice(2,10);this.shadowRoot.querySelector("image").style.filter=`url(#${t})`,this.shadowRoot.querySelector("filter").setAttribute("id",t)}setSrcByIcon(e){return this.src=a.getIcon(this.icon,e),this.src}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{"icon"===t&&(this[t]?this.setSrcByIcon(this):this.src=null),"src"===t&&this[t]&&!this.useSafariPolyfill&&this.shadowRoot.querySelector("image").setAttribute("xlink:href",`${this[t]}`)}))}}};
/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */class s extends(n(r)){static get tag(){return"simple-icon-lite"}}customElements.define(s.tag,s);a.registerManifest([{name:"av",icons:["add-to-queue","airplay","album","art-track","av-timer","branding-watermark","call-to-action","closed-caption","equalizer","explicit","fast-forward","fast-rewind","featured-play-list","featured-video","fiber-dvr","fiber-manual-record","fiber-new","fiber-pin","fiber-smart-record","forward-10","forward-30","forward-5","games","hd","hearing","high-quality","library-add","library-books","library-music","loop","mic-none","mic-off","mic","movie","music-video","new-releases","not-interested","note","pause-circle-filled","pause-circle-outline","pause","play-arrow","play-circle-filled","play-circle-outline","playlist-add-check","playlist-add","playlist-play","queue-music","queue-play-next","queue","radio","recent-actors","remove-from-queue","repeat-one","repeat","replay-10","replay-30","replay-5","replay","shuffle","skip-next","skip-previous","slow-motion-video","snooze","sort-by-alpha","stop","subscriptions","subtitles","surround-sound","video-call","video-label","video-library","videocam-off","videocam","volume-down","volume-mute","volume-off","volume-up","web-asset","web"]},{name:"communication",icons:["business","call-end","call-made","call-merge","call-missed-outgoing","call-missed","call-received","call-split","call","chat-bubble-outline","chat-bubble","chat","clear-all","comment","contact-mail","contact-phone","contacts","dialer-sip","dialpad","email","forum","import-contacts","import-export","invert-colors-off","live-help","location-off","location-on","mail-outline","message","no-sim","phone","phonelink-erase","phonelink-lock","phonelink-ring","phonelink-setup","portable-wifi-off","present-to-all","ring-volume","rss-feed","screen-share","speaker-phone","stay-current-landscape","stay-current-portrait","stay-primary-landscape","stay-primary-portrait","stop-screen-share","swap-calls","textsms","voicemail","vpn-key"]},{name:"device",icons:["access-alarm","access-alarms","access-time","add-alarm","airplanemode-active","airplanemode-inactive","battery-20","battery-30","battery-50","battery-60","battery-80","battery-90","battery-alert","battery-charging-20","battery-charging-30","battery-charging-50","battery-charging-60","battery-charging-80","battery-charging-90","battery-charging-full","battery-full","battery-std","battery-unknown","bluetooth-connected","bluetooth-disabled","bluetooth-searching","bluetooth","brightness-auto","brightness-high","brightness-low","brightness-medium","data-usage","developer-mode","devices","dvr","gps-fixed","gps-not-fixed","gps-off","graphic-eq","location-disabled","location-searching","network-cell","network-wifi","nfc","screen-lock-landscape","screen-lock-portrait","screen-lock-rotation","screen-rotation","sd-storage","settings-system-daydream","signal-cellular-0-bar","signal-cellular-1-bar","signal-cellular-2-bar","signal-cellular-3-bar","signal-cellular-4-bar","signal-cellular-connected-no-internet-0-bar","signal-cellular-connected-no-internet-1-bar","signal-cellular-connected-no-internet-2-bar","signal-cellular-connected-no-internet-3-bar","signal-cellular-connected-no-internet-4-bar","signal-cellular-no-sim","signal-cellular-null","signal-cellular-off","signal-wifi-0-bar","signal-wifi-1-bar-lock","signal-wifi-1-bar","signal-wifi-2-bar-lock","signal-wifi-2-bar","signal-wifi-3-bar-lock","signal-wifi-3-bar","signal-wifi-4-bar-lock","signal-wifi-4-bar","signal-wifi-off","storage","usb","wallpaper","widgets","wifi-lock","wifi-tethering"]},{name:"editor",icons:["attach-file","attach-money","border-all","border-bottom","border-clear","border-color","border-horizontal","border-inner","border-left","border-outer","border-right","border-style","border-top","border-vertical","bubble-chart","drag-handle","format-align-center","format-align-justify","format-align-left","format-align-right","format-bold","format-clear","format-color-fill","format-color-reset","format-color-text","format-indent-decrease","format-indent-increase","format-italic","format-line-spacing","format-list-bulleted","format-list-numbered","format-page-break","format-paint","format-quote","format-shapes","format-size","format-strikethrough","format-textdirection-l-to-r","format-textdirection-r-to-l","format-underlined","functions","highlight","insert-chart","insert-comment","insert-drive-file","insert-emoticon","insert-invitation","insert-link","insert-photo","linear-scale","merge-type","mode-comment","mode-edit","monetization-on","money-off","multiline-chart","pie-chart-outlined","pie-chart","publish","short-text","show-chart","space-bar","strikethrough-s","text-fields","title","vertical-align-bottom","vertical-align-center","vertical-align-top","wrap-text"]},{name:"elmsln-custom",icons:[]},{name:"hardware",icons:["cast-connected","cast","computer","desktop-mac","desktop-windows","developer-board","device-hub","devices-other","dock","gamepad","headset-mic","headset","keyboard-arrow-down","keyboard-arrow-left","keyboard-arrow-right","keyboard-arrow-up","keyboard-backspace","keyboard-capslock","keyboard-hide","keyboard-return","keyboard-tab","keyboard-voice","keyboard","laptop-chromebook","laptop-mac","laptop-windows","laptop","memory","mouse","phone-android","phone-iphone","phonelink-off","phonelink","power-input","router","scanner","security","sim-card","smartphone","speaker-group","speaker","tablet-android","tablet-mac","tablet","toys","tv","videogame-asset","watch"]},{name:"icons",icons:["3d-rotation","accessibility","accessible","account-balance-wallet","account-balance","account-box","account-circle","add-alert","add-box","add-circle-outline","add-circle","add-shopping-cart","add","alarm-add","alarm-off","alarm-on","alarm","all-out","android","announcement","apps","archive","arrow-back","arrow-downward","arrow-drop-down-circle","arrow-drop-down","arrow-drop-up","arrow-forward","arrow-upward","aspect-ratio","assessment","assignment-ind","assignment-late","assignment-return","assignment-returned","assignment-turned-in","assignment","attachment","autorenew","backspace","backup","block","book","bookmark-border","bookmark","bug-report","build","cached","camera-enhance","cancel","card-giftcard","card-membership","card-travel","change-history","check-box-outline-blank","check-box","check-circle","check","chevron-left","chevron-right","chrome-reader-mode","class","clear","close","cloud-circle","cloud-done","cloud-download","cloud-off","cloud-queue","cloud-upload","cloud","code","compare-arrows","content-copy","content-cut","content-paste","copyright","create-new-folder","create","credit-card","dashboard","date-range","delete-forever","delete-sweep","delete","description","dns","done-all","done","donut-large","donut-small","drafts","eject","error-outline","error","euro-symbol","event-seat","event","exit-to-app","expand-less","expand-more","explore","extension","face","favorite-border","favorite","feedback","file-download","file-upload","filter-list","find-in-page","find-replace","fingerprint","first-page","flag","flight-land","flight-takeoff","flip-to-back","flip-to-front","folder-open","folder-shared","folder","font-download","forward","fullscreen-exit","fullscreen","g-translate","gavel","gesture","get-app","gif","grade","group-work","help-outline","help","highlight-off","history","home","hourglass-empty","hourglass-full","http","https","important-devices","inbox","indeterminate-check-box","info-outline","info","input","invert-colors","label-outline","label","language","last-page","launch","lightbulb-outline","line-style","line-weight","link","list","lock-open","lock-outline","lock","low-priority","loyalty","mail","markunread-mailbox","markunread","menu","more-horiz","more-vert","motorcycle","move-to-inbox","next-week","note-add","offline-pin","opacity","open-in-browser","open-in-new","open-with","pageview","pan-tool","payment","perm-camera-mic","perm-contact-calendar","perm-data-setting","perm-device-information","perm-identity","perm-media","perm-phone-msg","perm-scan-wifi","pets","picture-in-picture-alt","picture-in-picture","play-for-work","polymer","power-settings-new","pregnant-woman","print","query-builder","question-answer","radio-button-checked","radio-button-unchecked","receipt","record-voice-over","redeem","redo","refresh","remove-circle-outline","remove-circle","remove-shopping-cart","remove","reorder","reply-all","reply","report-problem","report","restore-page","restore","room","rounded-corner","rowing","save","schedule","search","select-all","send","settings-applications","settings-backup-restore","settings-bluetooth","settings-brightness","settings-cell","settings-ethernet","settings-input-antenna","settings-input-component","settings-input-composite","settings-input-hdmi","settings-input-svideo","settings-overscan","settings-phone","settings-power","settings-remote","settings-voice","settings","shop-two","shop","shopping-basket","shopping-cart","sort","speaker-notes-off","speaker-notes","spellcheck","star-border","star-half","star","stars","store","subdirectory-arrow-left","subdirectory-arrow-right","subject","supervisor-account","swap-horiz","swap-vert","swap-vertical-circle","system-update-alt","tab-unselected","tab","text-format","theaters","thumb-down","thumb-up","thumbs-up-down","timeline","toc","today","toll","touch-app","track-changes","translate","trending-down","trending-flat","trending-up","turned-in-not","turned-in","unarchive","undo","unfold-less","unfold-more","update","verified-user","view-agenda","view-array","view-carousel","view-column","view-day","view-headline","view-list","view-module","view-quilt","view-stream","view-week","visibility-off","visibility","warning","watch-later","weekend","work","youtube-searched-for","zoom-in","zoom-out"]},{name:"image",icons:["add-a-photo","add-to-photos","adjust","assistant-photo","assistant","audiotrack","blur-circular","blur-linear","blur-off","blur-on","brightness-1","brightness-2","brightness-3","brightness-4","brightness-5","brightness-6","brightness-7","broken-image","brush","burst-mode","camera-alt","camera-front","camera-rear","camera-roll","camera","center-focus-strong","center-focus-weak","collections-bookmark","collections","color-lens","colorize","compare","control-point-duplicate","control-point","crop-16-9","crop-3-2","crop-5-4","crop-7-5","crop-din","crop-free","crop-landscape","crop-original","crop-portrait","crop-rotate","crop-square","crop","dehaze","details","edit","exposure-neg-1","exposure-neg-2","exposure-plus-1","exposure-plus-2","exposure-zero","exposure","filter-1","filter-2","filter-3","filter-4","filter-5","filter-6","filter-7","filter-8","filter-9-plus","filter-9","filter-b-and-w","filter-center-focus","filter-drama","filter-frames","filter-hdr","filter-none","filter-tilt-shift","filter-vintage","filter","flare","flash-auto","flash-off","flash-on","flip","gradient","grain","grid-off","grid-on","hdr-off","hdr-on","hdr-strong","hdr-weak","healing","image-aspect-ratio","image","iso","landscape","leak-add","leak-remove","lens","linked-camera","looks-3","looks-4","looks-5","looks-6","looks-one","looks-two","looks","loupe","monochrome-photos","movie-creation","movie-filter","music-note","nature-people","nature","navigate-before","navigate-next","palette","panorama-fish-eye","panorama-horizontal","panorama-vertical","panorama-wide-angle","panorama","photo-album","photo-camera","photo-filter","photo-library","photo-size-select-actual","photo-size-select-large","photo-size-select-small","photo","picture-as-pdf","portrait","remove-red-eye","rotate-90-degrees-ccw","rotate-left","rotate-right","slideshow","straighten","style","switch-camera","switch-video","tag-faces","texture","timelapse","timer-10","timer-3","timer-off","timer","tonality","transform","tune","view-comfy","view-compact","vignette","wb-auto","wb-cloudy","wb-incandescent","wb-iridescent","wb-sunny"]},{name:"loading",icons:["bars"]},{name:"maps",icons:["add-location","beenhere","directions-bike","directions-boat","directions-bus","directions-car","directions-railway","directions-run","directions-subway","directions-transit","directions-walk","directions","edit-location","ev-station","flight","hotel","layers-clear","layers","local-activity","local-airport","local-atm","local-bar","local-cafe","local-car-wash","local-convenience-store","local-dining","local-drink","local-florist","local-gas-station","local-grocery-store","local-hospital","local-hotel","local-laundry-service","local-library","local-mall","local-movies","local-offer","local-parking","local-pharmacy","local-phone","local-pizza","local-play","local-post-office","local-printshop","local-see","local-shipping","local-taxi","map","my-location","navigation","near-me","person-pin-circle","person-pin","pin-drop","place","rate-review","restaurant-menu","restaurant","satellite","store-mall-directory","streetview","subway","terrain","traffic","train","tram","transfer-within-a-station","zoom-out-map"]},{name:"notification",icons:["adb","airline-seat-flat-angled","airline-seat-flat","airline-seat-individual-suite","airline-seat-legroom-extra","airline-seat-legroom-normal","airline-seat-legroom-reduced","airline-seat-recline-extra","airline-seat-recline-normal","bluetooth-audio","confirmation-number","disc-full","do-not-disturb-alt","do-not-disturb-off","do-not-disturb-on","do-not-disturb","drive-eta","enhanced-encryption","event-available","event-busy","event-note","folder-special","live-tv","mms","more","network-check","network-locked","no-encryption","ondemand-video","personal-video","phone-bluetooth-speaker","phone-forwarded","phone-in-talk","phone-locked","phone-missed","phone-paused","power","priority-high","rv-hookup","sd-card","sim-card-alert","sms-failed","sms","sync-disabled","sync-problem","sync","system-update","tap-and-play","time-to-leave","vibration","voice-chat","vpn-lock","wc","wifi"]},{name:"places",icons:["ac-unit","airport-shuttle","all-inclusive","beach-access","business-center","casino","child-care","child-friendly","fitness-center","free-breakfast","golf-course","hot-tub","kitchen","pool","room-service","rv-hookup","smoke-free","smoking-rooms","spa"]},{name:"social",icons:["cake","domain","group-add","group","location-city","mood-bad","mood","notifications-active","notifications-none","notifications-off","notifications-paused","notifications","pages","party-mode","people-outline","people","person-add","person-outline","person","plus-one","poll","public","school","sentiment-dissatisfied","sentiment-neutral","sentiment-satisfied","sentiment-very-dissatisfied","sentiment-very-satisfied","share","whatshot"]}]);const l=new URL(new URL("d01bb28f.js",import.meta.url).href,import.meta.url).href+"/../";["av","communication","device","editor","elmsln-custom","hardware","icons","image","maps","notification","places","social","loading"].forEach((e=>{a.registerIconset(e,`${l}svgs/${e}/`)})),a.registerIconset("flags",`${l}../../../flag-icon-css/flags/4x3/`),a.registerIconset("flags1x1",`${l}../../../flag-icon-css/flags/1x1/`);export{a as S,n as a};
