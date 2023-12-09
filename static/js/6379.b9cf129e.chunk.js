/*! For license information please see 6379.b9cf129e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[6379],{56379:(e,c,i)=>{i.r(c),i.d(c,{CalciteAccordion:()=>r,defineCustomElement:()=>s});var t=i(51554),n=i(72021);const o=(0,t.GH)(class extends t.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalAccordionChange=(0,t.yM)(this,"calciteInternalAccordionChange",6),this.mutationObserver=(0,n.c)("mutation",(()=>this.updateAccordionItems())),this.appearance="solid",this.iconPosition="end",this.iconType="chevron",this.scale="m",this.selectionMode="multiple"}handlePropsChange(){this.updateAccordionItems()}connectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0}),this.updateAccordionItems()}disconnectedCallback(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect()}render(){const e="transparent"===this.appearance;return(0,t.h)("div",{class:{"accordion--transparent":e,accordion:!e}},(0,t.h)("slot",null))}updateActiveItemOnChange(e){this.calciteInternalAccordionChange.emit({requestedAccordionItem:e.detail.requestedAccordionItem}),e.stopPropagation()}updateAccordionItems(){this.el.querySelectorAll("calcite-accordion-item").forEach((e=>{e.iconPosition=this.iconPosition,e.iconType=this.iconType,e.scale=this.scale})),document.dispatchEvent(new CustomEvent("calciteInternalAccordionItemsSync"))}get el(){return this}static get watchers(){return{iconPosition:["handlePropsChange"],iconType:["handlePropsChange"],scale:["handlePropsChange"],selectionMode:["handlePropsChange"]}}static get style(){return":host([scale=s]){--calcite-accordion-item-spacing-unit:0.25rem;--calcite-accordion-icon-margin:0.5rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-accordion-item-spacing-unit:0.5rem;--calcite-accordion-icon-margin:0.75rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-accordion-item-spacing-unit:0.75rem;--calcite-accordion-icon-margin:1rem;--calcite-accordion-item-padding:var(--calcite-accordion-item-spacing-unit) 1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host{position:relative;display:block;max-inline-size:100%;line-height:1.5rem;--calcite-accordion-item-border:var(--calcite-ui-border-2);--calcite-accordion-item-background:var(--calcite-ui-foreground-1)}.accordion--transparent{--calcite-accordion-item-border:transparent;--calcite-accordion-item-background:transparent}.accordion{border-width:1px;border-block-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-2)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-accordion",{appearance:[513],iconPosition:[513,"icon-position"],iconType:[513,"icon-type"],scale:[513],selectionMode:[513,"selection-mode"]},[[0,"calciteInternalAccordionItemSelect","updateActiveItemOnChange"]]]);function a(){if("undefined"===typeof customElements)return;["calcite-accordion"].forEach((e=>{if("calcite-accordion"===e)customElements.get(e)||customElements.define(e,o)}))}a();const r=o,s=a}}]);
//# sourceMappingURL=6379.b9cf129e.chunk.js.map