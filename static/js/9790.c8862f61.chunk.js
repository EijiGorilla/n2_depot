/*! For license information please see 9790.c8862f61.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[9790],{19790:(e,t,n)=>{n.r(t),n.d(t,{CalciteOption:()=>o,defineCustomElement:()=>r});var l=n(51554),a=n(72021);const i=(0,l.GH)(class extends l.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalOptionChange=(0,l.yM)(this,"calciteInternalOptionChange",6),this.mutationObserver=(0,a.c)("mutation",(()=>{this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()})),this.disabled=!1,this.label=void 0,this.selected=void 0,this.value=void 0}handlePropChange(e,t,n){"label"!==n&&"value"!==n||this.ensureTextContentDependentProps(),this.calciteInternalOptionChange.emit()}ensureTextContentDependentProps(){const{el:{textContent:e},internallySetLabel:t,internallySetValue:n,label:l,value:a}=this;l&&l!==t||(this.label=e,this.internallySetLabel=e),null!=a&&a!==n||(this.value=e,this.internallySetValue=e)}connectedCallback(){var e;this.ensureTextContentDependentProps(),null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{attributeFilter:["label","value"],characterData:!0,childList:!0,subtree:!0})}disconnectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect()}render(){return(0,l.h)("slot",null,this.label)}get el(){return this}static get watchers(){return{disabled:["handlePropChange"],label:["handlePropChange"],selected:["handlePropChange"],value:["handlePropChange"]}}static get style(){return":host{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-option",{disabled:[516],label:[1025],selected:[516],value:[1032]}]);function s(){if("undefined"===typeof customElements)return;["calcite-option"].forEach((e=>{if("calcite-option"===e)customElements.get(e)||customElements.define(e,i)}))}s();const o=i,r=s}}]);
//# sourceMappingURL=9790.c8862f61.chunk.js.map