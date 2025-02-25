const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunk-0254c5147f5bfcfffdbde6e25b37cdb43e3330b3722045bbe1336439c6b87002-CdQ9w6hd.js","./indexhtml-DgdtlDGv.js"])))=>i.map(i=>d[i]);
var Bt=t=>{throw TypeError(t)};var yt=(t,r,s)=>r.has(t)||Bt("Cannot "+s);var p=(t,r,s)=>(yt(t,r,"read from private field"),s?s.call(t):r.get(t)),w=(t,r,s)=>r.has(t)?Bt("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,s),P=(t,r,s,o)=>(yt(t,r,"write to private field"),o?o.call(t,s):r.set(t,s),s),st=(t,r,s)=>(yt(t,r,"access private method"),s);import{n as tr,r as me,S as er,a as _e,i as O,b as rr,E as Pt,t as ir,T as or,e as sr,c as ar,d as J,f as nr,j as lr,O as cr,_ as dr}from"./indexhtml-DgdtlDGv.js";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(t,r){return t};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ur=/(url\()([^)]*)(\))/g,hr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,at,b;function Q(t,r){if(t&&hr.test(t)||t==="//")return t;if(at===void 0){at=!1;try{const s=new URL("b","http://a");s.pathname="c%20d",at=s.href==="http://a/c%20d"}catch{}}if(r||(r=document.baseURI||window.location.href),at)try{return new URL(t,r).href}catch{return t}return b||(b=document.implementation.createHTMLDocument("temp"),b.base=b.createElement("base"),b.head.appendChild(b.base),b.anchor=b.createElement("a"),b.body.appendChild(b.anchor)),b.base.href=r,b.anchor.href=t,b.anchor.href||t}function Rt(t,r){return t.replace(ur,function(s,o,e,i){return o+"'"+Q(e.replace(/["']/g,""),r)+"'"+i})}function Ht(t){return t.substring(0,t.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pr=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const fr=pr&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const r=document.createElement("div");return r.attachShadow({mode:"open"}),r.shadowRoot.adoptedStyleSheets=[t],r.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let mr=window.Polymer&&window.Polymer.rootPath||Ht(document.baseURI||window.location.href),ct=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Ct=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,_r=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,yr=window.Polymer&&window.Polymer.legacyOptimizations||!1,gr=window.Polymer&&window.Polymer.legacyWarnings||!1,vr=window.Polymer&&window.Polymer.syncInitialRender||!1,xt=window.Polymer&&window.Polymer.legacyUndefined||!1,wr=window.Polymer&&window.Polymer.orderedComputed||!1,jt=window.Polymer&&window.Polymer.removeNestedTemplates||!1,br=window.Polymer&&window.Polymer.fastDomIf||!1,Ao=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let Pr=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let It={},ye={};function Ut(t,r){It[t]=ye[t.toLowerCase()]=r}function qt(t){return It[t]||ye[t.toLowerCase()]}function Cr(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class Y extends HTMLElement{static get observedAttributes(){return["id"]}static import(r,s){if(r){let o=qt(r);return o&&s?o.querySelector(s):o}return null}attributeChangedCallback(r,s,o,e){s!==o&&this.register()}get assetpath(){if(!this.__assetpath){const r=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,s=Q(this.getAttribute("assetpath")||"",r.baseURI);this.__assetpath=Ht(s)}return this.__assetpath}register(r){if(r=r||this.id,r){if(Ct&&qt(r)!==void 0)throw Ut(r,null),new Error(`strictTemplatePolicy: dom-module ${r} re-registered`);this.id=r,Ut(r,this),Cr(this)}}}Y.prototype.modules=It;customElements.define("dom-module",Y);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const xr="link[rel=import][type~=css]",Sr="include",Yt="shady-unscoped";function ge(t){return Y.import(t)}function Wt(t){let r=t.body?t.body:t;const s=Rt(r.textContent,t.baseURI),o=document.createElement("style");return o.textContent=s,o}function Tr(t){const r=t.trim().split(/\s+/),s=[];for(let o=0;o<r.length;o++)s.push(...Er(r[o]));return s}function Er(t){const r=ge(t);if(!r)return console.warn("Could not find style data in module named",t),[];if(r._styles===void 0){const s=[];s.push(...ve(r));const o=r.querySelector("template");o&&s.push(...Dt(o,r.assetpath)),r._styles=s}return r._styles}function Dt(t,r){if(!t._styles){const s=[],o=t.content.querySelectorAll("style");for(let e=0;e<o.length;e++){let i=o[e],a=i.getAttribute(Sr);a&&s.push(...Tr(a).filter(function(n,l,c){return c.indexOf(n)===l})),r&&(i.textContent=Rt(i.textContent,r)),s.push(i)}t._styles=s}return t._styles}function zr(t){let r=ge(t);return r?ve(r):[]}function ve(t){const r=[],s=t.querySelectorAll(xr);for(let o=0;o<s.length;o++){let e=s[o];if(e.import){const i=e.import,a=e.hasAttribute(Yt);if(a&&!i._unscopedStyle){const n=Wt(i);n.setAttribute(Yt,""),i._unscopedStyle=n}else i._style||(i._style=Wt(i));r.push(a?i._unscopedStyle:i._style)}}return r}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Or=t=>class extends t{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(s,o,e){super.attributeChangedCallback(s,o,e),s==="theme"&&this._set_theme(e)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const I=[],St=new Set,Vt=new Set;function we(t){return t&&Object.prototype.hasOwnProperty.call(t,"__themes")}function Ar(t){return we(customElements.get(t))}function Mr(t=[]){return[t].flat(1/0).filter(r=>r instanceof tr?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function be(t,r){return(t||"").split(" ").some(s=>new RegExp(`^${s.split("*").join(".*")}$`,"u").test(r))}function Pe(t){return t.map(r=>r.cssText).join(`
`)}const dt="vaadin-themable-mixin-style";function Nr(t,r){const s=document.createElement("style");s.id=dt,s.textContent=Pe(t),r.content.appendChild(s)}function kr(t){if(!t.shadowRoot)return;const r=t.constructor;if(t instanceof me)[...t.shadowRoot.querySelectorAll("style")].forEach(s=>s.remove()),er(t.shadowRoot,r.elementStyles);else{const s=t.shadowRoot.getElementById(dt),o=r.prototype._template;s.textContent=o.content.getElementById(dt).textContent}}function Lr(t){St.forEach(r=>{const s=r.deref();s instanceof t?kr(s):s||St.delete(r)})}function Ce(t){if(t.prototype instanceof me)t.elementStyles=t.finalizeStyles(t.styles);else{const r=t.prototype._template;r.content.getElementById(dt).textContent=Pe(t.getStylesForThis())}Vt.forEach(r=>{const s=customElements.get(r);s!==t&&s.prototype instanceof t&&Ce(s)})}function Rr(t,r){const s=t.__themes;return!s||!r?!1:s.some(o=>o.styles.some(e=>r.some(i=>i.cssText===e.cssText)))}function xe(t,r,s={}){r=Mr(r),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(t,r,s):I.push({themeFor:t,styles:r,include:s.include,moduleId:s.moduleId}),t&&Vt.forEach(o=>{if(be(t,o)&&Ar(o)){const e=customElements.get(o);Rr(e,r)?console.warn(`Registering styles that already exist for ${o}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${o}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),Ce(e),Lr(e)}})}function Tt(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():I}function Hr(t=""){let r=0;return t.startsWith("lumo-")||t.startsWith("material-")?r=1:t.startsWith("vaadin-")&&(r=2),r}function Se(t){const r=[];return t.include&&[].concat(t.include).forEach(s=>{const o=Tt().find(e=>e.moduleId===s);o?r.push(...Se(o),...o.styles):console.warn(`Included moduleId ${s} not found in style registry`)},t.styles),r}function Ir(t){const r=`${t}-default-theme`,s=Tt().filter(o=>o.moduleId!==r&&be(o.themeFor,t)).map(o=>({...o,styles:[...Se(o),...o.styles],includePriority:Hr(o.moduleId)})).sort((o,e)=>e.includePriority-o.includePriority);return s.length>0?s:Tt().filter(o=>o.moduleId===r)}const No=t=>class extends Or(t){constructor(){super(),St.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&Vt.add(this.is),this.elementStyles)return;const s=this.prototype._template;!s||we(this)||Nr(this.getStylesForThis(),s)}static finalizeStyles(s){const o=this.getStylesForThis();return s?[...[s].flat(1/0),...o]:o}static getStylesForThis(){const s=t.__themes||[],o=Object.getPrototypeOf(this.prototype),e=(o?o.constructor.__themes:[])||[];this.__themes=[...s,...e,...Ir(this.is)];const i=this.__themes.flatMap(a=>a.styles);return i.filter((a,n)=>n===i.lastIndexOf(a))}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Jt=0;function Te(t,r=[],s={}){const o=s.moduleId||`custom-style-module-${Jt}`;Jt+=1;const e=document.createElement("dom-module");t&&e.setAttribute("theme-for",t);const i=!!(r.length&&s.moduleId),a=[].concat(s.include||[]);a.length===0?e.__allStyles=r:i||(e.__partialStyles=r),e.innerHTML=`
    <template>
      ${a.map(n=>`<style include=${n}></style>`)}
      ${i?`<style>${r.map(n=>n.cssText).join(`
`)}</style>`:""}
    </template>
  `,e.register(o)}function Dr(t){return Dt(t.querySelector("template")).map(r=>_e(r.textContent))}function Vr(){const r=Y.prototype.modules;return Object.keys(r).map(s=>{const o=r[s],e=o.getAttribute("theme-for");return o.__allStyles||(o.__allStyles=Dr(o).concat(o.__partialStyles||[])),{themeFor:e,moduleId:s,styles:o.__allStyles}})}window.Vaadin||(window.Vaadin={});window.Vaadin.styleModules={getAllThemes:Vr,registerStyles:Te};I&&I.length>0&&(I.forEach(t=>{Te(t.themeFor,t.styles,{moduleId:t.moduleId,include:t.include})}),I.length=0);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});var fe;(fe=window.Vaadin).featureFlags||(fe.featureFlags={});function Fr(t){return t.replace(/-[a-z]/gu,r=>r[1].toUpperCase())}const E={};function Ee(t,r="24.6.5"){if(Object.defineProperty(t,"version",{get(){return r}}),t.experimental){const o=typeof t.experimental=="string"?t.experimental:`${Fr(t.is.split("-").slice(1).join("-"))}Component`;if(!window.Vaadin.featureFlags[o]&&!E[o]){E[o]=new Set,E[o].add(t),Object.defineProperty(window.Vaadin.featureFlags,o,{get(){return E[o].size===0},set(e){e&&E[o].size>0&&(E[o].forEach(i=>{customElements.define(i.is,i)}),E[o].clear())}});return}else if(E[o]){E[o].add(t);return}}const s=customElements.get(t.is);if(!s)customElements.define(t.is,t);else{const o=s.version;o&&t.version&&o===t.version?console.warn(`The component ${t.is} has been loaded twice`):console.error(`Tried to define ${t.is} version ${t.version} when version ${s.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class $r extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Ee($r);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Br=(t,...r)=>{const s=document.createElement("style");s.id=t,s.textContent=r.map(o=>o.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",s)},L=(t,...r)=>{Br(`lumo-${t}`,r)};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=O`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;L("color-props",jr);const ze=O`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;xe("",ze,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */L("color",ze);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ur=O`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Oe=O`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;xe("",Oe,{moduleId:"lumo-typography"});L("typography-props",Ur);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qr=O`
  ${_e(Oe.cssText.replace(/,\s*:host/su,""))}
`;L("typography",qr);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yr=O`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;L("sizing-props",Yr);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wr=O`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;L("spacing-props",Wr);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jr=O`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;O`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    --vaadin-checkbox-disabled-checkmark-color: var(--lumo-contrast-30pct);
    --vaadin-checkbox-disabled-background: var(--lumo-contrast-10pct);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-radio-button-disabled-background: var(--lumo-contrast-10pct);
    --vaadin-radio-button-disabled-dot-color: var(--lumo-contrast-30pct);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-disabled-background: var(--lumo-contrast-5pct);
    --vaadin-input-field-disabled-value-color: var(--lumo-disabled-text-color);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;L("style-props",Jr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Gr=0;const W=function(t){let r=t.__mixinApplications;r||(r=new WeakMap,t.__mixinApplications=r);let s=Gr++;function o(e){let i=e.__mixinSet;if(i&&i[s])return e;let a=r,n=a.get(e);if(!n){n=t(e),a.set(e,n);let l=Object.create(n.__mixinSet||i||null);l[s]=!0,n.__mixinSet=l}return n}return o};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const k=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Et(t){return t.indexOf(".")>=0}function R(t){let r=t.indexOf(".");return r===-1?t:t.slice(0,r)}function Zr(t,r){return t.indexOf(r+".")===0}function ut(t,r){return r.indexOf(t+".")===0}function ht(t,r,s){return r+s.slice(t.length)}function K(t){if(Array.isArray(t)){let r=[];for(let s=0;s<t.length;s++){let o=t[s].toString().split(".");for(let e=0;e<o.length;e++)r.push(o[e])}return r.join(".")}else return t}function Ae(t){return Array.isArray(t)?K(t).split("."):t.toString().split(".")}function y(t,r,s){let o=t,e=Ae(r);for(let i=0;i<e.length;i++){if(!o)return;let a=e[i];o=o[a]}return s&&(s.path=e.join(".")),o}function Gt(t,r,s){let o=t,e=Ae(r),i=e[e.length-1];if(e.length>1){for(let a=0;a<e.length-1;a++){let n=e[a];if(o=o[n],!o)return}o[i]=s}else o[r]=s;return e.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const pt={},Kr=/-[a-z]/g,Xr=/([A-Z])/g;function Me(t){return pt[t]||(pt[t]=t.indexOf("-")<0?t:t.replace(Kr,r=>r[1].toUpperCase()))}function mt(t){return pt[t]||(pt[t]=t.replace(Xr,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Qr=0,Ne=0,D=[],ti=0,zt=!1,ke=document.createTextNode("");new window.MutationObserver(ei).observe(ke,{characterData:!0});function ei(){zt=!1;const t=D.length;for(let r=0;r<t;r++){let s=D[r];if(s)try{s()}catch(o){setTimeout(()=>{throw o})}}D.splice(0,t),Ne+=t}const Lo={after(t){return{run(r){return window.setTimeout(r,t)},cancel(r){window.clearTimeout(r)}}},run(t,r){return window.setTimeout(t,r)},cancel(t){window.clearTimeout(t)}},Ro={run(t){return window.requestAnimationFrame(t)},cancel(t){window.cancelAnimationFrame(t)}},Ho={run(t){return window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16)},cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},ri={run(t){return zt||(zt=!0,ke.textContent=ti++),D.push(t),Qr++},cancel(t){const r=t-Ne;if(r>=0){if(!D[r])throw new Error("invalid async handle: "+t);D[r]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ii=ri,Le=W(t=>{class r extends t{static createProperties(o){const e=this.prototype;for(let i in o)i in e||e._createPropertyAccessor(i)}static attributeNameForProperty(o){return o.toLowerCase()}static typeForProperty(o){}_createPropertyAccessor(o,e){this._addPropertyToAttributeMap(o),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[o]||(this.__dataHasAccessor[o]=!0,this._definePropertyAccessor(o,e))}_addPropertyToAttributeMap(o){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let e=this.__dataAttributes[o];return e||(e=this.constructor.attributeNameForProperty(o),this.__dataAttributes[e]=o),e}_definePropertyAccessor(o,e){Object.defineProperty(this,o,{get(){return this.__data[o]},set:e?function(){}:function(i){this._setPendingProperty(o,i,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let o in this.__dataHasAccessor)this.hasOwnProperty(o)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[o]=this[o],delete this[o])}_initializeInstanceProperties(o){Object.assign(this,o)}_setProperty(o,e){this._setPendingProperty(o,e)&&this._invalidateProperties()}_getProperty(o){return this.__data[o]}_setPendingProperty(o,e,i){let a=this.__data[o],n=this._shouldPropertyChange(o,e,a);return n&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(o in this.__dataOld)&&(this.__dataOld[o]=a),this.__data[o]=e,this.__dataPending[o]=e),n}_isPropertyPending(o){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(o))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ii.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const o=this.__data,e=this.__dataPending,i=this.__dataOld;this._shouldPropertiesChange(o,e,i)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(o,e,i)),this.__dataCounter--}_shouldPropertiesChange(o,e,i){return!!e}_propertiesChanged(o,e,i){}_shouldPropertyChange(o,e,i){return i!==e&&(i===i||e===e)}attributeChangedCallback(o,e,i,a){e!==i&&this._attributeToProperty(o,i),super.attributeChangedCallback&&super.attributeChangedCallback(o,e,i,a)}_attributeToProperty(o,e,i){if(!this.__serializing){const a=this.__dataAttributes,n=a&&a[o]||o;this[n]=this._deserializeValue(e,i||this.constructor.typeForProperty(n))}}_propertyToAttribute(o,e,i){this.__serializing=!0,i=arguments.length<3?this[o]:i,this._valueToNodeAttribute(this,i,e||this.constructor.attributeNameForProperty(o)),this.__serializing=!1}_valueToNodeAttribute(o,e,i){const a=this._serializeValue(e);(i==="class"||i==="name"||i==="slot")&&(o=k(o)),a===void 0?o.removeAttribute(i):o.setAttribute(i,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(o){switch(typeof o){case"boolean":return o?"":void 0;default:return o!=null?o.toString():void 0}}_deserializeValue(o,e){switch(e){case Boolean:return o!==null;case Number:return Number(o);default:return o}}}return r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Re={};let nt=HTMLElement.prototype;for(;nt;){let t=Object.getOwnPropertyNames(nt);for(let r=0;r<t.length;r++)Re[t[r]]=!0;nt=Object.getPrototypeOf(nt)}const oi=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function si(t,r){if(!Re[r]){let s=t[r];s!==void 0&&(t.__data?t._setPendingProperty(r,s):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[r]=s))}}const ai=W(t=>{const r=Le(t);class s extends r{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let i=0;i<e.length;i++)this.prototype._createPropertyAccessor(Me(e[i]))}static attributeNameForProperty(e){return mt(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let i in e)this._setProperty(i,e[i])}_ensureAttribute(e,i){const a=this;a.hasAttribute(e)||this._valueToNodeAttribute(a,i,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e){if(oi(e))return e;try{return JSON.stringify(e)}catch{return""}}default:return super._serializeValue(e)}}_deserializeValue(e,i){let a;switch(i){case Object:try{a=JSON.parse(e)}catch{a=e}break;case Array:try{a=JSON.parse(e)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:a=isNaN(e)?String(e):Number(e),a=new Date(a);break;default:a=super._deserializeValue(e,i);break}return a}_definePropertyAccessor(e,i){si(this,e),super._definePropertyAccessor(e,i)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return s});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ni={"dom-if":!0,"dom-repeat":!0};let Zt=!1,Kt=!1;function li(){if(!Zt){Zt=!0;const t=document.createElement("textarea");t.placeholder="a",Kt=t.placeholder===t.textContent}return Kt}function ci(t){li()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const di=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:r=>r});return(r,s,o)=>{const e=s.getAttribute(o);if(t&&o.startsWith("on-")){r.setAttribute(o,t.createScript(e,o));return}r.setAttribute(o,e)}})();function ui(t){let r=t.getAttribute("is");if(r&&ni[r]){let s=t;for(s.removeAttribute("is"),t=s.ownerDocument.createElement(r),s.parentNode.replaceChild(t,s),t.appendChild(s);s.attributes.length;){const{name:o}=s.attributes[0];di(t,s,o),s.removeAttribute(o)}}return t}function He(t,r){let s=r.parentInfo&&He(t,r.parentInfo);if(s){for(let o=s.firstChild,e=0;o;o=o.nextSibling)if(r.parentIndex===e++)return o}else return t}function hi(t,r,s,o){o.id&&(r[o.id]=s)}function pi(t,r,s){if(s.events&&s.events.length)for(let o=0,e=s.events,i;o<e.length&&(i=e[o]);o++)t._addMethodEventListenerToNode(r,i.name,i.value,t)}function fi(t,r,s,o){s.templateInfo&&(r._templateInfo=s.templateInfo,r._parentTemplateInfo=o)}function mi(t,r,s){return t=t._methodHost||t,function(e){t[s]?t[s](e,e.detail):console.warn("listener method `"+s+"` not defined")}}const _i=W(t=>{class r extends t{static _parseTemplate(o,e){if(!o._templateInfo){let i=o._templateInfo={};i.nodeInfoList=[],i.nestedTemplate=!!e,i.stripWhiteSpace=e&&e.stripWhiteSpace||o.hasAttribute&&o.hasAttribute("strip-whitespace"),this._parseTemplateContent(o,i,{parent:null})}return o._templateInfo}static _parseTemplateContent(o,e,i){return this._parseTemplateNode(o.content,e,i)}static _parseTemplateNode(o,e,i){let a=!1,n=o;return n.localName=="template"&&!n.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(n,e,i)||a:n.localName==="slot"&&(e.hasInsertionPoint=!0),ci(n),n.firstChild&&this._parseTemplateChildNodes(n,e,i),n.hasAttributes&&n.hasAttributes()&&(a=this._parseTemplateNodeAttributes(n,e,i)||a),a||i.noted}static _parseTemplateChildNodes(o,e,i){if(!(o.localName==="script"||o.localName==="style"))for(let a=o.firstChild,n=0,l;a;a=l){if(a.localName=="template"&&(a=ui(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let d=l;for(;d&&d.nodeType===Node.TEXT_NODE;)a.textContent+=d.textContent,l=d.nextSibling,o.removeChild(d),d=l;if(e.stripWhiteSpace&&!a.textContent.trim()){o.removeChild(a);continue}}let c={parentIndex:n,parentInfo:i};this._parseTemplateNode(a,e,c)&&(c.infoIndex=e.nodeInfoList.push(c)-1),a.parentNode&&n++}}static _parseTemplateNestedTemplate(o,e,i){let a=o,n=this._parseTemplate(a,e);return(n.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),i.templateInfo=n,!0}static _parseTemplateNodeAttributes(o,e,i){let a=!1,n=Array.from(o.attributes);for(let l=n.length-1,c;c=n[l];l--)a=this._parseTemplateNodeAttribute(o,e,i,c.name,c.value)||a;return a}static _parseTemplateNodeAttribute(o,e,i,a,n){return a.slice(0,3)==="on-"?(o.removeAttribute(a),i.events=i.events||[],i.events.push({name:a.slice(3),value:n}),!0):a==="id"?(i.id=n,!0):!1}static _contentForTemplate(o){let e=o._templateInfo;return e&&e.content||o.content}_stampTemplate(o,e){o&&!o.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(o),e=e||this.constructor._parseTemplate(o);let i=e.nodeInfoList,a=e.content||o.content,n=document.importNode(a,!0);n.__noInsertionPoint=!e.hasInsertionPoint;let l=n.nodeList=new Array(i.length);n.$={};for(let c=0,d=i.length,u;c<d&&(u=i[c]);c++){let h=l[c]=He(n,u);hi(this,n.$,h,u),fi(this,h,u,e),pi(this,h,u)}return n=n,n}_addMethodEventListenerToNode(o,e,i,a){a=a||o;let n=mi(a,e,i);return this._addEventListenerToNode(o,e,n),n}_addEventListenerToNode(o,e,i){o.addEventListener(e,i)}_removeEventListenerFromNode(o,e,i){o.removeEventListener(e,i)}}return r});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let tt=0;const et=[],f={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Ie="__computeInfo",yi=/[A-Z]/;function gt(t,r,s){let o=t[r];if(!o)o=t[r]={};else if(!t.hasOwnProperty(r)&&(o=t[r]=Object.create(t[r]),s))for(let e in o){let i=o[e],a=o[e]=Array(i.length);for(let n=0;n<i.length;n++)a[n]=i[n]}return o}function X(t,r,s,o,e,i){if(r){let a=!1;const n=tt++;for(let l in s){let c=e?R(l):l,d=r[c];if(d)for(let u=0,h=d.length,m;u<h&&(m=d[u]);u++)(!m.info||m.info.lastRun!==n)&&(!e||Ft(l,m.trigger))&&(m.info&&(m.info.lastRun=n),m.fn(t,l,s,o,m.info,e,i),a=!0)}return a}return!1}function gi(t,r,s,o,e,i,a,n){let l=!1,c=a?R(o):o,d=r[c];if(d)for(let u=0,h=d.length,m;u<h&&(m=d[u]);u++)(!m.info||m.info.lastRun!==s)&&(!a||Ft(o,m.trigger))&&(m.info&&(m.info.lastRun=s),m.fn(t,o,e,i,m.info,a,n),l=!0);return l}function Ft(t,r){if(r){let s=r.name;return s==t||!!(r.structured&&Zr(s,t))||!!(r.wildcard&&ut(s,t))}else return!0}function Xt(t,r,s,o,e){let i=typeof e.method=="string"?t[e.method]:e.method,a=e.property;i?i.call(t,t.__data[a],o[a]):e.dynamicFn||console.warn("observer method `"+e.method+"` not defined")}function vi(t,r,s,o,e){let i=t[f.NOTIFY],a,n=tt++;for(let c in r)r[c]&&(i&&gi(t,i,n,c,s,o,e)||e&&wi(t,c,s))&&(a=!0);let l;a&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function wi(t,r,s){let o=R(r);if(o!==r){let e=mt(o)+"-changed";return De(t,e,s[r],r),!0}return!1}function De(t,r,s,o){let e={value:s,queueProperty:!0};o&&(e.path=o),k(t).dispatchEvent(new CustomEvent(r,{detail:e}))}function bi(t,r,s,o,e,i){let n=(i?R(r):r)!=r?r:null,l=n?y(t,n):t.__data[r];n&&l===void 0&&(l=s[r]),De(t,e.eventName,l,n)}function Pi(t,r,s,o,e){let i,a=t.detail,n=a&&a.path;n?(o=ht(s,o,n),i=a&&a.value):i=t.currentTarget[s],i=e?!i:i,(!r[f.READ_ONLY]||!r[f.READ_ONLY][o])&&r._setPendingPropertyOrPath(o,i,!0,!!n)&&(!a||!a.queueProperty)&&r._invalidateProperties()}function Ci(t,r,s,o,e){let i=t.__data[r];ct&&(i=ct(i,e.attrName,"attribute",t)),t._propertyToAttribute(r,e.attrName,i)}function xi(t,r,s,o){let e=t[f.COMPUTE];if(e)if(wr){tt++;const i=Ti(t),a=[];for(let l in r)Qt(l,e,a,i,o);let n;for(;n=a.shift();)Ve(t,"",r,s,n)&&Qt(n.methodInfo,e,a,i,o);Object.assign(s,t.__dataOld),Object.assign(r,t.__dataPending),t.__dataPending=null}else{let i=r;for(;X(t,e,i,s,o);)Object.assign(s,t.__dataOld),Object.assign(r,t.__dataPending),i=t.__dataPending,t.__dataPending=null}}const Si=(t,r,s)=>{let o=0,e=r.length-1,i=-1;for(;o<=e;){const a=o+e>>1,n=s.get(r[a].methodInfo)-s.get(t.methodInfo);if(n<0)o=a+1;else if(n>0)e=a-1;else{i=a;break}}i<0&&(i=e+1),r.splice(i,0,t)},Qt=(t,r,s,o,e)=>{const i=e?R(t):t,a=r[i];if(a)for(let n=0;n<a.length;n++){const l=a[n];l.info.lastRun!==tt&&(!e||Ft(t,l.trigger))&&(l.info.lastRun=tt,Si(l.info,s,o))}};function Ti(t){let r=t.constructor.__orderedComputedDeps;if(!r){r=new Map;const s=t[f.COMPUTE];let{counts:o,ready:e,total:i}=Ei(t),a;for(;a=e.shift();){r.set(a,r.size);const n=s[a];n&&n.forEach(l=>{const c=l.info.methodInfo;--i,--o[c]===0&&e.push(c)})}i!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=r}return r}function Ei(t){const r=t[Ie],s={},o=t[f.COMPUTE],e=[];let i=0;for(let a in r){const n=r[a];i+=s[a]=n.args.filter(l=>!l.literal).length+(n.dynamicFn?1:0)}for(let a in o)r[a]||e.push(a);return{counts:s,ready:e,total:i}}function Ve(t,r,s,o,e){let i=Ot(t,r,s,o,e);if(i===et)return!1;let a=e.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,i,!0):(t[a]=i,!1)}function zi(t,r,s){let o=t.__dataLinkedPaths;if(o){let e;for(let i in o){let a=o[i];ut(i,r)?(e=ht(i,a,r),t._setPendingPropertyOrPath(e,s,!0,!0)):ut(a,r)&&(e=ht(a,i,r),t._setPendingPropertyOrPath(e,s,!0,!0))}}}function vt(t,r,s,o,e,i,a){s.bindings=s.bindings||[];let n={kind:o,target:e,parts:i,literal:a,isCompound:i.length!==1};if(s.bindings.push(n),ki(n)){let{event:c,negate:d}=n.parts[0];n.listenerEvent=c||mt(e)+"-changed",n.listenerNegate=d}let l=r.nodeInfoList.length;for(let c=0;c<n.parts.length;c++){let d=n.parts[c];d.compoundIndex=c,Oi(t,r,n,d,l)}}function Oi(t,r,s,o,e){if(!o.literal)if(s.kind==="attribute"&&s.target[0]==="-")console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let i=o.dependencies,a={index:e,binding:s,part:o,evaluator:t};for(let n=0;n<i.length;n++){let l=i[n];typeof l=="string"&&(l=$e(l),l.wildcard=!0),t._addTemplatePropertyEffect(r,l.rootProperty,{fn:Ai,info:a,trigger:l})}}}function Ai(t,r,s,o,e,i,a){let n=a[e.index],l=e.binding,c=e.part;if(i&&c.source&&r.length>c.source.length&&l.kind=="property"&&!l.isCompound&&n.__isPropertyEffectsClient&&n.__dataHasAccessor&&n.__dataHasAccessor[l.target]){let d=s[r];r=ht(c.source,l.target,r),n._setPendingPropertyOrPath(r,d,!1,!0)&&t._enqueueClient(n)}else{let d=e.evaluator._evaluateBinding(t,c,r,s,o,i);d!==et&&Mi(t,n,l,c,d)}}function Mi(t,r,s,o,e){if(e=Ni(r,e,s,o),ct&&(e=ct(e,s.target,s.kind,r)),s.kind=="attribute")t._valueToNodeAttribute(r,e,s.target);else{let i=s.target;r.__isPropertyEffectsClient&&r.__dataHasAccessor&&r.__dataHasAccessor[i]?(!r[f.READ_ONLY]||!r[f.READ_ONLY][i])&&r._setPendingProperty(i,e)&&t._enqueueClient(r):t._setUnmanagedPropertyToNode(r,i,e)}}function Ni(t,r,s,o){if(s.isCompound){let e=t.__dataCompoundStorage[s.target];e[o.compoundIndex]=r,r=e.join("")}return s.kind!=="attribute"&&(s.target==="textContent"||s.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(r=r??""),r}function ki(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function Li(t,r){let{nodeList:s,nodeInfoList:o}=r;if(o.length)for(let e=0;e<o.length;e++){let i=o[e],a=s[e],n=i.bindings;if(n)for(let l=0;l<n.length;l++){let c=n[l];Ri(a,c),Hi(a,t,c)}a.__dataHost=t}}function Ri(t,r){if(r.isCompound){let s=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),o=r.parts,e=new Array(o.length);for(let a=0;a<o.length;a++)e[a]=o[a].literal;let i=r.target;s[i]=e,r.literal&&r.kind=="property"&&(i==="className"&&(t=k(t)),t[i]=r.literal)}}function Hi(t,r,s){if(s.listenerEvent){let o=s.parts[0];t.addEventListener(s.listenerEvent,function(e){Pi(e,r,s.target,o.source,o.negate)})}}function te(t,r,s,o,e,i){i=r.static||i&&(typeof i!="object"||i[r.methodName]);let a={methodName:r.methodName,args:r.args,methodInfo:e,dynamicFn:i};for(let n=0,l;n<r.args.length&&(l=r.args[n]);n++)l.literal||t._addPropertyEffect(l.rootProperty,s,{fn:o,info:a,trigger:l});return i&&t._addPropertyEffect(r.methodName,s,{fn:o,info:a}),a}function Ot(t,r,s,o,e){let i=t._methodHost||t,a=i[e.methodName];if(a){let n=t._marshalArgs(e.args,r,s);return n===et?et:a.apply(i,n)}else e.dynamicFn||console.warn("method `"+e.methodName+"` not defined")}const Ii=[],Fe="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Di="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Vi="(?:'(?:[^'\\\\]|\\\\.)*')",Fi='(?:"(?:[^"\\\\]|\\\\.)*")',$i="(?:"+Vi+"|"+Fi+")",ee="(?:("+Fe+"|"+Di+"|"+$i+")\\s*)",Bi="(?:"+ee+"(?:,\\s*"+ee+")*)",ji="(?:\\(\\s*(?:"+Bi+"?)\\)\\s*)",Ui="("+Fe+"\\s*"+ji+"?)",qi="(\\[\\[|{{)\\s*",Yi="(?:]]|}})",Wi="(?:(!)\\s*)?",Ji=qi+Wi+Ui+Yi,re=new RegExp(Ji,"g");function ie(t){let r="";for(let s=0;s<t.length;s++){let o=t[s].literal;r+=o||""}return r}function wt(t){let r=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(r){let o={methodName:r[1],static:!0,args:Ii};if(r[2].trim()){let e=r[2].replace(/\\,/g,"&comma;").split(",");return Gi(e,o)}else return o}return null}function Gi(t,r){return r.args=t.map(function(s){let o=$e(s);return o.literal||(r.static=!1),o},this),r}function $e(t){let r=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:r,value:"",literal:!1},o=r[0];switch(o==="-"&&(o=r[1]),o>="0"&&o<="9"&&(o="#"),o){case"'":case'"':s.value=r.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(r),s.literal=!0;break}return s.literal||(s.rootProperty=R(r),s.structured=Et(r),s.structured&&(s.wildcard=r.slice(-2)==".*",s.wildcard&&(s.name=r.slice(0,-2)))),s}function oe(t,r,s){let o=y(t,s);return o===void 0&&(o=r[s]),o}function Be(t,r,s,o){const e={indexSplices:o};xt&&!t._overrideLegacyUndefined&&(r.splices=e),t.notifyPath(s+".splices",e),t.notifyPath(s+".length",r.length),xt&&!t._overrideLegacyUndefined&&(e.indexSplices=[])}function G(t,r,s,o,e,i){Be(t,r,s,[{index:o,addedCount:e,removed:i,object:r,type:"splice"}])}function Zi(t){return t[0].toUpperCase()+t.substring(1)}const Ki=W(t=>{const r=_i(ai(t));class s extends r{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return f}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Z.length){let e=Z[Z.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let i=this[f.READ_ONLY];for(let a in e)(!i||!i[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=e[a])}_addPropertyEffect(e,i,a){this._createPropertyAccessor(e,i==f.READ_ONLY);let n=gt(this,i,!0)[e];n||(n=this[i][e]=[]),n.push(a)}_removePropertyEffect(e,i,a){let n=gt(this,i,!0)[e],l=n.indexOf(a);l>=0&&n.splice(l,1)}_hasPropertyEffect(e,i){let a=this[i];return!!(a&&a[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,f.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,f.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,f.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,f.COMPUTE)}_setPendingPropertyOrPath(e,i,a,n){if(n||R(Array.isArray(e)?e[0]:e)!==e){if(!n){let l=y(this,e);if(e=Gt(this,e,i),!e||!super._shouldPropertyChange(e,i,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,i,a))return zi(this,e,i),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,i,a);this[e]=i}return!1}_setUnmanagedPropertyToNode(e,i,a){(a!==e[i]||typeof a=="object")&&(i==="className"&&(e=k(e)),e[i]=a)}_setPendingProperty(e,i,a){let n=this.__dataHasPaths&&Et(e),l=n?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,i,l[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=i:this.__data[e]=i,this.__dataPending[e]=i,(n||this[f.NOTIFY]&&this[f.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=a),!0):!1}_setProperty(e,i){this._setPendingProperty(e,i,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let i=0;i<e.length;i++){let a=e[i];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,i){for(let a in e)(i||!this[f.READ_ONLY]||!this[f.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,e[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,i,a){let n=this.__dataHasPaths;this.__dataHasPaths=!1;let l;xi(this,i,a,n),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(i,a,n),this._flushClients(),X(this,this[f.REFLECT],i,a,n),X(this,this[f.OBSERVE],i,a,n),l&&vi(this,l,i,a,n),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,i,a){this[f.PROPAGATE]&&X(this,this[f.PROPAGATE],e,i,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,i,a)}_runEffectsForTemplate(e,i,a,n){const l=(c,d)=>{X(this,e.propertyEffects,c,a,d,e.nodeList);for(let u=e.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,c,a,d)};e.runEffects?e.runEffects(l,i,n):l(i,n)}linkPaths(e,i){e=K(e),i=K(i),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=i}unlinkPaths(e){e=K(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,i){let a={path:""},n=y(this,e,a);Be(this,n,a.path,i)}get(e,i){return y(i||this,e)}set(e,i,a){a?Gt(a,e,i):(!this[f.READ_ONLY]||!this[f.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,i,!0)&&this._invalidateProperties()}push(e,...i){let a={path:""},n=y(this,e,a),l=n.length,c=n.push(...i);return i.length&&G(this,n,a.path,l,i.length,[]),c}pop(e){let i={path:""},a=y(this,e,i),n=!!a.length,l=a.pop();return n&&G(this,a,i.path,a.length,0,[l]),l}splice(e,i,a,...n){let l={path:""},c=y(this,e,l);i<0?i=c.length-Math.floor(-i):i&&(i=Math.floor(i));let d;return arguments.length===2?d=c.splice(i):d=c.splice(i,a,...n),(n.length||d.length)&&G(this,c,l.path,i,n.length,d),d}shift(e){let i={path:""},a=y(this,e,i),n=!!a.length,l=a.shift();return n&&G(this,a,i.path,0,0,[l]),l}unshift(e,...i){let a={path:""},n=y(this,e,a),l=n.unshift(...i);return i.length&&G(this,n,a.path,0,i.length,[]),l}notifyPath(e,i){let a;if(arguments.length==1){let n={path:""};i=y(this,e,n),a=n.path}else Array.isArray(e)?a=K(e):a=e;this._setPendingPropertyOrPath(a,i,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,i){this._addPropertyEffect(e,f.READ_ONLY),i&&(this["_set"+Zi(e)]=function(a){this._setProperty(e,a)})}_createPropertyObserver(e,i,a){let n={property:e,method:i,dynamicFn:!!a};this._addPropertyEffect(e,f.OBSERVE,{fn:Xt,info:n,trigger:{name:e}}),a&&this._addPropertyEffect(i,f.OBSERVE,{fn:Xt,info:n,trigger:{name:i}})}_createMethodObserver(e,i){let a=wt(e);if(!a)throw new Error("Malformed observer expression '"+e+"'");te(this,a,f.OBSERVE,Ot,null,i)}_createNotifyingProperty(e){this._addPropertyEffect(e,f.NOTIFY,{fn:bi,info:{eventName:mt(e)+"-changed",property:e}})}_createReflectedProperty(e){let i=this.constructor.attributeNameForProperty(e);i[0]==="-"?console.warn("Property "+e+" cannot be reflected to attribute "+i+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,f.REFLECT,{fn:Ci,info:{attrName:i}})}_createComputedProperty(e,i,a){let n=wt(i);if(!n)throw new Error("Malformed computed expression '"+i+"'");const l=te(this,n,f.COMPUTE,Ve,e,a);gt(this,Ie)[e]=l}_marshalArgs(e,i,a){const n=this.__data,l=[];for(let c=0,d=e.length;c<d;c++){let{name:u,structured:h,wildcard:m,value:_,literal:C}=e[c];if(!C)if(m){const x=ut(u,i),g=oe(n,a,x?i:u);_={path:x?i:u,value:g,base:x?y(n,u):g}}else _=h?oe(n,a,u):n[u];if(xt&&!this._overrideLegacyUndefined&&_===void 0&&e.length>1)return et;l[c]=_}return l}static addPropertyEffect(e,i,a){this.prototype._addPropertyEffect(e,i,a)}static createPropertyObserver(e,i,a){this.prototype._createPropertyObserver(e,i,a)}static createMethodObserver(e,i){this.prototype._createMethodObserver(e,i)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,i){this.prototype._createReadOnlyProperty(e,i)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,i,a){this.prototype._createComputedProperty(e,i,a)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,i){let a=this.constructor._parseTemplate(e),n=this.__preBoundTemplateInfo==a;if(!n)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(i)if(a=Object.create(a),a.wasPreBound=n,!this.__templateInfo)this.__templateInfo=a;else{const l=e._parentTemplateInfo||this.__templateInfo,c=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=c,c?c.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(e,i,a){let n=e.hostProps=e.hostProps||{};n[i]=!0;let l=e.propertyEffects=e.propertyEffects||{};(l[i]=l[i]||[]).push(a)}_stampTemplate(e,i){i=i||this._bindTemplate(e,!0),Z.push(this);let a=super._stampTemplate(e,i);if(Z.pop(),i.nodeList=a.nodeList,!i.wasPreBound){let n=i.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)n.push(l)}return a.templateInfo=i,Li(this,i),this.__dataClientsReady&&(this._runEffectsForTemplate(i,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(e){const i=e.templateInfo,{previousSibling:a,nextSibling:n,parent:l}=i;a?a.nextSibling=n:l&&(l.firstChild=n),n?n.previousSibling=a:l&&(l.lastChild=a),i.nextSibling=i.previousSibling=null;let c=i.childNodes;for(let d=0;d<c.length;d++){let u=c[d];k(k(u).parentNode).removeChild(u)}}static _parseTemplateNode(e,i,a){let n=r._parseTemplateNode.call(this,e,i,a);if(e.nodeType===Node.TEXT_NODE){let l=this._parseBindings(e.textContent,i);l&&(e.textContent=ie(l)||" ",vt(this,i,a,"text","textContent",l),n=!0)}return n}static _parseTemplateNodeAttribute(e,i,a,n,l){let c=this._parseBindings(l,i);if(c){let d=n,u="property";yi.test(n)?u="attribute":n[n.length-1]=="$"&&(n=n.slice(0,-1),u="attribute");let h=ie(c);return h&&u=="attribute"&&(n=="class"&&e.hasAttribute("class")&&(h+=" "+e.getAttribute(n)),e.setAttribute(n,h)),u=="attribute"&&d=="disable-upgrade$"&&e.setAttribute(n,""),e.localName==="input"&&d==="value"&&e.setAttribute(d,""),e.removeAttribute(d),u==="property"&&(n=Me(n)),vt(this,i,a,u,n,c,h),!0}else return r._parseTemplateNodeAttribute.call(this,e,i,a,n,l)}static _parseTemplateNestedTemplate(e,i,a){let n=r._parseTemplateNestedTemplate.call(this,e,i,a);const l=e.parentNode,c=a.templateInfo,d=l.localName==="dom-if",u=l.localName==="dom-repeat";jt&&(d||u)&&(l.removeChild(e),a=a.parentInfo,a.templateInfo=c,a.noted=!0,n=!1);let h=c.hostProps;if(br&&d)h&&(i.hostProps=Object.assign(i.hostProps||{},h),jt||(a.parentInfo.noted=!0));else{let m="{";for(let _ in h){let C=[{mode:m,source:_,dependencies:[_],hostProp:!0}];vt(this,i,a,"property","_host_"+_,C)}}return n}static _parseBindings(e,i){let a=[],n=0,l;for(;(l=re.exec(e))!==null;){l.index>n&&a.push({literal:e.slice(n,l.index)});let c=l[1][0],d=!!l[2],u=l[3].trim(),h=!1,m="",_=-1;c=="{"&&(_=u.indexOf("::"))>0&&(m=u.substring(_+2),u=u.substring(0,_),h=!0);let C=wt(u),x=[];if(C){let{args:g,methodName:v}=C;for(let _t=0;_t<g.length;_t++){let $t=g[_t];$t.literal||x.push($t)}let H=i.dynamicFns;(H&&H[v]||C.static)&&(x.push(v),C.dynamicFn=!0)}else x.push(u);a.push({source:u,mode:c,negate:d,customEvent:h,signature:C,dependencies:x,event:m}),n=re.lastIndex}if(n&&n<e.length){let c=e.substring(n);c&&a.push({literal:c})}return a.length?a:null}static _evaluateBinding(e,i,a,n,l,c){let d;return i.signature?d=Ot(e,a,n,l,i.signature):a!=i.source?d=y(e,i.source):c&&Et(a)?d=y(e,a):d=e.__data[a],i.negate&&(d=!d),d}}return s}),Z=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Xi(t){const r={};for(let s in t){const o=t[s];r[s]=typeof o=="function"?{type:o}:o}return r}const Qi=W(t=>{const r=Le(t);function s(i){const a=Object.getPrototypeOf(i);return a.prototype instanceof e?a:null}function o(i){if(!i.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",i))){let a=null;if(i.hasOwnProperty(JSCompiler_renameProperty("properties",i))){const n=i.properties;n&&(a=Xi(n))}i.__ownProperties=a}return i.__ownProperties}class e extends r{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(n=>this.prototype._addPropertyToAttributeMap(n)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=s(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=o(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=s(this);this.__properties=Object.assign({},a&&a._properties,o(this))}return this.__properties}static typeForProperty(a){const n=this._properties[a];return n&&n.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return e});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const to="3.5.2",se=window.ShadyCSS&&window.ShadyCSS.cssBuild,eo=W(t=>{const r=Qi(Ki(t));function s(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let d in c){let u=c[d];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[d]=u)}}return l.__propertyDefaults}function o(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function e(l,c,d,u){d.computed&&(d.readOnly=!0),d.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,d.computed,u)),d.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!d.computed):d.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),d.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):d.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),d.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):d.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),d.observer&&l._createPropertyObserver(c,d.observer,u[d.observer]),l._addPropertyToAttributeMap(c)}function i(l,c,d,u){if(!se){const h=c.content.querySelectorAll("style"),m=Dt(c),_=zr(d),C=c.content.firstElementChild;for(let g=0;g<_.length;g++){let v=_[g];v.textContent=l._processStyleText(v.textContent,u),c.content.insertBefore(v,C)}let x=0;for(let g=0;g<m.length;g++){let v=m[g],H=h[x];H!==v?(v=v.cloneNode(!0),H.parentNode.insertBefore(v,H)):x++,v.textContent=l._processStyleText(v.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,d),Pr&&se&&fr){const h=c.content.querySelectorAll("style");if(h){let m="";Array.from(h).forEach(_=>{m+=_.textContent,_.parentNode.removeChild(_)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(m)}}}function a(l){let c=null;if(l&&(!Ct||_r)&&(c=Y.import(l,"template"),Ct&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class n extends r{static get polymerElementVersion(){return to}static _finalizeClass(){r._finalizeClass.call(this);const c=o(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):yr||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let d in c)e(this.prototype,d,c[d],c)}static createObservers(c,d){const u=this.prototype;for(let h=0;h<c.length;h++)u._createMethodObserver(c[h],d)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Ht(c.url);else{const d=Y.import(this.is);this._importPath=d&&d.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=mr,this.importPath=this.constructor.importPath;let c=s(this.constructor);if(c)for(let d in c){let u=c[d];if(this._canApplyPropertyDefault(d)){let h=typeof u.value=="function"?u.value.call(this):u.value;this._hasAccessor(d)?this._setPendingProperty(d,h,!0):this[d]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,d){return Rt(c,d)}static _finalizeTemplate(c){const d=this.prototype._template;if(d&&!d.__polymerFinalized){d.__polymerFinalized=!0;const u=this.importPath,h=u?Q(u):"";i(this,d,c,h),this.prototype._bindTemplate(d)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const d=k(this);if(d.attachShadow)return c?(d.shadowRoot||(d.attachShadow({mode:"open",shadyUpgradeFragment:c}),d.shadowRoot.appendChild(c),this.constructor._styleSheet&&(d.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),vr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(d.shadowRoot),d.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,d){return!d&&this.importPath&&(d=Q(this.importPath)),Q(c,d)}static _parseTemplateContent(c,d,u){return d.dynamicFns=d.dynamicFns||this._properties,r._parseTemplateContent.call(this,c,d,u)}static _addTemplatePropertyEffect(c,d,u){return gr&&!(d in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${d}' used in template but not declared in 'properties'; attribute will not be observed.`),r._addTemplatePropertyEffect.call(this,c,d,u)}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ae=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class je{constructor(r,s){qe(r,s);const o=s.reduce((e,i,a)=>e+Ue(i)+r[a+1],r[0]);this.value=o.toString()}toString(){return this.value}}function Ue(t){if(t instanceof je)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function ro(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof je)return Ue(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const Io=function(r,...s){qe(r,s);const o=document.createElement("template");let e=s.reduce((i,a,n)=>i+ro(a)+r[n+1],r[0]);return ae&&(e=ae.createHTML(e)),o.innerHTML=e,o},qe=(t,r)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||r.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const io=eo(HTMLElement),oo=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,lt=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function so(){function t(){return!0}return Ye(t)}function ao(){try{return no()?!0:lo()?lt?!co():!so():!1}catch{return!1}}function no(){return localStorage.getItem("vaadin.developmentmode.force")}function lo(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function co(){return!!(lt&&Object.keys(lt).map(r=>lt[r]).filter(r=>r.productionMode).length>0)}function Ye(t,r){if(typeof t!="function")return;const s=oo.exec(t.toString());if(s)try{t=new Function(s[1])}catch(o){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",o)}return t(r)}window.Vaadin=window.Vaadin||{};const ne=function(t,r){if(window.Vaadin.developmentMode)return Ye(t,r)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=ao());function uo(){/*! vaadin-dev-mode:start
  (function () {
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
};

var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);

    this.now = new Date().getTime();
    this.logger = logger;
  }

  createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }

          jQuery.toString = function () {
            return _jQuery.toString();
          };

          return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];

      types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });

      var previousStats = JSON.stringify(storedStats);

      this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);

      var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });

      var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
}();

var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);

    this.key = key;
  }

  createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });

      return empty;
    }
  }]);
  return StatisticsStorage;
}();

var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);

    this.url = url;
    this.logger = logger;
  }

  createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;

      if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);

      var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
}();

var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);

    this.id = id;
  }

  createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
}();

var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);

    this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;

    this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }

  createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;

      if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

      if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }

      if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }

      this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);

      // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.2';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
}();

try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
} catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
}

}());

  vaadin-dev-mode:end **/}const ho=function(){if(typeof ne=="function")return ne(uo)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let le=0,We=0;const V=[];let At=!1;function po(){At=!1;const t=V.length;for(let r=0;r<t;r++){const s=V[r];if(s)try{s()}catch(o){setTimeout(()=>{throw o})}}V.splice(0,t),We+=t}const Do={after(t){return{run(r){return window.setTimeout(r,t)},cancel(r){window.clearTimeout(r)}}},run(t,r){return window.setTimeout(t,r)},cancel(t){window.clearTimeout(t)}},Vo={run(t){return window.requestAnimationFrame(t)},cancel(t){window.cancelAnimationFrame(t)}},fo={run(t){return window.requestIdleCallback?window.requestIdleCallback(t):window.setTimeout(t,16)},cancel(t){window.cancelIdleCallback?window.cancelIdleCallback(t):window.clearTimeout(t)}},Fo={run(t){At||(At=!0,queueMicrotask(()=>po())),V.push(t);const r=le;return le+=1,r},cancel(t){const r=t-We;if(r>=0){if(!V[r])throw new Error(`invalid async handle: ${t}`);V[r]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const rt=new Set;class ft{static debounce(r,s,o){return r instanceof ft?r._cancelAsync():r=new ft,r.setConfig(s,o),r}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(r,s){this._asyncModule=r,this._callback=s,this._timer=this._asyncModule.run(()=>{this._timer=null,rt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),rt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}}function mo(t){rt.add(t)}function _o(){const t=!!rt.size;return rt.forEach(r=>{try{r.flush()}catch(s){setTimeout(()=>{throw s})}}),t}const $o=()=>{let t;do t=_o();while(t)};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const z=[];function Mt(t,r,s=t.getAttribute("dir")){r?t.setAttribute("dir",r):s!=null&&t.removeAttribute("dir")}function Nt(){return document.documentElement.getAttribute("dir")}function yo(){const t=Nt();z.forEach(r=>{Mt(r,t)})}const go=new MutationObserver(yo);go.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const vo=t=>class extends t{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:s=>s||"",toAttribute:s=>s===""?null:s}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),Mt(this,Nt(),null))}attributeChangedCallback(s,o,e){if(super.attributeChangedCallback(s,o,e),s!=="dir")return;const i=Nt(),a=e===i&&z.indexOf(this)===-1,n=!e&&o&&z.indexOf(this)===-1;a||n?(this.__subscribe(),Mt(this,i,e)):e!==i&&o===i&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=z.includes(this),this.__unsubscribe()}_valueToNodeAttribute(s,o,e){e==="dir"&&o===""&&!s.hasAttribute("dir")||super._valueToNodeAttribute(s,o,e)}_attributeToProperty(s,o,e){s==="dir"&&!o?this.dir="":super._attributeToProperty(s,o,e)}__subscribe(){z.includes(this)||z.push(this)}__unsubscribe(){z.includes(this)&&z.splice(z.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){ho()};let bt;const ce=new Set,wo=t=>class extends vo(t){static finalize(){super.finalize();const{is:s}=this;s&&!ce.has(s)&&(window.Vaadin.registrations.push(this),ce.add(s),window.Vaadin.developmentModeCallback&&(bt=ft.debounce(bt,fo,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),mo(bt)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class kt extends rr{constructor(r){if(super(r),this.it=Pt,r.type!==ir.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===Pt||r==null)return this._t=void 0,this.it=r;if(r===or)return r;if(typeof r!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}kt.directiveName="unsafeHTML",kt.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Lt extends kt{}Lt.directiveName="unsafeSVG",Lt.resultType=2;const bo=sr(Lt);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function de(t){let r=Pt;if(t){const s=t.cloneNode(!0);s.removeAttribute("id"),r=ar`${bo(s.outerHTML)}`}return r}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N={},ue=new Set;function Je(t,r){return(t||"").replace(`${r}:`,"")}function he(t){return t?t.split(":")[0]||"vaadin":void 0}function pe(t,r){t._icons=[...t.querySelectorAll("[id]")].reduce((s,o)=>{const e=Je(o.id,r);return s[e]=o,s},{})}const Po=t=>class extends t{static get properties(){return{name:{type:String,observer:"__nameChanged",sync:!0},size:{type:Number,value:24,sync:!0}}}static get attachedIcons(){return ue}static getIconset(r){return N[r]}static getIconSvg(r,s){const o=s||he(r),e=this.getIconset(o);if(!r||!e)return{svg:de(null)};const i=Je(r,o),a=e._icons[i];return{preserveAspectRatio:a?a.getAttribute("preserveAspectRatio"):null,svg:de(a),size:e.size,viewBox:a?a.getAttribute("viewBox"):null}}static register(r,s,o){if(!N[r]){const e=document.createElement("vaadin-iconset");e.appendChild(o.content.cloneNode(!0)),N[r]=e,pe(e,r),e.size=s,e.name=r,e.__nameChanged(r)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:r}=this;N[r]=this,pe(this,r),this.__updateIcons(r)}__updateIcons(r){ue.forEach(s=>{r===he(s.icon)&&s._applyIcon()})}__nameChanged(r,s){s&&(N[r]=N[s],delete N[s]),r&&this.__updateIcons(r)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ge extends Po(wo(io)){static get template(){return null}static get is(){return"vaadin-iconset"}}Ee(Ge);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ze=document.createElement("template");Ze.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:drag-handle"><path d="M458 292c0 35-28 63-62 62C361 354 333 326 333 292s28-63 63-63c35 0 63 28 62 63Zm0 208c0 35-28 63-62 62-35 0-63-28-63-62s28-63 63-63c35 0 63 28 62 63Zm0 208c0 35-28 63-62 63-35 0-63-28-63-63s28-63 63-62c35 0 63 28 62 62Zm209-416c0 35-28 63-63 62S542 326 542 292s28-63 62-63S667 257 667 292Zm0 208c0 35-28 63-63 62S542 535 542 500s28-63 62-63 63 28 63 63Zm0 208c0 35-28 63-63 63S542 743 542 708s28-63 62-62 63 28 63 62Z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:resize-handle"><path d="M772 311c12 12 12 32 0 44L355 772c-12 12-32 12-44 0s-12-32 0-44L728 311c12-12 32-12 44 0Zm0 188c12 12 12 32 0 44l-229 229c-12 12-32 12-44 0-12-12-12-32 0-44l229-229c12-12 32-12 44 0Zm0 187c12 12 12 32 0 44l-42 42c-12 12-32 12-44 0-12-12-12-32 0-44l42-42c12-12 32-12 44 0Z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;Ge.register("lumo",1e3,Ze);function Co(t,r){switch(r.type){case"stateKeyChanged":const{value:s}=r;return{...t,key:s};default:return t}}const xo=()=>{};var S,F,A,T,$,B,j,it,ot,U,q,M,Ke,Xe,Qe;class So extends HTMLElement{constructor(){super();w(this,M);w(this,S);w(this,F,!1);w(this,A);w(this,T,Object.create(null));w(this,$,new Map);w(this,B,new Map);w(this,j,xo);w(this,it,new Map);w(this,ot);w(this,U);w(this,q);P(this,ot,{useState:this.useState.bind(this),useCustomEvent:this.useCustomEvent.bind(this),useContent:this.useContent.bind(this)}),P(this,U,st(this,M,Xe).bind(this)),st(this,M,Qe).call(this)}async connectedCallback(){P(this,A,J.createElement(p(this,U))),!(!this.dispatchEvent(new CustomEvent("flow-portal-add",{bubbles:!0,cancelable:!0,composed:!0,detail:{children:p(this,A),domNode:this}}))||p(this,S))&&(await p(this,q),P(this,S,nr.createRoot(this)),st(this,M,Ke).call(this),p(this,S).render(p(this,A)))}addReadyCallback(s,o){p(this,it).set(s,o)}async disconnectedCallback(){p(this,S)?(P(this,q,Promise.resolve()),await p(this,q),p(this,S).unmount(),P(this,S,void 0)):this.dispatchEvent(new CustomEvent("flow-portal-remove",{bubbles:!0,cancelable:!0,composed:!0,detail:{children:p(this,A),domNode:this}})),P(this,F,!1),P(this,A,void 0)}useState(s,o){if(p(this,$).has(s))return[p(this,T)[s],p(this,$).get(s)];const e=this[s]??o;p(this,T)[s]=e,Object.defineProperty(this,s,{enumerable:!0,get(){return p(this,T)[s]},set(n){p(this,T)[s]=n,p(this,j).call(this,{type:"stateKeyChanged",key:s,value:e})}});const i=this.useCustomEvent(`${s}-changed`,{detail:{value:e}}),a=n=>{p(this,T)[s]=n,i({value:n}),p(this,j).call(this,{type:"stateKeyChanged",key:s,value:n})};return p(this,$).set(s,a),[e,a]}useCustomEvent(s,o={}){if(!p(this,B).has(s)){const e=i=>{const a=i===void 0?o:{...o,detail:i},n=new CustomEvent(s,a);return this.dispatchEvent(n)};return p(this,B).set(s,e),e}return p(this,B).get(s)}useContent(s){return J.useEffect(()=>{var o;(o=p(this,it).get(s))==null||o()},[]),J.createElement("flow-content-container",{name:s,style:{display:"contents"}})}}S=new WeakMap,F=new WeakMap,A=new WeakMap,T=new WeakMap,$=new WeakMap,B=new WeakMap,j=new WeakMap,it=new WeakMap,ot=new WeakMap,U=new WeakMap,q=new WeakMap,M=new WeakSet,Ke=function(){p(this,F)||!p(this,S)||(p(this,S).render(J.createElement(p(this,U))),P(this,F,!0))},Xe=function(){const[s,o]=J.useReducer(Co,p(this,T));return P(this,T,s),P(this,j,o),this.render(p(this,ot))},Qe=function(){let s=window.Vaadin||{};s.developmentMode&&(s.registrations=s.registrations||[],s.registrations.push({is:"ReactAdapterElement",version:"24.6.5"}))};class To extends So{render(){return lr.jsx(cr,{})}}customElements.define("react-router-outlet",To);const Eo=t=>{const r=[];return t==="31123a1714771dd481d8c51f26a06dad6384c17b6623dc1ab45fe65bf8fd6c69"&&r.push(dr(()=>import("./chunk-0254c5147f5bfcfffdbde6e25b37cdb43e3330b3722045bbe1336439c6b87002-CdQ9w6hd.js"),__vite__mapDeps([0,1]),import.meta.url)),Promise.all(r)};window.Vaadin=window.Vaadin||{};window.Vaadin.Flow=window.Vaadin.Flow||{};window.Vaadin.Flow.loadOnDemand=Eo;window.Vaadin.Flow.resetFocus=()=>{let t=document.activeElement;for(;t&&t.shadowRoot;)t=t.shadowRoot.activeElement;return!t||t.blur()||t.focus()||!0};const Uo=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{Uo as A,vo as D,wo as E,Ki as P,No as T,gr as a,io as b,Ao as c,W as d,L as e,br as f,xe as g,Io as h,Ho as i,Ee as j,ft as k,yr as l,ri as m,mo as n,Vo as o,$o as p,Fo as q,R as r,Ct as s,fo as t,pr as u,Do as v,k as w,Lo as x,Or as y,Ro as z};
