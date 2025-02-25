var ds=Object.defineProperty;var hs=(o,i,e)=>i in o?ds(o,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[i]=e;var N=(o,i,e)=>hs(o,typeof i!="symbol"?i+"":i,e);import{l as cs,u as us,d as $,P as Ki,w as B,s as Xi,a as _s,f as ps,r as Qi,b as w,m as fs,c as ms,h as I,i as gs,e as vs,g as x,j as A,T as k,D as M,k as O,n as bs,o as X,p as qe,q as j,t as ys,v as K,E as V,x as $t,y as mt,z as Cs}from"./generated-flow-imports-mvH5vh3s.js";import{b as Zi,t as se,e as Ji,T as We,B as Jt,x as eo,i as g,E as xs}from"./indexhtml-DgdtlDGv.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=(o,i)=>(o==null?void 0:o._$litType$)!==void 0,to=o=>o.strings===void 0,As={},Is=(o,i=As)=>o._$AH=i;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class J{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(i,e){this._asyncModule=i,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,je.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),je.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(i,e,t){return i instanceof J?i._cancelAsync():i=new J,i.setConfig(e,t),i}}let je=new Set;const Es=function(o){je.add(o)},Ss=function(){const o=!!je.size;return je.forEach(i=>{try{i.flush()}catch(e){setTimeout(()=>{throw e})}}),o};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ts=function(){let o,i;do o=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),i=Ss();while(o||i)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ki=!1;function ks(){if(cs&&!us){if(!ki){ki=!0;const o=document.createElement("style");o.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(o)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ei(o,i,e,t,s){let r;s&&(r=typeof e=="object"&&e!==null,r&&(t=o.__dataTemp[i]));let n=t!==e&&(t===t||e===e);return r&&n&&(o.__dataTemp[i]=e),n}const ti=$(o=>{class i extends o{_shouldPropertyChange(t,s,r){return ei(this,t,s,r,!0)}}return i});$(o=>{class i extends o{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(t,s,r){return ei(this,t,s,r,this.mutableData)}}return i});ti._mutablePropertyChange=ei;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Vt=null;function Ht(){return Vt}Ht.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ht,writable:!0}});const io=Ki(Ht),zs=ti(io);function Os(o,i){Vt=o,Object.setPrototypeOf(o,i.prototype),new i,Vt=null}const Ps=Ki(class{});function oo(o,i){for(let e=0;e<i.length;e++){let t=i[e];if(!!o!=!!t.__hideTemplateChildren__)if(t.nodeType===Node.TEXT_NODE)o?(t.__polymerTextContent__=t.textContent,t.textContent=""):t.textContent=t.__polymerTextContent__;else if(t.localName==="slot")if(o)t.__polymerReplaced__=document.createComment("hidden-slot"),B(B(t).parentNode).replaceChild(t.__polymerReplaced__,t);else{const s=t.__polymerReplaced__;s&&B(B(s).parentNode).replaceChild(t,s)}else t.style&&(o?(t.__polymerDisplay__=t.style.display,t.style.display="none"):t.style.display=t.__polymerDisplay__);t.__hideTemplateChildren__=o,t._showHideChildren&&t._showHideChildren(o)}}class he extends Ps{constructor(i){super(),this._configureProperties(i),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let s=this.root.firstChild;s;s=s.nextSibling)e.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let t=this.__templatizeOptions;(i&&t.instanceProps||!t.instanceProps)&&this._enableProperties()}_configureProperties(i){if(this.__templatizeOptions.forwardHostProp)for(let t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(let t in i)this._setPendingProperty(t,i[t])}forwardHostProp(i,e){this._setPendingPropertyOrPath(i,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(i,e,t){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(i,e,s=>{s.model=this,t(s)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(i,e,t)}}_showHideChildren(i){oo(i,this.children)}_setUnmanagedPropertyToNode(i,e,t){i.__hideTemplateChildren__&&i.nodeType==Node.TEXT_NODE&&e=="textContent"?i.__polymerTextContent__=t:super._setUnmanagedPropertyToNode(i,e,t)}get parentModel(){let i=this.__parentModel;if(!i){let e;i=this;do i=i.__dataHost.__dataHost;while((e=i.__templatizeOptions)&&!e.parentModel);this.__parentModel=i}return i}dispatchEvent(i){return!0}}he.prototype.__dataHost;he.prototype.__templatizeOptions;he.prototype._methodHost;he.prototype.__templatizeOwner;he.prototype.__hostProps;const Ls=ti(he);function zi(o){let i=o.__dataHost;return i&&i._methodHost||i}function Rs(o,i,e){let t=e.mutableData?Ls:he;qt.mixin&&(t=qt.mixin(t));let s=class extends t{};return s.prototype.__templatizeOptions=e,s.prototype._bindTemplate(o),Ns(s,o,i,e),s}function Ds(o,i,e,t){let s=e.forwardHostProp;if(s&&i.hasHostProps){const r=o.localName=="template";let n=i.templatizeTemplateClass;if(!n){if(r){let l=e.mutableData?zs:io;class h extends l{}n=i.templatizeTemplateClass=h}else{const l=o.constructor;class h extends l{}n=i.templatizeTemplateClass=h}let a=i.hostProps;for(let l in a)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:Fs(l,s)}),n.prototype._createNotifyingProperty("_host_"+l);_s&&t&&$s(i,e,t)}if(o.__dataProto&&Object.assign(o.__data,o.__dataProto),r)Os(o,n),o.__dataTemp={},o.__dataPending=null,o.__dataOld=null,o._enableProperties();else{Object.setPrototypeOf(o,n.prototype);const a=i.hostProps;for(let l in a)if(l="_host_"+l,l in o){const h=o[l];delete o[l],o.__data[l]=h}}}}function Fs(o,i){return function(t,s,r){i.call(t.__templatizeOwner,s.substring(6),r[s])}}function Ns(o,i,e,t){let s=e.hostProps||{};for(let r in t.instanceProps){delete s[r];let n=t.notifyInstanceProp;n&&o.prototype._addPropertyEffect(r,o.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Ms(r,n)})}if(t.forwardHostProp&&i.__dataHost)for(let r in s)e.hasHostProps||(e.hasHostProps=!0),o.prototype._addPropertyEffect(r,o.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Bs()})}function Ms(o,i){return function(t,s,r){i.call(t.__templatizeOwner,t,s,r[s])}}function Bs(){return function(i,e,t){i.__dataHost._setPendingPropertyOrPath("_host_"+e,t[e],!0,!0)}}function qt(o,i,e){if(Xi&&!zi(o))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},o.__templatizeOwner)throw new Error("A <template> can only be templatized once");o.__templatizeOwner=i;let s=(i?i.constructor:he)._parseTemplate(o),r=s.templatizeInstanceClass;r||(r=Rs(o,s,e),s.templatizeInstanceClass=r);const n=zi(o);Ds(o,s,e,n);let a=class extends r{};return a.prototype._methodHost=n,a.prototype.__dataHost=o,a.prototype.__templatizeOwner=i,a.prototype.__hostProps=s.hostProps,a=a,a}function $s(o,i,e){const t=e.constructor._properties,{propertyEffects:s}=o,{instanceProps:r}=i;for(let n in s)if(!t[n]&&!(r&&r[n])){const a=s[n];for(let l=0;l<a.length;l++){const{part:h}=a[l].info;if(!(h.signature&&h.signature.static)){console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class so extends w{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=J.debounce(this.__renderDebouncer,fs,()=>this.__render()),Es(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const i=B(this).parentNode;(!i||i.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!B(i).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),ks()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const i=this;let e=i._templateInfo?i:B(i).querySelector("template");if(!e){let t=new MutationObserver(()=>{if(B(this).querySelector("template"))t.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return t.observe(this,{childList:!0}),!1}this.__template=e}return!0}__ensureInstance(){let i=B(this).parentNode;if(this.__hasInstance()){let e=this.__getInstanceNodes();if(e&&e.length&&B(this).previousSibling!==e[e.length-1])for(let s=0,r;s<e.length&&(r=e[s]);s++)B(i).insertBefore(r,this)}else{if(!i||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(i)}return!0}render(){Ts()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!ms||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(i){}__teardownInstance(){}_showHideChildren(){}}class Vs extends so{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(i){const e=this.__dataHost||this;if(Xi&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const t=e._bindTemplate(this.__template,!0);t.runEffects=(s,r,n)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(a.changedProps,r)),s(r,n);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:s,changedProps:{}}),n)for(const l in r){const h=Qi(l);a.changedProps[h]=this.__dataHost[h]}else Object.assign(a.changedProps,r)},this.__instance=e._stampTemplate(this.__template,t),B(i).insertBefore(this.__instance,this)}__syncHostProperties(){const i=this.__syncInfo;i&&(this.__syncInfo=null,i.runEffects(i.changedProps,!1))}__teardownInstance(){const i=this.__dataHost||this;this.__instance&&(i._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const i=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==i&&(this.__instance.__hidden=i,oo(i,this.__instance.templateInfo.childNodes)),i||this.__syncHostProperties()}}class Hs extends so{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(i){this.__ctor||(this.__ctor=qt(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Qi(e)]=!0))}})),this.__instance=new this.__ctor,B(i).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let i=this.__instance.children;if(i&&i.length){let e=B(i[0]).parentNode;if(e){e=B(e);for(let t=0,s;t<i.length&&(s=i[t]);t++)e.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let i=this.__invalidProps;if(i){this.__invalidProps=null;for(let e in i)this.__instance._setPendingProperty(e,this.__dataHost[e]);this.__instance._flushProperties()}}_showHideChildren(){const i=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==i&&(this.__instance.__hidden=i,this.__instance._showHideChildren(i)),i||this.__syncHostProperties()}}const Oi=ps?Vs:Hs;customElements.define(Oi.is,Oi);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(o,i)=>{var t;const e=o._$AN;if(e===void 0)return!1;for(const s of e)(t=s._$AO)==null||t.call(s,i,!1),Ge(s,i);return!0},ht=o=>{let i,e;do{if((i=o._$AM)===void 0)break;e=i._$AN,e.delete(o),o=i}while((e==null?void 0:e.size)===0)},ro=o=>{for(let i;i=o._$AM;o=i){let e=i._$AN;if(e===void 0)i._$AN=e=new Set;else if(e.has(o))break;e.add(o),Us(i)}};function qs(o){this._$AN!==void 0?(ht(this),this._$AM=o,ro(this)):this._$AM=o}function Ws(o,i=!1,e=0){const t=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(i)if(Array.isArray(t))for(let r=e;r<t.length;r++)Ge(t[r],!1),ht(t[r]);else t!=null&&(Ge(t,!1),ht(t));else Ge(this,o)}const Us=o=>{o.type==se.CHILD&&(o._$AP??(o._$AP=Ws),o._$AQ??(o._$AQ=qs))};class Gs extends Zi{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,e,t){super._$AT(i,e,t),ro(this),this.isConnected=i._$AU}_$AO(i,e=!0){var t,s;i!==this.isConnected&&(this.isConnected=i,i?(t=this.reconnected)==null||t.call(this):(s=this.disconnected)==null||s.call(this)),e&&(Ge(this,i),ht(this))}setValue(i){if(to(this._$Ct))this._$Ct._$AI(i,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=i,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class js extends Gs{constructor(i){if(super(i),i.type!==se.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}update(i,[e,t]){return this.updateContent(i,e,t),We}updateContent(i,e,t){const{parentNode:s,startNode:r}=i;this.__parentNode=s;const n=t!=null,a=n?this.getNewNode(e,t):null,l=this.getOldNode(i);if(clearTimeout(this.__parentNode.__nodeRetryTimeout),n&&!a)this.__parentNode.__nodeRetryTimeout=setTimeout(()=>this.updateContent(i,e,t));else{if(l===a)return;l&&a?s.replaceChild(a,l):l?s.removeChild(l):a&&r.after(a)}}getNewNode(i,e){return window.Vaadin.Flow.clients[i].getByNodeId(e)}getOldNode(i){const{startNode:e,endNode:t}=i;if(e.nextSibling!==t)return e.nextSibling}disconnected(){clearTimeout(this.__parentNode.__nodeRetryTimeout)}}const no=Ji(js);function Ys(o,i){return no(o,i)}function Ks(o,i,e){Jt(eo`${i.map(t=>no(o,t))}`,e)}function Xs(o){const i=o.insertBefore;o.insertBefore=function(e,t){return t&&t.parentNode===this?i.call(this,e,t):i.call(this,e,null)}}window.Vaadin||(window.Vaadin={});var Yi;(Yi=window.Vaadin).FlowComponentHost||(Yi.FlowComponentHost={patchVirtualContainer:Xs,getNode:Ys,setChildNodes:Ks});class Pi extends w{static get template(){return I`
      <style>
        :host {
          animation: 1ms flow-component-renderer-appear;
        }

        @keyframes flow-component-renderer-appear {
          to {
            opacity: 1;
          }
        }
      </style>
      <slot></slot>
    `}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}ready(){super.ready(),this.addEventListener("click",function(i){this.firstChild&&typeof this.firstChild.click=="function"&&i.target===this&&(i.stopPropagation(),this.firstChild.click())}),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=J.debounce(this._debouncer,gs,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.appid==null)return;if(this.nodeid==null){this.firstChild&&this.removeChild(this.firstChild);return}const i=this._getRenderedComponent();this.firstChild?i?this.firstChild!==i?(this.replaceChild(i,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble():i?(this.appendChild(i),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(i){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(i)}return null}onComponentRendered(){}_defineFocusTarget(){var i=this._getFirstFocusableDescendant(this.firstChild);i!==null&&i.setAttribute("focus-target","true")}_getFirstFocusableDescendant(i){if(this._isFocusable(i))return i;if(i.hasAttribute&&(i.hasAttribute("disabled")||i.hasAttribute("hidden"))||!i.children)return null;for(var e=0;e<i.children.length;e++){var t=this._getFirstFocusableDescendant(i.children[e]);if(t!==null)return t}return null}_isFocusable(i){return i.hasAttribute&&typeof i.hasAttribute=="function"&&(i.hasAttribute("disabled")||i.hasAttribute("hidden"))?!1:i.tabIndex===0}_onAnimationEnd(i){i.animationName.indexOf("flow-component-renderer-appear")===0&&this._attachRenderedComponentIfAble()}}window.customElements.define(Pi.is,Pi);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qs=g`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABHAAAsAAAAAI6AAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuNY21hcAAAAYgAAAD+AAADymne8hxnbHlmAAACiAAAC+gAABioIzlOlWhlYWQAAA5wAAAAMAAAADZa/6SsaGhlYQAADqAAAAAdAAAAJAbpA4BobXR4AAAOwAAAABAAAAC0q+AAAGxvY2EAAA7QAAAAXAAAAFyF7o1GbWF4cAAADywAAAAfAAAAIAFMAXBuYW1lAAAPTAAAATEAAAIuUUJZCHBvc3QAABCAAAABPQAAAgfdkltveJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+xDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mEO+p/FEMUcxDANKMwIkgMABvgMMAB4nO3SV26EMABF0UsZpjG9d6Y3FpgF5StLYxMTP16WEUvHV1gGIQzQAJKgDFKIfojQ+A6rUb2e0KnXU77qPanWq/LzCXOkOVyn9RyHvWl4YkaTFu1wX5ecHn0GDBkxZsKUGXMWLFmxZsOWHXsOFBw5cebClRt3Hjx58dZ7RRn/I9cUF39Xpb691acRG2piOtUqNZ1P1TCdeJUZatNQW4baNtSO6U+ouoaam96u6hlq31AHhjo01JGhjg11YqhTQ50Z6txQF4a6NNSVoa4NdWOoW0PdGereUA+GWhjq0VBPhno21IuhXg31Zqh3Q30Y6tNQX4b6NtTSKH8BOIRpQQAAeJy1WH1sW9UVv+fG9vPz+7Bf/N6zHcd2/J04jbP6s0lap4kDpB9JWzUUCqxNgaHxpTI6hNhUNLVr17HSISb2D2iAJrWb6FTWahNQdQxRvmHamAR0qibE1E18CG3QaVNFvJ17n+3YIf1AiMQ679x77j3v3HPPPed3H7ER/OsYpw8TmQRIiuQJ8RZK+WjO1B3xaCzla21orY10a+OQ6aHTHtP0zB31mBs1GZ6RNU2uXc7oPL+xdRS9R9X1oK4fVfijdsBqvqF6vd1eLzPrYrYZ57WteF7bPDIc5+ZcJnta+S9i2Vfhs4MaMwZNQmO0Vv7gF/MZcNsCcJp4sJFSwYyAmRuFCmTBDRBUkwGqnlViyjmVBpLqaXhNpt0J5V1JOqMkuqn8WkMHvZX+iOlImiqkBiFVYDrCqINulmkwKb8ry2fkZBBn7FcTlk4ZdfpRZ9MOesLSAakKt0N3g4p2jAL8eIEOOqom/U0lgQRXUl8LtXM7HFkojUIpF0ErVBhcZC1vtyjtpsqr83a8RVcSH+ool8LgcIMjNohmVCACuDs506BdO6WIQeXjUsh1XKZGRNpp9piv3+Givoh00OU6KEV81HUHTLtN093Q+YGlE3wLHWRtMNy9XWqdLm2HKbaNsGzhu+41eswFOjE6WKSk2/1Wpt+qHeM6phbohmVmj3GvpdcVkiy9zbXfzHVqKuDB0IR2P6ZpF+D7dy6YC/9svGmBE5hKB9+X2+hh4iYRMkhGyTqyFc9APmeGQHf043tWQKHkizmwaY5AroTNVJzJDc2SFzUu92kOLsdmKu77vByb8/IjtxmhkMFISRBFISO4XMLJlj4XgGuRXtaHw2FLyHifdSOpisIhJjgkiPBAyJh7lfXTkhEadwk1mUngrOC6MazX7mASeEAPV1FyjEumBOaEDu4DP/ogRDKkiLEV1woVyMeLLKJCEM+FwdCwL4XLcRgdbfkhbzS8BNvXDKzNQiAWgOzagTXF1Eyq+Ci6/TPm/JrNY/59p1epKN4jQFGe0fx+LTMwNVCrAU2VSqnaKYzIiGmWe2Rvp9KDJhncrjLaFce8VCUbyQ1kB9lNfkJ+To6R58mfyd/Ip9ABXohDHqqwEW7A2Mij1ehntLu+h8xMtocjUJcYwoLdtYafv/1Vjy8vjLaLtBfOt3/B931Rexa24e5zstgnyqvZHs69zuhq3vFgRpQVJyN7FuE++RLSeW4xMi+t6Zeo5sIK6S5dlGVRD2hWnGoB3j7OV3lesvNLic8tOnLRSRfRdOna63VJp/1WbYs5dFZjy1AqpGICQEWKmNI+CZNoVTJ7pNop+IZkRrBHgnEmqr3TrEsfw1Gi8LqE+S1aV0SNNwXVVVvuUoU3ld6TLwmditIpvKTU50zSzWwO1h0rL8awnulwTXMYrGDT4aQ1fb4GPkyv5vMEh5Vec6yw0AMXnfcx1l/rfVZaKLDi0W4j/HfeyGZuHOf1IUGW1udizU2leXY0OmLpVDpVKJfKpZzPRKHgEBzpXAUKWYipoIeBdl3JfLZVBizEqWun1i4ZGFiyduq3DebayXsmJ+95gBG4+Urm1a2SdpKV57lP2wZyZqI+FAlfUtO+NCmgdWhMOS1gDY+jHWnBhwjBQLMEXxmLbx6t9JXTWDLtsSxgisfErqvQMbbBoywZmeyLeWe8OWNydFDxzMx4lMGRtX0xN3YFJkeW+O0bascGNwwObtjCCOzrzAVWjSwN2K9cpyn9o5cZOXMmkAuM85EbNHnJyHhfLLCnPhxJYw9eoIMkyC3l+4ZuY5ig7lW2oYUynDgg+Xrk+++Xe3zSgRYetnyuy+KbfjiB+GAAtZ8HHXmtijZfFFgrujhmOs2qkXvuSV6WqA1WLYqhPHOfsa26rklKFqbAGL2dOIlGurB6LWFVFd/KoBBaYTFYVBs93hZRFlrG5Ex4NVFIJguJVvqnBW2kNNvFGx90YUcSEvyZSMDeZjc0xYlEYy8+hHcWx9YrZOaPPyCGepP5Q34aXnGBr8d1QhSf4yjtiebZqNJfEYl4SY6dDRb8WSguLZW9ZQtBpoW4hX0QMyB2KmsYcOh8HMQxBn288oZ6BXV0GOq/ClKsC6T8g9X3OFKZNkJrYkOx2lEk+KNDy953+wGHXuGGzhGZ+uLK8FVrQkbtKBv+9EztU2sgTCNpvXMdJjqJ4tkdw+x00dPKkZ1QR254x7GQoFmvfakSnL3gCc5nREly2mN2pyTLMacMipNT7YInGU7JzlN2p9N+yinXTirOKEvPUafSWMNDmCf9pIQYaG19DSxKGqvAQ+xg60iabEm5MheUU2n+HxO4TDDbjnw6xxK8QzfhbHXq8pWVqanKysun9s6ztdt7sivGqruqYyuyPS6Hw9XehGt6q+l0dT0jvaFMZjiTuTHo7+vdtHJTb58/2ML+IxHt9/n9vv5owiWKrrbWD+sakKxhKoYzxF5f7y9INxki42QNuYrVFDPfvqxyY83xWNMV+ZxPSMWb62W+wPSCJwkDDl1WZOGW84nAEo4A7HjB/uWmOdayRFnKjazi668u/ajJlUd87aPk048Crlu4j1Oh9gxdL3Z1inNPIt2xvKNlsU4hn54Z5Y6YbTDu9hHOvkcFAb35fU6hNovKOrtQmcvbNV9/Ntfv5xf4atDWOOTX6CSHZ08xujhPs51+f9zvf1YLIGoPPKvxVh0TSLAXzzUBFiXs7GJVB7vH5/PAXznd4+vx4a95h3qI/oYIpIdMkA1kC7kVLS3GhWI5bwj1fIaVKG/Ei5gXWOjhtcJbzFthaMQrwIcIRj0ppvO6yV95icu9j/YPDNySWp7w+kOr95R1RfGpfVlDVhS/2geJ5Umv2mn0rkxBvzvgdisndJXaVF1X5z5jdHGe2n/QnYo8+b2uaMivhowgjYcLnVqnrEpQezsieyVZ6ooETbdJO6ip+cORLpes6BL82/qg8VHbo45B/vch/YQeJX28QvEANR3sQhxh+TcMCEd4l8BKF7uID7KM05tRYlIHHXY63YIi2fXQyj5XSBbcMeewKLpttkJ2Syz33YJfDdJdSYkqHbYb3VHRJgTV8c0TAy67YHeK7htwOKWax5co7Do8Pfh1tKdx1g5j9o6TZeQyMo27FuW3vbYsbY/Op3AG06DMKionRlpgHzCEeMmLU5opRrCyS670RzppZeW5p/iT3jL3lB4O63QS6dzzh8SAtOqwGJK3bv+lGJTWbr++471wsVKMRJCEK5H+cLg/Qp+IDsdqs7HhKD7hMXyyrD/Li8RjRqimHhI7HP2vSDZn9brplySb0L9dgpURSwmSiBFhilrwB8OA9gZ29NkRO/669parW9e7XZDxwvgRu+SE7zgl+xG5p/HtRqJ3cdwSZwsbwTA1WT3jEdyPN0sWxvDGy+xovIzHosnwc9LePf9tywun0fMkWaFYZbB4oovRq8VyKYUBkMVXqVhBHSylQ0wanvla3+rQ1XbR8ZzstYOo2Mf7vjk8ftcGDWxdSdXx0cAVveHg1TZFtEOn8ntBBFs11V++vuLUQ5qz+U6d/oUjpGIdNjOQhJXNqn5YCS1Yy5PofLGEs6Js2yOKe2yyOLxtaGjbt7cNIURCEDdWfaQ6lurtRYbePCuItv1iUNxvE4Vdw2zQ0LZhdv2fxjHp5uAmdlBpopHXoJGU8e6BRc0yi+PztkaHTRRrW1m2hcfFLlEUzzD+DGczjEVCg9jEQZhFcdAL2DjD+DPiSWQzjM2I89g5RXdxfECS+CIWy1hTGmFs6EIbkv/pbtkfU3aPrZ+4c2Lizn07qufym/L5TTdtyuU2/We3HPeDsjtb3bGPSSfW31aX3LQpX/d9sL7fWYpRJPBbCJavYjrFjj0rT2GWCZjf6Ytffr8beXl/HYeyGwJiIK8FLDHbfo65xGz7YCSRqCQSkbbHI5eUU5X4sjj+zrU9aHnRlEnrd7YGptd0x2Jf/RbH9PAiovadckSnEsJ661OgPFuH9B4O6e202vIN0h9xHXSJh1wRP5Vqv1uI6Wn9Gxmrwzqrii1gqhEscJanuAlGas+s2/uzvetgS72NpHZ6aHbZstmh/wPq1seEeJxjYGRgYADi31ySEvH8Nl8ZuJlfAEUYalQ3NCLo/6+ZpzLdAnI5GJhAogAiBgraeJxjYGRgYA76nwUkXzAAAfNUBkYGVKALAFb4A3EAAAB4nGNgYGBgfjG0MAAMzihlAAAAAABOAJoA6AEKASwBTgFwAZoBxAHuAhoCnALoBJoEvATWBPIFDgUqBXoF0AX+BkQGlga4BwgHagfiCGoIpAi8CVAJmAoQCiwKVgqQCtYLGAtOC4gL6AwuDFR4nGNgZGBg0GVMYRBlAAEmIOYCQgaG/2A+AwAYygG+AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjuduwzAMhH2NnTqOk+6993TfSZFY24giGZTVon36eiRFf5SAiO/A05HBWtBXEvxfGdYwQIgIQ6wjxggJxkgxwRQb2MQWtrGDXexhHwc4xBGOcYJTnOEcF7jEFa5xg1vc4R4PeMQTnvGCV2R4C1Khy9xkkkxNnPRC03s97pHLvKgTYXJNmbKfZom9o8POEffsq0Qw28+ltcPe2uHS2rGvRjPBmSwE1+GMtI6l0GSU4JEsSM4XgudpQx9sTRf3K9rAyUr0962UryKprZwPpM0jyda5uP2qrVBjxSLPCmGUplixrdpBSKqsI2oO4gF9Udq8TJVOzDSpcEHGR4vSeJdaVsSkMl26OqoKa6jttQ0rLb6a5l3YjO2QqV01YXLlNy2XDR0JlkXojbJTb/5GDX3V+kPviIPgB9AUks0AAAA=)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-drag-handle: '\\ea18';
    --lumo-icons-dropdown: '\\ea19';
    --lumo-icons-edit: '\\ea1a';
    --lumo-icons-error: '\\ea1b';
    --lumo-icons-eye: '\\ea1c';
    --lumo-icons-eye-disabled: '\\ea1d';
    --lumo-icons-menu: '\\ea1e';
    --lumo-icons-minus: '\\ea1f';
    --lumo-icons-ordered-list: '\\ea20';
    --lumo-icons-phone: '\\ea21';
    --lumo-icons-photo: '\\ea22';
    --lumo-icons-play: '\\ea23';
    --lumo-icons-plus: '\\ea24';
    --lumo-icons-redo: '\\ea25';
    --lumo-icons-reload: '\\ea26';
    --lumo-icons-resize-handle: '\\ea27';
    --lumo-icons-search: '\\ea28';
    --lumo-icons-undo: '\\ea29';
    --lumo-icons-unordered-list: '\\ea2a';
    --lumo-icons-upload: '\\ea2b';
    --lumo-icons-user: '\\ea2c';
  }
`;vs("font-icons",Qs);const Ye=g`
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4) 0.5em
      var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
    min-height: var(--lumo-size-m);
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
  }

  /* Checkmark */
  [part='checkmark']::before {
    display: var(--_lumo-item-selected-icon-display, none);
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
    color: var(--_selection-color-text);
    flex: none;
    opacity: 0;
    transition:
      transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2),
      opacity 0.1s;
  }

  :host([selected]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([active]:not([selected])) [part='checkmark']::before {
    transform: scale(0.8);
    opacity: 0;
    transition-duration: 0s;
  }

  [part='content'] {
    flex: auto;
  }

  /* Disabled */
  :host([disabled]) {
    color: var(--lumo-disabled-text-color);
    cursor: default;
    pointer-events: none;
  }

  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  @media (any-hover: hover) {
    :host(:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }
  }

  :host([focus-ring]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* RTL specific styles */
  :host([dir='rtl']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius-m) / 4));
  }

  /* Slotted icons */
  :host ::slotted(vaadin-icon) {
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }
`;x("vaadin-item",Ye,{moduleId:"lumo-item"});const ao=g`
  :host {
    transition: background-color 100ms;
    overflow: hidden;
    --_lumo-item-selected-icon-display: block;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
  }

  :host([focused]:not([disabled])) {
    box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }
`;x("vaadin-combo-box-item",[Ye,ao],{moduleId:"lumo-combo-box-item"});/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lo=g`
  [part~='loader'] {
    box-sizing: border-box;
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
    border: 2px solid transparent;
    border-color: var(--lumo-primary-color-10pct) var(--lumo-primary-color-10pct) var(--lumo-primary-color)
      var(--lumo-primary-color);
    border-radius: calc(0.5 * var(--lumo-icon-size-s));
    opacity: 0;
    pointer-events: none;
  }

  :host(:not([loading])) [part~='loader'] {
    display: none;
  }

  :host([loading]) [part~='loader'] {
    animation:
      1s linear infinite lumo-loader-rotate,
      0.3s 0.1s lumo-loader-fade-in both;
  }

  @keyframes lumo-loader-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes lumo-loader-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oe=g`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow:
      0 0 0 1px var(--lumo-shade-5pct),
      var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;x("",Oe,{moduleId:"lumo-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gt=g`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;x("",gt,{moduleId:"lumo-menu-overlay-core"});const Zs=g`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 450px), (max-height: 450px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,ii=[Oe,gt,Zs];x("",ii,{moduleId:"lumo-menu-overlay"});const ho=g`
  [part='content'] {
    padding: 0;
  }

  /* When items are empty, the spinner needs some room */
  :host(:not([closing])) [part~='content'] {
    min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
  }

  [part~='overlay'] {
    position: relative;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }
`,co=g`
  [part~='loader'] {
    position: absolute;
    z-index: 1;
    inset-inline: var(--lumo-space-s);
    top: var(--lumo-space-s);
    margin-inline: auto 0;
  }
`;x("vaadin-combo-box-overlay",[Oe,gt,ho,lo,co,g`
      :host {
        --_vaadin-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-combo-box-overlay"});x("vaadin-input-container",g`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: var(--vaadin-input-field-value-font-weight, 500);
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      --_input-height: var(--lumo-text-field-size, var(--lumo-size-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
      --_disabled-background: var(--vaadin-input-field-disabled-background, var(--lumo-contrast-5pct));
      --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition:
        transform 0.15s,
        opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--vaadin-input-field-height, var(--_input-height));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background: var(--_disabled-background);
    }

    :host([disabled]) ::slotted(:not([slot$='fix'])) {
      -webkit-text-fill-color: var(--_disabled-value-color);
      color: var(--_disabled-value-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid]:not([readonly]))::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oi=g`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;x("",oi,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Js=g`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uo=g`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;x("",uo,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const er=g`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
    --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted([slot$='fix']) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([disabled]) [part='input-field'] ::slotted(:not([slot$='fix'])) {
    color: var(--_disabled-value-color);
    -webkit-text-fill-color: var(--_disabled-value-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,Ke=[uo,oi,Js,er];x("",Ke,{moduleId:"lumo-input-field-shared-styles"});const tr=g`
  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }
`;x("vaadin-combo-box",[Ke,tr],{moduleId:"lumo-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ir=o=>class extends o{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const or=g`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-input-container",or,{moduleId:"vaadin-input-container-styles"});let _o=class extends ir(k(M(w))){static get is(){return"vaadin-input-container"}static get template(){return I`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}};A(_o);/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const po=o=>class extends o{static get properties(){return{index:{type:Number},item:{type:Object},label:{type:String},selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Function}}}static get observers(){return["__rendererOrItemChanged(renderer, index, item, selected, focused)","__updateLabel(label, renderer)"]}static get observedAttributes(){return[...super.observedAttributes,"hidden"]}attributeChangedCallback(e,t,s){e==="hidden"&&s!==null?this.index=void 0:super.attributeChangedCallback(e,t,s)}connectedCallback(){super.connectedCallback(),this._owner=this.parentNode.owner;const e=this._owner.getAttribute("dir");e&&this.setAttribute("dir",e)}requestContentUpdate(){if(!this.renderer||this.hidden)return;const e={index:this.index,item:this.item,focused:this.focused,selected:this.selected};this.renderer(this,this._owner,e)}__rendererOrItemChanged(e,t,s){s===void 0||t===void 0||(this._oldRenderer!==e&&(this.innerHTML="",delete this._$litPart$),e&&(this._oldRenderer=e,this.requestContentUpdate()))}__updateLabel(e,t){t||(this.textContent=e)}};/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class sr extends po(k(M(w))){static get template(){return I`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}static get is(){return"vaadin-combo-box-item"}}A(sr);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Wt=!1,rr=[],fo=[];function nr(){Wt=!0,requestAnimationFrame(function(){Wt=!1,ar(rr),setTimeout(function(){lr(fo)})})}function ar(o){for(;o.length;)mo(o.shift())}function lr(o){for(let i=0,e=o.length;i<e;i++)mo(o.shift())}function mo(o){const i=o[0],e=o[1],t=o[2];try{e.apply(i,t)}catch(s){setTimeout(()=>{throw s})}}function dr(o,i,e){Wt||nr(),fo.push([o,i,e])}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vt=o=>o.test(navigator.userAgent),Ut=o=>o.test(navigator.platform),hr=o=>o.test(navigator.vendor),Gt=vt(/Android/u),go=vt(/Chrome/u)&&hr(/Google Inc/u),cr=vt(/Firefox/u),ur=Ut(/^iPad/u)||Ut(/^Mac/u)&&navigator.maxTouchPoints>1,_r=Ut(/^iPhone/u),Se=_r||ur,si=vt(/^((?!chrome|android).)*safari/iu),me=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})(),pr=window.ShadowRoot&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let ye=new WeakMap,tt=new WeakMap,it={},zt=0;const Li=o=>o&&o.nodeType===Node.ELEMENT_NODE,Ot=(...o)=>{console.error(`Error: ${o.join(" ")}. Skip setting aria-hidden.`)},fr=(o,i)=>Li(o)?i.map(e=>{if(!Li(e))return Ot(e,"is not a valid element"),null;let t=e;for(;t&&t!==o;){if(o.contains(t))return e;t=t.getRootNode().host}return Ot(e,"is not contained inside",o),null}).filter(e=>!!e):(Ot(o,"is not a valid element"),[]),mr=(o,i,e,t)=>{const s=fr(i,Array.isArray(o)?o:[o]);it[e]||(it[e]=new WeakMap);const r=it[e],n=[],a=new Set,l=new Set(s),h=p=>{if(!p||a.has(p))return;a.add(p);const f=p.assignedSlot;f&&h(f),h(p.parentNode||p.host)};s.forEach(h);const u=p=>{if(!p||l.has(p))return;const f=p.shadowRoot;(f?[...p.children,...f.children]:[...p.children]).forEach(y=>{if(!["template","script","style"].includes(y.localName))if(a.has(y))u(y);else{const T=y.getAttribute(t),S=T!==null&&T!=="false",z=(ye.get(y)||0)+1,F=(r.get(y)||0)+1;ye.set(y,z),r.set(y,F),n.push(y),z===1&&S&&tt.set(y,!0),F===1&&y.setAttribute(e,"true"),S||y.setAttribute(t,"true")}})};return u(i),a.clear(),zt+=1,()=>{n.forEach(p=>{const f=ye.get(p)-1,b=r.get(p)-1;ye.set(p,f),r.set(p,b),f||(tt.has(p)?tt.delete(p):p.removeAttribute(t)),b||p.removeAttribute(e)}),zt-=1,zt||(ye=new WeakMap,ye=new WeakMap,tt=new WeakMap,it={})}},gr=(o,i=document.body,e="data-aria-hidden")=>{const t=Array.from(Array.isArray(o)?o:[o]);return i&&t.push(...Array.from(i.querySelectorAll("[aria-live]"))),mr(t,i,e,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class vr{constructor(i,e){this.host=i,this.callback=typeof e=="function"?e:()=>i}showModal(){const i=this.callback();this.__showOthers=gr(i)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ri=!1;window.addEventListener("keydown",()=>{ri=!0},{capture:!0});window.addEventListener("mousedown",()=>{ri=!1},{capture:!0});function jt(){let o=document.activeElement||document.body;for(;o.shadowRoot&&o.shadowRoot.activeElement;)o=o.shadowRoot.activeElement;return o}function Xe(){return ri}function vo(o){const i=o.style;if(i.visibility==="hidden"||i.display==="none")return!0;const e=window.getComputedStyle(o);return e.visibility==="hidden"||e.display==="none"}function br(o,i){const e=Math.max(o.tabIndex,0),t=Math.max(i.tabIndex,0);return e===0||t===0?t>e:e>t}function yr(o,i){const e=[];for(;o.length>0&&i.length>0;)br(o[0],i[0])?e.push(i.shift()):e.push(o.shift());return e.concat(o,i)}function Yt(o){const i=o.length;if(i<2)return o;const e=Math.ceil(i/2),t=Yt(o.slice(0,e)),s=Yt(o.slice(e));return yr(t,s)}function le(o){return o.offsetParent===null&&o.clientWidth===0&&o.clientHeight===0?!0:vo(o)}function bt(o){return o.matches('[tabindex="-1"]')?!1:o.matches("input, select, textarea, button, object")?o.matches(":not([disabled])"):o.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function ni(o){return o.getRootNode().activeElement===o}function Cr(o){if(!bt(o))return-1;const i=o.getAttribute("tabindex")||0;return Number(i)}function bo(o,i){if(o.nodeType!==Node.ELEMENT_NODE||vo(o))return!1;const e=o,t=Cr(e);let s=t>0;t>=0&&i.push(e);let r=[];return e.localName==="slot"?r=e.assignedNodes({flatten:!0}):r=(e.shadowRoot||e).children,[...r].forEach(n=>{s=bo(n,i)||s}),s}function xr(o){const i=[];return bo(o,i)?Yt(i):i}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class wr{saveFocus(i){this.focusNode=i||jt()}restoreFocus(i){const e=this.focusNode;if(!e)return;const t=i?i.preventScroll:!1;jt()===document.body?setTimeout(()=>e.focus({preventScroll:t})):e.focus({preventScroll:t}),this.focusNode=null}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pt=[];class Ar{constructor(i){this.host=i,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return xr(this.__trapNode)}get __focusedElementIndex(){const i=this.__focusableElements;return i.indexOf(i.filter(ni).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(i){if(this.__trapNode=i,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Pt.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Pt.pop()}__onKeyDown(i){if(this.__trapNode&&this===Array.from(Pt).pop()&&i.key==="Tab"){i.preventDefault();const e=i.shiftKey;this.__focusNextElement(e)}}__focusNextElement(i=!1){const e=this.__focusableElements,t=i?-1:1,s=this.__focusedElementIndex,r=(e.length+s+t)%e.length,n=e[r];n.focus(),n.localName==="input"&&n.select()}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Q=$(o=>typeof o.prototype.addController=="function"?o:class extends o{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yo=o=>class extends Q(o){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new vr(this),this.__focusTrapController=new Ar(this),this.__focusRestorationController=new wr}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){if(this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()){const e=!Xe();this.__focusRestorationController.restoreFocus({preventScroll:e})}}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=jt();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let t=e;const s=e.ownerDocument;for(;t&&t!==s&&t!==this;)t=t.parentNode||t.host;return t===this}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Co=()=>Array.from(document.body.children).filter(o=>o instanceof HTMLElement&&o._hasOverlayStackMixin&&!o.hasAttribute("closing")).sort((o,i)=>o.__zIndex-i.__zIndex||0),Kt=()=>Co().filter(o=>o.$.overlay),Ir=o=>o===Kt().pop(),xo=o=>class extends o{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return Ir(this)}bringToFront(){let e="";const t=Co().filter(s=>s!==this).pop();t&&(e=t.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),Kt().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=Kt();let t;for(;(t=e.pop())&&!(t!==this&&(t.$.overlay.style.removeProperty("pointer-events"),!t.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pe=o=>class extends yo(xo(o)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0,sync:!0},owner:{type:Object,sync:!0},model:{type:Object,sync:!0},renderer:{type:Object,sync:!0},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged",sync:!0},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged",sync:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0,sync:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),Se&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(e){const t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,s=window.innerWidth>e,r=document.documentElement.clientHeight;s&&r>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${r-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(e,t,s,r){const n=this._oldOwner!==t||this._oldModel!==s;this._oldModel=s,this._oldOwner=t;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const h=this._oldOpened!==r;this._oldOpened=r,a&&l&&(this.innerHTML="",delete this._$litPart$),r&&e&&(a||h||n)&&this.requestContentUpdate()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(e,t){e?(this._saveFocus(),this._animatedOpening(),dr(this,()=>{this._trapFocus();const s=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(s)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):t&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),t=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&t&&t!=="none"}_enqueueAnimation(e,t){const s=`__${e}Handler`,r=n=>{n&&n.target!==this||(t(),this.removeEventListener("animationend",r),delete this[s])};this[s]=r,this.addEventListener("animationend",r)}_flushAnimation(e){const t=`__${e}Handler`;typeof this[t]=="function"&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Le=g`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Er(o){const i=[];for(;o;){if(o.nodeType===Node.DOCUMENT_NODE){i.push(o);break}if(o.nodeType===Node.DOCUMENT_FRAGMENT_NODE){i.push(o),o=o.host;continue}if(o.assignedSlot){o=o.assignedSlot;continue}o=o.parentNode}return i}function wo(o){const i=[];let e;return o.localName==="slot"?e=o.assignedElements():(i.push(o),e=[...o.children]),e.forEach(t=>i.push(...wo(t))),i}function ai(o,i){return i?i.closest(o)||ai(o,i.getRootNode().host):null}function li(o){return o?new Set(o.split(" ")):new Set}function yt(o){return o?[...o].join(" "):""}function Re(o,i,e){const t=li(o.getAttribute(i));t.add(e),o.setAttribute(i,yt(t))}function Qe(o,i,e){const t=li(o.getAttribute(i));if(t.delete(e),t.size===0){o.removeAttribute(i);return}o.setAttribute(i,yt(t))}function Sr(o){return o.nodeType===Node.TEXT_NODE&&o.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Tr(o,i){let e=null;const t=document.documentElement;function s(){e&&e.disconnect(),e=null}function r(n=!1,a=1){s();const{left:l,top:h,width:u,height:p}=o.getBoundingClientRect();if(n||i(),!u||!p)return;const f=Math.floor(h),b=Math.floor(t.clientWidth-(l+u)),y=Math.floor(t.clientHeight-(h+p)),T=Math.floor(l),z={rootMargin:`${-f}px ${-b}px ${-y}px ${-T}px`,threshold:Math.max(0,Math.min(1,a))||1};let F=!0;function ie(Y){let R=Y[0].intersectionRatio;if(R!==a){if(!F)return r();R===0&&(R=1e-7),r(!1,R)}F=!1}e=new IntersectionObserver(ie,z),e.observe(o)}return r(!0),s}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lt={start:"top",end:"bottom"},Rt={start:"left",end:"right"},Ri=new ResizeObserver(o=>{setTimeout(()=>{o.forEach(i=>{i.target.__overlay&&i.target.__overlay._updatePosition()})})}),Ct=o=>class extends o{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=Er(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)}),this.positionTarget&&(this.__observePositionTargetMove=Tr(this.positionTarget,()=>{this._updatePosition()}))}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null),this.__observePositionTargetMove&&(this.__observePositionTargetMove(),this.__observePositionTargetMove=null)}__overlayOpenedChanged(e,t){if(this.__removeUpdatePositionEventListeners(),t&&(t.__overlay=null,Ri.unobserve(t),e&&(this.__addUpdatePositionEventListeners(),t.__overlay=this,Ri.observe(t))),e){const s=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(r=>{this.__margins[r]=parseInt(s[r],10)})),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){e.target instanceof Node&&this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened||!this.__margins)return;const e=this.positionTarget.getBoundingClientRect();if(e.width===0&&e.height===0&&this.opened){this.opened=!1;return}const t=this.__shouldAlignStartVertically(e);this.style.justifyContent=t?"flex-start":"flex-end";const s=this.__isRTL,r=this.__shouldAlignStartHorizontally(e,s),n=!s&&r||s&&!r;this.style.alignItems=n?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,Lt,this,t),h=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,Rt,this,r);Object.assign(this.style,l,h),this.toggleAttribute("bottom-aligned",!t),this.toggleAttribute("top-aligned",t),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(e,t){const s=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const r=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!t&&this.horizontalAlign==="start"||t&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,s,r,this.__margins,n,this.noHorizontalOverlap,Rt)}__shouldAlignStartVertically(e){const t=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const s=Math.min(window.innerHeight,document.documentElement.clientHeight),r=this.verticalAlign==="top";return this.__shouldAlignStart(e,t,s,this.__margins,r,this.noVerticalOverlap,Lt)}__shouldAlignStart(e,t,s,r,n,a,l){const h=s-e[a?l.end:l.start]-r[l.end],u=e[a?l.start:l.end]-r[l.start],p=n?h:u,b=p>(n?u:h)||p>t;return n===b}__adjustBottomProperty(e,t,s){let r;if(e===t.end){if(t.end===Lt.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(s>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;r=s-a}this.__oldViewportHeight=n}if(t.end===Rt.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(s>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;r=s-a}this.__oldViewportWidth=n}}return r}__calculatePositionInOneDimension(e,t,s,r,n,a){const l=a?r.start:r.end,h=a?r.end:r.start,u=parseFloat(n.style[l]||getComputedStyle(n)[l]),p=this.__adjustBottomProperty(l,r,u),f=t[a?r.start:r.end]-e[s===a?r.end:r.start],b=p?`${p}px`:`${u+f*(a?-1:1)}px`;return{[l]:b,[h]:""}}};/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ao=o=>class extends Ct(o){static get observers(){return["_setOverlayWidth(positionTarget, opened)"]}constructor(){super(),this.requiredVerticalSpace=200}connectedCallback(){super.connectedCallback();const e=this._comboBox,t=e&&e.getAttribute("dir");t&&this.setAttribute("dir",t)}_shouldCloseOnOutsideClick(e){const t=e.composedPath();return!t.includes(this.positionTarget)&&!t.includes(this)}_mouseDownListener(e){super._mouseDownListener(e),this._shouldCloseOnOutsideClick(e)&&!bt(e.composedPath()[0])&&e.preventDefault()}_updateOverlayWidth(){const e=this.localName;this.style.setProperty(`--_${e}-default-width`,`${this.positionTarget.clientWidth}px`);const t=getComputedStyle(this._comboBox).getPropertyValue(`--${e}-width`);t===""?this.style.removeProperty(`--${e}-width`):this.style.setProperty(`--${e}-width`,t)}_setOverlayWidth(e,t){e&&t&&(this._updateOverlayWidth(),this._updatePosition())}};/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kr=g`
  #overlay {
    width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;x("vaadin-combo-box-overlay",[Le,kr],{moduleId:"vaadin-combo-box-overlay-styles"});class zr extends Ao(Pe(M(k(w)))){static get is(){return"vaadin-combo-box-overlay"}static get template(){return I`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="loader"></div>
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}A(zr);/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ge(o,i){return o.split(".").reduce((e,t)=>e?e[t]:void 0,i)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Or=0;function Ze(){return Or++}/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Di=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),Pr=Di&&Di[1]>=8,Fi=3,Lr={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const o=this._virtualCount;return Math.max(0,o-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(o){o=this._clamp(o,0,this._maxVirtualStart),this._virtualStartVal=o},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(o){o%=this._physicalCount,o<0&&(o=this._physicalCount+o),this._physicalStartVal=o},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(o){this._physicalCountVal=o},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let o=this._firstVisibleIndexVal;if(o==null){let i=this._physicalTop+this._scrollOffset;o=this._iterateItems((e,t)=>{if(i+=this._getPhysicalSizeIncrement(e),i>this._scrollPosition)return t})||0,this._firstVisibleIndexVal=o}return o},get lastVisibleIndex(){let o=this._lastVisibleIndexVal;if(o==null){let i=this._physicalTop+this._scrollOffset;this._iterateItems((e,t)=>{i<this._scrollBottom&&(o=t),i+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=o}return o},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const o=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let i=o-this._scrollPosition;const e=i>=0;if(this._scrollPosition=o,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(i)>this._physicalSize&&this._physicalSize>0){i-=this._scrollOffset;const t=Math.round(i/this._physicalAverage);this._virtualStart+=t,this._physicalStart+=t,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const t=this._getReusables(e);e?(this._physicalTop=t.physicalTop,this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length):(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length),this._update(t.indexes,e?null:t.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),j)}},_getReusables(o){let i,e,t;const s=[],r=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let h=this._physicalTop+this._scrollOffset;const u=this._physicalBottom+this._scrollOffset,p=this._scrollPosition,f=this._scrollBottom;for(o?(i=this._physicalStart,e=p-h):(i=this._physicalEnd,e=u-f);t=this._getPhysicalSizeIncrement(i),e-=t,!(s.length>=l||e<=r);)if(o){if(a+s.length+1>=this._virtualCount||h+t>=p-this._scrollOffset)break;s.push(i),h+=t,i=(i+1)%l}else{if(n-s.length<=0||h+this._physicalSize-t<=f)break;s.push(i),h-=t,i=i===0?l-1:i-1}return{indexes:s,physicalTop:h-this._scrollOffset}},_update(o,i){if(!(o&&o.length===0||this._physicalCount===0)){if(this._assignModels(o),this._updateMetrics(o),i)for(;i.length;){const e=i.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(o){const e=this._clamp(this._physicalCount+o,Fi,this._virtualCount-this._virtualStart)-this._physicalCount;let t=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const s=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let r=0;r<e;r++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-s)/e,t=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||t===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,t)),ys):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,t),j))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const o=this._getReusables(!0);this._physicalTop=o.physicalTop,this._virtualStart+=o.indexes.length,this._physicalStart+=o.indexes.length,this._update(o.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Fi))},_itemsChanged(o){o.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,X))},_iterateItems(o,i){let e,t,s,r;if(arguments.length===2&&i){for(r=0;r<i.length;r++)if(e=i[r],t=this._computeVidx(e),(s=o.call(this,e,t))!=null)return s}else{for(e=this._physicalStart,t=this._virtualStart;e<this._physicalCount;e++,t++)if((s=o.call(this,e,t))!=null)return s;for(e=0;e<this._physicalStart;e++,t++)if((s=o.call(this,e,t))!=null)return s}},_computeVidx(o){return o>=this._physicalStart?this._virtualStart+(o-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+o},_positionItems(){this._adjustScrollPosition();let o=this._physicalTop;this._iterateItems(i=>{this.translate3d(0,`${o}px`,0,this._physicalItems[i]),o+=this._physicalSizes[i]})},_getPhysicalSizeIncrement(o){return this._physicalSizes[o]},_adjustScrollPosition(){const o=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(o!==0){this._physicalTop-=o;const i=this._scrollPosition;!Pr&&i>0&&this._resetScrollPosition(i-o)}},_resetScrollPosition(o){this.scrollTarget&&o>=0&&(this._scrollTop=o,this._scrollPosition=this._scrollTop)},_updateScrollerSize(o){const i=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=i,(o||this._scrollHeight===0||this._scrollPosition>=i-this._physicalSize||Math.abs(i-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${i}px`,this._scrollHeight=i)},scrollToIndex(o){if(typeof o!="number"||o<0||o>this.items.length-1||(qe(),this._physicalCount===0))return;o=this._clamp(o,0,this._virtualCount-1),(!this._isIndexRendered(o)||o>=this._maxVirtualStart)&&(this._virtualStart=o-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let i=this._physicalStart,e=this._virtualStart,t=0;const s=this._hiddenContentSize;for(;e<o&&t<=s;)t+=this._getPhysicalSizeIncrement(i),i=(i+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+t),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},X)},_isIndexRendered(o){return o>=this._virtualStart&&o<=this._virtualEnd},_getPhysicalIndex(o){return(this._physicalStart+(o-this._virtualStart))%this._physicalCount},_clamp(o,i,e){return Math.min(e,Math.max(i,o))},_debounce(o,i,e){this._debouncers||(this._debouncers={}),this._debouncers[o]=O.debounce(this._debouncers[o],e,i.bind(this)),bs(this._debouncers[o])}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rr=1e5,Dt=1e3;class Io{constructor({createElements:i,updateElement:e,scrollTarget:t,scrollContainer:s,elementsContainer:r,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=i,this.updateElement=e,this.scrollTarget=t,this.scrollContainer=s,this.elementsContainer=r||s,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),new ResizeObserver(([{contentRect:l}])=>{const h=l.width===0&&l.height===0;!h&&this.__scrollTargetHidden&&this.scrollTarget.scrollTop!==this._scrollPosition&&(this.scrollTarget.scrollTop=this._scrollPosition),this.__scrollTargetHidden=h}).observe(this.scrollTarget),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",l=>this.__onWheel(l)),this.scrollTarget.addEventListener("virtualizer-element-focused",l=>this.__onElementFocused(l)),this.elementsContainer.addEventListener("focusin",()=>{this.scrollTarget.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:this.__getFocusedElement()}}))}),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(i=>i.__virtualizerPlaceholder)}scrollToIndex(i){if(typeof i!="number"||isNaN(i)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),i=this._clamp(i,0,this.size-1);const e=this.__getVisibleElements().length;let t=Math.floor(i/this.size*this._virtualCount);this._virtualCount-t<e?(t=this._virtualCount-(this.size-i),this._vidxOffset=this._maxVirtualIndexOffset):t<e?i<Dt?(t=i,this._vidxOffset=0):(t=Dt,this._vidxOffset=i-t):this._vidxOffset=i-t,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(t),this.adjustedFirstVisibleIndex!==i&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(i)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=i)}flush(){this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),qe(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush())}update(i=0,e=this.size-1){const t=[];this.__getVisibleElements().forEach(s=>{s.__virtualIndex>=i&&s.__virtualIndex<=e&&(this.__updateElement(s,s.__virtualIndex,!0),t.push(s))}),this.__afterElementsUpdated(t)}_updateMetrics(i){qe();let e=0,t=0;const s=this._physicalAverageCount,r=this._physicalAverage;this._iterateItems((n,a)=>{t+=this._physicalSizes[n],this._physicalSizes[n]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[n])),e+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},i),this._physicalSize=this._physicalSize+e-t,this._physicalAverageCount!==s&&(this._physicalAverage=Math.round((r*s+e)/this._physicalAverageCount))}__getBorderBoxHeight(i){const e=getComputedStyle(i),t=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return t;const s=parseFloat(e.paddingBottom)||0,r=parseFloat(e.paddingTop)||0,n=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return t+s+r+n+a}__updateElement(i,e,t){i.__virtualizerPlaceholder&&(i.style.paddingTop="",i.style.opacity="",i.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(i.__lastUpdatedIndex!==e||t)&&(this.updateElement(i,e),i.__lastUpdatedIndex=e)}__afterElementsUpdated(i){i.forEach(e=>{const t=e.offsetHeight;if(t===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.style.opacity="0",e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=O.debounce(this.__placeholderClearDebouncer,X,()=>this._resizeHandler());else{this.__elementHeightQueue.push(t),this.__elementHeightQueue.shift();const s=this.__elementHeightQueue.filter(r=>r!==void 0);this.__placeholderHeight=Math.round(s.reduce((r,n)=>r+n,0)/s.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(i){const e=this.__getVisibleElements().find(t=>t.__virtualIndex===i);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(i){if(i===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,t;if(i>0&&(e=this.adjustedFirstVisibleIndex,t=this.__getIndexScrollOffset(e)),this.__size=i,this._itemsChanged({path:"items"}),qe(),i>0){e=Math.min(e,i-1),this.scrollToIndex(e);const s=this.__getIndexScrollOffset(e);t!==void 0&&s!==void 0&&(this._scrollTop+=t-s)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),qe(),this._debounce("_update",this._update,j)}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(i){this.scrollTarget.scrollTop=i}get items(){return{length:Math.min(this.size,Rr)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const i=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(i["padding-top"],10),this._isRTL=i.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(i){const e=this.createElements(i),t=document.createDocumentFragment();return e.forEach(s=>{s.style.position="absolute",t.appendChild(s),this.__resizeObserver.observe(s)}),this.elementsContainer.appendChild(t),e}_assignModels(i){const e=[];this._iterateItems((t,s)=>{const r=this._physicalItems[t];r.hidden=s>=this.size,r.hidden?delete r.__lastUpdatedIndex:(r.__virtualIndex=s+(this._vidxOffset||0),this.__updateElement(r,r.__virtualIndex),e.push(r))},i),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(i,e,t,s){s.style.transform=`translateY(${e})`}toggleScrollListener(){}__getFocusedElement(i=this.__getVisibleElements()){return i.find(e=>e.contains(this.elementsContainer.getRootNode().activeElement)||e.contains(this.scrollTarget.getRootNode().activeElement))}__nextFocusableSiblingMissing(i,e){return e.indexOf(i)===e.length-1&&this.size>i.__virtualIndex+1}__previousFocusableSiblingMissing(i,e){return e.indexOf(i)===0&&i.__virtualIndex>0}__onElementFocused(i){if(!this.reorderElements)return;const e=i.detail.element;if(!e)return;const t=this.__getVisibleElements();(this.__previousFocusableSiblingMissing(e,t)||this.__nextFocusableSiblingMissing(e,t))&&this.flush();const s=this.__getVisibleElements();this.__nextFocusableSiblingMissing(e,s)?(this._scrollTop+=Math.ceil(e.getBoundingClientRect().bottom)-Math.floor(this.scrollTarget.getBoundingClientRect().bottom-1),this.flush()):this.__previousFocusableSiblingMissing(e,s)&&(this._scrollTop-=Math.ceil(this.scrollTarget.getBoundingClientRect().top+1)-Math.floor(e.getBoundingClientRect().top),this.flush())}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const i=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=i>=0,t=this._getReusables(!e);t.indexes.length&&(this._physicalTop=t.physicalTop,e?(this._virtualStart-=t.indexes.length,this._physicalStart-=t.indexes.length):(this._virtualStart+=t.indexes.length,this._physicalStart+=t.indexes.length),this._resizeHandler())}i&&(this.__fixInvalidItemPositioningDebouncer=O.debounce(this.__fixInvalidItemPositioningDebouncer,K.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=O.debounce(this.__scrollReorderDebouncer,K.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(i)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const i=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,t=this.adjustedFirstVisibleIndex===0,s=this.adjustedLastVisibleIndex===this.size-1;if(i&&!t||e&&!s){const r=e,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(r?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(i){if(i.ctrlKey||this._hasScrolledAncestor(i.target,i.deltaX,i.deltaY))return;let e=i.deltaY;if(i.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:i.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,i.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=O.debounce(this.__debouncerWheelAnimationFrame,X,()=>{this._wheelAnimationFrame=!1});const t=Math.abs(i.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,i.deltaX,e)?(i.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=i.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=O.debounce(this._debouncerIgnoreNewWheel,K.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&t<=this._previousMomentum||this._ignoreNewWheel?i.preventDefault():t>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=t}_hasScrolledAncestor(i,e,t){if(i===this.scrollTarget||i===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(i,e,t)&&["auto","scroll"].indexOf(getComputedStyle(i).overflow)!==-1)return!0;if(i!==this&&i.parentElement)return this._hasScrolledAncestor(i.parentElement,e,t)}_canScroll(i,e,t){return t>0&&i.scrollTop<i.scrollHeight-i.offsetHeight||t<0&&i.scrollTop>0||e>0&&i.scrollLeft<i.scrollWidth-i.offsetWidth||e<0&&i.scrollLeft>0}_increasePoolIfNeeded(i){if(this._physicalCount>2&&i){const t=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(i,Math.min(100,t)))}else super._increasePoolIfNeeded(i)}get _optPhysicalSize(){const i=super._optPhysicalSize;return i<=0||this.__hasPlaceholders()?i:i+this.__getItemHeightBuffer()}__getItemHeightBuffer(){if(this._physicalCount===0)return 0;const i=Math.ceil(this._viewportHeight*(this._maxPages-1)/2),e=Math.max(...this._physicalSizes);return e>Math.min(...this._physicalSizes)?Math.max(0,e-i):0}_getScrollLineHeight(){const i=document.createElement("div");i.style.fontSize="initial",i.style.display="none",document.body.appendChild(i);const e=window.getComputedStyle(i).fontSize;return document.body.removeChild(i),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(i=>!i.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const i=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),t=this.__getFocusedElement(e)||e[0];if(!t)return;const s=t.__virtualIndex-i,r=e.indexOf(t)-s;if(r>0)for(let n=0;n<r;n++)this.elementsContainer.appendChild(e[n]);else if(r<0)for(let n=e.length+r;n<e.length;n++)this.elementsContainer.insertBefore(e[n],e[0]);if(si){const{transform:n}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=n})}}_adjustVirtualIndexOffset(i){const e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(i)>1e4){const t=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(t*e)}else{const t=this._vidxOffset,s=Dt,r=100;this._scrollTop===0?(this._vidxOffset=0,t!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<s&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex+(t-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,t!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-s&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,r),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-t)))}}}Object.setPrototypeOf(Io.prototype,Lr);class Eo{constructor(i){this.__adapter=new Io(i)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(i){this.__adapter.size=i}scrollToIndex(i){this.__adapter.scrollToIndex(i)}update(i=0,e=this.size-1){this.__adapter.update(i,e)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ee=class{toString(){return""}};/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const So=o=>class extends o{static get properties(){return{items:{type:Array,sync:!0,observer:"__itemsChanged"},focusedIndex:{type:Number,sync:!0,observer:"__focusedIndexChanged"},loading:{type:Boolean,sync:!0,observer:"__loadingChanged"},opened:{type:Boolean,sync:!0,observer:"__openedChanged"},selectedItem:{type:Object,sync:!0,observer:"__selectedItemChanged"},itemClassNameGenerator:{type:Object,observer:"__itemClassNameGeneratorChanged"},itemIdPath:{type:String},owner:{type:Object},getItemLabel:{type:Object},renderer:{type:Object,sync:!0,observer:"__rendererChanged"},theme:{type:String}}}constructor(){super(),this.__boundOnItemClick=this.__onItemClick.bind(this)}get _viewportTotalPaddingBottom(){if(this._cachedViewportTotalPaddingBottom===void 0){const e=window.getComputedStyle(this.$.selector);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(t=>parseInt(t,10)).reduce((t,s)=>t+s)}return this._cachedViewportTotalPaddingBottom}ready(){super.ready(),this.setAttribute("role","listbox"),this.id=`${this.localName}-${Ze()}`,this.__hostTagName=this.constructor.is.replace("-scroller",""),this.addEventListener("click",e=>e.stopPropagation()),this.__patchWheelOverScrolling()}requestContentUpdate(){this.__virtualizer&&(this.items&&(this.__virtualizer.size=this.items.length),this.opened&&this.__virtualizer.update())}scrollIntoView(e){if(!this.__virtualizer||!(this.opened&&e>=0))return;const t=this._visibleItemsCount();let s=e;e>this.__virtualizer.lastVisibleIndex-1?(this.__virtualizer.scrollToIndex(e),s=e-t+1):e>this.__virtualizer.firstVisibleIndex&&(s=this.__virtualizer.firstVisibleIndex),this.__virtualizer.scrollToIndex(Math.max(0,s));const r=[...this.children].find(h=>!h.hidden&&h.index===this.__virtualizer.lastVisibleIndex);if(!r||e!==r.index)return;const n=r.getBoundingClientRect(),a=this.getBoundingClientRect(),l=n.bottom-a.bottom+this._viewportTotalPaddingBottom;l>0&&(this.scrollTop+=l)}_isItemSelected(e,t,s){return e instanceof ee?!1:s&&e!==void 0&&t!==void 0?ge(s,e)===ge(s,t):e===t}__initVirtualizer(){this.__virtualizer=new Eo({createElements:this.__createElements.bind(this),updateElement:this._updateElement.bind(this),elementsContainer:this,scrollTarget:this,scrollContainer:this.$.selector,reorderElements:!0})}__itemsChanged(e){e&&this.__virtualizer&&this.requestContentUpdate()}__loadingChanged(){this.requestContentUpdate()}__openedChanged(e){e&&(this.__virtualizer||this.__initVirtualizer(),this.requestContentUpdate())}__selectedItemChanged(){this.requestContentUpdate()}__itemClassNameGeneratorChanged(e,t){(e||t)&&this.requestContentUpdate()}__focusedIndexChanged(e,t){e!==t&&this.requestContentUpdate(),e>=0&&!this.loading&&this.scrollIntoView(e)}__rendererChanged(e,t){(e||t)&&this.requestContentUpdate()}__createElements(e){return[...Array(e)].map(()=>{const t=document.createElement(`${this.__hostTagName}-item`);return t.addEventListener("click",this.__boundOnItemClick),t.tabIndex="-1",t.style.width="100%",t})}_updateElement(e,t){const s=this.items[t],r=this.focusedIndex,n=this._isItemSelected(s,this.selectedItem,this.itemIdPath);e.setProperties({item:s,index:t,label:this.getItemLabel(s),selected:n,renderer:this.renderer,focused:!this.loading&&r===t}),typeof this.itemClassNameGenerator=="function"?e.className=this.itemClassNameGenerator(s):e.className!==""&&(e.className=""),e.performUpdate&&!e.hasUpdated&&e.performUpdate(),e.id=`${this.__hostTagName}-item-${t}`,e.setAttribute("role",t!==void 0?"option":!1),e.setAttribute("aria-selected",n.toString()),e.setAttribute("aria-posinset",t+1),e.setAttribute("aria-setsize",this.items.length),this.theme?e.setAttribute("theme",this.theme):e.removeAttribute("theme"),s instanceof ee&&this.__requestItemByIndex(t)}__onItemClick(e){this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.currentTarget.item}}))}__patchWheelOverScrolling(){this.$.selector.addEventListener("wheel",e=>{const t=this.scrollTop===0,s=this.scrollHeight-this.scrollTop-this.clientHeight<=1;(t&&e.deltaY<0||s&&e.deltaY>0)&&e.preventDefault()})}__requestItemByIndex(e){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:e}}))})}_visibleItemsCount(){return this.__virtualizer.scrollToIndex(this.__virtualizer.firstVisibleIndex),this.__virtualizer.size>0?this.__virtualizer.lastVisibleIndex-this.__virtualizer.firstVisibleIndex+1:0}};/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dr extends So(w){static get is(){return"vaadin-combo-box-scroller"}static get template(){return I`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-combo-box-items-container-border-width);
          border-style: var(--_vaadin-combo-box-items-container-border-style);
          border-color: var(--_vaadin-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}}A(Dr);/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class di{constructor(i,e){this.slot=i,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const i=this.slot.assignedNodes({flatten:!0});let e=[];const t=[],s=[];i.length&&(e=i.filter(r=>!this._storedNodes.includes(r))),this._storedNodes.length&&this._storedNodes.forEach((r,n)=>{const a=i.indexOf(r);a===-1?t.push(r):a!==n&&s.push(r)}),(e.length||t.length||s.length)&&this.callback({addedNodes:e,currentNodes:i,movedNodes:s,removedNodes:t}),this._storedNodes=i}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class De extends EventTarget{static generateId(i,e="default"){return`${e}-${i.localName}-${Ze()}`}constructor(i,e,t,s={}){super();const{initializer:r,multiple:n,observe:a,useUniqueId:l,uniqueIdPrefix:h}=s;this.host=i,this.slotName=e,this.tagName=t,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=r,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(i,h||e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let i=this.getSlotChild();i?(this.node=i,this.initAddedNode(i)):(i=this.attachDefaultNode(),this.initNode(i))}initMultiple(){const i=this.getSlotChildren();if(i.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=i,i.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:i,slotName:e,tagName:t}=this;let s=this.defaultNode;return!s&&t&&(s=document.createElement(t),s instanceof Element&&(e!==""&&s.setAttribute("slot",e),this.defaultNode=s)),s&&(this.node=s,i.appendChild(s)),s}getSlotChildren(){const{slotName:i}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===i||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&i==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(i){const{slotInitializer:e}=this;e&&e(i,this.host)}initCustomNode(i){}teardownNode(i){}initAddedNode(i){i!==this.defaultNode&&(this.initCustomNode(i),this.initNode(i))}observeSlot(){const{slotName:i}=this,e=i===""?"slot:not([name])":`slot[name=${i}]`,t=this.host.shadowRoot.querySelector(e);this.__slotObserver=new di(t,({addedNodes:s,removedNodes:r})=>{const n=this.multiple?this.nodes:[this.node],a=s.filter(l=>!Sr(l)&&!n.includes(l));r.length&&(this.nodes=n.filter(l=>!r.includes(l)),r.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class be extends De{constructor(i){super(i,"tooltip"),this.setTarget(i)}initCustomNode(i){i.target=this.target,this.ariaTarget!==void 0&&(i.ariaTarget=this.ariaTarget),this.context!==void 0&&(i.context=this.context),this.manual!==void 0&&(i.manual=this.manual),this.opened!==void 0&&(i.opened=this.opened),this.position!==void 0&&(i._position=this.position),this.shouldShow!==void 0&&(i.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(i){this.ariaTarget=i;const e=this.node;e&&(e.ariaTarget=i)}setContext(i){this.context=i;const e=this.node;e&&(e.context=i)}setManual(i){this.manual=i;const e=this.node;e&&(e.manual=i)}setOpened(i){this.opened=i;const e=this.node;e&&(e.opened=i)}setPosition(i){this.position=i;const e=this.node;e&&(e._position=i)}setShouldShow(i){this.shouldShow=i;const e=this.node;e&&(e.shouldShow=i)}setTarget(i){this.target=i;const e=this.node;e&&(e.target=i)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xt=$(o=>class extends o{get _keyboardActive(){return Xe()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wt=$(o=>class extends o{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0,sync:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hi=o=>class extends wt(o){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,t){super._disabledChanged(e,t),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):t&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ci=$(o=>class extends xt(hi(o)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,t){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):t&&this._removeFocusListeners(t)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,t){super._disabledChanged(e,t),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fe=$(o=>class extends o{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ft=new WeakMap;function Fr(o){return Ft.has(o)||Ft.set(o,new Set),Ft.get(o)}function Nr(o,i){const e=document.createElement("style");e.textContent=o,i===document?document.head.appendChild(e):i.insertBefore(e,i.firstChild)}const Mr=$(o=>class extends o{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),t=Fr(e);this.slotStyles.forEach(s=>{t.has(s)||(Nr(s,e),t.add(s))})}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const At=$(o=>class extends o{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e),this._hasInputValue=e&&e.length>0}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,t){e?this._addInputListeners(e):t&&this._removeInputListeners(t)}_hasInputValueChanged(e,t){(e||t)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const t=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=t.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,t){this._toggleHasValue(this._hasValue),!(e===""&&t===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const t=e.composedPath()[0];this._hasInputValue=t.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Br=o=>class extends At(Fe(o)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){e.preventDefault(),me||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&!this.readonly&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nt=new Map;function ui(o){return Nt.has(o)||Nt.set(o,new WeakMap),Nt.get(o)}function To(o,i){o&&o.removeAttribute(i)}function ko(o,i){if(!o||!i)return;const e=ui(i);if(e.has(o))return;const t=li(o.getAttribute(i));e.set(o,new Set(t))}function $r(o,i){if(!o)return;const e=ui(i),t=e.get(o);!t||t.size===0?o.removeAttribute(i):Re(o,i,yt(t)),e.delete(o)}function lt(o,i,e={newId:null,oldId:null,fromUser:!1}){if(!o||!i)return;const{newId:t,oldId:s,fromUser:r}=e,n=ui(i),a=n.get(o);if(!r&&a){s&&a.delete(s),t&&a.add(t);return}r&&(a?t||n.delete(o):ko(o,i),To(o,i)),Qe(o,i,s);const l=t||yt(a);l&&Re(o,i,l)}function Vr(o,i){ko(o,i),To(o,i)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hr{constructor(i){this.host=i,this.__required=!1}setTarget(i){this.__target=i,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(i){this.__setAriaRequiredAttribute(i),this.__required=i}setAriaLabel(i){this.__setAriaLabelToAttribute(i),this.__label=i}setLabelId(i,e=!1){const t=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(i,t,e),e?this.__labelIdFromUser=i:this.__labelId=i}setErrorId(i){this.__setErrorIdToAriaAttribute(i,this.__errorId),this.__errorId=i}setHelperId(i){this.__setHelperIdToAriaAttribute(i,this.__helperId),this.__helperId=i}__setAriaLabelToAttribute(i){this.__target&&(i?(Vr(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",i)):this.__label&&($r(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(i,e,t){lt(this.__target,"aria-labelledby",{newId:i,oldId:e,fromUser:t})}__setErrorIdToAriaAttribute(i,e){lt(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(i,e){lt(this.__target,"aria-describedby",{newId:i,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(i){this.__target&&(["input","textarea"].includes(this.__target.localName)||(i?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const G=document.createElement("div");G.style.position="fixed";G.style.clip="rect(0px, 0px, 0px, 0px)";G.setAttribute("aria-live","polite");document.body.appendChild(G);let ot;function dt(o,i={}){const e=i.mode||"polite",t=i.timeout===void 0?150:i.timeout;e==="alert"?(G.removeAttribute("aria-live"),G.removeAttribute("role"),ot=O.debounce(ot,X,()=>{G.setAttribute("role","alert")})):(ot&&ot.cancel(),G.removeAttribute("role"),G.setAttribute("aria-live",e)),G.textContent="",setTimeout(()=>{G.textContent=o},t)}/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _i extends De{constructor(i,e,t,s={}){super(i,e,t,{...s,useUniqueId:!0})}initCustomNode(i){this.__updateNodeId(i),this.__notifyChange(i)}teardownNode(i){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const i=super.attachDefaultNode();return i&&this.__updateNodeId(i),i}restoreDefaultNode(){}updateDefaultNode(i){this.__notifyChange(i)}observeNode(i){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(t=>{const s=t.target,r=s===this.node;t.type==="attributes"?r&&this.__updateNodeId(s):(r||s.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(i,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(i){return i?i.nodeType===Node.ELEMENT_NODE&&(customElements.get(i.localName)||i.children.length>0)||i.textContent&&i.textContent.trim()!=="":!1}__notifyChange(i){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(i),node:i}}))}__updateNodeId(i){const e=!this.nodes||i===this.nodes[0];i.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!i.id&&(i.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qr extends _i{constructor(i){super(i,"error-message","div")}setErrorMessage(i){this.errorMessage=i,this.updateDefaultNode(this.node)}setInvalid(i){this.invalid=i,this.updateDefaultNode(this.node)}initAddedNode(i){i!==this.defaultNode&&this.initCustomNode(i)}initNode(i){this.updateDefaultNode(i)}initCustomNode(i){i.textContent&&!this.errorMessage&&(this.errorMessage=i.textContent.trim()),super.initCustomNode(i)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(i){const{errorMessage:e,invalid:t}=this,s=!!(t&&e&&e.trim()!=="");i&&(i.textContent=s?e:"",i.hidden=!s,s&&dt(e,{mode:"assertive"})),super.updateDefaultNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wr extends _i{constructor(i){super(i,"helper",null)}setHelperText(i){this.helperText=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:i}=this;if(i&&i.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.helperText),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class zo extends _i{constructor(i){super(i,"label","label")}setLabel(i){this.label=i,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:i}=this;if(i&&i.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(i){i&&(i.textContent=this.label),super.updateDefaultNode(i)}initCustomNode(i){super.initCustomNode(i),this.observeNode(i)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ur=$(o=>class extends Q(o){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new zo(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pi=$(o=>class extends o{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},manualValidation:{type:Boolean,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}_requestValidation(){this.manualValidation||this.validate()}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fi=o=>class extends pi(Ur(Q(o))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new Hr(this),this._helperController=new Wr(this),this._errorController=new qr(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:s}=e.detail;this.__labelChanged(t,s)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:t,node:s}=e.detail;this.toggleAttribute("has-helper",t),this.__helperChanged(t,s)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,t){e?this._fieldAriaController.setHelperId(t.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,t){e?this._fieldAriaController.setLabelId(t.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const t=this._errorNode;this._fieldAriaController.setErrorId(t&&t.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mi=$(o=>class extends o{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((t,s)=>{this._delegateAttribute(t,e[s])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((t,s)=>{this._delegateProperty(t,e[s])})}_delegateAttribute(e,t){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",t?"true":!1),typeof t=="boolean"?this.stateTarget.toggleAttribute(e,t):t?this.stateTarget.setAttribute(e,t):this.stateTarget.removeAttribute(e))}_delegateProperty(e,t){this.stateTarget&&(this.stateTarget[e]=t)}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Oo=$(o=>class extends mi(pi(At(o))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(t=>this.__isValidConstraint(t))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...t){if(!e)return;const s=this._hasValidConstraints(t),r=this.__previousHasConstraints&&!s;(this._hasValue||this.invalid)&&s?this._requestValidation():r&&!this.manualValidation&&this._setInvalid(!1),this.__previousHasConstraints=s}_onChange(e){e.stopPropagation(),this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const gi=o=>class extends Mr(ci(Oo(fi(Br(Fe(o)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&e.target===this.inputElement&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=O.debounce(this._preventInputDebouncer,K.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const t=e.clipboardData.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const t=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(t)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(t){console.error(t)}}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class It extends De{constructor(i,e,t={}){const{uniqueIdPrefix:s}=t;super(i,"input","input",{initializer:(r,n)=>{n.value&&(r.value=n.value),n.type&&r.setAttribute("type",n.type),r.id=this.defaultId,typeof e=="function"&&e(r)},useUniqueId:!0,uniqueIdPrefix:s})}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Et{constructor(i,e){this.input=i,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",t=>{this.__initLabel(t.detail.node)}),this.__initLabel(e.node)}__initLabel(i){i&&(i.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&i.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const i=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",i)};this.input.addEventListener("click",i)}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gr=o=>class extends Oo(o){static get properties(){return{pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"pattern"]}static get constraints(){return[...super.constraints,"pattern"]}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jr=g`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Po=g`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lo=g`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vi=[Po,Lo,jr];/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ct(o,i,e=0){let t=i;for(const s of o.subCaches){const r=s.parentCacheIndex;if(t<=r)break;if(t<=r+s.flatSize)return ct(s,t-r-1,e+1);t-=s.flatSize}return{cache:o,item:o.items[t],index:t,page:Math.floor(t/o.pageSize),level:e}}function Ro({getItemId:o},i,e,t=0,s=0){for(let r=0;r<i.items.length;r++){const n=i.items[r];if(n&&o(n)===o(e))return{cache:i,level:t,item:n,index:r,page:Math.floor(r/i.pageSize),subCache:i.getSubCache(r),flatIndex:s+i.getFlatIndex(r)}}for(const r of i.subCaches){const n=s+i.getFlatIndex(r.parentCacheIndex),a=Ro({getItemId:o},r,e,t+1,n+1);if(a)return a}}function Do(o,[i,...e],t=0){i===1/0&&(i=o.size-1);const s=o.getFlatIndex(i),r=o.getSubCache(i);return r&&r.flatSize>0&&e.length?Do(r,e,t+s+1):t+s}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class bi{constructor(i,e,t,s,r){N(this,"context");N(this,"pageSize");N(this,"items",[]);N(this,"pendingRequests",{});N(this,"__subCacheByIndex",{});N(this,"__size",0);N(this,"__flatSize",0);this.context=i,this.pageSize=e,this.size=t,this.parentCache=s,this.parentCacheIndex=r,this.__flatSize=t||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(i=>i.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}get size(){return this.__size}set size(i){var t;if(this.__size!==i){if(this.__size=i,this.context.placeholder!==void 0){this.items.length=i||0;for(let s=0;s<i;s++)(t=this.items)[s]||(t[s]=this.context.placeholder)}Object.keys(this.pendingRequests).forEach(s=>{parseInt(s)*this.pageSize>=this.size&&delete this.pendingRequests[s]})}}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((i,e)=>(e.recalculateFlatSize(),i+e.flatSize),0):0}setPage(i,e){const t=i*this.pageSize;e.forEach((s,r)=>{const n=t+r;(this.size===void 0||n<this.size)&&(this.items[n]=s)})}getSubCache(i){return this.__subCacheByIndex[i]}removeSubCache(i){delete this.__subCacheByIndex[i]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(i){const e=new bi(this.context,this.pageSize,0,this,i);return this.__subCacheByIndex[i]=e,e}getFlatIndex(i){const e=Math.max(0,Math.min(this.size-1,i));return this.subCaches.reduce((t,s)=>{const r=s.parentCacheIndex;return e>r?t+s.flatSize:t},e)}getItemForIndex(i){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:e}=ct(this,i);return e}getCacheAndIndex(i){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:e,index:t}=ct(this,i);return{cache:e,scaledIndex:t}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(i){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(i)){const e=this.createSubCache(i);this.context.__controller.__loadCachePage(e,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Fo extends EventTarget{constructor(e,{size:t,pageSize:s,isExpanded:r,getItemId:n,isPlaceholder:a,placeholder:l,dataProvider:h,dataProviderParams:u}){super();N(this,"host");N(this,"dataProvider");N(this,"dataProviderParams");N(this,"pageSize");N(this,"isExpanded");N(this,"getItemId");N(this,"rootCache");N(this,"placeholder");N(this,"isPlaceholder");this.host=e,this.pageSize=s,this.getItemId=n,this.isExpanded=r,this.placeholder=l,this.isPlaceholder=a,this.dataProvider=h,this.dataProviderParams=u,this.rootCache=this.__createRootCache(t)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,placeholder:this.placeholder,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(e){this.pageSize=e,this.clearCache()}setDataProvider(e){this.dataProvider=e,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(e){return ct(this.rootCache,e)}getItemContext(e){return Ro({getItemId:this.getItemId},this.rootCache,e)}getFlatIndexByPath(e){return Do(this.rootCache,e)}ensureFlatIndexLoaded(e){const{cache:t,page:s,item:r}=this.getFlatIndexContext(e);this.__isItemLoaded(r)||this.__loadCachePage(t,s)}ensureFlatIndexHierarchy(e){const{cache:t,item:s,index:r}=this.getFlatIndexContext(e);if(this.__isItemLoaded(s)&&this.isExpanded(s)&&!t.getSubCache(r)){const n=t.createSubCache(r);this.__loadCachePage(n,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(e){return new bi(this.__cacheContext,this.pageSize,e)}__loadCachePage(e,t){if(!this.dataProvider||e.pendingRequests[t])return;let s={page:t,pageSize:this.pageSize,parentItem:e.parentItem};this.dataProviderParams&&(s={...s,...this.dataProviderParams()});const r=(n,a)=>{e.pendingRequests[t]===r&&(a!==void 0?e.size=a:s.parentItem&&(e.size=n.length),e.setPage(t,n),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete e.pendingRequests[t],this.dispatchEvent(new CustomEvent("page-loaded")))};e.pendingRequests[t]=r,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(s,r)}__isItemLoaded(e){return this.isPlaceholder?!this.isPlaceholder(e):this.placeholder?e!==this.placeholder:!!e}}/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const No=o=>class extends o{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},size:{type:Number,observer:"_sizeChanged",sync:!0},dataProvider:{type:Object,observer:"_dataProviderChanged",sync:!0},__dataProviderInitialized:{type:Boolean,value:!1},__previousDataProviderFilter:{type:String}}}static get observers(){return["_dataProviderFilterChanged(filter)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}constructor(){super(),this.__dataProviderController=new Fo(this,{placeholder:new ee,isPlaceholder:e=>e instanceof ee,dataProviderParams:()=>({filter:this.filter})}),this.__dataProviderController.addEventListener("page-requested",this.__onDataProviderPageRequested.bind(this)),this.__dataProviderController.addEventListener("page-loaded",this.__onDataProviderPageLoaded.bind(this))}ready(){super.ready(),this._scroller.addEventListener("index-requested",e=>{if(!this._shouldFetchData())return;const t=e.detail.index;t!==void 0&&this.__dataProviderController.ensureFlatIndexLoaded(t)}),this.__dataProviderInitialized=!0,this.dataProvider&&this.__synchronizeControllerState()}_dataProviderFilterChanged(e){if(this.__previousDataProviderFilter===void 0&&e===""){this.__previousDataProviderFilter=e;return}this.__previousDataProviderFilter!==e&&(this.__previousDataProviderFilter=e,this.__keepOverlayOpened=!0,this.size=void 0,this.clearCache(),this.__keepOverlayOpened=!1)}_shouldFetchData(){return this.dataProvider?this.opened||this.filter&&this.filter.length:!1}_ensureFirstPage(e){!this._shouldFetchData()||!e||(this._forceNextRequest||this.size===void 0?(this._forceNextRequest=!1,this.__dataProviderController.loadFirstPage()):this.size>0&&this.__dataProviderController.ensureFlatIndexLoaded(0))}__onDataProviderPageRequested(){this.loading=!0}__onDataProviderPageLoaded(){const{rootCache:e}=this.__dataProviderController;e.items=[...e.items],this.__synchronizeControllerState(),!this.opened&&!this._isInputFocused()&&this._commitValue()}clearCache(){this.dataProvider&&(this.__dataProviderController.clearCache(),this.__synchronizeControllerState(),this._shouldFetchData()?(this._forceNextRequest=!1,this.__dataProviderController.loadFirstPage()):this._forceNextRequest=!0)}_sizeChanged(e){const{rootCache:t}=this.__dataProviderController;t.size!==e&&(t.size=e,t.items=[...t.items],this.__synchronizeControllerState())}_filteredItemsChanged(e){if(super._filteredItemsChanged(e),this.dataProvider&&e){const{rootCache:t}=this.__dataProviderController;t.items!==e&&(t.items=e,this.__synchronizeControllerState())}}__synchronizeControllerState(){if(this.__dataProviderInitialized&&this.dataProvider){const{rootCache:e}=this.__dataProviderController;this.size=e.size,this.filteredItems=e.items,this.loading=this.__dataProviderController.isLoading()}}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.__dataProviderController.setPageSize(e),this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t}),this.__dataProviderController.setDataProvider(e),this.clearCache()}_ensureItemsOrDataProvider(e){if(this.items!==void 0&&this.dataProvider!==void 0)throw e(),new Error("Using `items` and `dataProvider` together is not supported")}_warnDataProviderValue(e,t){if(e&&t!==""&&(this.selectedItem===void 0||this.selectedItem===null)){const s=this.__getItemIndexByValue(this.filteredItems,t);(s<0||!this._getItemLabel(this.filteredItems[s]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}};/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ne=o=>class extends o{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,t){if(!t||e===void 0)return;const{classList:s}=t;if(this.__initialClasses||(this.__initialClasses=new Set(s)),Array.isArray(this.__previousClasses)){const n=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));n.length>0&&s.remove(...n)}const r=typeof e=="string"?e.split(" ").filter(Boolean):[];r.length>0&&s.add(...r),this.__previousClasses=r}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ce(o){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(o);return}o.querySelector("template")&&console.warn(`WARNING: <template> inside <${o.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Yr{constructor(i){this.host=i,i.addEventListener("opened-changed",()=>{i.opened||this.__setVirtualKeyboardEnabled(!1)}),i.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),i.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(i){this.host.inputElement&&(this.host.inputElement.inputMode=i?"":"none")}}/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ni(o){return o!=null}function Mi(o,i){return o.findIndex(e=>e instanceof ee?!1:i(e))}const Mo=o=>class extends Ne(Q(pi(xt(Fe(At(wt(o))))))){static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,sync:!0,observer:"_openedChanged"},autoOpenDisabled:{type:Boolean,sync:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:{type:Object,sync:!0},items:{type:Array,sync:!0,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array,observer:"_filteredItemsChanged",sync:!0},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0,sync:!0},_focusedIndex:{type:Number,observer:"_focusedIndexChanged",value:-1,sync:!0},filter:{type:String,value:"",notify:!0,sync:!0},selectedItem:{type:Object,notify:!0,sync:!0},itemClassNameGenerator:{type:Object},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged",sync:!0},itemValuePath:{type:String,value:"value",sync:!0},itemIdPath:{type:String,sync:!0},_toggleElement:{type:Object,observer:"_toggleElementChanged"},_dropdownItems:{type:Array,sync:!0},_closeOnBlurIsPrevented:Boolean,_scroller:{type:Object,sync:!0},_overlayOpened:{type:Boolean,sync:!0,observer:"_overlayOpenedChanged"},__keepOverlayOpened:{type:Boolean,sync:!0}}}static get observers(){return["_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_openedOrItemsChanged(opened, _dropdownItems, loading, __keepOverlayOpened)","_updateScroller(_scroller, _dropdownItems, opened, loading, selectedItem, itemIdPath, _focusedIndex, renderer, _theme, itemClassNameGenerator)"]}constructor(){super(),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundOnClearButtonMouseDown=this.__onClearButtonMouseDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}get _tagNamePrefix(){return"vaadin-combo-box"}get _nativeInput(){return this.inputElement}_inputElementChanged(e){super._inputElementChanged(e);const t=this._nativeInput;t&&(t.autocomplete="off",t.autocapitalize="off",t.setAttribute("role","combobox"),t.setAttribute("aria-autocomplete","list"),t.setAttribute("aria-expanded",!!this.opened),t.setAttribute("spellcheck","false"),t.setAttribute("autocorrect","off"),this._revertInputValueToValue(),this.clearElement&&this.clearElement.addEventListener("mousedown",this._boundOnClearButtonMouseDown))}ready(){super.ready(),this._initOverlay(),this._initScroller(),this._lastCommittedValue=this.value,this.addEventListener("click",this._boundOnClick),this.addEventListener("touchend",this._boundOnTouchend);const e=()=>{requestAnimationFrame(()=>{this._overlayElement.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e),ce(this),this.addController(new Yr(this))}disconnectedCallback(){super.disconnectedCallback(),this.close()}requestContentUpdate(){this._scroller&&(this._scroller.requestContentUpdate(),this._getItemElements().forEach(e=>{e.requestContentUpdate()}))}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.opened=!1}_propertiesChanged(e,t,s){super._propertiesChanged(e,t,s),t.filter!==void 0&&this._filterChanged(t.filter)}updated(e){super.updated(e),e.has("filter")&&this._filterChanged(this.filter)}_initOverlay(){const e=this.$.overlay;e._comboBox=this,e.addEventListener("touchend",this._boundOnOverlayTouchAction),e.addEventListener("touchmove",this._boundOnOverlayTouchAction),e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("opened-changed",t=>{this._overlayOpened=t.detail.value}),this._overlayElement=e}_initScroller(e){const t=document.createElement(`${this._tagNamePrefix}-scroller`);t.owner=e||this,t.getItemLabel=this._getItemLabel.bind(this),t.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged);const s=this._overlayElement;s.renderer=r=>{r.innerHTML||r.appendChild(t)},s.requestContentUpdate(),this._scroller=t}_updateScroller(e,t,s,r,n,a,l,h,u,p){if(e&&(s&&(e.style.maxHeight=getComputedStyle(this).getPropertyValue(`--${this._tagNamePrefix}-overlay-max-height`)||"65vh"),e.setProperties({items:s?t:[],opened:s,loading:r,selectedItem:n,itemIdPath:a,focusedIndex:l,renderer:h,theme:u,itemClassNameGenerator:p}),e.performUpdate&&!e.hasUpdated))try{e.performUpdate()}catch{}}_openedOrItemsChanged(e,t,s,r){this._overlayOpened=e&&(r||s||!!(t&&t.length))}_overlayOpenedChanged(e,t){e?(this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0})),this._onOpened()):t&&this._dropdownItems&&this._dropdownItems.length&&(this.close(),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0})))}_focusedIndexChanged(e,t){t!==void 0&&this._updateActiveDescendant(e)}_isInputFocused(){return this.inputElement&&ni(this.inputElement)}_updateActiveDescendant(e){const t=this._nativeInput;if(!t)return;const s=this._getItemElements().find(r=>r.index===e);s?t.setAttribute("aria-activedescendant",s.id):t.removeAttribute("aria-activedescendant")}_openedChanged(e,t){if(t===void 0)return;e?!this._isInputFocused()&&!me&&this.inputElement&&this.inputElement.focus():this._onClosed();const s=this._nativeInput;s&&(s.setAttribute("aria-expanded",!!e),e?s.setAttribute("aria-controls",this._scroller.id):s.removeAttribute("aria-controls"))}_onOverlayTouchAction(){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_isClearButton(e){return e.composedPath()[0]===this.clearElement}__onClearButtonMouseDown(e){e.preventDefault(),this.inputElement.focus()}_onClearButtonClick(e){e.preventDefault(),this._onClearAction(),this.opened&&this.requestContentUpdate()}_onToggleButtonClick(e){e.preventDefault(),this.opened?this.close():this.open()}_onHostClick(e){this.autoOpenDisabled||(e.preventDefault(),this.open())}_onClick(e){this._isClearButton(e)?this._onClearButtonClick(e):e.composedPath().includes(this._toggleElement)?this._onToggleButtonClick(e):this._onHostClick(e)}_onKeyDown(e){super._onKeyDown(e),e.key==="ArrowDown"?(this._onArrowDown(),e.preventDefault()):e.key==="ArrowUp"&&(this._onArrowUp(),e.preventDefault())}_getItemLabel(e){let t=e&&this.itemLabelPath?ge(this.itemLabelPath,e):void 0;return t==null&&(t=e?e.toString():""),t}_getItemValue(e){let t=e&&this.itemValuePath?ge(this.itemValuePath,e):void 0;return t===void 0&&(t=e?e.toString():""),t}_onArrowDown(){if(this.opened){const e=this._dropdownItems;e&&(this._focusedIndex=Math.min(e.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel())}else this.open()}_onArrowUp(){if(this.opened){if(this._focusedIndex>-1)this._focusedIndex=Math.max(0,this._focusedIndex-1);else{const e=this._dropdownItems;e&&(this._focusedIndex=e.length-1)}this._prefillFocusedItemLabel()}else this.open()}_prefillFocusedItemLabel(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this._inputElementValue=this._getItemLabel(e),this._markAllSelectionRange()}}_setSelectionRange(e,t){this._isInputFocused()&&this.inputElement.setSelectionRange&&this.inputElement.setSelectionRange(e,t)}_markAllSelectionRange(){this._inputElementValue!==void 0&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(this._inputElementValue!==void 0){const e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){!this.opened&&!this.loading?this._commitValue():this.close()}_onEnter(e){if(!this._hasValidInputValue()){e.preventDefault(),e.stopPropagation();return}this.opened&&(e.preventDefault(),e.stopPropagation()),this._closeOrCommit()}_hasValidInputValue(){const e=this._focusedIndex<0&&this._inputElementValue!==""&&this._getItemLabel(this.selectedItem)!==this._inputElementValue;return this.allowCustomValue||!e}_onEscape(e){this.autoOpenDisabled&&(this.opened||this.value!==this._inputElementValue&&this._inputElementValue.length>0)?(e.stopPropagation(),this._focusedIndex=-1,this.cancel()):this.opened?(e.stopPropagation(),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel()):this.clearButtonVisible&&this.value&&!this.readonly&&(e.stopPropagation(),this._onClearAction())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",t=>t.preventDefault()),e.addEventListener("click",()=>{me&&!this._isInputFocused()&&document.activeElement.blur()}))}_onClearAction(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}_clearFilter(){this.filter=""}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){this._lastCommittedValue=this.value}_onClosed(){(!this.loading||this.allowCustomValue)&&this._commitValue()}_commitValue(){if(this._focusedIndex>-1){const e=this._dropdownItems[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem),this._focusedIndex=-1}else if(this._inputElementValue===""||this._inputElementValue===void 0)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{const e=[this.selectedItem,...this._dropdownItems||[]],t=e[this.__getItemIndexByLabel(e,this._inputElementValue)];if(this.allowCustomValue&&!t){const s=this._inputElementValue;this._lastCustomValue=s;const r=new CustomEvent("custom-value-set",{detail:s,composed:!0,cancelable:!0,bubbles:!0});this.dispatchEvent(r),r.defaultPrevented||(this.value=s)}else!this.allowCustomValue&&!this.opened&&t?this.value=this._getItemValue(t):this._revertInputValueToValue()}this._detectAndDispatchChange(),this._clearSelectionRange(),this._clearFilter()}_onInput(e){const t=this._inputElementValue,s={};this.filter===t?this._filterChanged(this.filter):s.filter=t,!this.opened&&!this._isClearButton(e)&&!this.autoOpenDisabled&&(s.opened=!0),this.setProperties(s)}_onChange(e){e.stopPropagation()}_itemLabelPathChanged(e){typeof e!="string"&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e){this._scrollIntoView(0),this._focusedIndex=-1,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged(this.filteredItems)}_revertInputValue(){this.filter!==""?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_selectedItemChanged(e){if(e==null)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._toggleHasValue(this._hasValue),this._inputElementValue=this.value);else{const t=this._getItemValue(e);if(this.value!==t&&(this.value=t,this.value!==t))return;this._toggleHasValue(!0),this._inputElementValue=this._getItemLabel(e)}}_valueChanged(e,t){e===""&&t===void 0||(Ni(e)?(this._getItemValue(this.selectedItem)!==e&&this._selectItemForValue(e),!this.selectedItem&&this.allowCustomValue&&(this._inputElementValue=e),this._toggleHasValue(this._hasValue)):this.selectedItem=null,this._clearFilter(),this._lastCommittedValue=void 0)}_detectAndDispatchChange(){document.hasFocus()&&this._requestValidation(),this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t}),e?this.filteredItems=e.slice(0):t&&(this.filteredItems=null)}_filteredItemsChanged(e){this._setDropdownItems(e)}_filterItems(e,t){return e&&e.filter(r=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(r).toString().toLowerCase().indexOf(t)>-1))}_selectItemForValue(e){const t=this.__getItemIndexByValue(this.filteredItems,e),s=this.selectedItem;t>=0?this.selectedItem=this.filteredItems[t]:this.dataProvider&&this.selectedItem===void 0?this.selectedItem=void 0:this.selectedItem=null,this.selectedItem===null&&s===null&&this._selectedItemChanged(this.selectedItem)}_setDropdownItems(e){const t=this._dropdownItems;this._dropdownItems=e;const s=t?t[this._focusedIndex]:null,r=this.__getItemIndexByValue(e,this.value);(this.selectedItem===null||this.selectedItem===void 0)&&r>=0&&(this.selectedItem=e[r]);const n=this.__getItemIndexByValue(e,this._getItemValue(s));n>-1?this._focusedIndex=n:this._focusedIndex=this.__getItemIndexByLabel(e,this.filter)}_getItemElements(){return Array.from(this._scroller.querySelectorAll(`${this._tagNamePrefix}-item`))}_scrollIntoView(e){this._scroller&&this._scroller.scrollIntoView(e)}__getItemIndexByValue(e,t){return!e||!Ni(t)?-1:Mi(e,s=>this._getItemValue(s)===t)}__getItemIndexByLabel(e,t){return!e||!t?-1:Mi(e,s=>this._getItemLabel(s).toString().toLowerCase()===t.toString().toLowerCase())}_overlaySelectedItemChanged(e){e.stopPropagation(),!(e.detail.item instanceof ee)&&this.opened&&(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close())}_setFocused(e){if(super._setFocused(e),!e&&!this.readonly&&!this._closeOnBlurIsPrevented){if(!this.opened&&this.allowCustomValue&&this._inputElementValue===this._lastCustomValue){delete this._lastCustomValue;return}if(Xe()){this._closeOrCommit();return}this.opened?this._overlayOpened||this.close():this._commitValue()}}_shouldRemoveFocus(e){return e.relatedTarget&&e.relatedTarget.localName===`${this._tagNamePrefix}-item`?!1:e.relatedTarget===this._overlayElement?(e.composedPath()[0].focus(),!1):!0}_onTouchend(e){!this.clearElement||e.composedPath()[0]!==this.clearElement||(e.preventDefault(),this._onClearAction())}};/**
 * @license
 * Copyright (c) 2015 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-combo-box",vi,{moduleId:"vaadin-combo-box-styles"});class Kr extends No(Mo(Gr(gi(k(V(w)))))){static get is(){return"vaadin-combo-box"}static get template(){return I`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <div class="vaadin-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div id="toggleButton" part="toggle-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_positionTarget]]"
        no-vertical-overlap
      ></vaadin-combo-box-overlay>

      <slot name="tooltip"></slot>
    `}static get properties(){return{_positionTarget:{type:Object}}}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new It(this,i=>{this._setInputElement(i),this._setFocusElement(i),this.stateTarget=i,this.ariaTarget=i})),this.addController(new Et(this.inputElement,this._labelController)),this._tooltipController=new be(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(i=>!i.opened),this._positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this._toggleElement=this.$.toggleButton}_onClearButtonClick(i){i.stopPropagation(),super._onClearButtonClick(i)}_onHostClick(i){const e=i.composedPath();(e.includes(this._labelNode)||e.includes(this._positionTarget))&&super._onHostClick(i)}}A(Kr);window.Vaadin.Flow.comboBoxConnector={};window.Vaadin.Flow.comboBoxConnector.initLazy=o=>{if(o.$connector)return;o.$connector={};const i={};let e={},t="";const s=new window.Vaadin.ComboBoxPlaceholder,r=(()=>{let h="",u=!1;return{needsDataCommunicatorReset:()=>u=!0,getLastFilterSentToServer:()=>h,requestData:(y,T,S)=>{const z=T-y,F=S.filter;o.$server.setRequestedRange(y,z,F),h=F,u&&(o.$server.resetDataCommunicator(),u=!1)}}})(),n=(h=Object.keys(i))=>{h.forEach(u=>{i[u]([],o.size),delete i[u];const p=parseInt(u)*o.pageSize,f=p+o.pageSize,b=Math.min(f,o.filteredItems.length);for(let y=p;y<b;y++)o.filteredItems[y]=s})};o.dataProvider=function(h,u){if(h.pageSize!=o.pageSize)throw"Invalid pageSize";if(o._clientSideFilter)if(e[0]){l(e[0],h.filter,u);return}else h.filter="";if(h.filter!==t){e={},t=h.filter,this._filterDebouncer=J.debounce(this._filterDebouncer,$t.after(500),()=>{if(r.getLastFilterSentToServer()===h.filter&&r.needsDataCommunicatorReset(),h.filter!==t)throw new Error("Expected params.filter to be '"+t+"' but was '"+h.filter+"'");this._filterDebouncer=void 0,n(),o.dataProvider(h,u)});return}if(this._filterDebouncer){i[h.page]=u;return}if(e[h.page])a(h.page,u);else{i[h.page]=u;const f=Math.max(h.pageSize*2,500),b=Object.keys(i).map(S=>parseInt(S)),y=Math.min(...b),T=Math.max(...b);if(b.length*h.pageSize>f)h.page===y?n([String(T)]):n([String(y)]),o.dataProvider(h,u);else if(T-y+1!==b.length)n();else{const S=h.pageSize*y,z=h.pageSize*(T+1);r.requestData(S,z,h)}}},o.$connector.clear=(h,u)=>{const p=Math.floor(h/o.pageSize),f=Math.ceil(u/o.pageSize);for(let b=p;b<p+f;b++)delete e[b]},o.$connector.filter=(h,u)=>(u=u?u.toString().toLowerCase():"",o._getItemLabel(h,o.itemLabelPath).toString().toLowerCase().indexOf(u)>-1),o.$connector.set=(h,u,p)=>{if(p!=r.getLastFilterSentToServer())return;if(h%o.pageSize!=0)throw"Got new data to index "+h+" which is not aligned with the page size of "+o.pageSize;if(h===0&&u.length===0&&i[0]){e[0]=[];return}const f=h/o.pageSize,b=Math.ceil(u.length/o.pageSize);for(let y=0;y<b;y++){let T=f+y,S=u.slice(y*o.pageSize,(y+1)*o.pageSize);e[T]=S}},o.$connector.updateData=h=>{const u=new Map(h.map(p=>[p.key,p]));o.filteredItems=o.filteredItems.map(p=>u.get(p.key)||p)},o.$connector.updateSize=function(h){o._clientSideFilter||(o.size=h)},o.$connector.reset=function(){n(),e={},o.clearCache()},o.$connector.confirm=function(h,u){if(u!=r.getLastFilterSentToServer())return;let p=Object.getOwnPropertyNames(i);for(let f=0;f<p.length;f++){let b=p[f];e[b]&&a(b,i[b])}o.$server.confirmUpdate(h)};const a=function(h,u){let p=e[h];o._clientSideFilter?l(p,o.filter,u):(delete e[h],u(p,o.size))},l=function(h,u,p){let f=h;u&&(f=h.filter(b=>o.$connector.filter(b,u))),p(f,f.length)};o.addEventListener("custom-value-set",h=>h.preventDefault()),o.itemClassNameGenerator=function(h){return h.className||""}};window.Vaadin.ComboBoxPlaceholder=ee;/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Te(o){return o.__cells||Array.from(o.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function H(o,i){[...o.children].forEach(i)}function ke(o,i){Te(o).forEach(i),o.__detailsCell&&i(o.__detailsCell)}function Bo(o,i,e){let t=1;o.forEach(s=>{t%10===0&&(t+=1),s._order=e+t*i,t+=1})}function St(o,i,e){switch(typeof e){case"boolean":o.toggleAttribute(i,e);break;case"string":o.setAttribute(i,e);break;default:o.removeAttribute(i);break}}function de(o,i,e){i||i===""?Re(o,"part",e):Qe(o,"part",e)}function re(o,i,e){o.forEach(t=>{de(t,e,i)})}function we(o,i){const e=Te(o);Object.entries(i).forEach(([t,s])=>{St(o,t,s);const r=`${t}-row`;de(o,s,r),re(e,`${r}-cell`,s)})}function Bi(o,i){const e=Te(o);Object.entries(i).forEach(([t,s])=>{const r=o.getAttribute(t);if(St(o,t,s),r){const n=`${t}-${r}-row`;de(o,!1,n),re(e,`${n}-cell`,!1)}if(s){const n=`${t}-${s}-row`;de(o,s,n),re(e,`${n}-cell`,s)}})}function _e(o,i,e,t,s){St(o,i,e),s&&de(o,!1,s),de(o,e,t||`${i}-cell`)}class ne{constructor(i,e){this.__host=i,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(i,{childList:!0}),this.__initialCallDebouncer=O.debounce(this.__initialCallDebouncer,j,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(i){this.__currentSlots.forEach(e=>{i?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const i=!this.__currentColumns;this.__currentColumns||(this.__currentColumns=[]);const e=ne.getColumns(this.__host),t=e.filter(a=>!this.__currentColumns.includes(a)),s=this.__currentColumns.filter(a=>!e.includes(a)),r=this.__currentColumns.some((a,l)=>a!==e[l]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(a=>a instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(i||t.length||s.length||r)&&this.__callback(t,s)}static __isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}static getColumns(i){const e=[],t=i._isColumnElement||ne.__isColumnElement;return[...i.children].forEach(s=>{t(s)?e.push(s):s instanceof HTMLSlotElement&&[...s.assignedElements({flatten:!0})].filter(r=>t(r)).forEach(r=>e.push(r))}),e}}/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $o=o=>class extends o{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),ce(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>{t.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(t=>{t.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>{t.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>{_e(t,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||_e(t,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>{_e(t,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(t=>{this._grid&&t.parentElement===this._grid.$.sizer||_e(t,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,t){t&&t.forEach(s=>{s.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,t=>t.toUpperCase())}_reorderStatusChanged(e){const t=this.__previousReorderStatus,s=t?`reorder-${t}-cell`:"",r=`reorder-${e}-cell`;this._allCells.forEach(n=>{_e(n,"reorder-status",e,r,s)}),this.__previousReorderStatus=e}_resizableChanged(e,t){e===void 0||t===void 0||t&&[t].concat(this._emptyCells).forEach(s=>{if(s){const r=s.querySelector('[part~="resize-handle"]');if(r&&s.removeChild(r),e){const n=document.createElement("div");n.setAttribute("part","resize-handle"),s.appendChild(n)}}})}_textAlignChanged(e){if(e===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let t;getComputedStyle(this._grid).direction==="ltr"?e==="start"?t="left":e==="end"&&(t="right"):e==="start"?t="right":e==="end"&&(t="left"),this._allCells.forEach(s=>{s._content.style.textAlign=e,getComputedStyle(s._content).textAlign!==e&&(s._content.style.textAlign=t)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(t=>{t._content.parentNode&&t._content.parentNode.removeChild(t._content)}),this._grid._debouncerHiddenChanged=O.debounce(this._grid._debouncerHiddenChanged,X,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,t,s){const r=s&&s.item&&!t.parentElement.hidden;if(!(r||e===this._headerRenderer||e===this._footerRenderer))return;const a=[t._content,this];r&&a.push(s),e.apply(this,a)}__renderCellsContent(e,t){this.hidden||!this._grid||t.forEach(s=>{if(!s.parentElement)return;const r=this._grid.__getRowModel(s.parentElement);e&&(s._renderer!==e&&this._clearCellContent(s),s._renderer=e,this._runRenderer(e,s,r))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onHeaderRendererOrBindingChanged(e,t,...s){this._renderHeaderCellContent(e,t)}__headerFooterPartNameChanged(e,t,s,r){[{cell:e,partName:s},{cell:t,partName:r}].forEach(({cell:n,partName:a})=>{if(n){const l=n.__customParts||[];n.part.remove(...l),n.__customParts=a?a.trim().split(" "):[],n.part.add(...n.__customParts)}})}_renderBodyCellsContent(e,t){!t||!e||this.__renderCellsContent(e,t)}_onRendererOrBindingChanged(e,t,...s){this._renderBodyCellsContent(e,t)}_renderFooterCellContent(e,t){!t||!e||(this.__renderCellsContent(e,[t]),this._grid&&t.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(t.parentElement))}_onFooterRendererOrBindingChanged(e,t){this._renderFooterCellContent(e,t)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,t,{item:s}){this.path&&this.__setTextContent(e,ge(this.path,s))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,t){return e||(t!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},Xr=o=>class extends $o(M(o)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Vo extends Xr(w){static get is(){return"vaadin-grid-column"}}A(Vo);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Qr=o=>o,Ho=typeof document.head.style.touchAction=="string",ut="__polymerGestures",Mt="__polymerGesturesHandled",Xt="__polymerGesturesTouchAction",$i=25,Vi=5,Zr=2,Jr=["mousedown","mousemove","mouseup","click"],en=[0,1,4,2],tn=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function yi(o){return Jr.indexOf(o)>-1}let on=!1;(function(){try{const o=Object.defineProperty({},"passive",{get(){on=!0}});window.addEventListener("test",null,o),window.removeEventListener("test",null,o)}catch{}})();function qo(o){yi(o)}const sn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),rn={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function fe(o){const i=o.type;if(!yi(i))return!1;if(i==="mousemove"){let t=o.buttons===void 0?1:o.buttons;return o instanceof window.MouseEvent&&!tn&&(t=en[o.which]||0),!!(t&1)}return(o.button===void 0?0:o.button)===0}function nn(o){if(o.type==="click"){if(o.detail===0)return!0;const i=ae(o);if(!i.nodeType||i.nodeType!==Node.ELEMENT_NODE)return!0;const e=i.getBoundingClientRect(),t=o.pageX,s=o.pageY;return!(t>=e.left&&t<=e.right&&s>=e.top&&s<=e.bottom)}return!1}const Z={touch:{x:0,y:0,id:-1,scrollDecided:!1}};function an(o){let i="auto";const e=Uo(o);for(let t=0,s;t<e.length;t++)if(s=e[t],s[Xt]){i=s[Xt];break}return i}function Wo(o,i,e){o.movefn=i,o.upfn=e,document.addEventListener("mousemove",i),document.addEventListener("mouseup",e)}function Ie(o){document.removeEventListener("mousemove",o.movefn),document.removeEventListener("mouseup",o.upfn),o.movefn=null,o.upfn=null}const Uo=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:o=>o.composedPath&&o.composedPath()||[],te={},pe=[];function Go(o,i){let e=document.elementFromPoint(o,i),t=e;for(;t&&t.shadowRoot&&!window.ShadyDOM;){const s=t;if(t=t.shadowRoot.elementFromPoint(o,i),s===t)break;t&&(e=t)}return e}function ae(o){const i=Uo(o);return i.length>0?i[0]:o.target}function jo(o){const i=o.type,t=o.currentTarget[ut];if(!t)return;const s=t[i];if(!s)return;if(!o[Mt]&&(o[Mt]={},i.startsWith("touch"))){const n=o.changedTouches[0];if(i==="touchstart"&&o.touches.length===1&&(Z.touch.id=n.identifier),Z.touch.id!==n.identifier)return;Ho||(i==="touchstart"||i==="touchmove")&&ln(o)}const r=o[Mt];if(!r.skip){for(let n=0,a;n<pe.length;n++)a=pe[n],s[a.name]&&!r[a.name]&&a.flow&&a.flow.start.indexOf(o.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<pe.length;n++)a=pe[n],s[a.name]&&!r[a.name]&&(r[a.name]=!0,a[i](o))}}function ln(o){const i=o.changedTouches[0],e=o.type;if(e==="touchstart")Z.touch.x=i.clientX,Z.touch.y=i.clientY,Z.touch.scrollDecided=!1;else if(e==="touchmove"){if(Z.touch.scrollDecided)return;Z.touch.scrollDecided=!0;const t=an(o);let s=!1;const r=Math.abs(Z.touch.x-i.clientX),n=Math.abs(Z.touch.y-i.clientY);o.cancelable&&(t==="none"?s=!0:t==="pan-x"?s=n>r:t==="pan-y"&&(s=r>n)),s?o.preventDefault():ze("track")}}function ve(o,i,e){return te[i]?(dn(o,i,e),!0):!1}function Yo(o,i,e){return te[i]?(hn(o,i,e),!0):!1}function dn(o,i,e){const t=te[i],s=t.deps,r=t.name;let n=o[ut];n||(o[ut]=n={});for(let a=0,l,h;a<s.length;a++)l=s[a],!(sn&&yi(l)&&l!=="click")&&(h=n[l],h||(n[l]=h={_count:0}),h._count===0&&o.addEventListener(l,jo,qo(l)),h[r]=(h[r]||0)+1,h._count=(h._count||0)+1);o.addEventListener(i,e),t.touchAction&&un(o,t.touchAction)}function hn(o,i,e){const t=te[i],s=t.deps,r=t.name,n=o[ut];if(n)for(let a=0,l,h;a<s.length;a++)l=s[a],h=n[l],h&&h[r]&&(h[r]=(h[r]||1)-1,h._count=(h._count||1)-1,h._count===0&&o.removeEventListener(l,jo,qo(l)));o.removeEventListener(i,e)}function Tt(o){pe.push(o),o.emits.forEach(i=>{te[i]=o})}function cn(o){for(let i=0,e;i<pe.length;i++){e=pe[i];for(let t=0,s;t<e.emits.length;t++)if(s=e.emits[t],s===o)return e}return null}function un(o,i){Ho&&o instanceof HTMLElement&&j.run(()=>{o.style.touchAction=i}),o[Xt]=i}function Ci(o,i,e){const t=new Event(i,{bubbles:!0,cancelable:!0,composed:!0});if(t.detail=e,Qr(o).dispatchEvent(t),t.defaultPrevented){const s=e.preventer||e.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function ze(o){const i=cn(o);i.info&&(i.info.prevent=!0)}Tt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Ie(this.info)},mousedown(o){if(!fe(o))return;const i=ae(o),e=this,t=r=>{fe(r)||(Be("up",i,r),Ie(e.info))},s=r=>{fe(r)&&Be("up",i,r),Ie(e.info)};Wo(this.info,t,s),Be("down",i,o)},touchstart(o){Be("down",ae(o),o.changedTouches[0],o)},touchend(o){Be("up",ae(o),o.changedTouches[0],o)}});function Be(o,i,e,t){i&&Ci(i,o,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:t,prevent(s){return ze(s)}})}Tt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(o){this.moves.length>Zr&&this.moves.shift(),this.moves.push(o)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ie(this.info)},mousedown(o){if(!fe(o))return;const i=ae(o),e=this,t=r=>{const n=r.clientX,a=r.clientY;Hi(e.info,n,a)&&(e.info.state=e.info.started?r.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&ze("tap"),e.info.addMove({x:n,y:a}),fe(r)||(e.info.state="end",Ie(e.info)),i&&Bt(e.info,i,r),e.info.started=!0)},s=r=>{e.info.started&&t(r),Ie(e.info)};Wo(this.info,t,s),this.info.x=o.clientX,this.info.y=o.clientY},touchstart(o){const i=o.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchmove(o){const i=ae(o),e=o.changedTouches[0],t=e.clientX,s=e.clientY;Hi(this.info,t,s)&&(this.info.state==="start"&&ze("tap"),this.info.addMove({x:t,y:s}),Bt(this.info,i,e),this.info.state="track",this.info.started=!0)},touchend(o){const i=ae(o),e=o.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Bt(this.info,i,e))}});function Hi(o,i,e){if(o.prevent)return!1;if(o.started)return!0;const t=Math.abs(o.x-i),s=Math.abs(o.y-e);return t>=Vi||s>=Vi}function Bt(o,i,e){if(!i)return;const t=o.moves[o.moves.length-2],s=o.moves[o.moves.length-1],r=s.x-o.x,n=s.y-o.y;let a,l=0;t&&(a=s.x-t.x,l=s.y-t.y),Ci(i,"track",{state:o.state,x:e.clientX,y:e.clientY,dx:r,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return Go(e.clientX,e.clientY)}})}Tt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(o){fe(o)&&(this.info.x=o.clientX,this.info.y=o.clientY)},click(o){fe(o)&&qi(this.info,o)},touchstart(o){const i=o.changedTouches[0];this.info.x=i.clientX,this.info.y=i.clientY},touchend(o){qi(this.info,o.changedTouches[0],o)}});function qi(o,i,e){const t=Math.abs(i.clientX-o.x),s=Math.abs(i.clientY-o.y),r=ae(e||i);!r||rn[r.localName]&&r.hasAttribute("disabled")||(isNaN(t)||isNaN(s)||t<=$i&&s<=$i||nn(i))&&(o.prevent||Ci(r,"tap",{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:e}))}/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _n=o=>class extends o{static get properties(){return{width:{type:String,value:"58px",sync:!0},autoWidth:{type:Boolean,value:!0},flexGrow:{type:Number,value:0,sync:!0},selectAll:{type:Boolean,value:!1,notify:!0,sync:!0},autoSelect:{type:Boolean,value:!1,sync:!0},dragSelect:{type:Boolean,value:!1,sync:!0},_indeterminate:{type:Boolean,sync:!0},_selectAllHidden:Boolean}}static get observers(){return["_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header, selectAll, _indeterminate, _selectAllHidden)"]}constructor(){super(),this.__onCellTrack=this.__onCellTrack.bind(this),this.__onCellClick=this.__onCellClick.bind(this),this.__onCellMouseDown=this.__onCellMouseDown.bind(this),this.__onActiveItemChanged=this.__onActiveItemChanged.bind(this),this.__onSelectRowCheckboxChange=this.__onSelectRowCheckboxChange.bind(this),this.__onSelectAllCheckboxChange=this.__onSelectAllCheckboxChange.bind(this)}connectedCallback(){super.connectedCallback(),this._grid&&this._grid.addEventListener("active-item-changed",this.__onActiveItemChanged)}disconnectedCallback(){super.disconnectedCallback(),this._grid&&this._grid.removeEventListener("active-item-changed",this.__onActiveItemChanged)}_defaultHeaderRenderer(e,t){let s=e.firstElementChild;s||(s=document.createElement("vaadin-checkbox"),s.setAttribute("aria-label","Select All"),s.classList.add("vaadin-grid-select-all-checkbox"),s.addEventListener("change",this.__onSelectAllCheckboxChange),e.appendChild(s));const r=this.__isChecked(this.selectAll,this._indeterminate);s.checked=r,s.hidden=this._selectAllHidden,s.indeterminate=this._indeterminate}_defaultRenderer(e,t,{item:s,selected:r}){let n=e.firstElementChild;n||(n=document.createElement("vaadin-checkbox"),n.setAttribute("aria-label","Select Row"),n.addEventListener("change",this.__onSelectRowCheckboxChange),e.appendChild(n),ve(e,"track",this.__onCellTrack),e.addEventListener("mousedown",this.__onCellMouseDown),e.addEventListener("click",this.__onCellClick)),n.__item=s,n.checked=r;const a=this._grid.__isItemSelectable(s);n.readonly=!a,n.hidden=!a&&!r}__onSelectAllCheckboxChange(e){this._indeterminate||e.currentTarget.checked?this._selectAll():this._deselectAll()}__onSelectRowCheckboxChange(e){this.__toggleItem(e.currentTarget.__item,e.currentTarget.checked)}__onCellTrack(e){if(this.dragSelect)if(this.__dragCurrentY=e.detail.y,this.__dragDy=e.detail.dy,e.detail.state==="start"){const s=this._grid._getRenderedRows().find(r=>r.contains(e.currentTarget.assignedSlot));this.__selectOnDrag=!this._grid._isSelected(s._item),this.__dragStartIndex=s.index,this.__dragStartItem=s._item,this.__dragAutoScroller()}else e.detail.state==="end"&&(this.__dragStartItem&&this.__toggleItem(this.__dragStartItem,this.__selectOnDrag),setTimeout(()=>{this.__dragStartIndex=void 0}))}__onCellMouseDown(e){this.dragSelect&&e.preventDefault()}__onCellClick(e){this.__dragStartIndex!==void 0&&e.preventDefault()}_onCellKeyDown(e){const t=e.composedPath()[0];if(e.keyCode===32){if(t===this._headerCell)this.selectAll?this._deselectAll():this._selectAll();else if(this._cells.includes(t)&&!this.autoSelect){const s=t._content.firstElementChild;this.__toggleItem(s.__item)}}}__onActiveItemChanged(e){const t=e.detail.value;if(this.autoSelect){const s=t||this.__previousActiveItem;s&&this.__toggleItem(s)}this.__previousActiveItem=t}__dragAutoScroller(){if(this.__dragStartIndex===void 0)return;const e=this._grid._getRenderedRows(),t=e.find(l=>{const h=l.getBoundingClientRect();return this.__dragCurrentY>=h.top&&this.__dragCurrentY<=h.bottom});let s=t?t.index:void 0;const r=this.__getScrollableArea();this.__dragCurrentY<r.top?s=this._grid._firstVisibleIndex:this.__dragCurrentY>r.bottom&&(s=this._grid._lastVisibleIndex),s!==void 0&&e.forEach(l=>{(s>this.__dragStartIndex&&l.index>=this.__dragStartIndex&&l.index<=s||s<this.__dragStartIndex&&l.index<=this.__dragStartIndex&&l.index>=s)&&(this.__toggleItem(l._item,this.__selectOnDrag),this.__dragStartItem=void 0)});const n=r.height*.15,a=10;if(this.__dragDy<0&&this.__dragCurrentY<r.top+n){const l=r.top+n-this.__dragCurrentY,h=Math.min(1,l/n);this._grid.$.table.scrollTop-=h*a}if(this.__dragDy>0&&this.__dragCurrentY>r.bottom-n){const l=this.__dragCurrentY-(r.bottom-n),h=Math.min(1,l/n);this._grid.$.table.scrollTop+=h*a}setTimeout(()=>this.__dragAutoScroller(),10)}__getScrollableArea(){const e=this._grid.$.table.getBoundingClientRect(),t=this._grid.$.header.getBoundingClientRect(),s=this._grid.$.footer.getBoundingClientRect();return{top:e.top+t.height,bottom:e.bottom-s.height,left:e.left,right:e.right,height:e.height-t.height-s.height,width:e.width}}_selectAll(){}_deselectAll(){}_selectItem(e){}_deselectItem(e){}__toggleItem(e,t=!this._grid._isSelected(e)){t!==this._grid._isSelected(e)&&(t?this._selectItem(e):this._deselectItem(e))}__isChecked(e,t){return t||e}};class Qt extends _n(Vo){static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"}}}_defaultHeaderRenderer(i,e){super._defaultHeaderRenderer(i,e);const t=i.firstElementChild;t&&(t.id="selectAllCheckbox")}_selectAll(){this.selectAll=!0,this.$server.selectAll()}_deselectAll(){this.selectAll=!1,this.$server.deselectAll()}_selectItem(i){this._grid.$connector.doSelection([i],!0)}_deselectItem(i){this._grid.$connector.doDeselection([i],!0),this.selectAll=!1}}customElements.define(Qt.is,Qt);const pn=g`
  :host {
    --vaadin-tooltip-offset-top: var(--lumo-space-xs);
    --vaadin-tooltip-offset-bottom: var(--lumo-space-xs);
    --vaadin-tooltip-offset-start: var(--lumo-space-xs);
    --vaadin-tooltip-offset-end: var(--lumo-space-xs);
  }

  [part='overlay'] {
    background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-s);
  }

  [part='content'] {
    padding: var(--lumo-space-xs) var(--lumo-space-s);
  }
`;x("vaadin-tooltip-overlay",[Oe,pn],{moduleId:"lumo-tooltip-overlay"});/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fn=o=>class extends Ct(Pe(o)){static get properties(){return{position:{type:String,reflectToAttribute:!0}}}get _tagNamePrefix(){return"vaadin-popover"}requestContentUpdate(){if(super.requestContentUpdate(),this.positionTarget&&this.owner){const e=getComputedStyle(this.owner);["top","bottom","start","end"].forEach(t=>{this.style.setProperty(`--${this._tagNamePrefix}-offset-${t}`,e.getPropertyValue(`--${this._tagNamePrefix}-offset-${t}`))})}}_updatePosition(){if(super._updatePosition(),!(!this.positionTarget||!this.opened)){if(this.removeAttribute("arrow-centered"),this.position==="bottom"||this.position==="top"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),s=e.width/2-t.width/2;if(this.style.left){const r=t.left+s;r>0&&(this.style.left=`${r}px`,this.setAttribute("arrow-centered",""))}if(this.style.right){const r=parseFloat(this.style.right)+s;r>0&&(this.style.right=`${r}px`,this.setAttribute("arrow-centered",""))}}if(this.position==="start"||this.position==="end"){const e=this.positionTarget.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),s=e.height/2-t.height/2;this.style.top=`${t.top+s}px`}}}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mn=g`
  [part='overlay'] {
    max-width: 40ch;
  }

  [part='content'] {
    white-space: pre-wrap;
  }

  :host([position^='top'][top-aligned]) [part='overlay'],
  :host([position^='bottom'][top-aligned]) [part='overlay'] {
    margin-top: var(--vaadin-tooltip-offset-top, 0);
  }

  :host([position^='top'][bottom-aligned]) [part='overlay'],
  :host([position^='bottom'][bottom-aligned]) [part='overlay'] {
    margin-bottom: var(--vaadin-tooltip-offset-bottom, 0);
  }

  :host([position^='start'][start-aligned]) [part='overlay'],
  :host([position^='end'][start-aligned]) [part='overlay'] {
    margin-inline-start: var(--vaadin-tooltip-offset-start, 0);
  }

  :host([position^='start'][end-aligned]) [part='overlay'],
  :host([position^='end'][end-aligned]) [part='overlay'] {
    margin-inline-end: var(--vaadin-tooltip-offset-end, 0);
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 1px dashed;
    }
  }
`;/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-tooltip-overlay",[Le,mn],{moduleId:"vaadin-tooltip-overlay-styles"});class gn extends fn(M(k(w))){static get is(){return"vaadin-tooltip-overlay"}static get template(){return I`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}get _tagNamePrefix(){return"vaadin-tooltip"}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){super.requestContentUpdate(),this.toggleAttribute("hidden",this.textContent.trim()==="")}}A(gn);/**
 * @license
 * Copyright (c) 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vn=o=>class extends o{static get properties(){return{position:{type:String},_position:{type:String,value:"bottom"},__effectivePosition:{type:String,computed:"__computePosition(position, _position)"}}}__computeHorizontalAlign(e){return["top-end","bottom-end","start-top","start","start-bottom"].includes(e)?"end":"start"}__computeNoHorizontalOverlap(e){return["start-top","start","start-bottom","end-top","end","end-bottom"].includes(e)}__computeNoVerticalOverlap(e){return["top-start","top-end","top","bottom-start","bottom","bottom-end"].includes(e)}__computeVerticalAlign(e){return["top-start","top-end","top","start-bottom","end-bottom"].includes(e)?"bottom":"top"}__computePosition(e,t){return e||t}};/**
 * @license
 * Copyright (c) 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bn=o=>class extends o{static get properties(){return{for:{type:String,observer:"__forChanged"},target:{type:Object},__isConnected:{type:Boolean,sync:!0}}}static get observers(){return["__targetOrConnectedChanged(target, __isConnected)"]}connectedCallback(){super.connectedCallback(),this.__isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this.__isConnected=!1}__forChanged(e){e&&(this.__setTargetByIdDebouncer=O.debounce(this.__setTargetByIdDebouncer,j,()=>this.__setTargetById(e)))}__setTargetById(e){if(!this.isConnected)return;const t=this.getRootNode().getElementById(e);t?this.target=t:console.warn(`No element with id="${e}" set via "for" property found on the page.`)}__targetOrConnectedChanged(e,t){this.__previousTarget&&(this.__previousTarget!==e||!t)&&this._removeTargetListeners(this.__previousTarget),e&&t&&this._addTargetListeners(e),this.__previousTarget=e}_addTargetListeners(e){}_removeTargetListeners(e){}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ee=500;let Ko=Ee,Xo=Ee,Qo=Ee;const Ce=new Set;let $e=!1,xe=null,Ve=null;class yn{constructor(i){this.host=i}get openedProp(){return this.host.manual?"opened":"_autoOpened"}get focusDelay(){const i=this.host;return i.focusDelay!=null&&i.focusDelay>=0?i.focusDelay:Ko}get hoverDelay(){const i=this.host;return i.hoverDelay!=null&&i.hoverDelay>=0?i.hoverDelay:Xo}get hideDelay(){const i=this.host;return i.hideDelay!=null&&i.hideDelay>=0?i.hideDelay:Qo}get isClosing(){return Ce.has(this.host)}open(i={immediate:!1}){const{immediate:e,hover:t,focus:s}=i,r=t&&this.hoverDelay>0,n=s&&this.focusDelay>0;!e&&(r||n)&&!this.__closeTimeout?this.__warmupTooltip(n):this.__showTooltip()}close(i){!i&&this.hideDelay>0?this.__scheduleClose():(this.__abortClose(),this._setOpened(!1)),this.__abortWarmUp(),$e&&(this.__abortCooldown(),this.__scheduleCooldown())}_isOpened(){return this.host[this.openedProp]}_setOpened(i){this.host[this.openedProp]=i}__flushClosingTooltips(){Ce.forEach(i=>{i._stateController.close(!0),Ce.delete(i)})}__showTooltip(){this.__abortClose(),this.__flushClosingTooltips(),this._setOpened(!0),$e=!0,this.__abortWarmUp(),this.__abortCooldown()}__warmupTooltip(i){this._isOpened()||($e?this.__showTooltip():xe==null&&this.__scheduleWarmUp(i))}__abortClose(){this.__closeTimeout&&(clearTimeout(this.__closeTimeout),this.__closeTimeout=null),this.isClosing&&Ce.delete(this.host)}__abortCooldown(){Ve&&(clearTimeout(Ve),Ve=null)}__abortWarmUp(){xe&&(clearTimeout(xe),xe=null)}__scheduleClose(){this._isOpened()&&!this.isClosing&&(Ce.add(this.host),this.__closeTimeout=setTimeout(()=>{Ce.delete(this.host),this.__closeTimeout=null,this._setOpened(!1)},this.hideDelay))}__scheduleCooldown(){Ve=setTimeout(()=>{Ve=null,$e=!1},this.hideDelay)}__scheduleWarmUp(i){const e=i?this.focusDelay:this.hoverDelay;xe=setTimeout(()=>{xe=null,$e=!0,this.__showTooltip()},e)}}const Cn=o=>class extends vn(bn(Ne(o))){static get properties(){return{ariaTarget:{type:Object},context:{type:Object,value:()=>({})},focusDelay:{type:Number},generator:{type:Object},hideDelay:{type:Number},hoverDelay:{type:Number},manual:{type:Boolean,value:!1,sync:!0},opened:{type:Boolean,value:!1,sync:!0},shouldShow:{type:Object,value:()=>(e,t)=>!0},text:{type:String,observer:"__textChanged"},_autoOpened:{type:Boolean,observer:"__autoOpenedChanged",sync:!0},_effectiveAriaTarget:{type:Object,computed:"__computeAriaTarget(ariaTarget, target)",observer:"__effectiveAriaTargetChanged"},__isTargetHidden:{type:Boolean,value:!1},_isConnected:{type:Boolean,sync:!0},_srLabel:{type:Object},_overlayContent:{type:String}}}static get observers(){return["__generatorChanged(_overlayElement, generator, context)","__updateSrLabelText(_srLabel, _overlayContent)"]}static setDefaultFocusDelay(e){Ko=e!=null&&e>=0?e:Ee}static setDefaultHideDelay(e){Qo=e!=null&&e>=0?e:Ee}static setDefaultHoverDelay(e){Xo=e!=null&&e>=0?e:Ee}constructor(){super(),this._uniqueId=`vaadin-tooltip-${Ze()}`,this._renderer=this.__tooltipRenderer.bind(this),this.__onFocusin=this.__onFocusin.bind(this),this.__onFocusout=this.__onFocusout.bind(this),this.__onMouseDown=this.__onMouseDown.bind(this),this.__onMouseEnter=this.__onMouseEnter.bind(this),this.__onMouseLeave=this.__onMouseLeave.bind(this),this.__onKeyDown=this.__onKeyDown.bind(this),this.__onOverlayOpen=this.__onOverlayOpen.bind(this),this.__targetVisibilityObserver=new IntersectionObserver(e=>{e.forEach(t=>this.__onTargetVisibilityChange(t.isIntersecting))},{threshold:0}),this._stateController=new yn(this)}connectedCallback(){super.connectedCallback(),this._isConnected=!0,document.body.addEventListener("vaadin-overlay-open",this.__onOverlayOpen)}disconnectedCallback(){super.disconnectedCallback(),this._autoOpened&&this._stateController.close(!0),this._isConnected=!1,document.body.removeEventListener("vaadin-overlay-open",this.__onOverlayOpen)}ready(){super.ready(),this._srLabelController=new De(this,"sr-label","div",{initializer:e=>{e.id=this._uniqueId,e.setAttribute("role","tooltip"),this._srLabel=e}}),this.addController(this._srLabelController)}__computeOpened(e,t,s,r){return r&&(e?t:s)}__autoOpenedChanged(e,t){e?document.addEventListener("keydown",this.__onKeyDown,!0):t&&document.removeEventListener("keydown",this.__onKeyDown,!0)}_addTargetListeners(e){e.addEventListener("mouseenter",this.__onMouseEnter),e.addEventListener("mouseleave",this.__onMouseLeave),e.addEventListener("focusin",this.__onFocusin),e.addEventListener("focusout",this.__onFocusout),e.addEventListener("mousedown",this.__onMouseDown),requestAnimationFrame(()=>{this.__targetVisibilityObserver.observe(e)})}_removeTargetListeners(e){e.removeEventListener("mouseenter",this.__onMouseEnter),e.removeEventListener("mouseleave",this.__onMouseLeave),e.removeEventListener("focusin",this.__onFocusin),e.removeEventListener("focusout",this.__onFocusout),e.removeEventListener("mousedown",this.__onMouseDown),this.__targetVisibilityObserver.unobserve(e)}__onFocusin(e){this.manual||Xe()&&(this.target.contains(e.relatedTarget)||this.__isShouldShow()&&(this.__focusInside=!0,!this.__isTargetHidden&&(!this.__hoverInside||!this._autoOpened)&&this._stateController.open({focus:!0})))}__onFocusout(e){this.manual||this.target.contains(e.relatedTarget)||(this.__focusInside=!1,this.__hoverInside||this._stateController.close(!0))}__onKeyDown(e){e.key==="Escape"&&(e.stopPropagation(),this._stateController.close(!0))}__onMouseDown(){this.manual||this._stateController.close(!0)}__onMouseEnter(){this.manual||this.__isShouldShow()&&(this.__hoverInside||(this.__hoverInside=!0,!this.__isTargetHidden&&(!this.__focusInside||!this._autoOpened)&&this._stateController.open({hover:!0})))}__onMouseLeave(e){e.relatedTarget!==this._overlayElement&&this.__handleMouseLeave()}__onOverlayMouseEnter(){this._stateController.isClosing&&this._stateController.open({immediate:!0})}__onOverlayMouseLeave(e){e.relatedTarget!==this.target&&this.__handleMouseLeave()}__handleMouseLeave(){this.manual||(this.__hoverInside=!1,this.__focusInside||this._stateController.close())}__onOverlayOpen(){this.manual||this._overlayElement.opened&&!this._overlayElement._last&&this._stateController.close(!0)}__onTargetVisibilityChange(e){const t=this.__isTargetHidden;if(this.__isTargetHidden=!e,t&&e&&(this.__focusInside||this.__hoverInside)){this._stateController.open({immediate:!0});return}!e&&this._autoOpened&&this._stateController.close(!0)}__isShouldShow(){return!(typeof this.shouldShow=="function"&&this.shouldShow(this.target,this.context)!==!0)}__textChanged(e,t){this._overlayElement&&(e||t)&&this._overlayElement.requestContentUpdate()}__tooltipRenderer(e){e.textContent=typeof this.generator=="function"?this.generator(this.context):this.text,this._overlayContent=e.textContent}__computeAriaTarget(e,t){const s=n=>n&&n.nodeType===Node.ELEMENT_NODE;return(Array.isArray(e)?e.some(s):e)?e:t}__effectiveAriaTargetChanged(e,t){t&&[t].flat().forEach(s=>{Qe(s,"aria-describedby",this._uniqueId)}),e&&[e].flat().forEach(s=>{Re(s,"aria-describedby",this._uniqueId)})}__generatorChanged(e,t,s){e&&((t!==this.__oldTextGenerator||s!==this.__oldContext)&&e.requestContentUpdate(),this.__oldTextGenerator=t,this.__oldContext=s)}__updateSrLabelText(e,t){e&&(e.textContent=t)}};/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class xn extends Cn(mt(V(Q(w)))){static get is(){return"vaadin-tooltip"}static get template(){return I`
      <style>
        :host {
          display: none;
        }
      </style>
      <vaadin-tooltip-overlay
        renderer="[[_renderer]]"
        theme$="[[_theme]]"
        opened="[[__computeOpened(manual, opened, _autoOpened, _isConnected)]]"
        position-target="[[target]]"
        position="[[__effectivePosition]]"
        no-horizontal-overlap$="[[__computeNoHorizontalOverlap(__effectivePosition)]]"
        no-vertical-overlap$="[[__computeNoVerticalOverlap(__effectivePosition)]]"
        horizontal-align="[[__computeHorizontalAlign(__effectivePosition)]]"
        vertical-align="[[__computeVerticalAlign(__effectivePosition)]]"
        on-mouseenter="__onOverlayMouseEnter"
        on-mouseleave="__onOverlayMouseLeave"
        modeless
      ></vaadin-tooltip-overlay>

      <slot name="sr-label"></slot>
    `}}A(xn);const wn=g`
  /* :hover needed to workaround https://github.com/vaadin/web-components/issues/3133 */
  :host(:hover) {
    user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
  }

  :host([role='menuitem'][menu-item-checked]) [part='checkmark']::before {
    opacity: 1;
  }

  :host([aria-haspopup='true'])::after {
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-xs);
    content: var(--lumo-icons-angle-right);
    color: var(--lumo-tertiary-text-color);
  }

  :host(:not([dir='rtl'])[aria-haspopup='true'])::after {
    margin-right: calc(var(--lumo-space-m) * -1);
    padding-left: var(--lumo-space-m);
  }

  :host([expanded]) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl'][aria-haspopup='true'])::after {
    content: var(--lumo-icons-angle-left);
    margin-left: calc(var(--lumo-space-m) * -1);
    padding-right: var(--lumo-space-m);
  }
`;x("vaadin-context-menu-item",[Ye,wn],{moduleId:"lumo-context-menu-item"});const xi=g`
  :host {
    -webkit-tap-highlight-color: transparent;
    --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
  }

  /* Dividers */
  [part='items'] ::slotted(hr) {
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) var(--lumo-border-radius-m);
    background-color: var(--lumo-contrast-10pct);
  }
`;x("vaadin-list-box",xi,{moduleId:"lumo-list-box"});const An=g`
  :host {
    --_lumo-list-box-item-selected-icon-display: block;
  }

  /* Normal item */
  [part='items'] ::slotted([role='menuitem']) {
    -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
    cursor: default;
    outline: none;
    border-radius: var(--lumo-border-radius-m);
    padding-left: calc(var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
  }

  /* Hovered item */
  /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
  [part='items'] ::slotted([role='menuitem']:hover:not([disabled])),
  [part='items'] ::slotted([role='menuitem'][expanded]:not([disabled])) {
    background-color: var(--lumo-primary-color-10pct);
  }

  /* RTL styles */
  :host([dir='rtl']) [part='items'] ::slotted([role='menuitem']) {
    padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius-m) / 4);
    padding-right: calc(var(--lumo-border-radius-m) / 4);
  }

  /* Focused item */
  @media (pointer: coarse) {
    [part='items'] ::slotted([role='menuitem']:hover:not([expanded]):not([disabled])) {
      background-color: transparent;
    }
  }
`;x("vaadin-context-menu-list-box",[xi,An],{moduleId:"lumo-context-menu-list-box"});const In=g`
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  /* TODO These style overrides should not be needed.
   We should instead offer a way to have non-selectable items inside the context menu. */

  :host {
    --_lumo-list-box-item-selected-icon-display: none;
    --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius-m) / 4);
  }

  [part='overlay'] {
    outline: none;
  }
`;x("vaadin-context-menu-overlay",[ii,In],{moduleId:"lumo-context-menu-overlay"});/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Tt({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null},reset(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},_setSourceEvent(o){this.info.sourceEvent=o;const i=o.composedPath();this.info.sourceEvent.__composedPath=i},touchstart(o){this._setSourceEvent(o),this.info.touchStartCoords={x:o.changedTouches[0].clientX,y:o.changedTouches[0].clientY};const i=o.composedPath()[0]||o.target;this._timerId=setTimeout(()=>{const e=o.changedTouches[0];o.shiftKey||(Se&&(this._fired=!0,this.fire(i,e.clientX,e.clientY)),ze("tap"))},500)},touchmove(o){const e=this.info.touchStartCoords;(Math.abs(e.x-o.changedTouches[0].clientX)>15||Math.abs(e.y-o.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend(o){this._fired&&o.preventDefault(),this._cancelTimer()},contextmenu(o){o.shiftKey||(this._setSourceEvent(o),this.fire(o.target,o.clientX,o.clientY),ze("tap"))},fire(o,i,e){const t=this.info.sourceEvent,s=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});s.detail={x:i,y:e,sourceEvent:t},o.dispatchEvent(s),s.defaultPrevented&&t&&t.preventDefault&&t.preventDefault()}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wi=o=>class extends wt(Fe(o)){get _activeKeys(){return[" "]}ready(){super.ready(),ve(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),ve(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",t=>{this._activeKeys.includes(t.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zo=o=>class extends wi(xt(o)){static get properties(){return{_hasVaadinItemMixin:{value:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged",sync:!0},_value:String}}get _activeKeys(){return["Enter"," "]}get value(){return this._value!==void 0?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();const e=this.getAttribute("value");e!==null&&(this.value=e)}focus(){this.disabled||(super.focus(),this._setFocused(!0))}_shouldSetActive(e){return!this.disabled&&!(e.type==="keydown"&&e.defaultPrevented)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){super._disabledChanged(e),e&&(this.selected=!1,this.blur())}_onKeyDown(e){super._onKeyDown(e),this._activeKeys.includes(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class En extends Zo(k(M(w))){static get is(){return"vaadin-context-menu-item"}static get template(){return I`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","menuitem")}}A(En);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Zt(o,i){const{scrollLeft:e}=o;return i!=="rtl"?e:o.scrollWidth-o.clientWidth+e}function Sn(o,i,e){i!=="rtl"?o.scrollLeft=e:o.scrollLeft=o.clientWidth-o.scrollWidth+e}/**
 * @license
 * Copyright (c) 2022 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tn=o=>class extends Fe(o){get focused(){return(this._getItems()||[]).find(ni)}get _vertical(){return!0}focus(){const e=this._getItems();if(Array.isArray(e)){const t=this._getAvailableIndex(e,0,null,s=>!le(s));t>=0&&this._focus(t)}}_getItems(){return Array.from(this.children)}_onKeyDown(e){if(super._onKeyDown(e),e.metaKey||e.ctrlKey)return;const{key:t}=e,s=this._getItems()||[],r=s.indexOf(this.focused);let n,a;const h=!this._vertical&&this.getAttribute("dir")==="rtl"?-1:1;this.__isPrevKey(t)?(a=-h,n=r-h):this.__isNextKey(t)?(a=h,n=r+h):t==="Home"?(a=1,n=0):t==="End"&&(a=-1,n=s.length-1),n=this._getAvailableIndex(s,n,a,u=>!le(u)),n>=0&&(e.preventDefault(),this._focus(n,!0))}__isPrevKey(e){return this._vertical?e==="ArrowUp":e==="ArrowLeft"}__isNextKey(e){return this._vertical?e==="ArrowDown":e==="ArrowRight"}_focus(e,t=!1){const s=this._getItems();this._focusItem(s[e],t)}_focusItem(e){e&&(e.focus(),e.setAttribute("focus-ring",""))}_getAvailableIndex(e,t,s,r){const n=e.length;let a=t;for(let l=0;typeof a=="number"&&l<n;l+=1,a+=s||1){a<0?a=n-1:a>=n&&(a=0);const h=e[a];if(!h.hasAttribute("disabled")&&this.__isMatchingItem(h,r))return a}return-1}__isMatchingItem(e,t){return typeof t=="function"?t(e):!0}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jo=o=>class extends Tn(o){static get properties(){return{disabled:{type:Boolean,value:!1,reflectToAttribute:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0,sync:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}get _isRTL(){return!this._vertical&&this.getAttribute("dir")==="rtl"}get _scrollerElement(){return console.warn(`Please implement the '_scrollerElement' property in <${this.localName}>`),this}get _vertical(){return this.orientation!=="horizontal"}focus(){this._observer&&this._observer.flush();const e=Array.isArray(this.items)?this.items:[],t=this._getAvailableIndex(e,0,null,s=>s.tabIndex===0&&!le(s));t>=0?this._focus(t):super.focus()}ready(){super.ready(),this.addEventListener("click",t=>this._onClick(t));const e=this.shadowRoot.querySelector("slot:not([name])");this._observer=new di(e,()=>{this._setItems(this._filterItems(wo(this)))})}_getItems(){return this.items}_enhanceItems(e,t,s,r){if(!r&&e){this.setAttribute("aria-orientation",t||"vertical"),e.forEach(a=>{t?a.setAttribute("orientation",t):a.removeAttribute("orientation")}),this._setFocusable(s<0||!s?0:s);const n=e[s];e.forEach(a=>{a.selected=a===n}),n&&!n.disabled&&this._scrollToItem(s)}}_filterItems(e){return e.filter(t=>t._hasVaadinItemMixin)}_onClick(e){if(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)return;const t=this._filterItems(e.composedPath())[0];let s;t&&!t.disabled&&(s=this.items.indexOf(t))>=0&&(this.selected=s)}_searchKey(e,t){this._searchReset=O.debounce(this._searchReset,K.after(500),()=>{this._searchBuf=""}),this._searchBuf+=t.toLowerCase(),this.items.some(r=>this.__isMatchingKey(r))||(this._searchBuf=t.toLowerCase());const s=this._searchBuf.length===1?e+1:e;return this._getAvailableIndex(this.items,s,1,r=>this.__isMatchingKey(r)&&getComputedStyle(r).display!=="none")}__isMatchingKey(e){return e.textContent.replace(/[^\p{L}\p{Nd}]/gu,"").toLowerCase().startsWith(this._searchBuf)}_onKeyDown(e){if(e.metaKey||e.ctrlKey)return;const t=e.key,s=this.items.indexOf(this.focused);if(/[\p{L}\p{Nd}]/u.test(t)&&t.length===1){const r=this._searchKey(s,t);r>=0&&this._focus(r);return}super._onKeyDown(e)}_isItemHidden(e){return getComputedStyle(e).display==="none"}_setFocusable(e){e=this._getAvailableIndex(this.items,e,1);const t=this.items[e];this.items.forEach(s=>{s.tabIndex=s===t?0:-1})}_focus(e){this.items.forEach((t,s)=>{t.focused=s===e}),this._setFocusable(e),this._scrollToItem(e),super._focus(e)}_scrollToItem(e){const t=this.items[e];if(!t)return;const s=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],r=this._scrollerElement.getBoundingClientRect(),n=(this.items[e+1]||t).getBoundingClientRect(),a=(this.items[e-1]||t).getBoundingClientRect();let l=0;!this._isRTL&&n[s[1]]>=r[s[1]]||this._isRTL&&n[s[1]]<=r[s[1]]?l=n[s[1]]-r[s[1]]:(!this._isRTL&&a[s[0]]<=r[s[0]]||this._isRTL&&a[s[0]]>=r[s[0]])&&(l=a[s[0]]-r[s[0]]),this._scroll(l)}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{const t=this.getAttribute("dir")||"ltr",s=Zt(this._scrollerElement,t)+e;Sn(this._scrollerElement,t,s)}}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kn extends Jo(k(M(Q(w)))){static get is(){return"vaadin-context-menu-list-box"}static get template(){return I`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","menu")}}A(kn);/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zn=o=>class extends yo(Ct(o)){static get properties(){return{parentOverlay:{type:Object,readOnly:!0},_theme:{type:String,readOnly:!0,sync:!0}}}static get observers(){return["_themeChanged(_theme)"]}ready(){super.ready(),this.restoreFocusOnClose=!0,this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){const t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),e.keyCode===38?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.querySelector(":not(style):not(slot)")}_themeChanged(){this.close()}getBoundaries(){const e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();let s=e.bottom-t.height;const r=this.parentOverlay;if(r&&r.hasAttribute("bottom-aligned")){const n=getComputedStyle(r);s=s-parseFloat(n.bottom)-parseFloat(n.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:s}}_updatePosition(){if(super._updatePosition(),this.positionTarget&&this.parentOverlay){const e=this.$.content,t=getComputedStyle(e);!!this.style.left?this.style.left=`${parseFloat(this.style.left)+parseFloat(t.paddingLeft)}px`:this.style.right=`${parseFloat(this.style.right)+parseFloat(t.paddingRight)}px`,!!this.style.bottom?this.style.bottom=`${parseFloat(this.style.bottom)-parseFloat(t.paddingBottom)}px`:this.style.top=`${parseFloat(this.style.top)-parseFloat(t.paddingTop)}px`}}_shouldRestoreFocus(){return this.parentOverlay?!1:super._shouldRestoreFocus()}_deepContains(e){let t=ai(this.localName,e);for(;t;){if(t===this)return!0;t=t.parentOverlay}return!1}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const On=g`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host([right-aligned]),
  :host([end-aligned]) {
    align-items: flex-end;
  }

  :host([bottom-aligned]) {
    justify-content: flex-end;
  }

  [part='overlay'] {
    background-color: #fff;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-context-menu-overlay",[Le,On],{moduleId:"vaadin-context-menu-overlay-styles"});class Pn extends zn(Pe(M(k(w)))){static get is(){return"vaadin-context-menu-overlay"}static get template(){return I`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}A(Pn);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class es{constructor(i,e){this.query=i,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(i){typeof this.callback=="function"&&this.callback(i.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ln=o=>class extends o{static get properties(){return{items:{type:Array,sync:!0}}}constructor(){super(),this.__itemsOutsideClickListener=e=>{this._shouldCloseOnOutsideClick(e)&&this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",()=>{this.items&&this.close()})}get _tagNamePrefix(){return"vaadin-context-menu"}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}_shouldCloseOnOutsideClick(e){return!e.composedPath().some(t=>t.localName===`${this._tagNamePrefix}-overlay`)}__forwardFocus(){const e=this._overlayElement,t=e.getFirstChild();if(e.parentOverlay){const s=e.parentOverlay.querySelector("[expanded]");s&&s.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t,s){e.items=t._item.children,e.listenOn=t,e.overlayClass=s;const r=this._overlayElement,n=e._overlayElement;n.positionTarget=t,n.noHorizontalOverlap=!0,n._setParentOverlay(r),r.hasAttribute("theme")?e.setAttribute("theme",r.getAttribute("theme")):e.removeAttribute("theme");const a=n.$.content;a.style.minWidth="",t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{children:t._item.children}}))}__createComponent(e){let t;return e.component instanceof HTMLElement?t=e.component:t=document.createElement(e.component||`${this._tagNamePrefix}-item`),t._hasVaadinItemMixin&&(t.setAttribute("role","menuitem"),t.tabIndex=-1),t.localName==="hr"?t.setAttribute("role","separator"):t.setAttribute("aria-haspopup","false"),this._setMenuItemTheme(t,e,this._theme),t._item=e,e.text&&(t.textContent=e.text),e.className&&t.setAttribute("class",e.className),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),e.children&&e.children.length&&(this.__updateExpanded(t,!1),t.setAttribute("aria-haspopup","true")),t}__initListBox(){const e=document.createElement(`${this._tagNamePrefix}-list-box`);return this._theme&&e.setAttribute("theme",this._theme),e.addEventListener("selected-changed",t=>{const{value:s}=t.detail;if(typeof s=="number"){const r=e.items[s]._item;e.selected=null,r.children||this.dispatchEvent(new CustomEvent("item-selected",{detail:{value:r}}))}}),e}__initOverlay(){const e=this._overlayElement;e.$.backdrop.addEventListener("click",()=>{this.close()}),e.addEventListener(me?"click":"mouseover",t=>{this.__showSubMenu(t)}),e.addEventListener("keydown",t=>{const{key:s}=t,r=this.__isRTL,n=s==="ArrowRight",a=s==="ArrowLeft";!r&&n||r&&a||s==="Enter"||s===" "?this.__showSubMenu(t):!r&&a||r&&n||s==="Escape"?(s==="Escape"&&t.stopPropagation(),this.close(),this.listenOn.focus()):s==="Tab"&&this.dispatchEvent(new CustomEvent("close-all-menus"))})}__initSubMenu(){const e=document.createElement(this.constructor.is);return e._modeless=!0,e.openOn="opensubmenu",e.setAttribute("hidden",""),this.addEventListener("opened-changed",t=>{t.detail.value||this._subMenu.close()}),e.addEventListener("close-all-menus",()=>{this.dispatchEvent(new CustomEvent("close-all-menus"))}),e.addEventListener("item-selected",t=>{const{detail:s}=t;this.dispatchEvent(new CustomEvent("item-selected",{detail:s}))}),this.addEventListener("close-all-menus",()=>{this._overlayElement.close()}),this.addEventListener("item-selected",t=>{const s=t.target,r=t.detail.value,n=s.items.indexOf(r);r.keepOpen&&n>-1?(s._overlayElement.requestContentUpdate(),s._listBox._observer.flush(),s._listBox.children[n].focus()):r.keepOpen||this.close()}),e.addEventListener("opened-changed",t=>{if(!t.detail.value){const s=this._listBox.querySelector("[expanded]");s&&this.__updateExpanded(s,!1)}}),e}__showSubMenu(e,t=e.composedPath().find(s=>s.localName===`${this._tagNamePrefix}-item`)){if(!this.__openListenerActive)return;if(this._overlayElement.hasAttribute("opening")){requestAnimationFrame(()=>{this.__showSubMenu(e,t)});return}const s=this._subMenu;if(t){const{children:r}=t._item,n=s._overlayElement.getFirstChild(),a=n&&n.focused;if(s.items!==r&&s.close(),!this.opened)return;if(r&&r.length){this.__updateExpanded(t,!0);const{overlayClass:l}=this;this.__openSubMenu(s,t,l)}else a?s.listenOn.focus():this._listBox.focused||this._overlayElement.$.overlay.focus()}}__itemsRenderer(e,t,{detail:s}){this.__initMenu(e,t);const r=e.querySelector(this.constructor.is);r.closeOn=t.closeOn;const n=e.querySelector(`${this._tagNamePrefix}-list-box`);n.innerHTML="",[...s.children||t.items].forEach(a=>{const l=this.__createComponent(a);n.appendChild(l)})}_setMenuItemTheme(e,t,s){let r=e.getAttribute("theme")||s;t.theme!=null&&(r=Array.isArray(t.theme)?t.theme.join(" "):t.theme),this.__updateTheme(e,r)}__toggleMenuComponentAttribute(e,t,s){s?(e.setAttribute(t,""),e[`__has-${t}`]=!0):e[`__has-${t}`]&&(e.removeAttribute(t),e[`__has-${t}`]=!1)}__initMenu(e,t){if(e.firstElementChild)this.__updateTheme(this._listBox,this._theme);else{this.__initOverlay();const s=this.__initListBox();this._listBox=s,e.appendChild(s);const r=this.__initSubMenu();this._subMenu=r,e.appendChild(r),requestAnimationFrame(()=>{this.__openListenerActive=!0})}}__updateExpanded(e,t){e.setAttribute("aria-expanded",t.toString()),e.toggleAttribute("expanded",t)}__updateTheme(e,t){t?e.setAttribute("theme",t):e.removeAttribute("theme")}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rn=o=>class extends Ln(o){static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu",sync:!0},listenOn:{type:Object,sync:!0,value(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged",sync:!0},renderer:{type:Function,sync:!0},_modeless:{type:Boolean,sync:!0},_context:{type:Object,sync:!0},_phone:{type:Boolean},_fullscreen:{type:Boolean},_fullscreenMediaQuery:{type:String,value:"(max-width: 450px), (max-height: 450px)"}}}static get observers(){return["_openedChanged(opened)","_targetOrOpenOnChanged(listenOn, openOn)","_rendererChanged(renderer, items)","_fullscreenChanged(_fullscreen)","_overlayContextChanged(_overlayElement, _context)","_overlayModelessChanged(_overlayElement, _modeless)","_overlayPhoneChanged(_overlayElement, _phone)","_overlayThemeChanged(_overlayElement, _theme)"]}constructor(){super(),this._createOverlay(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundPreventDefault=this._preventDefault.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened&&this._setOpened(!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.__restoreOpened=this.opened,this.close()}ready(){super.ready(),this.addController(new es(this._fullscreenMediaQuery,e=>{this._fullscreen=e}))}_createOverlay(){const e=document.createElement(`${this._tagNamePrefix}-overlay`);e.owner=this,e.addEventListener("opened-changed",t=>{this._onOverlayOpened(t)}),e.addEventListener("vaadin-overlay-open",t=>{this._onVaadinOverlayOpen(t)}),this._overlayElement=e}_onOverlayOpened(e){const t=e.detail.value;this._setOpened(t),t&&this.__alignOverlayPosition()}_onVaadinOverlayOpen(){this.__alignOverlayPosition(),this._overlayElement.style.opacity="",this.__forwardFocus()}_overlayContextChanged(e,t){e&&(e.model=t)}_overlayModelessChanged(e,t){e&&(e.modeless=t)}_overlayPhoneChanged(e,t){e&&(e.toggleAttribute("phone",t),e.withBackdrop=t)}_overlayThemeChanged(e,t){e&&(t?e.setAttribute("theme",t):e.removeAttribute("theme"))}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_fullscreenChanged(e){this._phone=e}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){const s="vaadin-overlay-outside-click",r=this._overlayElement;t&&this._unlisten(r,t,this._boundClose),e?(this._listen(r,e,this._boundClose),r.removeEventListener(s,this._boundPreventDefault)):r.addEventListener(s,this._boundPreventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this._overlayElement.opened=e}requestContentUpdate(){!this._overlayElement||!this.renderer||this._overlayElement.requestContentUpdate()}_rendererChanged(e,t){if(t){if(e)throw new Error("The items API cannot be used together with a renderer");this.closeOn==="click"&&(this.closeOn=""),e=this.__itemsRenderer}this._overlayElement.renderer=e}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){const t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,s=>e.composedPath().indexOf(s)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(e.preventDefault(),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this._overlayElement.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(!this.opened)return;const e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}__adjustPosition(e,t){const r=this._overlayElement.style;r[e]=`${(parseInt(r[e])||0)+t}px`}__alignOverlayPosition(){const e=this._overlayElement;if(e.positionTarget)return;const t=e.style;["top","right","bottom","left"].forEach(p=>t.removeProperty(p)),["right-aligned","end-aligned","bottom-aligned"].forEach(p=>e.removeAttribute(p));const{xMax:s,xMin:r,yMax:n}=e.getBoundaries(),a=this.__x,l=this.__y,h=document.documentElement.clientWidth,u=document.documentElement.clientHeight;this.__isRTL?a>h/2||a>r?t.right=`${Math.max(0,h-a)}px`:(t.left=`${a}px`,this._setEndAligned(e)):a<h/2||a<s?t.left=`${a}px`:(t.right=`${Math.max(0,h-a)}px`,this._setEndAligned(e)),l<u/2||l<n?t.top=`${l}px`:(t.bottom=`${Math.max(0,u-l)}px`,e.setAttribute("bottom-aligned",""))}_setEndAligned(e){e.setAttribute("end-aligned",""),this.__isRTL||e.setAttribute("right-aligned","")}_getEventCoordinate(e,t){if(e.detail instanceof Object){if(e.detail[t])return e.detail[t];if(e.detail.sourceEvent)return this._getEventCoordinate(e.detail.sourceEvent,t)}else{const s=`client${t.toUpperCase()}`,r=e.changedTouches?e.changedTouches[0][s]:e[s];if(r===0){const n=e.target.getBoundingClientRect();return t==="x"?n.left:n.top+n.height}return r}}_listen(e,t,s){te[t]?ve(e,t,s):e.addEventListener(t,s)}_unlisten(e,t,s){te[t]?Yo(e,t,s):e.removeEventListener(t,s)}__createMouseEvent(e,t,s){return new MouseEvent(e,{bubbles:!0,composed:!0,cancelable:!0,clientX:t,clientY:s})}__focusClosestFocusable(e){let t=e;for(;t;){if(t instanceof HTMLElement&&bt(t)){t.focus();return}t=t.parentNode||t.host}}__contextMenuAt(e,t){const s=Go(e,t);s&&queueMicrotask(()=>{s.dispatchEvent(this.__createMouseEvent("mousedown",e,t)),s.dispatchEvent(this.__createMouseEvent("mouseup",e,t)),this.__focusClosestFocusable(s),s.dispatchEvent(this.__createMouseEvent("contextmenu",e,t))})}_onGlobalContextMenu(e){e.shiftKey||(Gt||Se||(e.stopPropagation(),this._overlayElement.__focusRestorationController.focusNode=null,this._overlayElement.addEventListener("vaadin-overlay-closed",()=>this.__contextMenuAt(e.clientX,e.clientY),{once:!0})),e.preventDefault(),this.close())}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dn extends Rn(Ne(Q(V(mt(w))))){static get template(){return I`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>

      <slot id="slot"></slot>
    `}static get is(){return"vaadin-context-menu"}ready(){super.ready(),ce(this)}_attachDom(i){const e=this.attachShadow({mode:"open"});return e.appendChild(i),e.appendChild(this._overlayElement),e}}A(Dn);function Fn(o,i){try{return window.Vaadin.Flow.clients[o].getByNodeId(i)}catch(e){console.error("Could not get node %s from app %s",i,o),console.error(e)}}function Nn(o,i){o.$connector||(o.$connector={generateItems(e){const t=Ai(i,e);o.items=t}})}function Ai(o,i){const e=Fn(o,i);if(e)return Array.from(e.children).map(t=>{const s={component:t,checked:t._checked,keepOpen:t._keepOpen,className:t.className,theme:t.__theme};return t._hasVaadinItemMixin&&t._containerNodeId&&(s.children=Ai(o,t._containerNodeId)),t._item=s,s})}function Mn(o,i){o._item&&(o._item.checked=i,o._item.keepOpen&&o.toggleAttribute("menu-item-checked",i))}function Bn(o,i){o._item&&(o._item.keepOpen=i)}function $n(o,i){o._item&&(o._item.theme=i)}window.Vaadin.Flow.contextMenuConnector={initLazy:Nn,generateItemsTree:Ai,setChecked:Mn,setKeepOpen:Bn,setTheme:$n};function Vn(o){o.$contextMenuTargetConnector||(o.$contextMenuTargetConnector={openOnHandler(i){if(o.preventContextMenu&&o.preventContextMenu(i))return;i.preventDefault(),i.stopPropagation(),this.$contextMenuTargetConnector.openEvent=i;let e={};o.getContextMenuBeforeOpenDetail&&(e=o.getContextMenuBeforeOpenDetail(i)),o.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:e}))},updateOpenOn(i){this.removeListener(),this.openOnEventType=i,customElements.whenDefined("vaadin-context-menu").then(()=>{te[i]?ve(o,i,this.openOnHandler):o.addEventListener(i,this.openOnHandler)})},removeListener(){this.openOnEventType&&(te[this.openOnEventType]?Yo(o,this.openOnEventType,this.openOnHandler):o.removeEventListener(this.openOnEventType,this.openOnHandler))},openMenu(i){i.open(this.openEvent)},removeConnector(){this.removeListener(),o.$contextMenuTargetConnector=void 0}})}window.Vaadin.Flow.contextMenuTargetConnector={init:Vn};x("vaadin-form-item",g`
    :host {
      --vaadin-form-item-row-spacing: 0;
    }

    /* font-weight, margin-bottom, transition and line-height same as for part label in text-field */
    [part='label'] {
      color: var(--lumo-secondary-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
      margin-top: var(--lumo-space-m);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      margin-bottom: var(--lumo-space-xs);
      transition: color 0.4s;
      line-height: 1.333;
    }

    [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '\\2022');
      transition: opacity 0.2s;
      opacity: 0;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      position: relative;
      width: 1em;
      text-align: center;
    }

    :host([required]) [part='required-indicator']::after {
      opacity: 1;
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }
  `,{moduleId:"lumo-form-item"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Hn extends k(w){static get template(){return I`
      <style>
        :host {
          display: inline-flex;
          flex-direction: row;
          align-items: baseline;
          margin: calc(0.5 * var(--vaadin-form-item-row-spacing, 1em)) 0;
        }

        :host([label-position='top']) {
          flex-direction: column;
          align-items: stretch;
        }

        :host([hidden]) {
          display: none !important;
        }

        #label {
          width: var(--vaadin-form-item-label-width, 8em);
          flex: 0 0 auto;
        }

        :host([label-position='top']) #label {
          width: auto;
        }

        #spacing {
          width: var(--vaadin-form-item-label-spacing, 1em);
          flex: 0 0 auto;
        }

        #content {
          flex: 1 1 auto;
        }

        #content ::slotted(.full-width) {
          box-sizing: border-box;
          width: 100%;
          min-width: 0;
        }
      </style>
      <div id="label" part="label" on-click="__onLabelClick">
        <slot name="label" id="labelSlot" on-slotchange="__onLabelSlotChange"></slot>
        <span part="required-indicator" aria-hidden="true"></span>
      </div>
      <div id="spacing"></div>
      <div id="content">
        <slot id="contentSlot" on-slotchange="__onContentSlotChange"></slot>
      </div>
    `}static get is(){return"vaadin-form-item"}constructor(){super(),this.__updateInvalidState=this.__updateInvalidState.bind(this),this.__fieldNodeObserver=new MutationObserver(()=>this.__updateRequiredState(this.__fieldNode.required)),this.__labelNode=null,this.__fieldNode=null}_getFieldAriaTarget(i){return i.ariaTarget||i}__linkLabelToField(i){Re(this._getFieldAriaTarget(i),"aria-labelledby",this.__labelId)}__unlinkLabelFromField(i){Qe(this._getFieldAriaTarget(i),"aria-labelledby",this.__labelId)}__onLabelClick(){const i=this.__fieldNode;i&&(i.focus(),i.click())}__getValidateFunction(i){return i.validate||i.checkValidity}__onLabelSlotChange(){this.__labelNode&&(this.__labelNode=null,this.__fieldNode&&this.__unlinkLabelFromField(this.__fieldNode));const i=this.$.labelSlot.assignedElements()[0];i&&(this.__labelNode=i,this.__labelNode.id?this.__labelId=this.__labelNode.id:(this.__labelId=`label-${this.localName}-${Ze()}`,this.__labelNode.id=this.__labelId),this.__fieldNode&&this.__linkLabelToField(this.__fieldNode))}__onContentSlotChange(){this.__fieldNode&&(this.__unlinkLabelFromField(this.__fieldNode),this.__updateRequiredState(!1),this.__fieldNodeObserver.disconnect(),this.__fieldNode=null);const i=this.$.contentSlot.assignedElements();i.length>1&&console.warn(`WARNING: Since Vaadin 23, placing multiple fields directly to a <vaadin-form-item> is deprecated.
Please wrap fields with a <vaadin-custom-field> instead.`);const e=i.find(t=>!!this.__getValidateFunction(t));e&&(this.__fieldNode=e,this.__updateRequiredState(this.__fieldNode.required),this.__fieldNodeObserver.observe(this.__fieldNode,{attributes:!0,attributeFilter:["required"]}),this.__labelNode&&this.__linkLabelToField(this.__fieldNode))}__updateRequiredState(i){i?(this.setAttribute("required",""),this.__fieldNode.addEventListener("blur",this.__updateInvalidState),this.__fieldNode.addEventListener("change",this.__updateInvalidState)):(this.removeAttribute("invalid"),this.removeAttribute("required"),this.__fieldNode.removeEventListener("blur",this.__updateInvalidState),this.__fieldNode.removeEventListener("change",this.__updateInvalidState))}__updateInvalidState(){const i=this.__getValidateFunction(this.__fieldNode).call(this.__fieldNode);this.toggleAttribute("invalid",i===!1)}}A(Hn);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qn=g`
  :host {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
    color: var(--lumo-body-text-color);
    border-radius: var(--lumo-border-radius-s);
    background-color: var(--lumo-contrast-20pct);
    cursor: var(--lumo-clickable-cursor);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host([disabled]) {
    background-color: var(--lumo-contrast-10pct);
  }

  :host([focused]) [part='remove-button'] {
    color: inherit;
  }

  :host([slot='overflow']) {
    position: relative;
    min-width: var(--lumo-size-xxs);
    margin-inline-start: var(--lumo-space-s);
  }

  :host([slot='overflow'])::before,
  :host([slot='overflow'])::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-left: calc(var(--lumo-space-s) / 4) solid;
    border-radius: var(--lumo-border-radius-s);
    border-color: var(--lumo-contrast-30pct);
  }

  :host([slot='overflow'])::before {
    left: calc(-1 * var(--lumo-space-s) / 2);
  }

  :host([slot='overflow'])::after {
    left: calc(-1 * var(--lumo-space-s));
  }

  :host([count='2']) {
    margin-inline-start: calc(var(--lumo-space-s) / 2);
  }

  :host([count='2'])::after {
    display: none;
  }

  :host([count='1']) {
    margin-inline-start: 0;
  }

  :host([count='1'])::before,
  :host([count='1'])::after {
    display: none;
  }

  [part='label'] {
    font-weight: 500;
    line-height: 1.25;
  }

  [part='remove-button'] {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -0.3125em;
    margin-bottom: -0.3125em;
    margin-inline-start: auto;
    width: 1.25em;
    height: 1.25em;
    font-size: 1.5em;
    transition: none;
  }

  [part='remove-button']::before {
    content: var(--lumo-icons-cross);
  }

  :host([disabled]) [part='label'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
    pointer-events: none;
  }
`;x("vaadin-multi-select-combo-box-chip",[oi,qn],{moduleId:"lumo-multi-select-combo-box-chip"});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wn=g`
  @media (any-hover: hover) {
    :host(:hover[readonly]) {
      background-color: transparent;
      cursor: default;
    }
  }
`;x("vaadin-multi-select-combo-box-item",[Ye,ao,Wn],{moduleId:"lumo-multi-select-combo-box-item"});x("vaadin-multi-select-combo-box-overlay",[Oe,gt,ho,lo,co,g`
      :host {
        --_vaadin-multi-select-combo-box-items-container-border-width: var(--lumo-space-xs);
        --_vaadin-multi-select-combo-box-items-container-border-style: solid;
      }
    `],{moduleId:"lumo-multi-select-combo-box-overlay"});x("vaadin-multi-select-combo-box-container",g`
    :host([auto-expand-vertically]) {
      padding-block: var(--lumo-space-xs);
    }
  `,{moduleId:"lumo-multi-select-combo-box-container"});const Un=g`
  :host([has-value]) {
    padding-inline-start: 0;
  }

  :host([has-value]) ::slotted(input:placeholder-shown) {
    caret-color: var(--lumo-body-text-color) !important;
  }

  [part='label'] {
    flex-shrink: 0;
  }

  /* Override input-container styles */
  [part='input-field'] ::slotted([slot='chip']),
  [part='input-field'] ::slotted([slot='overflow']) {
    min-height: auto;
    padding: 0.3125em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-body-text-color);
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([auto-expand-vertically]) ::slotted([slot='chip']) {
    margin-block: calc(var(--lumo-space-xs) / 2);
  }

  ::slotted([slot='chip']:not([readonly]):not([disabled])) {
    padding-inline-end: 0;
  }

  :host([auto-expand-vertically]) ::slotted([slot='input']) {
    min-height: calc(var(--lumo-text-field-size, var(--lumo-size-m)) - 2 * var(--lumo-space-xs));
  }

  ::slotted([slot='chip']:not(:last-of-type)),
  ::slotted([slot='overflow']:not(:last-of-type)) {
    margin-inline-end: var(--lumo-space-xs);
  }

  ::slotted([slot='chip'][focused]) {
    background-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    color: var(--lumo-primary-contrast-color);
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  :host([readonly][has-value]) [part='toggle-button'] {
    color: var(--lumo-contrast-60pct);
    cursor: var(--lumo-clickable-cursor);
  }
`;x("vaadin-multi-select-combo-box",[Ke,Un],{moduleId:"lumo-multi-select-combo-box"});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gn=g`
  :host {
    --input-min-width: var(--vaadin-multi-select-combo-box-input-min-width, 4em);
    --_chip-min-width: var(--vaadin-multi-select-combo-box-chip-min-width, 50px);
  }

  #chips {
    display: flex;
    align-items: center;
  }

  ::slotted(input) {
    box-sizing: border-box;
    flex: 1 0 var(--input-min-width);
  }

  ::slotted([slot='chip']),
  ::slotted([slot='overflow']) {
    flex: 0 1 auto;
  }

  ::slotted([slot='chip']) {
    overflow: hidden;
  }

  :host(:is([readonly], [disabled])) ::slotted(input) {
    flex-grow: 0;
    flex-basis: 0;
    padding: 0;
  }

  :host([auto-expand-vertically]) #chips {
    display: contents;
  }

  :host([auto-expand-horizontally]) [class$='container'] {
    width: auto;
  }
`,jn=g`
  :host {
    display: inline-flex;
    align-items: center;
    align-self: center;
    white-space: nowrap;
    box-sizing: border-box;
  }

  [part='label'] {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host([hidden]),
  :host(:is([readonly], [disabled], [slot='overflow'])) [part='remove-button'] {
    display: none !important;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-multi-select-combo-box-chip",jn,{moduleId:"vaadin-multi-select-combo-box-chip"});class Yn extends k(w){static get is(){return"vaadin-multi-select-combo-box-chip"}static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},label:{type:String},item:{type:Object}}}static get template(){return I`
      <div part="label">[[label]]</div>
      <div part="remove-button" on-click="_onRemoveClick"></div>
    `}_onRemoveClick(i){i.stopPropagation(),this.dispatchEvent(new CustomEvent("item-removed",{detail:{item:this.item},bubbles:!0,composed:!0}))}}A(Yn);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-multi-select-combo-box-container",g`
    #wrapper {
      display: flex;
      width: 100%;
      min-width: 0;
    }

    :host([auto-expand-vertically]) #wrapper {
      flex-wrap: wrap;
    }
  `,{moduleId:"vaadin-multi-select-combo-box-container-styles"});let st;class Kn extends _o{static get is(){return"vaadin-multi-select-combo-box-container"}static get template(){if(!st){st=super.template.cloneNode(!0);const i=st.content,e=i.querySelectorAll("slot"),t=document.createElement("div");t.setAttribute("id","wrapper"),i.insertBefore(t,e[2]),t.appendChild(e[0]),t.appendChild(e[1])}return st}static get properties(){return{autoExpandVertically:{type:Boolean,reflectToAttribute:!0}}}}A(Kn);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Xn extends po(k(M(w))){static get is(){return"vaadin-multi-select-combo-box-item"}static get template(){return I`
      <style>
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}}A(Xn);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qn=g`
  #overlay {
    width: var(
      --vaadin-multi-select-combo-box-overlay-width,
      var(--_vaadin-multi-select-combo-box-overlay-default-width, auto)
    );
  }

  [part='content'] {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;x("vaadin-multi-select-combo-box-overlay",[Le,Qn],{moduleId:"vaadin-multi-select-combo-box-overlay-styles"});class Zn extends Ao(Pe(M(k(w)))){static get is(){return"vaadin-multi-select-combo-box-overlay"}static get template(){return I`
      <div id="backdrop" part="backdrop" hidden></div>
      <div part="overlay" id="overlay">
        <div part="loader"></div>
        <div part="content" id="content"><slot></slot></div>
      </div>
    `}}A(Zn);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Jn extends So(w){static get is(){return"vaadin-multi-select-combo-box-scroller"}static get template(){return I`
      <style>
        :host {
          display: block;
          min-height: 1px;
          overflow: auto;

          /* Fixes item background from getting on top of scrollbars on Safari */
          transform: translate3d(0, 0, 0);

          /* Enable momentum scrolling on iOS */
          -webkit-overflow-scrolling: touch;

          /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
          box-shadow: 0 0 0 white;
        }

        #selector {
          border-width: var(--_vaadin-multi-select-combo-box-items-container-border-width);
          border-style: var(--_vaadin-multi-select-combo-box-items-container-border-style);
          border-color: var(--_vaadin-multi-select-combo-box-items-container-border-color, transparent);
          position: relative;
        }
      </style>
      <div id="selector">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("aria-multiselectable","true")}_isItemSelected(i,e,t){return i instanceof ee||this.owner.readonly?!1:this.owner._findIndex(i,this.owner.selectedItems,t)>-1}_updateElement(i,e){super._updateElement(i,e),i.toggleAttribute("readonly",this.owner.readonly)}}A(Jn);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ea=o=>class extends No(Mo(o)){static get properties(){return{filteredItems:{type:Array,notify:!0,sync:!0},keepFilter:{type:Boolean,value:!1},loading:{type:Boolean,notify:!0,sync:!0},size:{type:Number,notify:!0,observer:"_sizeChanged",sync:!0},selectedItems:{type:Array,value:()=>[]},selectedItemsOnTop:{type:Boolean,value:!1,sync:!0},lastFilter:{type:String,notify:!0,sync:!0},topGroup:{type:Array,observer:"_topGroupChanged",sync:!0},_target:{type:Object}}}static get observers(){return["_readonlyChanged(readonly)"]}get clearElement(){return this.querySelector('[part="clear-button"]')}get _tagNamePrefix(){return"vaadin-multi-select-combo-box"}constructor(){super(),this.addEventListener("custom-value-set",this.__onCustomValueSet.bind(this))}open(){!this.disabled&&!(this.readonly&&this.selectedItems.length===0)&&(this.opened=!0)}ready(){super.ready(),this._target=this,this._toggleElement=this.querySelector(".toggle-button")}async _updateOverlayWidth(){!this.$&&this.updateComplete&&await this.updateComplete,this.$.overlay._updateOverlayWidth()}_readonlyChanged(){this._setDropdownItems(this.filteredItems)}_setDropdownItems(e){if(this.readonly){super._setDropdownItems(this.selectedItems);return}if(this.filter||!this.selectedItemsOnTop){super._setDropdownItems(e);return}if(e&&e.length&&this.topGroup&&this.topGroup.length){const t=e.filter(s=>this._comboBox._findIndex(s,this.topGroup,this.itemIdPath)===-1);super._setDropdownItems(this.topGroup.concat(t));return}super._setDropdownItems(e)}_topGroupChanged(e){e&&this._setDropdownItems(this.filteredItems)}_initScroller(){const e=this.getRootNode().host;this._comboBox=e,super._initScroller(e)}_onEnter(e){if(this.opened){if(e.preventDefault(),e.stopPropagation(),this.readonly)this.close();else if(this._hasValidInputValue()){const t=this._dropdownItems[this._focusedIndex];this._commitValue(),this._focusedIndex=this._dropdownItems.indexOf(t)}return}super._onEnter(e)}_onEscape(e){if(this.readonly){e.stopPropagation(),this.opened&&this.close();return}super._onEscape(e)}_clearFilter(){(!this.keepFilter||!this.opened)&&super._clearFilter()}_revertInputValueToValue(){super._revertInputValueToValue(),this.filter=""}_commitValue(){this.lastFilter=this.filter,super._commitValue()}_onArrowDown(){this.readonly?this.opened||this.open():super._onArrowDown()}_onArrowUp(){this.readonly?this.opened||this.open():super._onArrowUp()}_setFocused(e){e||(this._ignoreCommitValue=!0),super._setFocused(e),!e&&this.readonly&&!this._closeOnBlurIsPrevented&&this.close()}_onClosed(){this._ignoreCommitValue=!0,super._onClosed()}_detectAndDispatchChange(){if(this._ignoreCommitValue){this._ignoreCommitValue=!1,this.clear(),this._inputElementValue="";return}super._detectAndDispatchChange()}_overlaySelectedItemChanged(e){e.stopPropagation(),!this.readonly&&(e.detail.item instanceof ee||this.opened&&(this.lastFilter=this.filter,this.dispatchEvent(new CustomEvent("combo-box-item-selected",{detail:{item:e.detail.item}}))))}_shouldFetchData(){return this.readonly?!1:super._shouldFetchData()}clearCache(){this.readonly||super.clearCache()}__onCustomValueSet(e){this._ignoreCommitValue&&e.stopImmediatePropagation()}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ta extends ea(k(w)){static get is(){return"vaadin-multi-select-combo-box-internal"}static get template(){return I`
      <style>
        :host([opened]) {
          pointer-events: auto;
        }
      </style>

      <slot></slot>

      <vaadin-multi-select-combo-box-overlay
        id="overlay"
        opened="[[_overlayOpened]]"
        loading$="[[loading]]"
        theme$="[[_theme]]"
        position-target="[[_target]]"
        no-vertical-overlap
        restore-focus-node="[[inputElement]]"
      ></vaadin-multi-select-combo-box-overlay>
    `}}A(ta);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rt=new ResizeObserver(o=>{setTimeout(()=>{o.forEach(i=>{i.target.resizables?i.target.resizables.forEach(e=>{e._onResize(i.contentRect)}):i.target._onResize(i.contentRect)})})}),Ii=$(o=>class extends o{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),rt.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,rt.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),rt.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const t=e.resizables;t&&(t.delete(this),t.size===0&&rt.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ia=o=>class extends gi(Ii(o)){static get properties(){return{autoExpandHorizontally:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandHorizontallyChanged",sync:!0},autoExpandVertically:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_autoExpandVerticallyChanged",sync:!0},autoOpenDisabled:{type:Boolean,sync:!0},clearButtonVisible:{type:Boolean,reflectToAttribute:!0,observer:"_clearButtonVisibleChanged",value:!1,sync:!0},items:{type:Array,sync:!0},itemClassNameGenerator:{type:Object,observer:"__itemClassNameGeneratorChanged",sync:!0},itemLabelPath:{type:String,value:"label",sync:!0},itemValuePath:{type:String,value:"value",sync:!0},itemIdPath:{type:String,sync:!0},i18n:{type:Object,value:()=>({cleared:"Selection cleared",focused:"focused. Press Backspace to remove",selected:"added to selection",deselected:"removed from selection",total:"{count} items selected"})},keepFilter:{type:Boolean,value:!1},loading:{type:Boolean,value:!1,reflectToAttribute:!0,sync:!0},overlayClass:{type:String,sync:!0},readonly:{type:Boolean,value:!1,observer:"_readonlyChanged",reflectToAttribute:!0,sync:!0},selectedItems:{type:Array,value:()=>[],notify:!0,sync:!0},opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,sync:!0},size:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,sync:!0},allowCustomValue:{type:Boolean,value:!1},placeholder:{type:String,observer:"_placeholderChanged",sync:!0},renderer:{type:Function,sync:!0},filter:{type:String,value:"",notify:!0,sync:!0},filteredItems:{type:Array,sync:!0},selectedItemsOnTop:{type:Boolean,value:!1,sync:!0},value:{type:String},_overflowItems:{type:Array,value:()=>[],sync:!0},_focusedChipIndex:{type:Number,value:-1,observer:"_focusedChipIndexChanged"},_lastFilter:{type:String,sync:!0},_topGroup:{type:Array}}}static get observers(){return["_selectedItemsChanged(selectedItems)","__updateOverflowChip(_overflow, _overflowItems, disabled, readonly)","__updateTopGroup(selectedItemsOnTop, selectedItems, opened)"]}get slotStyles(){const e=this.localName;return[...super.slotStyles,`
        ${e}[has-value] input::placeholder {
          color: transparent !important;
          forced-color-adjust: none;
        }
      `]}get clearElement(){return this.$.clearButton}get _chips(){return[...this.querySelectorAll('[slot="chip"]')]}get _hasValue(){return this.selectedItems&&this.selectedItems.length>0}ready(){super.ready(),this.addController(new It(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Et(this.inputElement,this._labelController)),this._tooltipController=new be(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(e=>!e.opened),this._inputField=this.shadowRoot.querySelector('[part="input-field"]'),this._overflowController=new De(this,"overflow","vaadin-multi-select-combo-box-chip",{initializer:e=>{e.addEventListener("mousedown",t=>this._preventBlur(t)),this._overflow=e}}),this.addController(this._overflowController),this.__updateChips(),ce(this)}checkValidity(){return this.required&&!this.readonly?this._hasValue:!0}clear(){this.__updateSelection([]),dt(this.i18n.cleared)}clearCache(){this.$&&this.$.comboBox&&this.$.comboBox.clearCache()}requestContentUpdate(){this.$&&this.$.comboBox&&this.$.comboBox.requestContentUpdate()}_disabledChanged(e,t){super._disabledChanged(e,t),(e||t)&&this.__updateChips()}_inputElementChanged(e){super._inputElementChanged(e),e&&this.$.comboBox._setInputElement(e)}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&(this._focusedChipIndex=-1,this._requestValidation())}_onResize(){this.__updateChips()}_delegateAttribute(e,t){if(this.stateTarget){if(e==="required"){this._delegateAttribute("aria-required",t?"true":!1);return}super._delegateAttribute(e,t)}}_autoExpandHorizontallyChanged(e,t){(e||t)&&this.__updateChips()}_autoExpandVerticallyChanged(e,t){(e||t)&&this.__updateChips()}_clearButtonVisibleChanged(e,t){(e||t)&&this.__updateChips()}_onFilteredItemsChanged(e){const{value:t}=e.detail;(Array.isArray(t)||t==null)&&(this.filteredItems=t)}_readonlyChanged(e,t){(e||t)&&this.__updateChips(),this.dataProvider&&this.clearCache()}__itemClassNameGeneratorChanged(e,t){(e||t)&&this.__updateChips()}_pageSizeChanged(e,t){(Math.floor(e)!==e||e<=0)&&(this.pageSize=t,console.error('"pageSize" value must be an integer > 0')),this.$.comboBox.pageSize=this.pageSize}_placeholderChanged(e){const t=this.__tmpA11yPlaceholder;t!==e&&(this.__savedPlaceholder=e,t&&(this.placeholder=t))}_selectedItemsChanged(e){if(this._toggleHasValue(this._hasValue),this._hasValue){const t=this._mergeItemLabels(e);this.__tmpA11yPlaceholder===void 0&&(this.__savedPlaceholder=this.placeholder),this.__tmpA11yPlaceholder=t,this.placeholder=t}else this.__tmpA11yPlaceholder!==void 0&&(delete this.__tmpA11yPlaceholder,this.placeholder=this.__savedPlaceholder);this.__updateChips(),this.requestContentUpdate(),this.opened&&this.$.comboBox._updateOverlayWidth()}_getItemLabel(e){return this.$.comboBox._getItemLabel(e)}_mergeItemLabels(e){return e.map(t=>this._getItemLabel(t)).join(", ")}_findIndex(e,t,s){if(s&&e){for(let r=0;r<t.length;r++)if(t[r]&&t[r][s]===e[s])return r;return-1}return t.indexOf(e)}__clearInternalValue(e=!1){!this.keepFilter||e?(this.filter="",this.$.comboBox.clear()):(this.$.comboBox.clear(),this._inputElementValue=this.filter)}__announceItem(e,t,s){const r=t?"selected":"deselected",n=this.i18n.total.replace("{count}",s||0);dt(`${e} ${this.i18n[r]} ${n}`)}__removeItem(e){const t=[...this.selectedItems];t.splice(t.indexOf(e),1),this.__updateSelection(t);const s=this._getItemLabel(e);this.__announceItem(s,!1,t.length)}__selectItem(e){const t=[...this.selectedItems],s=this._findIndex(e,t,this.itemIdPath),r=this._getItemLabel(e);let n=!1;if(s!==-1){const a=this._lastFilter;if(a&&a.toLowerCase()===r.toLowerCase()){this.__clearInternalValue();return}t.splice(s,1)}else t.push(e),n=!0;this.__updateSelection(t),this.__clearInternalValue(),this.__announceItem(r,n,t.length)}__updateSelection(e){this.selectedItems=e,this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__updateTopGroup(e,t,s){e?s||(this._topGroup=[...t]):this._topGroup=[]}__createChip(e){const t=document.createElement("vaadin-multi-select-combo-box-chip");t.setAttribute("slot","chip"),t.item=e,t.disabled=this.disabled,t.readonly=this.readonly;const s=this._getItemLabel(e);return t.label=s,t.setAttribute("title",s),typeof this.itemClassNameGenerator=="function"&&(t.className=this.itemClassNameGenerator(e)),t.addEventListener("item-removed",r=>this._onItemRemoved(r)),t.addEventListener("mousedown",r=>this._preventBlur(r)),t}__getOverflowWidth(){const e=this._overflow;e.style.visibility="hidden",e.removeAttribute("hidden");const t=e.getAttribute("count");e.setAttribute("count","99");const s=getComputedStyle(e),r=e.clientWidth+parseInt(s.marginInlineStart);return e.setAttribute("count",t),e.setAttribute("hidden",""),e.style.visibility="",r}async __updateChips(){if(!this._inputField||!this.inputElement)return;this._inputField.$||await this._inputField.updateComplete,this._chips.forEach(a=>{a.remove()});const e=[...this.selectedItems],t=this._inputField.$.wrapper.clientWidth,s=parseInt(getComputedStyle(this.inputElement).flexBasis);let r=t-s;e.length>1&&(r-=this.__getOverflowWidth());const n=parseInt(getComputedStyle(this).getPropertyValue("--_chip-min-width"));if(this.autoExpandHorizontally){const a=[];for(let u=e.length-1,p=null;u>=0;u--){const f=this.__createChip(e[u]);this.insertBefore(f,p),f.performUpdate&&f.performUpdate(),p=f,a.unshift(f)}const l=[],h=this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth;if(!this.autoExpandVertically&&h<s){for(;a.length>1;){a.pop().remove(),l.unshift(e.pop());const p=l.length>0?s+this.__getOverflowWidth():s;if(this._inputField.$.wrapper.clientWidth-this.$.chips.clientWidth>=p)break}a.length===1&&(a[0].style.maxWidth=`${Math.max(n,r)}px`)}this._overflowItems=l;return}for(let a=e.length-1,l=null;a>=0;a--){const h=this.__createChip(e[a]);if(this.insertBefore(h,l),h.performUpdate&&h.performUpdate(),!this.autoExpandVertically&&this.$.chips.clientWidth>r)if(l===null)h.style.maxWidth=`${Math.max(n,r)}px`;else{h.remove();break}e.pop(),l=h}this._overflowItems=e}__updateOverflowChip(e,t,s,r){if(e){const n=t.length;e.label=`${n}`,e.setAttribute("count",`${n}`),e.setAttribute("title",this._mergeItemLabels(t)),e.toggleAttribute("hidden",n===0),e.disabled=s,e.readonly=r}}_onClearButtonTouchend(e){e.preventDefault(),e.stopPropagation(),this.clear()}_onClearButtonClick(e){e.stopPropagation(),this.clear()}_onChange(e){e.stopPropagation()}_onEscape(e){this.clearButtonVisible&&this.selectedItems&&this.selectedItems.length&&(e.stopPropagation(),this.selectedItems=[])}_onKeyDown(e){super._onKeyDown(e);const t=this._chips;if(!this.readonly&&t.length>0)switch(e.key){case"Backspace":this._onBackSpace(t);break;case"ArrowLeft":this._onArrowLeft(t,e);break;case"ArrowRight":this._onArrowRight(t,e);break;default:this._focusedChipIndex=-1;break}}_onArrowLeft(e,t){if(this.inputElement.selectionStart!==0)return;const s=this._focusedChipIndex;s!==-1&&t.preventDefault();let r;this.__isRTL?s===e.length-1?r=-1:s>-1&&(r=s+1):s===-1?r=e.length-1:s>0&&(r=s-1),r!==void 0&&(this._focusedChipIndex=r)}_onArrowRight(e,t){if(this.inputElement.selectionStart!==0)return;const s=this._focusedChipIndex;s!==-1&&t.preventDefault();let r;this.__isRTL?s===-1?r=e.length-1:s>0&&(r=s-1):s===e.length-1?r=-1:s>-1&&(r=s+1),r!==void 0&&(this._focusedChipIndex=r)}_onBackSpace(e){if(this.inputElement.selectionStart!==0)return;const t=this._focusedChipIndex;t===-1?this._focusedChipIndex=e.length-1:(this.__removeItem(e[t].item),this._focusedChipIndex=-1)}_focusedChipIndexChanged(e,t){if(e>-1||t>-1){const s=this._chips;if(s.forEach((r,n)=>{r.toggleAttribute("focused",n===e)}),e>-1){const r=s[e].item,n=this._getItemLabel(r);dt(`${n} ${this.i18n.focused}`)}}}_onComboBoxChange(){const e=this.$.comboBox.selectedItem;e&&this.__selectItem(e)}_onComboBoxItemSelected(e){this.__selectItem(e.detail.item)}_onCustomValueSet(e){e.preventDefault(),e.stopPropagation(),this.__clearInternalValue(!0),this.dispatchEvent(new CustomEvent("custom-value-set",{detail:e.detail,composed:!0,bubbles:!0}))}_onItemRemoved(e){this.__removeItem(e.detail.item)}_preventBlur(e){e.preventDefault()}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-multi-select-combo-box",[vi,Gn],{moduleId:"vaadin-multi-select-combo-box-styles"});class oa extends ia(k(V(w))){static get is(){return"vaadin-multi-select-combo-box"}static get template(){return I`
      <div class="vaadin-multi-select-combo-box-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-multi-select-combo-box-internal
          id="comboBox"
          items="[[items]]"
          item-id-path="[[itemIdPath]]"
          item-label-path="[[itemLabelPath]]"
          item-value-path="[[itemValuePath]]"
          disabled="[[disabled]]"
          readonly="[[readonly]]"
          auto-open-disabled="[[autoOpenDisabled]]"
          allow-custom-value="[[allowCustomValue]]"
          overlay-class="[[overlayClass]]"
          data-provider="[[dataProvider]]"
          filter="{{filter}}"
          last-filter="{{_lastFilter}}"
          loading="{{loading}}"
          size="{{size}}"
          filtered-items="[[filteredItems]]"
          selected-items="[[selectedItems]]"
          selected-items-on-top="[[selectedItemsOnTop]]"
          item-class-name-generator="[[itemClassNameGenerator]]"
          top-group="[[_topGroup]]"
          opened="{{opened}}"
          renderer="[[renderer]]"
          keep-filter="[[keepFilter]]"
          theme$="[[_theme]]"
          on-combo-box-item-selected="_onComboBoxItemSelected"
          on-change="_onComboBoxChange"
          on-custom-value-set="_onCustomValueSet"
          on-filtered-items-changed="_onFilteredItemsChanged"
        >
          <vaadin-multi-select-combo-box-container
            part="input-field"
            auto-expand-vertically="[[autoExpandVertically]]"
            readonly="[[readonly]]"
            disabled="[[disabled]]"
            invalid="[[invalid]]"
            theme$="[[_theme]]"
          >
            <slot name="overflow" slot="prefix"></slot>
            <div id="chips" part="chips" slot="prefix">
              <slot name="chip"></slot>
            </div>
            <slot name="input"></slot>
            <div
              id="clearButton"
              part="clear-button"
              slot="suffix"
              on-touchend="_onClearButtonTouchend"
              aria-hidden="true"
            ></div>
            <div id="toggleButton" class="toggle-button" part="toggle-button" slot="suffix" aria-hidden="true"></div>
          </vaadin-multi-select-combo-box-container>
        </vaadin-multi-select-combo-box-internal>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}}A(oa);x("vaadin-grid",g`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Empty state */
    [part~='empty-state'] {
      padding: var(--lumo-space-m);
      color: var(--lumo-secondary-text-color);
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      --_resize-handle-width: 3px;
      width: var(--_resize-handle-width);
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    [part='resize-handle']::before {
      transform: translateX(calc(-50% + var(--_resize-handle-width) / 2));
      width: var(--lumo-size-s);
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    :host([theme~='compact']) [part~='empty-state'] {
      padding: var(--lumo-space-s);
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sa=o=>class extends o{static get properties(){return{accessibleName:{type:String}}}static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter(t=>t.some(s=>s.headerRenderer||s.path&&s.header!==null||s.header)).length}_a11yGetFooterRowCount(e){return e.filter(t=>t.some(s=>s.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(e===void 0||t===void 0)return;const s=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",s&&s.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){H(this.$.header,(e,t)=>{e.setAttribute("aria-rowindex",t+1)})}_a11yUpdateFooterRows(){H(this.$.footer,(e,t)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1)})}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",!!t),ke(e,s=>{s.setAttribute("aria-selected",!!t)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,t){t>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",t+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,t){ke(e,s=>{s!==t&&s.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let t=e.parentNode;for(;t&&t.localName!=="vaadin-grid-cell-content";)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ts=o=>o.offsetParent&&!o.part.contains("body-cell")&&bt(o)&&getComputedStyle(o).visibility!=="hidden",ra=o=>class extends o{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const t=e.detail.model,s=t?t.item:null;s&&(this.activeItem=this._itemsEqual(this.activeItem,s)?null:s)}_shouldPreventCellActivationOnClick(e){const{cell:t}=this._getGridEventLocation(e);return e.defaultPrevented||!t||t.getAttribute("part").includes("details-cell")||t===this.$.emptystatecell||t._content.contains(this.getRootNode().activeElement)||this._isFocusable(e.target)||e.target instanceof HTMLLabelElement}_onClick(e){if(this._shouldPreventCellActivationOnClick(e))return;const{cell:t}=this._getGridEventLocation(e);t&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_isFocusable(e){return ts(e)}};function Ae(o,i){return o.split(".").reduce((e,t)=>e[t],i)}function Wi(o,i,e){if(e.length===0)return!1;let t=!0;return o.forEach(({path:s})=>{if(!s||s.indexOf(".")===-1)return;const r=s.replace(/\.[^.]*$/u,"");Ae(r,e[0])===void 0&&(console.warn(`Path "${s}" used for ${i} does not exist in all of the items, ${i} is disabled.`),t=!1)}),t}function _t(o){return[void 0,null].indexOf(o)>=0?"":isNaN(o)?o.toString():o}function Ui(o,i){return o=_t(o),i=_t(i),o<i?-1:o>i?1:0}function na(o,i){return o.sort((e,t)=>i.map(s=>s.direction==="asc"?Ui(Ae(s.path,e),Ae(s.path,t)):s.direction==="desc"?Ui(Ae(s.path,t),Ae(s.path,e)):0).reduce((s,r)=>s!==0?s:r,0))}function aa(o,i){return o.filter(e=>i.every(t=>{const s=_t(Ae(t.path,e)),r=_t(t.value).toString().toLowerCase();return s.toString().toLowerCase().includes(r)}))}const la=o=>(i,e)=>{let t=o?[...o]:[];i.filters&&Wi(i.filters,"filtering",t)&&(t=aa(t,i.filters)),Array.isArray(i.sortOrders)&&i.sortOrders.length&&Wi(i.sortOrders,"sorting",t)&&(t=na(t,i.sortOrders));const s=Math.min(t.length,i.pageSize),r=i.page*s,n=r+s,a=t.slice(r,n);e(a,t.length)};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const da=o=>class extends o{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, items.*)"]}__setArrayDataProvider(e){const t=la(this.items);t.__items=e,this._arrayDataProvider=t,this.size=e.length,this.dataProvider=t}_onDataProviderPageReceived(){super._onDataProviderPageReceived(),this._arrayDataProvider&&(this.size=this._flatSize)}__dataProviderOrItemsChanged(e,t,s){s&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):t?this._arrayDataProvider.__items===t?this.clearCache():this.__setArrayDataProvider(t):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):t&&this.__setArrayDataProvider(t))}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ha=o=>class extends o{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),ve(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),me||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const t=e.composedPath(),s=t[t.indexOf(this.$.header)-2];if(!s||!s._content||s._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const t=e.composedPath&&e.composedPath();if(t&&t.some(r=>r.hasAttribute&&r.hasAttribute("draggable")))return;const s=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!s||!s.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=s._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(s),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const t=this._cellFromPoint(e.detail.x,e.detail.y);if(!t)return;const s=this._getTargetColumn(t,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,s)&&this._isSwappableByPosition(s,e.detail.x)){const r=this._columnTree.findIndex(u=>u.includes(s)),n=this._getColumnsInOrder(r),a=n.indexOf(this._draggedColumn),l=n.indexOf(s),h=a<l?1:-1;for(let u=a;u!==l;u+=h)this._swapColumnOrders(this._draggedColumn,n[u+h])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(t=>!t.hidden).sort((t,s)=>t._order-s._order)}_cellFromPoint(e=0,t=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const s=this.shadowRoot.elementFromPoint(e,t);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(s)}_getCellFromElement(e){if(e){if(e._column)return e;const{parentElement:t}=e;if(t&&t._focusButton===e)return t}return null}_updateGhostPosition(e,t){const s=this._reorderGhost.getBoundingClientRect(),r=e-s.width/2,n=t-s.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(s.left-r),this._reorderGhost._top=l-(s.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const t=this._reorderGhost;t.textContent=e._content.innerText;const s=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(r=>{t.style[r]=s[r]}),t}_updateOrders(e){e!==void 0&&(e[0].forEach(t=>{t._order=0}),Bo(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){H(e.parentNode,s=>{/column/u.test(s.localName)&&this._isSwapAllowed(s,e)&&(s._reorderStatus=t)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,t){if(e&&t){const s=e!==t,r=e.parentElement===t.parentElement,n=e.frozen&&t.frozen||e.frozenToEnd&&t.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!t.frozen&&!t.frozenToEnd;return s&&r&&n}}_isSwappableByPosition(e,t){const s=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),r=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=s.getBoundingClientRect();return n.left>r.left?t>n.right-r.width:t<n.left+r.width}_swapColumnOrders(e,t){[e._order,t._order]=[t._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){let s=e._column;for(;s.parentElement!==t.parentElement&&s!==this;)s=s.parentElement;return s.parentElement===t.parentElement?s:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ca=o=>class extends o{ready(){super.ready();const e=this.$.scroller;ve(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault()),e.addEventListener("mousedown",t=>t.target.getAttribute("part")==="resize-handle"&&t.preventDefault())}_onHeaderTrack(e){const t=e.target;if(t.getAttribute("part")==="resize-handle"){let r=t.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);r.localName==="vaadin-grid-column-group";)r=r._childColumns.slice(0).sort((p,f)=>p._order-f._order).filter(p=>!p.hidden).pop();const n=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),h=l.find(p=>p._column===r);if(h.offsetWidth){const p=getComputedStyle(h._content),f=10+parseInt(p.paddingLeft)+parseInt(p.paddingRight)+parseInt(p.borderLeftWidth)+parseInt(p.borderRightWidth)+parseInt(p.marginLeft)+parseInt(p.marginRight);let b;const y=h.offsetWidth,T=h.getBoundingClientRect();h.hasAttribute("frozen-to-end")?b=y+(n?a-T.right:T.left-a):b=y+(n?T.left-a:a-T.right),r.width=`${Math.max(f,b)}px`,r.flexGrow=0}l.sort((p,f)=>p._column._order-f._column._order).forEach((p,f,b)=>{f<b.indexOf(h)&&(p._column.width=`${p.offsetWidth}px`,p._column.flexGrow=0)});const u=this._frozenToEndCells[0];if(u&&this.$.table.scrollWidth>this.$.table.offsetWidth){const p=u.getBoundingClientRect(),f=a-(n?p.right:p.left);(n&&f<=0||!n&&f>=0)&&(this.$.table.scrollLeft+=f)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:r}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ua=o=>class extends o{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new Fo(this,{size:this.size||0,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,t){!t&&e==="children"||this.requestContentUpdate()}_getItem(e,t){t.index=e;const{item:s}=this._dataProviderController.getFlatIndexContext(e);s?(this.__updateLoading(t,!1),this._updateItem(t,s),this._isExpanded(s)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(t,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,t){const s=Te(e);St(e,"loading",t),re(s,"loading-row-cell",t),t&&(this._generateCellClassNames(e),this._generateCellPartNames(e))}getItemId(e){return this.itemIdPath?ge(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,t){const s=t||[],r=new Set;return s.forEach(n=>{r.add(this.getItemId(n))}),r}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(t=>!this._itemsEqual(t,e)))}_getIndexLevel(e=0){const{level:t}=this._dataProviderController.getFlatIndexContext(e);return t}_loadPage(e,t){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(t,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize!==this._dataProviderController.flatSize&&(this._shouldUpdateAllRenderedRowsAfterPageLoad=!0,this._flatSize=this._dataProviderController.flatSize),this._getRenderedRows().forEach(e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=O.debounce(this._debouncerApplyCachedData,K.after(0),()=>{this._setLoading(!1);const e=this._shouldUpdateAllRenderedRowsAfterPageLoad;this._shouldUpdateAllRenderedRowsAfterPageLoad=!1,this._getRenderedRows().forEach(t=>{const{item:s}=this._dataProviderController.getFlatIndexContext(t.index);(s||e)&&this._getItem(t.index,t)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=O.debounce(this.__clearCacheDebouncer,j,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size||0,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,t){this._dataProviderController.setPageSize(e),t!==void 0&&e!==t&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,t){this._dataProviderController.setDataProvider(e?e.bind(this):null),t!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=O.debounce(this._debouncerCheckSize,K.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){let s=-1;return t.forEach((r,n)=>{this._itemsEqual(r,e)&&(s=n)}),s}scrollToIndex(...e){let t;for(;t!==(t=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(t);(this._dataProviderController.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const He={BETWEEN:"between",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},oe={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},_a=!("draggable"in document.createElement("div")),pa=o=>class extends o{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50},__draggedItems:{value:()=>[]}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}constructor(){super(),this.__onDocumentDragStart=this.__onDocumentDragStart.bind(this)}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),document.addEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("dragstart",this.__onDocumentDragStart,{capture:!0})}_onDragStart(e){if(this.rowsDraggable){let t=e.target;if(t.localName==="vaadin-grid-cell-content"&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=t.style.transform;t.style.top=/translateY\((.*)\)/u.exec(a)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=a})}const s=t.getBoundingClientRect();_a?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-s.left,e.clientY-s.top);let r=[t];this._isSelected(t._item)&&(r=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),this.__draggedItems=r.map(a=>a._item),e.dataTransfer.setData("text",this.__formatDefaultTransferData(r)),we(t,{dragstart:r.length>1?`${r.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-s.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-s.top+10}px`),requestAnimationFrame(()=>{we(t,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y",""),this.requestContentUpdate()});const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:[...this.__draggedItems],setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>t.setAttribute("dragstart",a)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t),this.__draggedItems=[],this.requestContentUpdate()}_onDragLeave(e){this.dropMode&&(e.stopPropagation(),this._clearDragStyles())}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let t=e.composedPath().find(s=>s.localName==="tr");if(!this._flatSize||this.dropMode===He.ON_GRID)this._dropLocation=oe.EMPTY;else if(!t||t.parentNode!==this.$.items){if(t)return;if(this.dropMode===He.BETWEEN||this.dropMode===He.ON_TOP_OR_BETWEEN)t=Array.from(this.$.items.children).filter(s=>!s.hidden).pop(),this._dropLocation=oe.BELOW;else return}else{const s=t.getBoundingClientRect();if(this._dropLocation=oe.ON_TOP,this.dropMode===He.BETWEEN){const r=e.clientY-s.top<s.bottom-e.clientY;this._dropLocation=r?oe.ABOVE:oe.BELOW}else this.dropMode===He.ON_TOP_OR_BETWEEN&&(e.clientY-s.top<s.height/3?this._dropLocation=oe.ABOVE:e.clientY-s.top>s.height/3*2&&(this._dropLocation=oe.BELOW))}if(t&&t.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===oe.EMPTY?this.toggleAttribute("dragover",!0):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&Bi(t,{dragover:this._dropLocation})):this._clearDragStyles()}}__onDocumentDragStart(e){if(e.target.contains(this)){const t=[e.target,this.$.items,this.$.scroller],s=t.map(r=>r.style.cssText);this.$.table.scrollHeight>2e4&&(this.$.scroller.style.display="none"),go&&(e.target.style.willChange="transform"),si&&(this.$.items.style.flexShrink=1),requestAnimationFrame(()=>{t.forEach((r,n)=>{r.style.cssText=s[n]})})}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const t=this.$.header.getBoundingClientRect().bottom,s=this.$.footer.getBoundingClientRect().top,r=t-e+this.__dndAutoScrollThreshold,n=e-s+this.__dndAutoScrollThreshold;let a=0;if(n>0?a=n*2:r>0&&(a=-r*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(s=>{const r=s.getBoundingClientRect();return r.bottom>e&&r.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),H(this.$.items,e=>{Bi(e,{dragover:null})})}__updateDragSourceParts(e,t){we(e,{"drag-source":this.__draggedItems.includes(t.item)})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(r=>({type:r,data:e.dataTransfer.getData(r)}));this._clearDragStyles();const s=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});s.originalEvent=e,this.dispatchEvent(s)}}__formatDefaultTransferData(e){return e.map(t=>Array.from(t.children).filter(s=>!s.hidden&&s.getAttribute("part").indexOf("details-cell")===-1).sort((s,r)=>s._column._order>r._column._order?1:-1).map(s=>s._content.textContent.trim()).filter(s=>s).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){H(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){const s=this.loading||e.hasAttribute("loading"),r=!this.rowsDraggable||s||this.dragFilter&&!this.dragFilter(t),n=!this.dropMode||s||this.dropFilter&&!this.dropFilter(t);ke(e,a=>{r?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),we(e,{"drag-disabled":!!r,"drop-disabled":!!n})}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function is(o,i){if(!o||!i||o.length!==i.length)return!1;for(let e=0,t=o.length;e<t;e++)if(o[e]instanceof Array&&i[e]instanceof Array){if(!is(o[e],i[e]))return!1}else if(o[e]!==i[e])return!1;return!0}const fa=o=>class extends o{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(t=>t.localName==="vaadin-grid-column-group")}_getChildColumns(e){return ne.getColumns(e)}_flattenColumnGroups(e){return e.map(t=>t.localName==="vaadin-grid-column-group"?this._getChildColumns(t):[t]).reduce((t,s)=>t.concat(s),[])}_getColumnTree(){const e=ne.getColumns(this),t=[e];let s=e;for(;this._hasColumnGroups(s);)s=this._flattenColumnGroups(s),t.push(s);return t}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=O.debounce(this.__updateColumnTreeDebouncer,j,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();is(e,this._columnTree)||(e.forEach(t=>{t.forEach(s=>{s.performUpdate&&s.performUpdate()})}),this._columnTree=e)}_addNodeObserver(){this._observer=new ne(this,(e,t)=>{const s=t.flatMap(n=>n._allCells),r=n=>s.filter(a=>a&&a._content.contains(n)).length;this.__removeSorters(this._sorters.filter(r)),this.__removeFilters(this._filters.filter(r)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=O.debounce(this._debouncerCheckImports,K.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((t,s)=>t._column._order-s._column._order).forEach((t,s,r)=>{_e(t,"first-column",s===0),_e(t,"last-column",s===r.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ma=o=>class extends o{getEventContext(e){const t={},{cell:s}=this._getGridEventLocation(e);return s&&(t.section=["body","header","footer","details"].find(r=>s.getAttribute("part").indexOf(r)>-1),s._column&&(t.column=s._column),(t.section==="body"||t.section==="details")&&Object.assign(t,this.__getRowModel(s.parentElement))),t}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ga=o=>class extends o{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function nt(o){return o instanceof HTMLTableRowElement}function at(o){return o instanceof HTMLTableCellElement}function ue(o){return o.matches('[part~="details-cell"]')}const va=o=>class extends o{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return[this._headerFocusable,this._itemsFocusable,this._footerFocusable].some(nt)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(t=>{const s=this[t];if(e){const r=s&&s.parentElement;at(s)?this[t]=r:at(r)&&(this[t]=r.parentElement)}else if(!e&&nt(s)){const r=s.firstElementChild;this[t]=r._focusButton||r}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,t){t&&Qe(t,"part","focused-cell"),e&&Re(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(t=>{if(t.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=t;else{let s=this._itemsFocusable.parentElement,r=this._itemsFocusable;if(s){at(s)&&(r=s,s=s.parentElement);const n=[...s.children].indexOf(r);this._itemsFocusable=this.__getFocusable(t,t.children[n])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const t=e.key;let s;switch(t){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":s="Navigation";break;case"Enter":case"Escape":case"F2":s="Interaction";break;case"Tab":s="Tab";break;case" ":s="Space";break}this._detectInteracting(e),this.interacting&&s!=="Interaction"&&(s=void 0),s&&this[`_on${s}KeyDown`](e,t)}__ensureFlatIndexInViewport(e){[...this.$.items.children].find(s=>s.index===e)?this.__scrollIntoViewport(e):this._scrollToFlatIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const t=e._item;return!!(t&&ge(this.itemHasChildrenPath,t)&&!this._isExpanded(t))}}__isRowCollapsible(e){return this._isExpanded(e._item)}_onNavigationKeyDown(e,t){e.preventDefault();const s=this.__isRTL,r=e.composedPath().find(nt),n=e.composedPath().find(at);let a=0,l=0;switch(t){case"ArrowRight":a=s?-1:1;break;case"ArrowLeft":a=s?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?l=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?l=1/0:a=1/0;break;case"ArrowDown":l=1;break;case"ArrowUp":l=-1;break;case"PageDown":if(this.$.items.contains(r)){const p=this.__getIndexInGroup(r,this._focusedItemIndex);this._scrollToFlatIndex(p)}l=this._visibleItemsCount;break;case"PageUp":l=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!r||!this.__rowFocusMode&&!n)return;const h=s?"ArrowLeft":"ArrowRight",u=s?"ArrowRight":"ArrowLeft";if(t===h){if(this.__rowFocusMode){if(this.__isRowExpandable(r)){this.expandItem(r._item);return}this.__rowFocusMode=!1,this._onCellNavigation(r.firstElementChild,0,0);return}}else if(t===u)if(this.__rowFocusMode){if(this.__isRowCollapsible(r)){this.collapseItem(r._item);return}}else{const p=[...r.children].sort((f,b)=>f._order-b._order);if(n===p[0]||ue(n)){this.__rowFocusMode=!0,this._onRowNavigation(r,0);return}}this.__rowFocusMode?this._onRowNavigation(r,l):this._onCellNavigation(n,a,l)}_onRowNavigation(e,t){const{dstRow:s}=this.__navigateRows(t,e);s&&s.focus()}__getIndexInGroup(e,t){const s=e.parentNode;return s===this.$.items?t!==void 0?t:e.index:[...s.children].indexOf(e)}__navigateRows(e,t,s){const r=this.__getIndexInGroup(t,this._focusedItemIndex),n=t.parentNode,a=(n===this.$.items?this._flatSize:n.children.length)-1;let l=Math.max(0,Math.min(r+e,a));if(n!==this.$.items){if(l>r)for(;l<a&&n.children[l].hidden;)l+=1;else if(l<r)for(;l>0&&n.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[l]}}let h=!1;if(s){const u=ue(s);if(n===this.$.items){const p=t._item,{item:f}=this._dataProviderController.getFlatIndexContext(l);u?h=e===0:h=e===1&&this._isDetailsOpened(p)||e===-1&&l!==r&&this._isDetailsOpened(f),h!==u&&(e===1&&h||e===-1&&!h)&&(l=r)}}return this.__ensureFlatIndexInViewport(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find(u=>!u.hidden&&u.index===l),dstIsRowDetails:h}}_onCellNavigation(e,t,s){const r=e.parentNode,{dstRow:n,dstIsRowDetails:a}=this.__navigateRows(s,r,e);if(!n)return;let l=[...r.children].indexOf(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(f=>f._column===e._column));const h=ue(e),u=r.parentNode,p=this.__getIndexInGroup(r,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(h?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(u,p).filter(f=>!f.hidden)[l]._order),a)[...n.children].find(ue).focus();else{const f=this.__getIndexInGroup(n,this._focusedItemIndex),b=this._getColumns(u,f).filter(R=>!R.hidden),y=b.map(R=>R._order).sort((R,W)=>R-W),T=y.length-1,S=y.indexOf(y.slice(0).sort((R,W)=>Math.abs(R-this._focusedColumnOrder)-Math.abs(W-this._focusedColumnOrder))[0]),z=s===0&&h?S:Math.max(0,Math.min(S+t,T));z!==S&&(this._focusedColumnOrder=void 0);const ie=b.reduce((R,W,Je)=>(R[W._order]=Je,R),{})[y[z]];let Y;if(this.$.items.contains(e)){const R=this.$.sizer.children[ie];this._lazyColumns&&(this.__isColumnInViewport(R._column)||R.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),Y=[...n.children].find(W=>W._column===R._column),this._scrollHorizontallyToCell(Y)}else Y=n.children[ie],this._scrollHorizontallyToCell(Y);Y.focus()}}_onInteractionKeyDown(e,t){const s=e.composedPath()[0],r=s.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(s.type);let n;switch(t){case"Enter":n=this.interacting?!r:!0;break;case"Escape":n=!1;break;case"F2":n=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==n&&a!==null)if(n){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(h=>this._isFocusable(h));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);t==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,t){const s=[this.$.table,this._headerFocusable,this.__emptyState?this.$.emptystatecell:this._itemsFocusable,this._footerFocusable,this.$.focusexit];let r=s.indexOf(e);for(r+=t;r>=0&&r<=s.length-1;){let a=s[r];if(a&&!this.__rowFocusMode&&(a=s[r].parentNode),!a||a.hidden)r+=t;else break}let n=s[r];if(n&&!this.__isHorizontallyInViewport(n)){const a=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(a)if(n===this._headerFocusable)n=a._headerCell;else if(n===this._itemsFocusable){const l=n._column._cells.indexOf(n);n=a._cells[l]}else n===this._footerFocusable&&(n=a._footerCell)}return n}_onTabKeyDown(e){let t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);t&&(e.stopPropagation(),t===this._itemsFocusable&&(this.__ensureFlatIndexInViewport(this._focusedItemIndex),this.__updateItemsFocusable(),t=this._itemsFocusable),t.focus(),t!==this.$.table&&t!==this.$.focusexit&&e.preventDefault(),this.toggleAttribute("navigating",!0))}_onSpaceKeyDown(e){e.preventDefault();const t=e.composedPath()[0],s=nt(t);(s||!t._content||!t._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(s?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(s?t:t.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){const s=this.hasAttribute("navigating");t._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",s)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:t,cell:s,row:r}=this._getGridEventLocation(e);if(!(!s&&!this.__rowFocusMode)&&(this._detectInteracting(e),t&&(s||r)))if(this._activeRowGroup=t,t===this.$.header?this._headerFocusable=this.__getFocusable(r,s):t===this.$.items?(this._itemsFocusable=this.__getFocusable(r,s),this._focusedItemIndex=r.index):t===this.$.footer&&(this._footerFocusable=this.__getFocusable(r,s)),s){const n=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&n.section==="body",!this.__pendingBodyCellFocus&&s!==this.$.emptystatecell&&s.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}})),this._focusedCell=s._focusButton||s,Xe()&&e.target===s&&this._showTooltip(e)}else this._focusedCell=null}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,t){return this.__rowFocusMode?e:t._focusButton||t}_detectInteracting(e){const t=e.composedPath().some(s=>s.localName==="slot"&&this.shadowRoot.contains(s));this._setInteracting(t),this.__updateHorizontalScrollPosition()}_updateGridSectionFocusTarget(e){if(!e)return;const t=this._getGridSectionFromFocusTarget(e),s=this.interacting&&t===this._activeRowGroup;e.tabIndex=s?-1:0}_preventScrollerRotatingCellFocus(){this._activeRowGroup===this.$.items&&(this.__preventScrollerRotatingCellFocusDebouncer=O.debounce(this.__preventScrollerRotatingCellFocusDebouncer,X,()=>{const e=this._activeRowGroup===this.$.items;this._getRenderedRows().some(s=>s.index===this._focusedItemIndex)?(this.__updateItemsFocusable(),e&&!this.__rowFocusMode&&(this._focusedCell=this._itemsFocusable),this._navigatingIsHidden&&(this.toggleAttribute("navigating",!0),this._navigatingIsHidden=!1)):e&&(this._focusedCell=null,this.hasAttribute("navigating")&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)))}))}_getColumns(e,t){let s=this._columnTree.length-1;return e===this.$.header?s=t:e===this.$.footer&&(s=this._columnTree.length-1-t),this._columnTree[s]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const t=[...this.$[e].children].find(r=>r.offsetHeight),s=t?[...t.children].find(r=>!r.hidden):null;t&&s&&(this[`_${e}Focusable`]=this.__getFocusable(t,s))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),t=e?[...e.children].find(s=>!s.hidden):null;t&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,t))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||ue(e))return;const t=e.getBoundingClientRect(),s=e.parentNode,r=Array.from(s.children).indexOf(e),n=this.$.table.getBoundingClientRect();let a=n.left,l=n.right;for(let h=r-1;h>=0;h--){const u=s.children[h];if(!(u.hasAttribute("hidden")||ue(u))&&(u.hasAttribute("frozen")||u.hasAttribute("frozen-to-end"))){a=u.getBoundingClientRect().right;break}}for(let h=r+1;h<s.children.length;h++){const u=s.children[h];if(!(u.hasAttribute("hidden")||ue(u))&&(u.hasAttribute("frozen")||u.hasAttribute("frozen-to-end"))){l=u.getBoundingClientRect().left;break}}t.left<a&&(this.$.table.scrollLeft+=Math.round(t.left-a)),t.right>l&&(this.$.table.scrollLeft+=Math.round(t.right-l))}_getGridEventLocation(e){const t=e.__composedPath||e.composedPath(),s=t.indexOf(this.$.table),r=s>=1?t[s-1]:null,n=s>=2?t[s-2]:null,a=s>=3?t[s-3]:null;return{section:r,row:n,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ba=o=>class extends o{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:t})=>{this._updateDetailsCellHeight(t.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&H(this.$.items,t=>{if(!t.querySelector("[part~=details-cell]")){this._updateRow(t,this._columnTree[this._columnTree.length-1]);const s=this._isDetailsOpened(t._item);this._toggleDetailsCell(t,s)}})}_detailsOpenedItemsChanged(e,t){H(this.$.items,s=>{if(s.hasAttribute("details-opened")){this._updateItem(s,s._item);return}t&&this._isDetailsOpened(s._item)&&this._updateItem(s,s._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,t){const s=e.querySelector('[part~="details-cell"]');s&&(s.hidden=!t,!s.hidden&&this.rowDetailsRenderer&&(s._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const t=e.querySelector('[part~="details-cell"]');t&&(this.__updateDetailsRowPadding(e,t),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,t)))}__updateDetailsRowPadding(e,t){t.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${t.offsetHeight}px`)}_updateDetailsCellHeights(){H(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(t=>!this._itemsEqual(t,e)))}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gi={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},ya=o=>class extends Ii(o){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]}}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const t=e.composedPath(),s=t[t.indexOf(this.$.items)-1];s&&(this._isMousedown||this.__scrollIntoViewport(s.index),this.$.table.contains(e.relatedTarget)||this.$.table.dispatchEvent(new CustomEvent("virtualizer-element-focused",{detail:{element:s}})))}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!le(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const t=[...this.$.items.children].find(s=>s.index===e);if(t){const s=t.getBoundingClientRect(),r=this.$.footer.getBoundingClientRect().top,n=this.$.header.getBoundingClientRect().bottom;s.bottom>r?this.$.table.scrollTop+=s.bottom-r:s.top<n&&(this.$.table.scrollTop-=n-s.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=O.debounce(this._debounceScrolling,K.after(Gi.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=O.debounce(this._debounceColumnContentVisibility,K.after(Gi.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!le(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const e=this._getColumnsInOrder();let t=!1;if(e.forEach(s=>{const r=this._lazyColumns&&!this.__isColumnInViewport(s);s._bodyContentHidden!==r&&(t=!0,s._cells.forEach(n=>{if(n!==s._sizerCell){if(r)n.remove();else if(n.__parentRow){const a=[...n.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(s));n.__parentRow.insertBefore(n,a)}}})),s._bodyContentHidden=r}),t&&this._frozenCellsChanged(),this._lazyColumns){const s=[...e].reverse().find(a=>a.frozen),r=this.__getColumnEnd(s),n=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(n)-r,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,t){t==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",t),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=O.debounce(this._debounceOverflow,X,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top");const s=Zt(t,this.getAttribute("dir"));s>0&&(e+=" start"),s<t.scrollWidth-t.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,n=>n==="start"?"end":"start")),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left");const r=e.trim();r.length>0&&this.getAttribute("overflow")!==r?this.setAttribute("overflow",r):r.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=O.debounce(this._debouncerCacheElements,j,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=O.debounce(this.__debounceUpdateFrozenColumn,j,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((r,n)=>r._order-n._order);let t,s;for(let r=0;r<e.length;r++){const n=e[r];n._lastFrozen=!1,n._firstFrozenToEnd=!1,s===void 0&&n.frozenToEnd&&!n.hidden&&(s=r),n.frozen&&!n.hidden&&(t=r)}t!==void 0&&(e[t]._lastFrozen=!0),s!==void 0&&(e[s]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,t=this.$.table.clientWidth,s=Math.max(0,this.$.table.scrollLeft),r=Zt(this.$.table,this.getAttribute("dir")),n=`translate(${-s}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;const a=this.__isRTL?r+t-e:s,l=`translate(${a}px, 0)`;this._frozenCells.forEach(f=>{f.style.transform=l});const h=this.__isRTL?r:s+t-e,u=`translate(${h}px, 0)`;let p=u;if(this._lazyColumns&&this._areSizerCellsAssigned()){const f=this._getColumnsInOrder(),b=[...f].reverse().find(F=>!F.frozenToEnd&&!F._bodyContentHidden),y=this.__getColumnEnd(b),T=f.find(F=>F.frozenToEnd),S=this.__getColumnStart(T);p=`translate(${h+(S-y)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(f=>{this.$.items.contains(f)?f.style.transform=p:f.style.transform=u}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(e=>e._sizerCell)}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ca=o=>class extends o{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},isItemSelectable:{type:Function,notify:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems, isItemSelectable)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}__isItemSelectable(e){return!this.isItemSelectable||!e?!0:this.isItemSelectable(e)}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(t=>!this._itemsEqual(t,e)))}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,t){const s=t||[],r=new Set;return s.forEach(n=>{r.add(this.getItemId(n))}),r}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let ji="prepend";const xa=o=>class extends o{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>ji},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){ji=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const t=e.target;e.stopPropagation(),t._grid=this,this.__updateSorter(t,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(t=>!e.includes(t)),this.__applySorters())}__updateSortOrders(){this._sorters.forEach(t=>{t._order=null});const e=this._getActiveSorters();e.length>1&&e.forEach((t,s)=>{t._order=s})}__updateSorter(e,t,s){if(!e.direction&&!this._sorters.includes(e))return;e._order=null;const r=this._sorters.filter(n=>n!==e);this.multiSort&&(!this.multiSortOnShiftClick||!s)||this.multiSortOnShiftClick&&t?this.multiSortPriority==="append"?this._sorters=[...r,e]:this._sorters=[e,...r]:(e.direction||this.multiSortOnShiftClick)&&(this._sorters=e.direction?[e]:[],r.forEach(n=>{n._order=null,n.direction=null}))}__applySorters(){this.__updateSortOrders(),this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_getActiveSorters(){return this._sorters.filter(e=>e.direction&&e.isConnected)}_mapSorters(){return this._getActiveSorters().map(e=>({path:e.path,direction:e.direction}))}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const wa=o=>class extends o{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){H(this.$.items,e=>{e.hidden||this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){H(this.$.items,e=>{e.hidden||this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,t){ke(e,s=>{if(s.__generatedClasses&&s.__generatedClasses.forEach(r=>s.classList.remove(r)),this.cellClassNameGenerator&&!e.hasAttribute("loading")){const r=this.cellClassNameGenerator(s._column,t);s.__generatedClasses=r&&r.split(" ").filter(n=>n.length>0),s.__generatedClasses&&s.__generatedClasses.forEach(n=>s.classList.add(n))}})}_generateCellPartNames(e,t){ke(e,s=>{if(s.__generatedParts&&s.__generatedParts.forEach(r=>{de(s,null,r)}),this.cellPartNameGenerator&&!e.hasAttribute("loading")){const r=this.cellPartNameGenerator(s._column,t);s.__generatedParts=r&&r.split(" ").filter(n=>n.length>0),s.__generatedParts&&s.__generatedParts.forEach(n=>{de(s,!0,n)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Aa=o=>class extends da(ua(fa(ra(ya(Ca(xa(ba(va(sa(ga(ha(ca(ma(pa(wa(hi(o))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:si},_ios:{type:Boolean,value:Se},_firefox:{type:Boolean,value:cr},_android:{type:Boolean,value:Gt},_touchDevice:{type:Boolean,value:me},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0},__hasEmptyStateContent:{type:Boolean,value:!1},__emptyState:{type:Boolean,computed:"__computeEmptyState(_flatSize, __hasEmptyStateContent)"}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const i=this.__getFirstVisibleItem();return i?i.index:void 0}get _lastVisibleIndex(){const i=this.__getLastVisibleItem();return i?i.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(i=>this._isInViewport(i))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(i=>this._isInViewport(i))}_isInViewport(i){const e=this.$.table.getBoundingClientRect(),t=i.getBoundingClientRect(),s=this.$.header.getBoundingClientRect().height,r=this.$.footer.getBoundingClientRect().height;return t.bottom>e.top+s&&t.top<e.bottom-r}_getRenderedRows(){return Array.from(this.$.items.children).filter(i=>!i.hidden).sort((i,e)=>i.index-e.index)}_getRowContainingNode(i){const e=ai("vaadin-grid-cell-content",i);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(i,e){const t=this.__getRowModel(e);return this.getItemId(i)===this.getItemId(t.item)}ready(){super.ready(),this.__virtualizer=new Eo({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table);const i=new ResizeObserver(()=>setTimeout(()=>{this.__updateMinHeight()}));i.observe(this.$.header),i.observe(this.$.items),i.observe(this.$.footer),ce(this),this._tooltipController=new be(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0),this.__emptyStateContentObserver=new di(this.$.emptystateslot,({currentNodes:e})=>{this.$.emptystatecell._content=e[0],this.__hasEmptyStateContent=!!this.$.emptystatecell._content})}__getBodyCellCoordinates(i){if(this.$.items.contains(i)&&i.localName==="td")return{item:i.parentElement._item,column:i._column}}__focusBodyCell({item:i,column:e}){const t=this._getRenderedRows().find(r=>r._item===i),s=t&&[...t.children].find(r=>r._column===e);s&&s.focus()}_focusFirstVisibleRow(){const i=this.__getFirstVisibleItem();this.__rowFocusMode=!0,i.focus()}_flatSizeChanged(i,e,t,s){if(e&&t&&s){const r=this.shadowRoot.activeElement,n=this.__getBodyCellCoordinates(r),a=e.size||0;e.size=i,e.update(a-1,a-1),i<a&&e.update(i-1,i-1),n&&r.parentElement.hidden&&this.__focusBodyCell(n),this._resetKeyboardNavigation()}}__getIntrinsicWidth(i){return this.__intrinsicWidthCache.has(i)||this.__calculateAndCacheIntrinsicWidths([i]),this.__intrinsicWidthCache.get(i)}__getDistributedWidth(i,e){if(i==null||i===this)return 0;const t=Math.max(this.__getIntrinsicWidth(i),this.__getDistributedWidth((i.assignedSlot||i).parentElement,i));if(!e)return t;const s=i,r=t,n=s._visibleChildColumns.map(u=>this.__getIntrinsicWidth(u)).reduce((u,p)=>u+p,0),a=Math.max(0,r-n),h=this.__getIntrinsicWidth(e)/n*a;return this.__getIntrinsicWidth(e)+h}_recalculateColumnWidths(i){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(s=>{s.__debounceUpdateHeaderFooterRowVisibility&&s.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__debounceUpdateFrozenColumn&&this.__debounceUpdateFrozenColumn.flush(),this.__intrinsicWidthCache=new Map;const e=this._firstVisibleIndex,t=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(s=>s.index>=e&&s.index<=t),this.__calculateAndCacheIntrinsicWidths(i),i.forEach(s=>{s.width=`${this.__getDistributedWidth(s)}px`})}__setVisibleCellContentAutoWidth(i,e){i._allCells.filter(t=>this.$.items.contains(t)?this.__viewportRowsCache.includes(t.parentElement):!0).forEach(t=>{t.__measuringAutoWidth=e,t.__measuringAutoWidth?(t.__originalWidth=t.style.width,t.style.width="auto",t.style.position="absolute"):(t.style.width=t.__originalWidth,delete t.__originalWidth,t.style.position="")}),e?this.$.scroller.setAttribute("measuring-auto-width",""):this.$.scroller.removeAttribute("measuring-auto-width")}__getAutoWidthCellsMaxWidth(i){return i._allCells.reduce((e,t)=>t.__measuringAutoWidth?Math.max(e,t.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(i){i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),i.forEach(e=>{const t=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,t)}),i.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(le(this)||this._dataProviderController.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const i=this._getColumns().filter(t=>!t.hidden&&t.autoWidth),e=i.filter(t=>!customElements.get(t.localName));e.length?Promise.all(e.map(t=>customElements.whenDefined(t.localName))).then(()=>{this._recalculateColumnWidths(i)}):this._recalculateColumnWidths(i)}__tryToRecalculateColumnWidthsIfPending(){if(!this.__pendingRecalculateColumnWidths||le(this)||this._dataProviderController.isLoading()||[...this.$.items.children].some(t=>t.index===void 0))return;[...this.$.items.children].some(t=>t.clientHeight>0)&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(i){const e=[];for(let t=0;t<i;t++){const s=document.createElement("tr");s.setAttribute("part","row body-row"),s.setAttribute("role","row"),s.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(s,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(s)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(t=>{t.isConnected&&t._cells&&(t._cells=[...t._cells])}),this.__afterCreateScrollerRowsDebouncer=O.debounce(this.__afterCreateScrollerRowsDebouncer,X,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(i,e){const s=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,r=document.createElement("vaadin-grid-cell-content");r.setAttribute("slot",s);const n=document.createElement(i);n.id=s.replace("-content-","-"),n.setAttribute("role",i==="td"?"gridcell":"columnheader"),!Gt&&!Se&&(n.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const a=document.createElement("slot");if(a.setAttribute("name",s),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),n.appendChild(l),n._focusButton=l,n.focus=function(h){n._focusButton.focus(h)},l.appendChild(a)}else n.setAttribute("tabindex","-1"),n.appendChild(a);return n._content=r,r.addEventListener("mousedown",()=>{if(go){const l=h=>{const u=r.contains(this.getRootNode().activeElement),p=h.composedPath().includes(r);!u&&p&&n.focus({preventScroll:!0}),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{r.contains(this.getRootNode().activeElement)||n.focus({preventScroll:!0})})}),n}_updateRow(i,e,t="body",s=!1,r=!1){const n=document.createDocumentFragment();ke(i,a=>{a._vacant=!0}),i.innerHTML="",t==="body"&&(i.__cells=[],i.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,h)=>{let u;if(t==="body"){a._cells||(a._cells=[]),u=a._cells.find(f=>f._vacant),u||(u=this._createCell("td",a),a._onCellKeyDown&&u.addEventListener("keydown",a._onCellKeyDown.bind(a)),a._cells.push(u)),u.setAttribute("part","cell body-cell"),u.__parentRow=i,i.__cells.push(u);const p=i===this.$.sizer;if((!a._bodyContentHidden||p)&&i.appendChild(u),p&&(a._sizerCell=u),l===h.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const f=this._detailsCells.find(b=>b._vacant)||this._createCell("td");this._detailsCells.indexOf(f)===-1&&this._detailsCells.push(f),f._content.parentElement||n.appendChild(f._content),this._configureDetailsCell(f),i.appendChild(f),i.__detailsCell=f,this._a11ySetRowDetailsCell(i,f),f._vacant=!1}r||(a._cells=[...a._cells])}else{const p=t==="header"?"th":"td";s||a.localName==="vaadin-grid-column-group"?(u=a[`_${t}Cell`],u||(u=this._createCell(p),a._onCellKeyDown&&u.addEventListener("keydown",a._onCellKeyDown.bind(a))),u._column=a,i.appendChild(u),a[`_${t}Cell`]=u):(a._emptyCells||(a._emptyCells=[]),u=a._emptyCells.find(f=>f._vacant)||this._createCell(p),u._column=a,i.appendChild(u),a._emptyCells.indexOf(u)===-1&&a._emptyCells.push(u)),u.part.add("cell",`${t}-cell`)}u._content.parentElement||n.appendChild(u._content),u._vacant=!1,u._column=a}),t!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(i),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(i)}__debounceUpdateHeaderFooterRowVisibility(i){i.__debounceUpdateHeaderFooterRowVisibility=O.debounce(i.__debounceUpdateHeaderFooterRowVisibility,j,()=>this.__updateHeaderFooterRowVisibility(i))}__updateHeaderFooterRowVisibility(i){if(!i)return;const e=Array.from(i.children).filter(t=>{const s=t._column;if(s._emptyCells&&s._emptyCells.indexOf(t)>-1)return!1;if(i.parentElement===this.$.header){if(s.headerRenderer)return!0;if(s.header===null)return!1;if(s.path||s.header!==void 0)return!0}else if(s.footerRenderer)return!0;return!1});i.hidden!==!e.length&&(i.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(i,e){this._preventScrollerRotatingCellFocus(i,e),this._columnTree&&(this._updateRowOrderParts(i,e),this._a11yUpdateRowRowindex(i,e),this._getItem(e,i))}_columnTreeChanged(i){this._renderColumnTree(i),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(i,e=i.index){we(i,{first:e===0,last:e===this._flatSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(i,{item:e,expanded:t,selected:s,detailsOpened:r}){we(i,{expanded:t,collapsed:this.__isRowExpandable(i),selected:s,nonselectable:this.__isItemSelectable(e)===!1,"details-opened":r})}__computeEmptyState(i,e){return i===0&&e}_renderColumnTree(i){for(H(this.$.items,e=>{this._updateRow(e,i[i.length-1],"body",!1,!0);const t=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,t),this._filterDragAndDrop(e,t)});this.$.header.children.length<i.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),t.setAttribute("tabindex","-1"),this.$.footer.appendChild(t)}for(;this.$.header.children.length>i.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);H(this.$.header,(e,t,s)=>{this._updateRow(e,i[t],"header",t===i.length-1);const r=Te(e);re(r,"first-header-row-cell",t===0),re(r,"last-header-row-cell",t===s.length-1)}),H(this.$.footer,(e,t,s)=>{this._updateRow(e,i[i.length-1-t],"footer",t===0);const r=Te(e);re(r,"first-footer-row-cell",t===0),re(r,"last-footer-row-cell",t===s.length-1)}),this._updateRow(this.$.sizer,i[i.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(i,e){i._item=e;const t=this.__getRowModel(i);this._toggleDetailsCell(i,t.detailsOpened),this._a11yUpdateRowLevel(i,t.level),this._a11yUpdateRowSelected(i,t.selected),this._updateRowStateParts(i,t),this._generateCellClassNames(i,t),this._generateCellPartNames(i,t),this._filterDragAndDrop(i,t),this.__updateDragSourceParts(i,t),H(i,s=>{if(!(s._column&&!s._column.isConnected)&&s._renderer){const r=s._column||this;s._renderer.call(r,s._content,r,t)}}),this._updateDetailsCellHeight(i),this._a11yUpdateRowExpanded(i,t.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(i){i.animationName.indexOf("vaadin-grid-appear")===0&&(i.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),this._resetKeyboardNavigation(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(i){return{index:i.index,item:i._item,level:this._getIndexLevel(i.index),expanded:this._isExpanded(i._item),selected:this._isSelected(i._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(i._item)}}_showTooltip(i){const e=this._tooltipController.node;if(e&&e.isConnected){const t=i.target;if(!this.__isCellFullyVisible(t))return;this._tooltipController.setTarget(t),this._tooltipController.setContext(this.getEventContext(i)),e._stateController.open({focus:i.type==="focusin",hover:i.type==="mouseenter"})}}__isCellFullyVisible(i){if(i.hasAttribute("frozen")||i.hasAttribute("frozen-to-end"))return!0;let{left:e,right:t}=this.getBoundingClientRect();const s=[...i.parentNode.children].find(a=>a.hasAttribute("last-frozen"));if(s){const a=s.getBoundingClientRect();e=this.__isRTL?e:a.right,t=this.__isRTL?a.left:t}const r=[...i.parentNode.children].find(a=>a.hasAttribute("first-frozen-to-end"));if(r){const a=r.getBoundingClientRect();e=this.__isRTL?a.right:e,t=this.__isRTL?t:a.left}const n=i.getBoundingClientRect();return n.left>=e&&n.right<=t}_hideTooltip(i){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(i)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(i=>{i.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(i,e){this.__virtualizer&&this.__virtualizer.update(i,e)}__updateMinHeight(){const e=this.$.header.clientHeight,t=this.$.footer.clientHeight,s=this.$.table.offsetHeight-this.$.table.clientHeight,r=e+36+t+s;!this.__minHeightStyleSheet&&pr&&(this.__minHeightStyleSheet=new CSSStyleSheet,this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,this.__minHeightStyleSheet]),this.__minHeightStyleSheet?this.__minHeightStyleSheet.replaceSync(`:host { --_grid-min-height: ${r}px; }`):this.style.setProperty("--_grid-min-height",`${r}px`)}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ia=g`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    min-height: var(--_grid-min-height, 0);
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    min-height: auto;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] {
    outline: none;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  /* Switch the focusButtonMode wrapping element to "position: static" temporarily
     when measuring real width of the cells in the auto-width columns. */
  [measuring-auto-width] [part~='cell'] > [tabindex] {
    position: static;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Empty state */

  #scroller:not([empty-state]) #emptystatebody,
  #scroller[empty-state] #items {
    display: none;
  }

  #emptystatebody {
    display: flex;
    position: sticky;
    inset: 0;
    flex: 1;
    overflow: hidden;
  }

  #emptystaterow {
    display: flex;
    flex: 1;
  }

  #emptystatecell {
    display: block;
    flex: 1;
    overflow: auto;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-grid",Ia,{moduleId:"vaadin-grid-styles"});class Ue extends Aa(V(k(Q(w)))){static get template(){return I`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
        empty-state$="[[__emptyState]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0" aria-label$="[[accessibleName]]">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tbody id="emptystatebody">
            <tr id="emptystaterow">
              <td part="empty-state" id="emptystatecell" tabindex="0">
                <slot name="empty-state" id="emptystateslot"></slot>
              </td>
            </tr>
          </tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}A(Ue);x("vaadin-grid-sorter",g`
    :host {
      justify-content: flex-start;
      align-items: baseline;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: var(--lumo-clickable-cursor);
    }

    [part='content'] {
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [part='indicators'] {
      margin-left: var(--lumo-space-s);
    }

    [part='indicators']::before {
      transform: scale(0.8);
    }

    :host(:not([direction]):not(:hover)) [part='indicators'] {
      color: var(--lumo-tertiary-text-color);
    }

    :host([direction]) {
      color: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    [part='order'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part='indicators'] {
      margin-right: var(--lumo-space-s);
      margin-left: 0;
    }
  `,{moduleId:"lumo-grid-sorter"});/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const os=document.createElement("template");os.innerHTML=`
  <style>
    @font-face {
      font-family: 'vaadin-grid-sorter-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
`;document.head.appendChild(os.content);x("vaadin-grid-sorter",g`
    :host {
      display: inline-flex;
      cursor: pointer;
      max-width: 100%;
    }

    [part='content'] {
      flex: 1 1 auto;
    }

    [part='indicators'] {
      position: relative;
      align-self: center;
      flex: none;
    }

    [part='order'] {
      display: inline;
      vertical-align: super;
    }

    [part='indicators']::before {
      font-family: 'vaadin-grid-sorter-icons';
      display: inline-block;
    }

    :host(:not([direction])) [part='indicators']::before {
      content: '\\e901';
    }

    :host([direction='asc']) [part='indicators']::before {
      content: '\\e900';
    }

    :host([direction='desc']) [part='indicators']::before {
      content: '\\e902';
    }
  `,{moduleId:"vaadin-grid-sorter-styles"});const Ea=o=>class extends o{static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null,sync:!0},_order:{type:Number,value:null,sync:!0}}}static get observers(){return["_pathOrDirectionChanged(path, direction)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._grid?this._grid.__applySorters():this.__dispatchSorterChangedEvenIfPossible()}disconnectedCallback(){super.disconnectedCallback(),!this.parentNode&&this._grid?this._grid.__removeSorters([this]):this._grid&&this._grid.__applySorters()}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){this.path===void 0||this.direction===void 0||!this.isConnected||(this.dispatchEvent(new CustomEvent("sorter-changed",{detail:{shiftClick:!!this._shiftClick,fromSorterClick:!!this._fromSorterClick},bubbles:!0,composed:!0})),this._fromSorterClick=!1,this._shiftClick=!1)}_getDisplayOrder(e){return e===null?"":e+1}_onClick(e){if(e.defaultPrevented)return;const t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),this._shiftClick=e.shiftKey,this._fromSorterClick=!0,this.direction==="asc"?this.direction="desc":this.direction==="desc"?this.direction=null:this.direction="asc")}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Sa extends Ea(k(M(w))){static get template(){return I`
      <div part="content">
        <slot></slot>
      </div>
      <div part="indicators">
        <span part="order">[[_getDisplayOrder(_order)]]</span>
      </div>
    `}static get is(){return"vaadin-grid-sorter"}}A(Sa);x("vaadin-checkbox",g`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_disabled-checkmark-color: var(--vaadin-checkbox-disabled-checkmark-color, var(--lumo-contrast-30pct));
    }

    [part='label'] {
      display: flex;
      position: relative;
      max-width: max-content;
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([has-label][required]) ::slotted(label) {
      padding-inline-end: var(--lumo-space-m);
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition:
        transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2),
        background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    :host([readonly]:not([checked]):not([indeterminate])) {
      color: var(--lumo-secondary-text-color);
    }

    :host([readonly]:not([checked]):not([indeterminate])) [part='checkbox'] {
      background: transparent;
      box-shadow: none;
    }

    :host([readonly]:not([checked]):not([indeterminate])) [part='checkbox']::after {
      content: '';
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      top: 0;
      left: 0;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-50pct));
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow:
        0 0 0 1px var(--lumo-base-color),
        0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    :host([focus-ring][readonly]:not([checked]):not([indeterminate])) [part='checkbox'] {
      box-shadow:
        0 0 0 1px var(--lumo-base-color),
        0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--vaadin-checkbox-disabled-background, var(--lumo-contrast-10pct));
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--_disabled-checkmark-color);
    }

    :host([disabled]) [part='label'],
    :host([disabled]) [part='helper-text'] {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--_disabled-checkmark-color);
    }

    :host([readonly][checked]:not([disabled])) [part='checkbox'],
    :host([readonly][indeterminate]:not([disabled])) [part='checkbox'] {
      background-color: var(--vaadin-checkbox-readonly-checked-background, var(--lumo-contrast-70pct));
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition:
        transform 0.1s,
        opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):not([readonly]):not([invalid]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      /* prettier-ignore */
      :host(:not([checked]):not([indeterminate]):not([disabled]):not([readonly]):not([invalid]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }

    /* Required */
    :host([required]) [part='required-indicator'] {
      position: absolute;
      top: var(--lumo-space-xs);
      right: var(--lumo-space-xs);
    }

    :host([required][dir='rtl']) [part='required-indicator'] {
      right: auto;
      left: var(--lumo-space-xs);
    }

    :host([required]) [part='required-indicator']::after {
      content: var(--lumo-required-field-indicator, '\\2022');
      transition: opacity 0.2s;
      color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
      width: 1em;
      text-align: center;
    }

    :host(:not([has-label])) [part='required-indicator'] {
      display: none;
    }

    /* Invalid */
    :host([invalid]) {
      --vaadin-input-field-border-color: var(--lumo-error-color);
    }

    :host([invalid]) [part='checkbox'] {
      background: var(--_invalid-background);
      background-image: linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%);
    }

    :host([invalid]:hover) [part='checkbox'] {
      background-image: linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%),
        linear-gradient(var(--_invalid-background) 0%, var(--_invalid-background) 100%);
    }

    :host([invalid][focus-ring]) {
      --_focus-ring-color: var(--lumo-error-color-50pct);
    }

    :host([invalid]) [part='required-indicator']::after {
      color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
    }

    /* Error message */
    [part='error-message'] {
      font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
      line-height: var(--lumo-line-height-xs);
      font-weight: var(--vaadin-input-field-error-font-weight, 400);
      color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
      will-change: max-height;
      transition: 0.4s max-height;
      max-height: 5em;
      padding-inline-start: var(--lumo-space-xs);
    }

    :host([has-error-message]) [part='error-message']::after,
    :host([has-helper]) [part='helper-text']::after {
      content: '';
      display: block;
      height: 0.4em;
    }

    :host(:not([invalid])) [part='error-message'] {
      max-height: 0;
      overflow: hidden;
    }

    /* Helper */
    [part='helper-text'] {
      display: block;
      color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
      font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
      line-height: var(--lumo-line-height-xs);
      font-weight: var(--vaadin-input-field-helper-font-weight, 400);
      margin-left: calc(var(--lumo-border-radius-m) / 4);
      transition: color 0.2s;
      padding-inline-start: var(--lumo-space-xs);
    }

    :host(:hover:not([readonly])) [part='helper-text'] {
      color: var(--lumo-body-text-color);
    }

    :host([has-error-message]) ::slotted(label),
    :host([has-helper]) ::slotted(label) {
      padding-bottom: 0;
    }
  `,{moduleId:"lumo-checkbox"});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ta=$(o=>class extends mi(wt(At(o))){static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,sync:!0}}}static get delegateProps(){return[...super.delegateProps,"checked"]}_onChange(e){const t=e.target;this._toggleChecked(t.checked)}_toggleChecked(e){this.checked=e}});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ka=o=>class extends fi(Ta(ci(wi(o)))){static get properties(){return{indeterminate:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0},name:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},tabindex:{type:Number,value:0,reflectToAttribute:!0}}}static get observers(){return["__readonlyChanged(readonly, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"indeterminate"]}static get delegateAttrs(){return[...super.delegateAttrs,"name","invalid","required"]}constructor(){super(),this._setType("checkbox"),this._boundOnInputClick=this._onInputClick.bind(this),this.value="on"}ready(){super.ready(),this.addController(new It(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Et(this.inputElement,this._labelController)),this._createMethodObserver("_checkedChanged(checked)")}_shouldSetActive(e){return this.readonly||e.target.localName==="a"||e.target===this._helperNode||e.target===this._errorNode?!1:super._shouldSetActive(e)}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("click",this._boundOnInputClick)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("click",this._boundOnInputClick)}_onInputClick(e){this.readonly&&e.preventDefault()}__readonlyChanged(e,t){t&&(e?t.setAttribute("aria-readonly","true"):t.removeAttribute("aria-readonly"))}_toggleChecked(e){this.indeterminate&&(this.indeterminate=!1),super._toggleChecked(e)}checkValidity(){return!this.required||!!this.checked}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this._requestValidation()}_checkedChanged(e){(e||this.__oldChecked)&&this._requestValidation(),this.__oldChecked=e}_requiredChanged(e){super._requiredChanged(e),e===!1&&this._requestValidation()}_onRequiredIndicatorClick(){this._labelNode.click()}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const za=g`
  :host {
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  .vaadin-checkbox-container {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
  }

  [part='checkbox'],
  ::slotted(input),
  [part='label'] {
    grid-row: 1;
  }

  [part='checkbox'],
  ::slotted(input) {
    grid-column: 1;
  }

  [part='helper-text'],
  [part='error-message'] {
    grid-column: 2;
  }

  :host(:not([has-helper])) [part='helper-text'],
  :host(:not([has-error-message])) [part='error-message'] {
    display: none;
  }

  [part='checkbox'] {
    width: var(--vaadin-checkbox-size, 1em);
    height: var(--vaadin-checkbox-size, 1em);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  [part='checkbox']::before {
    display: block;
    content: '\\202F';
    line-height: var(--vaadin-checkbox-size, 1em);
    contain: paint;
  }

  /* visually hidden */
  ::slotted(input) {
    opacity: 0;
    cursor: inherit;
    margin: 0;
    align-self: stretch;
    -webkit-appearance: none;
    width: initial;
    height: initial;
  }

  @media (forced-colors: active) {
    [part='checkbox'] {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([disabled]) [part='checkbox'],
    :host([disabled]) [part='checkbox']::after {
      outline-color: GrayText;
    }

    :host(:is([checked], [indeterminate])) [part='checkbox']::after {
      outline: 1px solid;
      outline-offset: -1px;
      border-radius: inherit;
    }

    :host([focused]) [part='checkbox'],
    :host([focused]) [part='checkbox']::after {
      outline-width: 2px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-checkbox",za,{moduleId:"vaadin-checkbox-styles"});class Oa extends ka(V(k(w))){static get is(){return"vaadin-checkbox"}static get template(){return I`
      <div class="vaadin-checkbox-container">
        <div part="checkbox" aria-hidden="true"></div>
        <slot name="input"></slot>
        <div part="label">
          <slot name="label"></slot>
          <div part="required-indicator" on-click="_onRequiredIndicatorClick"></div>
        </div>
        <div part="helper-text">
          <slot name="helper"></slot>
        </div>
        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new be(this),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}A(Oa);window.Vaadin.Flow.gridConnector={};window.Vaadin.Flow.gridConnector.initLazy=o=>{if(o.$connector)return;const i=o._dataProviderController;i.ensureFlatIndexHierarchyOriginal=i.ensureFlatIndexHierarchy,i.ensureFlatIndexHierarchy=function(d){const{item:c}=this.getFlatIndexContext(d);if(!c||!this.isExpanded(c))return;o.$connector.hasCacheForParentKey(o.getItemId(c))?this.ensureFlatIndexHierarchyOriginal(d):o.$connector.beforeEnsureFlatIndexHierarchy(d,c)},i.isLoadingOriginal=i.isLoading,i.isLoading=function(){return o.$connector.hasEnsureSubCacheQueue()||this.isLoadingOriginal()},i.getItemSubCache=function(d){var c;return(c=this.getItemContext(d))==null?void 0:c.subCache};let e={};const t=50,s=20;let r=[],n,a=[],l;const h=150;let u,p={};const f="null";p[f]=[0,0];let b=null,y=null;const T=["SINGLE","NONE","MULTI"];let S={},z="SINGLE",F=!1;o.size=0,o.itemIdPath="key";function ie(d){return{[o.itemIdPath]:d}}o.$connector={},o.$connector.hasCacheForParentKey=d=>{var c;return((c=e[d])==null?void 0:c.size)!==void 0},o.$connector.hasEnsureSubCacheQueue=()=>a.length>0,o.$connector.hasParentRequestQueue=()=>r.length>0,o.$connector.hasRootRequestQueue=()=>{const{pendingRequests:d}=i.rootCache;return Object.keys(d).length>0||!!(u!=null&&u.isActive())},o.$connector.beforeEnsureFlatIndexHierarchy=function(d,c){a.push({flatIndex:d,itemkey:o.getItemId(c)}),l=J.debounce(l,Cs,()=>{for(;a.length;)o.$connector.flushEnsureSubCache()})},o.$connector.doSelection=function(d,c){if(z==="NONE"||!d.length||c&&o.hasAttribute("disabled"))return;z==="SINGLE"&&(S={});let _=!1;d.forEach(m=>{const v=!c||o.isItemSelectable(m);_=_||v,m&&v&&(S[m.key]=m,m.selected=!0,c&&o.$server.select(m.key));const C=!o.activeItem||!m||m.key!=o.activeItem.key;!c&&z==="SINGLE"&&C&&(o.activeItem=m)}),_&&(o.selectedItems=Object.values(S))},o.$connector.doDeselection=function(d,c){if(z==="NONE"||!d.length||c&&o.hasAttribute("disabled"))return;const _=o.selectedItems.slice();for(;d.length;){const m=d.shift();if(!c||o.isItemSelectable(m)){for(let C=0;C<_.length;C++){const E=_[C];if((m==null?void 0:m.key)===E.key){_.splice(C,1);break}}m&&(delete S[m.key],delete m.selected,c&&o.$server.deselect(m.key))}}o.selectedItems=_},o.__activeItemChanged=function(d,c){z=="SINGLE"&&(d?S[d.key]||o.$connector.doSelection([d],!0):c&&S[c.key]&&(o.__deselectDisallowed?o.activeItem=c:(c=i.getItemContext(c).item,o.$connector.doDeselection([c],!0))))},o._createPropertyObserver("activeItem","__activeItemChanged",!0),o.__activeItemChangedDetails=function(d,c){o.__disallowDetailsOnClick||d==null&&c===void 0||(d&&!d.detailsOpened?o.$server.setDetailsVisible(d.key):o.$server.setDetailsVisible(null))},o._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),o.$connector._getSameLevelPage=function(d,c,_){if((c.parentItem?o.getItemId(c.parentItem):f)===d)return Math.floor(_/o.pageSize);const{parentCache:v,parentCacheIndex:C}=c;return v?this._getSameLevelPage(d,v,C):null},o.$connector.flushEnsureSubCache=function(){const d=a.shift();return d?(i.ensureFlatIndexHierarchyOriginal(d.flatIndex),!0):!1},o.$connector.debounceRootRequest=function(d){const c=o._hasData?h:0;u=J.debounce(u,$t.after(c),()=>{o.$connector.fetchPage((_,m)=>o.$server.setRequestedRange(_,m),d,f)})},o.$connector.flushParentRequests=function(){const d=[];r.splice(0,s).forEach(({parentKey:c,page:_})=>{o.$connector.fetchPage((m,v)=>d.push({parentKey:c,firstIndex:m,size:v}),_,c)}),d.length&&o.$server.setParentRequestedRanges(d)},o.$connector.debounceParentRequest=function(d,c){r=r.filter(_=>_.parentKey!==d),r.push({parentKey:d,page:c}),n=J.debounce(n,$t.after(t),()=>{for(;r.length;)o.$connector.flushParentRequests()})},o.$connector.fetchPage=function(d,c,_){_===f&&(c=Math.min(c,Math.floor((o.size-1)/o.pageSize)));const m=o._getRenderedRows();let v=m.length>0?m[0].index:0,C=m.length>0?m[m.length-1].index:0,E=C-v,P=Math.max(0,v-E),D=Math.min(C+E,o._flatSize),L=[null,null];for(let U=P;U<=D;U++){const{cache:as,index:ls}=i.getFlatIndexContext(U),Me=o.$connector._getSameLevelPage(_,as,ls);Me!==null&&(L[0]=Math.min(L[0]??Me,Me),L[1]=Math.max(L[1]??Me,Me))}(L.some(U=>U===null)||c<L[0]||c>L[1])&&(L=[c,c]);let q=p[_]||[-1,-1];if(q[0]!=L[0]||q[1]!=L[1]){p[_]=L;let U=L[1]-L[0]+1;d(L[0]*o.pageSize,U*o.pageSize)}},o.dataProvider=function(d,c){var m,v;if(d.pageSize!=o.pageSize)throw"Invalid pageSize";let _=d.page;if(d.parentItem){let C=o.getItemId(d.parentItem);const E=i.getItemSubCache(d.parentItem);(m=e[C])!=null&&m[_]&&E?(a=[],c(e[C][_],e[C].size)):o.$connector.debounceParentRequest(C,_)}else{if(o.size===0){c([],0);return}(v=e[f])!=null&&v[_]?c(e[f][_]):o.$connector.debounceRootRequest(_)}},o.$connector.setSorterDirections=function(d){F=!0,setTimeout(()=>{try{const c=Array.from(o.querySelectorAll("vaadin-grid-sorter"));o._sorters.forEach(_=>{c.includes(_)||c.push(_)}),c.forEach(_=>{_.direction=null}),o.multiSortPriority!=="append"&&(d=d.reverse()),d.forEach(({column:_,direction:m})=>{c.forEach(v=>{v.getAttribute("path")===_&&(v.direction=m)})}),o.__applySorters()}finally{F=!1}})},o._updateItem=function(d,c){Ue.prototype._updateItem.call(o,d,c),d.hidden||Array.from(d.children).forEach(_=>{var m,v;Array.from(((v=(m=_==null?void 0:_._content)==null?void 0:m.__templateInstance)==null?void 0:v.children)||[]).forEach(C=>{C._attachRenderedComponentIfAble&&C._attachRenderedComponentIfAble(),Array.from((C==null?void 0:C.children)||[]).forEach(E=>{E._attachRenderedComponentIfAble&&E._attachRenderedComponentIfAble()})})}),z===T[1]&&(d.removeAttribute("aria-selected"),Array.from(d.children).forEach(_=>_.removeAttribute("aria-selected")))};const Y=function(d,c){if(d==null||o.$server.updateExpandedState==null)return;let _=o.getItemId(d);o.$server.updateExpandedState(_,c)};o.expandItem=function(d){Y(d,!0),Ue.prototype.expandItem.call(o,d)},o.collapseItem=function(d){Y(d,!1),Ue.prototype.collapseItem.call(o,d)};const R=function(d){if(!d||!Array.isArray(d))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(d);let c=Array.from(o.detailsOpenedItems);for(let _=0;_<d.length;++_){const m=d[_];m&&(m.detailsOpened?o._getItemIndexInArray(m,c)<0&&c.push(m):o._getItemIndexInArray(m,c)>=0&&c.splice(o._getItemIndexInArray(m,c),1))}o.detailsOpenedItems=c},W=function(d,c=f){const _=e[c][d],m=ie(c);let v=c===f?i.rootCache:i.getItemSubCache(m);return v&&!v.pendingRequests[d]&&v.setPage(d,_||Array.from({length:o.pageSize})),_},Je=function(){kt(),o.__updateVisibleRows()},kt=function(){i.recalculateFlatSize(),o._flatSize=i.flatSize},et=function(d){if(!d||!o.$||o.$.items.childElementCount===0)return;const c=d.map(m=>m.key),_=o._getRenderedRows().filter(m=>m._item&&c.includes(m._item.key)).map(m=>m.index);_.length>0&&o.__updateVisibleRows(_[0],_[_.length-1])};o.$connector.set=function(d,c,_){if(d%o.pageSize!=0)throw"Got new data to index "+d+" which is not aligned with the page size of "+o.pageSize;let m=_||f;const v=d/o.pageSize,C=Math.ceil(c.length/o.pageSize);m===f&&(y=[v,v+C-1]);for(let E=0;E<C;E++){let P=v+E,D=c.slice(E*o.pageSize,(E+1)*o.pageSize);e[m]||(e[m]={}),e[m][P]=D,o.$connector.doSelection(D.filter(q=>q.selected)),o.$connector.doDeselection(D.filter(q=>!q.selected&&S[q.key]));const L=W(P,m);L&&(R(L),et(L))}};const Ei=function(d){let c=d.parentUniqueKey||f;if(e[c]){for(let _ in e[c])for(let m in e[c][_])if(o.getItemId(e[c][_][m])===o.getItemId(d))return{page:_,index:m,parentKey:c}}return null};o.$connector.updateHierarchicalData=function(d){let c=[];for(let m=0;m<d.length;m++){let v=Ei(d[m]);if(v){e[v.parentKey][v.page][v.index]=d[m];let C=v.parentKey+":"+v.page;c[C]||(c[C]={parentKey:v.parentKey,page:v.page})}}let _=Object.keys(c);for(let m=0;m<_.length;m++){let v=c[_[m]];const C=W(v.page,v.parentKey);C&&(R(C),et(C))}},o.$connector.updateFlatData=function(d){for(let c=0;c<d.length;c++){let _=Ei(d[c]);if(_){e[_.parentKey][_.page][_.index]=d[c];const m=parseInt(_.page)*o.pageSize+parseInt(_.index),{rootCache:v}=i;v.items[m]&&(v.items[m]=d[c])}}R(d),et(d)},o.$connector.clearExpanded=function(){o.expandedItems=[],a=[],r=[]};const ns=function(){const d=p[f];if(!d||!b)return;const c=b[1]-b[0]+1,_=Array.from({length:c},(m,v)=>b[0]+v);if(y){const[m,v]=y;for(let C=m;C<=v;C++){const E=_.indexOf(C);E>=0&&_.splice(E,1)}}_.some(m=>m>=d[0]&&m<=d[1])&&(d[0]=-1,d[1]=-1)};o.$connector.clear=function(d,c,_){let m=_||f;if(!e[m]||Object.keys(e[m]).length===0)return;if(d%o.pageSize!=0)throw"Got cleared data for index "+d+" which is not aligned with the page size of "+o.pageSize;let v=Math.floor(d/o.pageSize),C=Math.ceil(c/o.pageSize);m===f&&(b=[v,v+C-1]);for(let D=0;D<C;D++){let L=v+D,q=e[m][L];o.$connector.doDeselection(q.filter(U=>S[U.key])),q.forEach(U=>o.closeItemDetails(U)),delete e[m][L],W(L,_),et(q)}let E=i.rootCache;if(_){const D=ie(m);E=i.getItemSubCache(D)}const P=d+C*o.pageSize;for(let D=d;D<P;D++)delete E.items[D],E.removeSubCache(D);kt()},o.$connector.reset=function(){o.size=0,e={},i.rootCache.items=[],p={},l&&l.cancel(),n&&n.cancel(),u&&u.cancel(),l=void 0,n=void 0,a=[],r=[],Je()},o.$connector.updateSize=d=>o.size=d,o.$connector.updateUniqueItemIdPath=d=>o.itemIdPath=d,o.$connector.expandItems=function(d){let c=Array.from(o.expandedItems);d.filter(_=>!o._isExpanded(_)).forEach(_=>c.push(_)),o.expandedItems=c},o.$connector.collapseItems=function(d){let c=Array.from(o.expandedItems);d.forEach(_=>{let m=o._getItemIndexInArray(_,c);m>=0&&c.splice(m,1)}),o.expandedItems=c,d.forEach(_=>o.$connector.removeFromQueue(_))},o.$connector.removeFromQueue=function(d){const c=i.getItemSubCache(d);Object.values((c==null?void 0:c.pendingRequests)||{}).forEach(m=>m([]));const _=o.getItemId(d);a=a.filter(m=>m.itemkey!==_),r=r.filter(m=>m.parentKey!==_)},o.$connector.confirmParent=function(d,c,_){e[c]||(e[c]={});const m=e[c].size!==_;e[c].size=_,_===0&&(e[c][0]=[]);const v=ie(c),C=i.getItemSubCache(v);if(C){const{pendingRequests:E}=C;Object.entries(E).forEach(([P,D])=>{let L=p[c]||[0,0];if(e[c]&&e[c][P]||P<L[0]||P>L[1]){let q=e[c][P]||new Array(_);D(q,_)}else D&&_===0&&D([],_)}),m&&Object.keys(E).length===0&&(C.size=_,kt())}o.$server.confirmParentUpdate(d,c)},o.$connector.confirm=function(d){const{pendingRequests:c}=i.rootCache;Object.entries(c).forEach(([_,m])=>{var P;const v=p[f]||[0,0],C=o.size?Math.ceil(o.size/o.pageSize)-1:0,E=Math.min(v[1],C);(P=e[f])!=null&&P[_]?m(e[f][_]):_<v[0]||+_>E?(m(new Array(o.pageSize)),o.requestContentUpdate()):m&&o.size===0&&m([])}),ns(),y=null,b=null,o.$server.confirmUpdate(d)},o.$connector.ensureHierarchy=function(){for(let d in e)d!==f&&delete e[d];p={},i.rootCache.removeSubCaches(),Je()},o.$connector.setSelectionMode=function(d){if((typeof d=="string"||d instanceof String)&&T.indexOf(d)>=0)z=d,S={},o.selectedItems=[],o.$connector.updateMultiSelectable();else throw"Attempted to set an invalid selection mode"},o.$connector.updateMultiSelectable=function(){o.$&&(z===T[0]?o.$.table.setAttribute("aria-multiselectable",!1):z===T[1]?o.$.table.removeAttribute("aria-multiselectable"):o.$.table.setAttribute("aria-multiselectable",!0))},o._createPropertyObserver("isAttached",()=>o.$connector.updateMultiSelectable());const Si=d=>c=>{d&&(d(c),d=null)};o.$connector.setHeaderRenderer=function(d,c){const{content:_,showSorter:m,sorterPath:v}=c;if(_===null){d.headerRenderer=null;return}d.headerRenderer=Si(C=>{C.innerHTML="";let E=C;if(m){const P=document.createElement("vaadin-grid-sorter");P.setAttribute("path",v);const D=_ instanceof Node?_.textContent:_;D&&P.setAttribute("aria-label",`Sort by ${D}`),C.appendChild(P),E=P}_ instanceof Node?E.appendChild(_):E.textContent=_})},o._getActiveSorters=function(){return this._sorters.filter(d=>d.direction)},o.__applySorters=()=>{const d=o._mapSorters(),c=JSON.stringify(o._previousSorters)!==JSON.stringify(d);o._previousSorters=d,Ue.prototype.__applySorters.call(o),c&&!F&&o.$server.sortersChanged(d)},o.$connector.setFooterRenderer=function(d,c){const{content:_}=c;if(_===null){d.footerRenderer=null;return}d.footerRenderer=Si(m=>{m.innerHTML="",_ instanceof Node?m.appendChild(_):m.textContent=_})},o.addEventListener("vaadin-context-menu-before-open",function(d){const{key:c,columnId:_}=d.detail;o.$server.updateContextMenuTargetItem(c,_)}),o.getContextMenuBeforeOpenDetail=function(d){var C,E;const c=d.detail.sourceEvent||d,_=o.getEventContext(c),m=((C=_.item)==null?void 0:C.key)||"",v=((E=_.column)==null?void 0:E.id)||"";return{key:m,columnId:v}},o.preventContextMenu=function(d){const c=d.type==="click",{column:_}=o.getEventContext(d);return c&&_ instanceof Qt},o.addEventListener("click",d=>Ti(d,"item-click")),o.addEventListener("dblclick",d=>Ti(d,"item-double-click")),o.addEventListener("column-resize",d=>{o._getColumnsInOrder().filter(_=>!_.hidden).forEach(_=>{_.dispatchEvent(new CustomEvent("column-drag-resize"))}),o.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:d.detail.resizedColumn._flowId}}))}),o.addEventListener("column-reorder",d=>{const c=o._columnTree.slice(0).pop().filter(_=>_._flowId).sort((_,m)=>_._order-m._order).map(_=>_._flowId);o.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:c}}))}),o.addEventListener("cell-focus",d=>{const c=o.getEventContext(d);["header","body","footer"].indexOf(c.section)!==-1&&o.dispatchEvent(new CustomEvent("grid-cell-focus",{detail:{itemKey:c.item?c.item.key:null,internalColumnId:c.column?c.column._flowId:null,section:c.section}}))});function Ti(d,c){if(d.defaultPrevented)return;const _=d.composedPath(),m=_.findIndex(P=>P.localName==="td"||P.localName==="th");if(_.slice(0,m).some(P=>ts(P)||P instanceof HTMLLabelElement))return;const C=o.getEventContext(d),E=C.section;C.item&&E!=="details"&&(d.itemKey=C.item.key,C.column&&(d.internalColumnId=C.column._flowId),o.dispatchEvent(new CustomEvent(c,{detail:d})))}o.cellClassNameGenerator=function(d,c){const _=c.item.style;if(_)return(_.row||"")+" "+(d&&_[d._flowId]||"")},o.cellPartNameGenerator=function(d,c){const _=c.item.part;if(_)return(_.row||"")+" "+(d&&_[d._flowId]||"")},o.dropFilter=d=>d.item&&!d.item.dropDisabled,o.dragFilter=d=>d.item&&!d.item.dragDisabled,o.addEventListener("grid-dragstart",d=>{o._isSelected(d.detail.draggedItems[0])?(o.__selectionDragData?Object.keys(o.__selectionDragData).forEach(c=>{d.detail.setDragData(c,o.__selectionDragData[c])}):(o.__dragDataTypes||[]).forEach(c=>{d.detail.setDragData(c,d.detail.draggedItems.map(_=>_.dragData[c]).join(`
`))}),o.__selectionDraggedItemsCount>1&&d.detail.setDraggedItemsCount(o.__selectionDraggedItemsCount)):(o.__dragDataTypes||[]).forEach(c=>{d.detail.setDragData(c,d.detail.draggedItems[0].dragData[c])})}),o.isItemSelectable=d=>(d==null?void 0:d.selectable)===void 0||d.selectable};const Pa=g`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition:
      opacity 1.4s,
      transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow:
      0 0 0 calc(1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-gap-color, var(--lumo-base-color)),
      0 0 0 calc(var(--_focus-ring-width) + 1px * var(--_focus-ring-gap-on, 0)) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    --_focus-ring-gap-on: 1;
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, warning, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='warning']) {
    color: var(--lumo-warning-text-color);
  }

  :host([theme~='warning'][theme~='primary']) {
    background-color: var(--lumo-warning-color);
    color: var(--lumo-warning-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;x("vaadin-button",Pa,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const La=g`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,Ra=o=>o`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ss=o=>class extends wi(hi(xt(o))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),!(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)&&this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-button",La,{moduleId:"vaadin-button-styles"});class Da extends ss(V(k(Q(w)))){static get is(){return"vaadin-button"}static get template(){return Ra(I)}ready(){super.ready(),this._tooltipController=new be(this),this.addController(this._tooltipController)}}A(Da);x("vaadin-input-container",g`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: var(--vaadin-input-field-value-font-weight, 500);
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      --_input-height: var(--lumo-text-field-size, var(--lumo-size-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
      --_disabled-background: var(--vaadin-input-field-disabled-background, var(--lumo-contrast-5pct));
      --_disabled-value-color: var(--vaadin-input-field-disabled-value-color, var(--lumo-disabled-text-color));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition:
        transform 0.15s,
        opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--vaadin-input-field-height, var(--_input-height));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background: var(--_disabled-background);
    }

    :host([disabled]) ::slotted(:not([slot$='fix'])) {
      -webkit-text-fill-color: var(--_disabled-value-color);
      color: var(--_disabled-value-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid]:not([readonly]))::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-text-field",Ke,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fa=o=>class extends o{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(t=>t.focus&&t.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Na=g`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-input-container",Na,{moduleId:"vaadin-input-container-styles"});class Ma extends Fa(k(M(w))){static get is(){return"vaadin-input-container"}static get template(){return I`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}A(Ma);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ba=o=>class extends gi(o){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this._requestValidation()}_onInput(e){super._onInput(e),this.invalid&&this._requestValidation()}_valueChanged(e,t){super._valueChanged(e,t),t!==void 0&&this.invalid&&this._requestValidation()}};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $a=o=>class extends Ba(o){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new It(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new Et(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-text-field",vi,{moduleId:"vaadin-text-field-styles"});class Va extends $a(k(V(w))){static get is(){return"vaadin-text-field"}static get template(){return I`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new be(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}A(Va);x("vaadin-form-layout",g`
    :host {
      --vaadin-form-layout-column-spacing: var(--lumo-space-l);
    }
  `,{moduleId:"lumo-form-layout"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ha extends Ii(V(k(w))){static get template(){return I`
      <style>
        :host {
          display: block;
          max-width: 100%;
          animation: 1ms vaadin-form-layout-appear;
          /* CSS API for host */
          --vaadin-form-item-label-width: 8em;
          --vaadin-form-item-label-spacing: 1em;
          --vaadin-form-item-row-spacing: 1em;
          --vaadin-form-layout-column-spacing: 2em; /* (default) */
          align-self: stretch;
        }

        @keyframes vaadin-form-layout-appear {
          to {
            opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
          }
        }

        :host([hidden]) {
          display: none !important;
        }

        #layout {
          display: flex;

          align-items: baseline; /* default \`stretch\` is not appropriate */

          flex-wrap: wrap; /* the items should wrap */
        }

        #layout ::slotted(*) {
          /* Items should neither grow nor shrink. */
          flex-grow: 0;
          flex-shrink: 0;

          /* Margins make spacing between the columns */
          margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
          margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        }

        #layout ::slotted(br) {
          display: none;
        }
      </style>
      <div id="layout">
        <slot id="slot"></slot>
      </div>
    `}static get is(){return"vaadin-form-layout"}static get properties(){return{responsiveSteps:{type:Array,value(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateLayout(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.appendChild(this._styleElement),this._styleElement.textContent=" ",super.ready(),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>this._selectResponsiveStep()),requestAnimationFrame(()=>this._updateLayout()),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){const i={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(t=>{t.type==="attributes"&&(t.attributeName==="colspan"||t.attributeName==="data-colspan"||t.attributeName==="hidden")&&this._updateLayout()})}),[...this.children].forEach(e=>{this.__mutationObserver.observe(e,i)}),this.__childObserver=new MutationObserver(e=>{const t=[],s=[];e.forEach(r=>{t.push(...this._getObservableNodes(r.addedNodes)),s.push(...this._getObservableNodes(r.removedNodes))}),t.forEach(r=>{this.__mutationObserver.observe(r,i)}),(t.length>0||s.length>0)&&this._updateLayout()}),this.__childObserver.observe(this,{childList:!0})}_getObservableNodes(i){const e=["template","style","dom-repeat","dom-if"];return Array.from(i).filter(t=>t.nodeType===Node.ELEMENT_NODE&&e.indexOf(t.localName.toLowerCase())===-1)}_naturalNumberOrOne(i){return typeof i=="number"&&i>=1&&i<1/0?Math.floor(i):1}_isValidCSSLength(i){return i==="inherit"||i==="normal"?!1:(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${i}; }`,this._styleElement.sheet?["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0:!0)}_responsiveStepsChanged(i,e){try{if(!Array.isArray(i))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(i.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');i.forEach(t=>{if(this._naturalNumberOrOne(t.columns)!==t.columns)throw new Error(`Invalid 'columns' value of ${t.columns}, a natural number is required.`);if(t.minWidth!==void 0&&!this._isValidCSSLength(t.minWidth))throw new Error(`Invalid 'minWidth' value of ${t.minWidth}, a valid CSS length required.`);if(t.labelsPosition!==void 0&&["aside","top"].indexOf(t.labelsPosition)===-1)throw new Error(`Invalid 'labelsPosition' value of ${t.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(t){e&&e!==i?(console.warn(`${t.message} Using previously set 'responsiveSteps' instead.`),this.responsiveSteps=e):(console.warn(`${t.message} Using default 'responsiveSteps' instead.`),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(i){i.animationName.indexOf("vaadin-form-layout-appear")===0&&this._selectResponsiveStep()}_selectResponsiveStep(){let i;const e="background-position";this.responsiveSteps.forEach(t=>{this.$.layout.style.setProperty(e,t.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue(e))<=this.offsetWidth&&(i=t)}),this.$.layout.style.removeProperty(e),i&&(this._columnCount=i.columns,this._labelsOnTop=i.labelsPosition==="top")}_invokeUpdateLayout(){this._updateLayout()}_updateLayout(){if(le(this))return;const i=getComputedStyle(this),e=i.getPropertyValue("--vaadin-form-layout-column-spacing"),t=i.direction,s=`margin-${t==="ltr"?"left":"right"}`,r=`margin-${t==="ltr"?"right":"left"}`,n=this.offsetWidth;let a=0;Array.from(this.children).filter(l=>l.localName==="br"||getComputedStyle(l).display!=="none").forEach((l,h,u)=>{if(l.localName==="br"){a=0;return}const p=l.getAttribute("colspan")||l.getAttribute("data-colspan");let f;f=this._naturalNumberOrOne(parseFloat(p)),f=Math.min(f,this._columnCount);const b=f/this._columnCount;l.style.width=`calc(${b*99.9}% - ${1-b} * ${e})`,a+f>this._columnCount&&(a=0),a===0?l.style.setProperty(s,"0px"):l.style.removeProperty(s);const y=h+1,T=y<u.length&&u[y].localName==="br";if(a+f===this._columnCount)l.style.setProperty(r,"0px");else if(T){const S=(this._columnCount-a-f)/this._columnCount;l.style.setProperty(r,`calc(${S*n}px + ${S} * ${e})`)}else l.style.removeProperty(r);a=(a+f)%this._columnCount,l.localName==="vaadin-form-item"&&(this._labelsOnTop?l.getAttribute("label-position")!=="top"&&(l.__useLayoutLabelPosition=!0,l.setAttribute("label-position","top")):l.__useLayoutLabelPosition&&(delete l.__useLayoutLabelPosition,l.removeAttribute("label-position")))})}_onResize(i){if(i.width===0&&i.height===0){this.$.layout.style.opacity="0";return}this._selectResponsiveStep(),this._updateLayout(),this.$.layout.style.opacity=""}}A(Ha);const qa=g`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow:
      0 0 0 1px var(--lumo-shade-5pct),
      var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0 !important;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;x("vaadin-dialog-overlay",[Oe,qa],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wa=o=>class extends Pe(o){static get properties(){return{headerTitle:{type:String},headerRenderer:{type:Object},footerRenderer:{type:Object}}}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(e){const t=document.createElement("div");return t.setAttribute("slot",e),t}__clearContainer(e){e.innerHTML="",delete e._$litPart$}__initContainer(e,t){return e?this.__clearContainer(e):e=this.__createContainer(t),e}_headerFooterRendererChange(e,t,s){const r=this.__oldHeaderRenderer!==e;this.__oldHeaderRenderer=e;const n=this.__oldFooterRenderer!==t;this.__oldFooterRenderer=t;const a=this._oldOpenedFooterHeader!==s;this._oldOpenedFooterHeader=s,this.toggleAttribute("has-header",!!e),this.toggleAttribute("has-footer",!!t),r&&(e?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),n&&(t?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(e&&(r||a)||t&&(n||a))&&s&&this.requestContentUpdate()}_headerTitleChanged(e,t){this.toggleAttribute("has-title",!!e),t&&(e||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=e}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(e){const t=this.$.overlay,s={...e};t.style.position!=="absolute"&&(t.style.position="absolute",this.setAttribute("has-bounds-set","")),Object.keys(s).forEach(r=>{isNaN(s[r])||(s[r]=`${s[r]}px`)}),Object.assign(t.style,s)}getBounds(){const e=this.$.overlay.getBoundingClientRect(),t=this.getBoundingClientRect(),s=e.top-t.top,r=e.left-t.left,n=e.width,a=e.height;return{top:s,left:r,width:n,height:a}}__updateOverflow(){let e="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const s=this.$.content;s.scrollTop>0&&(e+=" top"),s.scrollTop<s.scrollHeight-s.clientHeight&&(e+=" bottom")}const t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):t.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ua=g`
  [part='header'],
  [part='header-content'],
  [part='footer'] {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: none;
    pointer-events: none;
    z-index: 1;
  }

  [part='header'] {
    flex-wrap: nowrap;
  }

  ::slotted([slot='header-content']),
  ::slotted([slot='title']),
  ::slotted([slot='footer']) {
    display: contents;
    pointer-events: auto;
  }

  ::slotted([slot='title']) {
    font: inherit !important;
    overflow-wrap: anywhere;
  }

  [part='header-content'] {
    flex: 1;
  }

  :host([has-title]) [part='header-content'],
  [part='footer'] {
    justify-content: flex-end;
  }

  :host(:not([has-title]):not([has-header])) [part='header'],
  :host(:not([has-header])) [part='header-content'],
  :host(:not([has-title])) [part='title'],
  :host(:not([has-footer])) [part='footer'] {
    display: none !important;
  }

  :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
    height: auto;
  }

  @media (min-height: 320px) {
    :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      flex: 1;
      overflow: auto;
    }
  }

  /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
  [part='content'] {
    min-width: 12em; /* matches the default <vaadin-text-field> width */
  }

  :host([has-bounds-set]) [part='overlay'] {
    max-width: none;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`,Ga=g`
  [part='overlay'] {
    position: relative;
    overflow: visible;
    max-height: 100%;
    display: flex;
  }

  [part='content'] {
    box-sizing: border-box;
    height: 100%;
  }

  .resizer-container {
    overflow: auto;
    flex-grow: 1;
    border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
  }

  [part='overlay'][style] .resizer-container {
    min-height: 100%;
    width: 100%;
  }

  :host(:not([resizable])) .resizer {
    display: none;
  }

  :host([resizable]) [part='title'] {
    cursor: move;
    -webkit-user-select: none;
    user-select: none;
  }

  .resizer {
    position: absolute;
    height: 16px;
    width: 16px;
  }

  .resizer.edge {
    height: 8px;
    width: 8px;
    inset: -4px;
  }

  .resizer.edge.n {
    width: auto;
    bottom: auto;
    cursor: ns-resize;
  }

  .resizer.ne {
    top: -4px;
    right: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.e {
    height: auto;
    left: auto;
    cursor: ew-resize;
  }

  .resizer.se {
    bottom: -4px;
    right: -4px;
    cursor: nwse-resize;
  }

  .resizer.edge.s {
    width: auto;
    top: auto;
    cursor: ns-resize;
  }

  .resizer.sw {
    bottom: -4px;
    left: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.w {
    height: auto;
    right: auto;
    cursor: ew-resize;
  }

  .resizer.nw {
    top: -4px;
    left: -4px;
    cursor: nwse-resize;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-dialog-overlay",[Le,Ua,Ga],{moduleId:"vaadin-dialog-overlay-styles"});class ja extends Wa(M(k(w))){static get is(){return"vaadin-dialog-overlay"}static get template(){return I`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <section id="resizerContainer" class="resizer-container">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="header-content"><slot name="header-content"></slot></div>
          </header>
          <div part="content" id="content"><slot></slot></div>
          <footer part="footer"><slot name="footer"></slot></footer>
        </section>
      </div>
    `}}A(ja);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ya=o=>class extends o{static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},modeless:{type:Boolean,value:!1},top:{type:String},left:{type:String},width:{type:String},height:{type:String},overlayRole:{type:String,value:"dialog"}}}static get observers(){return["__positionChanged(top, left)","__sizeChanged(width, height)"]}ready(){super.ready();const e=this.$.overlay;e.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),e.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),e.addEventListener("vaadin-overlay-closed",this.__handleOverlayClosed.bind(this)),this._overlayElement=e}__handleOverlayClosed(){this.dispatchEvent(new CustomEvent("closed"))}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),setTimeout(()=>{this.isConnected||(this.__restoreOpened=this.opened,this.opened=!1)})}_onOverlayOpened(e){e.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}_bringOverlayToFront(){this.modeless&&this._overlayElement.bringToFront()}__positionChanged(e,t){requestAnimationFrame(()=>this.$.overlay.setBounds({top:e,left:t}))}__sizeChanged(e,t){requestAnimationFrame(()=>this.$.overlay.setBounds({width:e,height:t}))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function pt(o){return o.touches?o.touches[0]:o}function rs(o){return o.clientX>=0&&o.clientX<=window.innerWidth&&o.clientY>=0&&o.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ka=o=>class extends o{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:me},__dragHandleClassName:{type:String}}}async ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),await new Promise(requestAnimationFrame),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!(e.type==="touchstart"&&e.touches.length>1)&&this.draggable&&(e.button===0||e.touches)){const t=this.$.overlay.$.resizerContainer,s=e.target===t,r=e.offsetX>t.clientWidth||e.offsetY>t.clientHeight,n=e.target===this.$.overlay.$.content,a=e.composedPath().some((l,h)=>{if(!l.classList)return!1;const u=l.classList.contains(this.__dragHandleClassName||"draggable"),p=l.classList.contains("draggable-leaf-only"),f=h===0;return p&&f||u&&(!p||f)});if(s&&!r||n||a){a||e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const l=pt(e);if(this._originalMouseCoords={top:l.pageY,left:l.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"){const{top:h,left:u}=this._originalBounds;this.$.overlay.setBounds({top:h,left:u})}}}}_drag(e){const t=pt(e);if(rs(t)){const s=this._originalBounds.top+(t.pageY-this._originalMouseCoords.top),r=this._originalBounds.left+(t.pageX-this._originalMouseCoords.left);this.top=s,this.left=r}}_stopDrag(){this.dispatchEvent(new CustomEvent("dragged",{bubbles:!0,composed:!0,detail:{top:this.top,left:this.left}})),window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xa=o=>class extends o{static get properties(){return{renderer:{type:Object},headerTitle:String,headerRenderer:{type:Object},footerRenderer:{type:Object}}}requestContentUpdate(){this._overlayElement&&this._overlayElement.requestContentUpdate()}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qa=o=>class extends o{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}async ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},await new Promise(requestAnimationFrame),this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const t=document.createElement("div");this._resizeListeners.start[e]=s=>this._startResize(s,e),this._resizeListeners.resize[e]=s=>this._resize(s,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),e.length===1&&t.classList.add("edge"),t.classList.add("resizer"),t.classList.add(e),t.addEventListener("mousedown",this._resizeListeners.start[e]),t.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(t)})}_startResize(e,t){if(!(e.type==="touchstart"&&e.touches.length>1)&&(e.button===0||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const s=pt(e);this._originalMouseCoords={top:s.pageY,left:s.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[t]),window.addEventListener("touchmove",this._resizeListeners.resize[t]),window.addEventListener("mouseup",this._resizeListeners.stop[t]),window.addEventListener("touchend",this._resizeListeners.stop[t]),(this.$.overlay.$.overlay.style.position!=="absolute"||this.width||this.height)&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,t){const s=pt(e);rs(s)&&t.split("").forEach(n=>{switch(n){case"n":{const a=this._originalBounds.height-(s.pageY-this._originalMouseCoords.top),l=this._originalBounds.top+(s.pageY-this._originalMouseCoords.top);a>40&&(this.top=l,this.height=a);break}case"e":{const a=this._originalBounds.width+(s.pageX-this._originalMouseCoords.left);a>40&&(this.width=a);break}case"s":{const a=this._originalBounds.height+(s.pageY-this._originalMouseCoords.top);a>40&&(this.height=a);break}case"w":{const a=this._originalBounds.width-(s.pageX-this._originalMouseCoords.left),l=this._originalBounds.left+(s.pageX-this._originalMouseCoords.left);a>40&&(this.left=l,this.width=a);break}}})}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:t,height:s,top:r,left:n}=getComputedStyle(this.$.overlay.$.overlay),a=this.$.overlay.$.content;a.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:l,height:h}=getComputedStyle(a);return a.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:t,height:s,contentWidth:l,contentHeight:h,top:r,left:n}}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Za extends Ka(Qa(Xa(Ya(Ne(mt(V(w))))))){static get template(){return I`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        role$="[[overlayRole]]"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        restore-focus-on-close
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{ariaLabel:{type:String,value:""}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready(),ce(this)}_rendererChanged(i,e,t){this.$.overlay.setProperties({owner:this,renderer:i,headerRenderer:e,footerRenderer:t})}_openedChanged(i){this.$.overlay.opened=i}_ariaLabelChanged(i,e){i||e?this.$.overlay.setAttribute("aria-label",i||e):this.$.overlay.removeAttribute("aria-label")}}A(Za);const Ja=g`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }

  :host([theme~='wrap']) {
    flex-wrap: wrap;
  }
`;x("vaadin-vertical-layout",Ja,{moduleId:"lumo-vertical-layout"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class el extends V(k(w)){static get template(){return I`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-vertical-layout"}}A(el);const tl=g`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }

  :host([theme~='wrap']) {
    flex-wrap: wrap;
  }
`;x("vaadin-horizontal-layout",tl,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class il extends V(k(w)){static get template(){return I`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}A(il);document.addEventListener("click",o=>{const i=o.composedPath().find(e=>e.hasAttribute&&e.hasAttribute("disableonclick"));i&&(i.disabled=!0)});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-select-item",Ye,{moduleId:"lumo-select-item"});x("vaadin-select-list-box",xi,{moduleId:"lumo-select-list-box"});const ol=g`
  :host(:not([theme*='align'])) ::slotted([slot='value']) {
    text-align: start;
  }

  [part='input-field'] {
    cursor: var(--lumo-clickable-cursor);
  }

  [part='input-field'] ::slotted([slot='value']) {
    font-weight: var(--vaadin-input-field-value-font-weight, 500);
  }

  [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
  }

  :host([readonly]) [part='input-field'] ::slotted([slot='value']:not([placeholder])) {
    color: var(--lumo-secondary-text-color);
  }

  /* placeholder styles */
  [part='input-field'] ::slotted([slot='value'][placeholder]) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  :host(:is([readonly], [disabled])) ::slotted([slot='value'][placeholder]) {
    opacity: 0;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-dropdown);
  }

  /* Highlight the toggle button when hovering over the entire component */
  :host(:hover:not([readonly]):not([disabled])) [part='toggle-button'] {
    color: var(--lumo-contrast-80pct);
  }

  :host([theme~='small']) [part='input-field'] ::slotted([slot='value']) {
    --_lumo-selected-item-height: var(--lumo-size-s);
    --_lumo-selected-item-padding: 0;
  }
`;x("vaadin-select",[Ke,ol],{moduleId:"lumo-select"});x("vaadin-select-value-button",g`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
      padding: 0 0.25em;
      --_lumo-selected-item-height: var(--lumo-size-m);
      --_lumo-selected-item-padding: 0.5em;
    }

    ::slotted(*) {
      min-height: var(--_lumo-selected-item-height);
      padding-top: var(--_lumo-selected-item-padding);
      padding-bottom: var(--_lumo-selected-item-padding);
      font-size: inherit;
    }

    ::slotted(*:hover) {
      background-color: transparent;
    }
  `,{moduleId:"lumo-select-value-button"});const sl=g`
  :host {
    --_lumo-item-selected-icon-display: block;
  }

  /* Small viewport adjustment */
  :host([phone]) {
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: 0 !important;
    right: 0 !important;
    bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
    left: 0 !important;
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    align-items: stretch;
    justify-content: flex-end;
  }

  :host([no-vertical-overlap][top-aligned]) [part='overlay'] {
    margin-block-start: var(--lumo-space-xs);
  }

  :host([no-vertical-overlap][bottom-aligned]) [part='overlay'] {
    margin-block-end: var(--lumo-space-xs);
  }

  :host([theme~='align-left']) {
    text-align: left;
  }

  :host([theme~='align-right']) {
    text-align: right;
  }

  :host([theme~='align-center']) {
    text-align: center;
  }
`;x("vaadin-select-overlay",[ii,sl],{moduleId:"lumo-select-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class rl extends Zo(k(M(w))){static get is(){return"vaadin-select-item"}static get template(){return I`
      <style>
        :host {
          display: inline-block;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <span part="checkmark" aria-hidden="true"></span>
      <div part="content">
        <slot></slot>
      </div>
    `}ready(){super.ready(),this.setAttribute("role","option")}}A(rl);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class nl extends Jo(k(M(Q(w)))){static get is(){return"vaadin-select-list-box"}static get template(){return I`
      <style>
        :host {
          display: flex;
        }

        :host([hidden]) {
          display: none !important;
        }

        [part='items'] {
          height: 100%;
          width: 100%;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }
      </style>
      <div part="items">
        <slot></slot>
      </div>
    `}static get properties(){return{orientation:{readOnly:!0}}}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}ready(){super.ready(),this.setAttribute("role","listbox")}}A(nl);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const al=o=>class extends Ct(Pe(M(o))){static get observers(){return["_updateOverlayWidth(opened, owner)"]}ready(){super.ready(),this.restoreFocusOnClose=!0}_getMenuElement(){return Array.from(this.children).find(e=>e.localName!=="style")}_updateOverlayWidth(e,t){if(e&&t){const s="--vaadin-select-overlay-width",r=getComputedStyle(t).getPropertyValue(s);r===""?this.style.removeProperty(s):this.style.setProperty(s,r)}}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ll=g`
  :host {
    align-items: flex-start;
    justify-content: flex-start;
  }

  :host(:not([phone])) [part='overlay'] {
    min-width: var(--vaadin-select-overlay-width, var(--vaadin-select-text-field-width));
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;x("vaadin-select-overlay",[Le,ll],{moduleId:"vaadin-select-overlay-styles"});class dl extends al(k(w)){static get is(){return"vaadin-select-overlay"}static get template(){return I`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}ready(){super.ready(),this.owner=this.__dataHost,this.owner._overlayElement=this}requestContentUpdate(){if(super.requestContentUpdate(),this.owner){const i=this._getMenuElement();this.owner._assignMenuElement(i)}}}A(dl);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hl=g`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    min-width: 0;
    width: 0;
  }

  ::slotted(*) {
    padding-left: 0;
    padding-right: 0;
    flex: auto;
  }

  /* placeholder styles */
  ::slotted(*:not([selected])) {
    line-height: 1;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: inherit;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    line-height: inherit;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-select-value-button",hl,{moduleId:"vaadin-select-value-button-styles"});class cl extends ss(k(w)){static get is(){return"vaadin-select-value-button"}static get template(){return I`
      <div class="vaadin-button-container">
        <span part="label">
          <slot></slot>
        </span>
      </div>
    `}}A(cl);/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ul=g`
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`;/**
 * @license
 * Copyright (c) 2023 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class _l extends De{constructor(i){super(i,"value","vaadin-select-value-button",{initializer:(e,t)=>{t._setFocusElement(e),t.ariaTarget=e,t.stateTarget=e,e.setAttribute("aria-haspopup","listbox")}})}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pl=o=>class extends Ne(ci(mi(Fe(fi(o))))){static get properties(){return{items:{type:Array,observer:"__itemsChanged"},opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0,sync:!0},renderer:{type:Object},value:{type:String,value:"",notify:!0,observer:"_valueChanged",sync:!0},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},noVerticalOverlap:{type:Boolean,value:!1},_phone:Boolean,_phoneMediaQuery:{value:"(max-width: 450px), (max-height: 450px)"},_inputContainer:Object,_items:Object}}static get delegateAttrs(){return[...super.delegateAttrs,"invalid"]}static get observers(){return["_updateAriaExpanded(opened, focusElement)","_updateSelectedItem(value, _items, placeholder)","_openedChanged(opened, _overlayElement, _inputContainer)"]}constructor(){super(),this._itemId=`value-${this.localName}-${Ze()}`,this._srLabelController=new zo(this),this._srLabelController.slotName="sr-label"}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}ready(){super.ready(),this._inputContainer=this.shadowRoot.querySelector('[part~="input-field"]'),this._valueButtonController=new _l(this),this.addController(this._valueButtonController),this.addController(this._srLabelController),this.addController(new es(this._phoneMediaQuery,e=>{this._phone=e})),this._tooltipController=new be(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.focusElement),this.addController(this._tooltipController)}requestContentUpdate(){this._overlayElement&&(this._overlayElement.requestContentUpdate(),this._menuElement&&this._menuElement.items&&this._updateSelectedItem(this.value,this._menuElement.items))}_requiredChanged(e){super._requiredChanged(e),e===!1&&this._requestValidation()}__itemsChanged(e,t){(e||t)&&this.requestContentUpdate()}_assignMenuElement(e){e&&e!==this.__lastMenuElement&&(this._menuElement=e,this.__initMenuItems(e),e.addEventListener("items-changed",()=>{this.__initMenuItems(e)}),e.addEventListener("selected-changed",()=>this.__updateValueButton()),e.addEventListener("keydown",t=>this._onKeyDownInside(t),!0),e.addEventListener("click",t=>{const s=t.composedPath().find(r=>r._hasVaadinItemMixin);this.__dispatchChangePending=!!(s&&s.value!==void 0&&s.value!==this.value),this.opened=!1},!0),this.__lastMenuElement=e)}__initMenuItems(e){e.items&&(this._items=e.items)}_valueChanged(e,t){this.toggleAttribute("has-value",!!e),t!==void 0&&!this.__dispatchChangePending&&this._requestValidation()}_onClick(e){this.disabled||(e.preventDefault(),this.opened=!this.readonly)}_onToggleMouseDown(e){e.preventDefault()}_onKeyDown(e){if(e.target===this.focusElement&&!this.readonly&&!this.disabled&&!this.opened){if(/^(Enter|SpaceBar|\s|ArrowDown|Down|ArrowUp|Up)$/u.test(e.key))e.preventDefault(),this.opened=!0;else if(/[\p{L}\p{Nd}]/u.test(e.key)&&e.key.length===1){const t=this._menuElement.selected,s=t!==void 0?t:-1,r=this._menuElement._searchKey(s,e.key);r>=0&&(this.__dispatchChangePending=!0,this._updateAriaLive(!0),this._menuElement.selected=r)}}}_onKeyDownInside(e){/^(Tab)$/u.test(e.key)&&(this.opened=!1)}_openedChanged(e,t,s){if(!(!t||!s)){if(e){if(this.disabled||this.readonly){this.opened=!1;return}this._updateAriaLive(!1),t.style.setProperty("--vaadin-select-text-field-width",`${s.offsetWidth}px`);const r=this.hasAttribute("focus-ring");this._openedWithFocusRing=r,r&&this.removeAttribute("focus-ring")}else this.__oldOpened&&(this._openedWithFocusRing&&this.setAttribute("focus-ring",""),!this.__dispatchChangePending&&!this._keyboardActive&&this._requestValidation());this.__oldOpened=e}}_updateAriaExpanded(e,t){t&&t.setAttribute("aria-expanded",e?"true":"false")}_updateAriaLive(e){this.focusElement&&(e?this.focusElement.setAttribute("aria-live","polite"):this.focusElement.removeAttribute("aria-live"))}__attachSelectedItem(e){let t;const s=e.getAttribute("label");s?t=this.__createItemElement({label:s}):t=e.cloneNode(!0),t._sourceItem=e,this.__appendValueItemElement(t,this.focusElement),t.selected=!0}__createItemElement(e){const t=document.createElement(e.component||"vaadin-select-item");return e.label&&(t.textContent=e.label),e.value&&(t.value=e.value),e.disabled&&(t.disabled=e.disabled),e.className&&(t.className=e.className),t}__appendValueItemElement(e,t){t.appendChild(e),e.performUpdate&&e.performUpdate(),e.removeAttribute("tabindex"),e.removeAttribute("aria-selected"),e.removeAttribute("role"),e.removeAttribute("focused"),e.removeAttribute("focus-ring"),e.removeAttribute("active"),e.setAttribute("id",this._itemId)}_accessibleNameChanged(e){this._srLabelController.setLabel(e),this._setCustomAriaLabelledBy(e?this._srLabelController.defaultId:null)}_accessibleNameRefChanged(e){this._setCustomAriaLabelledBy(e)}_setCustomAriaLabelledBy(e){const t=this._getLabelIdWithItemId(e);this._fieldAriaController.setLabelId(t,!0)}_getLabelIdWithItemId(e){const s=(this._items?this._items[this._menuElement.selected]:!1)||this.placeholder?this._itemId:"";return e?`${e} ${s}`.trim():null}__updateValueButton(){const e=this.focusElement;if(!e)return;e.innerHTML="";const t=this._items[this._menuElement.selected];if(e.removeAttribute("placeholder"),this._hasContent(t))this.__attachSelectedItem(t);else if(this.placeholder){const r=this.__createItemElement({label:this.placeholder});this.__appendValueItemElement(r,e),e.setAttribute("placeholder","")}!this._valueChanging&&t&&(this._selectedChanging=!0,this.value=t.value||"",this.__dispatchChangePending&&this.__dispatchChange(),delete this._selectedChanging);const s=t||this.placeholder?{newId:this._itemId}:{oldId:this._itemId};lt(e,"aria-labelledby",s),(this.accessibleName||this.accessibleNameRef)&&this._setCustomAriaLabelledBy(this.accessibleNameRef||this._srLabelController.defaultId)}_hasContent(e){if(!e)return!1;const t=!!(e.hasAttribute("label")?e.getAttribute("label"):e.textContent.trim()),s=e.childElementCount>0;return t||s}_updateSelectedItem(e,t){if(t){const s=e==null?e:e.toString();this._menuElement.selected=t.reduce((r,n,a)=>r===void 0&&n.value===s?a:r,void 0),this._selectedChanging||(this._valueChanging=!0,this.__updateValueButton(),delete this._valueChanging)}}_shouldRemoveFocus(){return!this.opened}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this._requestValidation()}checkValidity(){return!this.required||this.readonly||!!this.value}__defaultRenderer(e,t){if(!this.items||this.items.length===0){e.textContent="";return}let s=e.firstElementChild;s||(s=document.createElement("vaadin-select-list-box"),e.appendChild(s)),s.textContent="",this.items.forEach(r=>{s.appendChild(this.__createItemElement(r))})}async __dispatchChange(){this.updateComplete&&await this.updateComplete,this._requestValidation(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this.__dispatchChangePending=!1}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-select",[Po,Lo,ul],{moduleId:"vaadin-select-styles"});class fl extends pl(V(k(w))){static get is(){return"vaadin-select"}static get template(){return I`
      <style>
        :host {
          position: relative;
        }

        ::slotted([slot='value']) {
          flex-grow: 1;
        }
      </style>

      <div class="vaadin-select-container">
        <div part="label" on-click="_onClick">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
          on-click="_onClick"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="value"></slot>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-mousedown="_onToggleMouseDown"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-select-overlay
        position-target="[[_inputContainer]]"
        opened="{{opened}}"
        with-backdrop="[[_phone]]"
        phone$="[[_phone]]"
        theme$="[[_theme]]"
        no-vertical-overlap$="[[noVerticalOverlap]]"
        on-vaadin-overlay-open="_onOverlayOpen"
      ></vaadin-select-overlay>

      <slot name="tooltip"></slot>
      <div class="sr-only">
        <slot name="sr-label"></slot>
      </div>
    `}static get observers(){return["_rendererChanged(renderer, _overlayElement)"]}ready(){super.ready(),ce(this)}_rendererChanged(i,e){e&&(e.renderer=i||this.__defaultRenderer,this.requestContentUpdate())}_onOverlayOpen(){this._menuElement&&this._menuElement.focus()}}A(fl);window.Vaadin.Flow.selectConnector={};window.Vaadin.Flow.selectConnector.initLazy=o=>{o.$connector||(o.$connector={},o.renderer=i=>{const e=o.querySelector("vaadin-select-list-box");e&&(i.firstChild&&i.removeChild(i.firstChild),i.appendChild(e))})};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ml=o=>class extends $o(o){static get properties(){return{_childColumns:{value(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0,sync:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_groupFrozenChanged(frozen, _rootColumns)","_groupFrozenToEndChanged(frozenToEnd, _rootColumns)","_groupHiddenChanged(hidden)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(i,e){i==="hidden"&&(this._preventHiddenSynchronization=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1),/flexGrow|width|hidden|_childColumns/u.test(i)&&this._updateFlexAndWidth(),i==="frozen"&&!this.frozen&&(this.frozen=e),i==="lastFrozen"&&!this._lastFrozen&&(this._lastFrozen=e),i==="frozenToEnd"&&!this.frozenToEnd&&(this.frozenToEnd=e),i==="firstFrozenToEnd"&&!this._firstFrozenToEnd&&(this._firstFrozenToEnd=e)}_groupOrderChanged(i,e){if(e){const t=e.slice(0);if(!i){t.forEach(a=>{a._order=0});return}const s=/(0+)$/u.exec(i).pop().length,r=~~(Math.log(e.length)/Math.LN10)+1,n=10**(s-r);t[0]&&t[0]._order&&t.sort((a,l)=>a._order-l._order),Bo(t,n,i)}}_groupReorderStatusChanged(i,e){i===void 0||e===void 0||e.forEach(t=>{t._reorderStatus=i})}_groupResizableChanged(i,e){i===void 0||e===void 0||e.forEach(t=>{t.resizable=i})}_updateVisibleChildColumns(i){this._visibleChildColumns=Array.prototype.filter.call(i,e=>!e.hidden),this._colSpan=this._visibleChildColumns.length,this._updateAutoHidden()}_updateFlexAndWidth(){if(this._visibleChildColumns){if(this._visibleChildColumns.length>0){const i=this._visibleChildColumns.reduce((e,t)=>(e+=` + ${(t.width||"0px").replace("calc","")}`,e),"").substring(3);this._setWidth(`calc(${i})`)}else this._setWidth("0px");this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(i,e)=>i+e.flexGrow,0))}}__scheduleAutoFreezeWarning(i,e){if(this._grid){const t=e.replace(/([A-Z])/gu,"-$1").toLowerCase(),s=i[0][e]||i[0].hasAttribute(t);i.every(n=>(n[e]||n.hasAttribute(t))===s)||(this._grid.__autoFreezeWarningDebouncer=O.debounce(this._grid.__autoFreezeWarningDebouncer,X,()=>{console.warn(`WARNING: Joining ${e} and non-${e} Grid columns inside the same column group! This will automatically freeze all the joined columns to avoid rendering issues. If this was intentional, consider marking each joined column explicitly as ${e}. Otherwise, exclude the ${e} columns from the joined group.`)}))}}_groupFrozenChanged(i,e){e===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozen"),Array.from(e).forEach(t=>{t.frozen=i}))}_groupFrozenToEndChanged(i,e){e===void 0||i===void 0||i!==!1&&(this.__scheduleAutoFreezeWarning(e,"frozenToEnd"),Array.from(e).forEach(t=>{t.frozenToEnd=i}))}_groupHiddenChanged(i){(i||this.__groupHiddenInitialized)&&this._synchronizeHidden(),this.__groupHiddenInitialized=!0}_updateAutoHidden(){const i=this._autoHidden;this._autoHidden=(this._visibleChildColumns||[]).length===0,(i||this._autoHidden)&&(this.hidden=this._autoHidden)}_synchronizeHidden(){this._childColumns&&!this._preventHiddenSynchronization&&this._childColumns.forEach(i=>{i.hidden=this.hidden})}_colSpanChanged(i,e,t){e&&(e.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(e,i)),t&&(t.setAttribute("colspan",i),this._grid&&this._grid._a11yUpdateCellColspan(t,i))}_getChildColumns(i){return ne.getColumns(i)}_addNodeObserver(){this._observer=new ne(this,()=>{this._preventHiddenSynchronization=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenSynchronization=!1,this._grid&&this._grid._debounceUpdateColumnTree&&this._grid._debounceUpdateColumnTree()}),this._observer.flush()}_isColumnElement(i){return i.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(i.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gl extends ml(w){static get is(){return"vaadin-grid-column-group"}}A(gl);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vl=Ji(class extends Zi{constructor(o){if(super(o),o.type!==se.PROPERTY&&o.type!==se.ATTRIBUTE&&o.type!==se.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!to(o))throw Error("`live` bindings can only contain a single expression")}render(o){return o}update(o,[i]){if(i===We||i===xs)return i;const e=o.element,t=o.name;if(o.type===se.PROPERTY){if(i===e[t])return We}else if(o.type===se.BOOLEAN_ATTRIBUTE){if(!!i===e.hasAttribute(t))return We}else if(o.type===se.ATTRIBUTE&&e.getAttribute(t)===i+"")return We;return Is(o),i}}),ft=window;ft.Vaadin=ft.Vaadin||{};ft.Vaadin.setLitRenderer=(o,i,e,t,s,r,n)=>{const a=f=>s.map(b=>(...y)=>{f!==void 0&&t(b,f,y[0]instanceof Event?[]:[...y])}),l=["html","root","live","appId","itemKey","model","item","index",...s,`return html\`${e}\``],h=new Function(...l),u=(f,b,y)=>{const{item:T,index:S}=b;Jt(h(eo,f,vl,n,y,b,T,S,...a(y)),f)},p=(f,b,y)=>{const{item:T}=y;f.__litRenderer!==p&&(f.innerHTML="",delete f._$litPart$,f.__litRenderer=p);const S={};for(const z in T)z.startsWith(r)&&(S[z.replace(r,"")]=T[z]);u(f,{...y,item:S},T.key)};p.__rendererId=r,o[i]=p};ft.Vaadin.unsetLitRenderer=(o,i,e)=>{var t;((t=o[i])==null?void 0:t.__rendererId)===e&&(o[i]=void 0)};x("vaadin-notification-card",g`
    :host {
      position: relative;
      margin: var(--lumo-space-s);
    }

    [part='overlay'] {
      background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      border-radius: var(--lumo-border-radius-l);
      box-shadow:
        0 0 0 1px var(--lumo-contrast-10pct),
        var(--lumo-box-shadow-l);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      font-weight: 400;
      line-height: var(--lumo-line-height-s);
      letter-spacing: 0;
      text-transform: none;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    [part='content'] {
      padding: var(--lumo-space-wide-l);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    [part='content'] ::slotted(vaadin-button) {
      flex: none;
      margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
    }

    :host([slot^='middle']) {
      max-width: 80vw;
      margin: var(--lumo-space-s) auto;
    }

    :host([slot$='stretch']) {
      margin: 0;
    }

    :host([slot$='stretch']) [part='overlay'] {
      border-radius: 0;
    }

    @media (min-width: 421px) {
      :host(:not([slot$='stretch'])) {
        display: flex;
      }

      :host([slot$='end']) {
        justify-content: flex-end;
      }

      :host([slot^='middle']),
      :host([slot$='center']) {
        display: flex;
        justify-content: center;
      }
    }

    @keyframes lumo-notification-exit-fade-out {
      100% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-fade-in {
      0% {
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-down {
      0% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-up {
      100% {
        transform: translateY(-200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-enter-slide-up {
      0% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    @keyframes lumo-notification-exit-slide-down {
      100% {
        transform: translateY(200%);
        opacity: 0;
      }
    }

    :host([slot='middle'][opening]) {
      animation: lumo-notification-enter-fade-in 300ms;
    }

    :host([slot='middle'][closing]) {
      animation: lumo-notification-exit-fade-out 300ms;
    }

    :host([slot^='top'][opening]) {
      animation: lumo-notification-enter-slide-down 300ms;
    }

    :host([slot^='top'][closing]) {
      animation: lumo-notification-exit-slide-up 300ms;
    }

    :host([slot^='bottom'][opening]) {
      animation: lumo-notification-enter-slide-up 300ms;
    }

    :host([slot^='bottom'][closing]) {
      animation: lumo-notification-exit-slide-down 300ms;
    }

    :host([theme='success']) {
      --_focus-ring-gap-color: var(--lumo-success-color);
      --vaadin-focus-ring-color: var(--lumo-success-contrast-color);
    }

    :host([theme='warning']) {
      --_focus-ring-gap-color: var(--lumo-warning-color);
      --vaadin-focus-ring-color: var(--lumo-warning-contrast-color);
    }

    :host([theme='error']) {
      --_focus-ring-gap-color: var(--lumo-error-color);
      --vaadin-focus-ring-color: var(--lumo-error-contrast-color);
    }

    :host([theme='primary']) {
      --_focus-ring-gap-color: var(--lumo-primary-color);
      --vaadin-focus-ring-color: var(--lumo-primary-contrast-color);
    }

    :host([theme~='primary']) [part='overlay'] {
      background: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='primary']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-primary-contrast-color);
      --vaadin-button-primary-background: var(--lumo-primary-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-primary-text-color);
    }

    :host([theme~='contrast']) [part='overlay'] {
      background: var(--lumo-contrast);
      color: var(--lumo-base-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='contrast']) {
      --vaadin-button-background: var(--lumo-contrast-20pct);
      --vaadin-button-text-color: var(--lumo-base-color);
      --vaadin-button-primary-background: var(--lumo-base-color);
      --vaadin-button-primary-text-color: var(--lumo-contrast);
    }

    :host([theme~='success']) [part='overlay'] {
      background: var(--lumo-success-color);
      color: var(--lumo-success-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='success']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-success-contrast-color);
      --vaadin-button-primary-background: var(--lumo-success-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-success-text-color);
    }

    :host([theme~='error']) [part='overlay'] {
      background: var(--lumo-error-color);
      color: var(--lumo-error-contrast-color);
      box-shadow: var(--lumo-box-shadow-l);
    }

    :host([theme~='error']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-error-contrast-color);
      --vaadin-button-primary-background: var(--lumo-error-contrast-color);
      --vaadin-button-primary-text-color: var(--lumo-error-text-color);
    }

    :host([theme~='warning']) [part='overlay'] {
      background: var(--lumo-warning-color);
      color: var(--lumo-warning-contrast-color);
      box-shadow:
        inset 0 0 0 1px var(--lumo-contrast-20pct),
        var(--lumo-box-shadow-l);
    }

    :host([theme~='warning']) {
      --vaadin-button-background: var(--lumo-shade-20pct);
      --vaadin-button-text-color: var(--lumo-warning-contrast-color);
      --vaadin-button-primary-background: var(--lumo-shade-50pct);
      --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    }
  `,{moduleId:"lumo-notification-card"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bl=o=>class extends xo(o){static get properties(){return{opened:{type:Boolean,value:!1,sync:!0,observer:"_openedChanged"}}}constructor(){super(),this._boundVaadinOverlayClose=this._onVaadinOverlayClose.bind(this),Se&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_openedChanged(i){i?(document.body.appendChild(this),document.addEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),document.removeEventListener("vaadin-overlay-close",this._boundVaadinOverlayClose),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}_detectIosNavbar(){const i=window.innerHeight,t=window.innerWidth>i,s=document.documentElement.clientHeight;t&&s>i?this.style.bottom=`${s-i}px`:this.style.bottom="0"}_onVaadinOverlayClose(i){const e=i.detail.sourceEvent;e&&e.composedPath().indexOf(this)>=0&&i.preventDefault()}},yl=o=>class extends mt(Ne(o)){static get properties(){return{assertive:{type:Boolean,value:!1,sync:!0},duration:{type:Number,value:5e3,sync:!0},opened:{type:Boolean,value:!1,notify:!0,sync:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged",sync:!0},renderer:{type:Function,sync:!0}}}static get observers(){return["_durationChanged(duration, opened)","_rendererChanged(renderer, opened, _overlayElement)"]}static show(i,e){const t=customElements.get("vaadin-notification");return ws(i)?t._createAndShowNotification(s=>{Jt(i,s)},e):t._createAndShowNotification(s=>{s.innerText=i},e)}static _createAndShowNotification(i,e){const t=document.createElement("vaadin-notification");return e&&Number.isFinite(e.duration)&&(t.duration=e.duration),e&&e.position&&(t.position=e.position),e&&e.assertive&&(t.assertive=e.assertive),e&&e.theme&&t.setAttribute("theme",e.theme),t.renderer=i,document.body.appendChild(t),t.opened=!0,t.addEventListener("opened-changed",s=>{s.detail.value||t.remove()}),t}get _container(){const i=customElements.get("vaadin-notification");return i._container||(i._container=document.createElement("vaadin-notification-container"),document.body.appendChild(i._container)),i._container}get _card(){return this._overlayElement}ready(){super.ready(),this._overlayElement=this.shadowRoot.querySelector("vaadin-notification-card"),ce(this)}disconnectedCallback(){super.disconnectedCallback(),queueMicrotask(()=>{this.isConnected||(this.opened=!1)})}requestContentUpdate(){!this.renderer||!this._card||this.renderer(this._card,this)}__computeAriaLive(i){return i?"assertive":"polite"}_rendererChanged(i,e,t){if(!t)return;const s=this._oldRenderer!==i;this._oldRenderer=i,s&&(t.innerHTML="",delete t._$litPart$),e&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.requestContentUpdate())}open(){this.opened=!0}close(){this.opened=!1}_openedChanged(i){i?(this._container.opened=!0,this._animatedAppendNotificationCard()):this._card&&this._closeNotificationCard()}__cleanUpOpeningClosingState(){this._card.removeAttribute("opening"),this._card.removeAttribute("closing"),this._card.removeEventListener("animationend",this.__animationEndListener)}_animatedAppendNotificationCard(){this._card?(this.__cleanUpOpeningClosingState(),this._card.setAttribute("opening",""),this._appendNotificationCard(),this.__animationEndListener=()=>this.__cleanUpOpeningClosingState(),this._card.addEventListener("animationend",this.__animationEndListener),this._didAnimateNotificationAppend=!0):this._didAnimateNotificationAppend=!1}_appendNotificationCard(){if(this._card){if(this._container.performUpdate&&this._container.performUpdate(),!this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)){console.warn(`Invalid alignment parameter provided: position=${this.position}`);return}this._container.bringToFront(),this._card.slot=this.position,this._container.firstElementChild&&/top/u.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)}}_removeNotificationCard(){this._card&&(this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=!!this._container.firstElementChild,this.dispatchEvent(new CustomEvent("closed")))}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this.__cleanUpOpeningClosingState(),this._card.setAttribute("closing","");const i=getComputedStyle(this._card).getPropertyValue("animation-name");i&&i!=="none"?(this.__animationEndListener=()=>{this._removeNotificationCard(),this.__cleanUpOpeningClosingState()},this._card.addEventListener("animationend",this.__animationEndListener)):this._removeNotificationCard()}_positionChanged(){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(i,e){e&&(clearTimeout(this._durationTimeoutId),i>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),i)))}};/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cl=g`
  :host {
    position: fixed;
    z-index: 1000;
    inset: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    pointer-events: none;
  }

  [region-group] {
    flex: 1 1 0%;
    display: flex;
  }

  [region-group='top'] {
    align-items: flex-start;
  }

  [region-group='bottom'] {
    align-items: flex-end;
  }

  [region-group] > [region] {
    flex: 1 1 0%;
  }

  @media (max-width: 420px) {
    [region-group] {
      flex-direction: column;
      align-items: stretch;
    }

    [region-group='top'] {
      justify-content: flex-start;
    }

    [region-group='bottom'] {
      justify-content: flex-end;
    }

    [region-group] > [region] {
      flex: initial;
    }
  }
`,xl=g`
  :host {
    display: block;
  }

  [part='overlay'] {
    pointer-events: auto;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */x("vaadin-notification-container",Cl,{moduleId:"vaadin-notification-container-styles"});x("vaadin-notification-card",xl,{moduleId:"vaadin-notification-card-styles"});class wl extends bl(k(V(w))){static get template(){return I`
      <div region="top-stretch"><slot name="top-stretch"></slot></div>
      <div region-group="top">
        <div region="top-start"><slot name="top-start"></slot></div>
        <div region="top-center"><slot name="top-center"></slot></div>
        <div region="top-end"><slot name="top-end"></slot></div>
      </div>
      <div region="middle"><slot name="middle"></slot></div>
      <div region-group="bottom">
        <div region="bottom-start"><slot name="bottom-start"></slot></div>
        <div region="bottom-center"><slot name="bottom-center"></slot></div>
        <div region="bottom-end"><slot name="bottom-end"></slot></div>
      </div>
      <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
    `}static get is(){return"vaadin-notification-container"}}class Al extends k(w){static get template(){return I`
      <div part="overlay">
        <div part="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert")}}class Il extends yl(V(w)){static get template(){return I`
      <style>
        :host {
          display: none !important;
        }
      </style>
      <vaadin-notification-card
        theme$="[[_theme]]"
        aria-live$="[[__computeAriaLive(assertive)]]"
      ></vaadin-notification-card>
    `}static get is(){return"vaadin-notification"}}A(wl);A(Al);A(Il);
