/*! For license information please see 8926.222b34d8.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[8926],{48926:(e,t,s)=>{s.r(t),s.d(t,{CalciteFlowItem:()=>P,defineCustomElement:()=>x});var o=s(51554),a=s(92358),l=s(13160),i=s(47242),c=s(46895),n=s(52655),d=s(89524),r=s(65138),h=s(49865),m=s(57601),u=s(91438),b=s(2654),g=s(69874);const p="back-button",f="chevron-left",k="chevron-right",v="action-bar",w="header-actions-start",C="header-actions-end",B="header-menu-actions",y="header-content",E="fab",F="footer",S="footer-actions",I=(0,o.GH)(class extends o.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=(0,o.yM)(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=(0,o.yM)(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=(0,o.yM)(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=(0,o.yM)(this,"calciteFlowItemToggle",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=e=>{e.stopPropagation(),this.collapsed=e.target.collapsed,this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){(0,l.c)(this),(0,c.c)(this),(0,n.c)(this)}async componentWillLoad(){await(0,n.s)(this),(0,i.a)(this)}componentDidRender(){(0,l.u)(this)}disconnectedCallback(){(0,l.d)(this),(0,c.d)(this),(0,n.d)(this)}componentDidLoad(){(0,i.s)(this)}effectiveLocaleChange(){(0,n.u)(this,this.effectiveLocale)}async setFocus(){await(0,i.c)(this);const{backButtonEl:e,containerEl:t}=this;return e?e.setFocus():t?t.setFocus():void 0}async scrollContentTo(e){var t;await(null===(t=this.containerEl)||void 0===t?void 0:t.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t="rtl"===(0,a.b)(e),{showBackButton:s,backButtonClick:l,messages:i}=this,c=i.back,n=t?k:f;return s?(0,o.h)("calcite-action",{"aria-label":c,class:p,icon:n,key:"flow-back-button",onClick:l,scale:"s",slot:"header-actions-start",text:c,title:c,ref:this.setBackRef}):null}render(){const{collapsed:e,collapseDirection:t,collapsible:s,closable:a,closed:l,description:i,disabled:c,heading:n,headingLevel:r,loading:h,menuOpen:m,messages:u}=this;return(0,o.h)(o.AA,null,(0,o.h)("calcite-panel",{closable:a,closed:l,collapseDirection:t,collapsed:e,collapsible:s,description:i,disabled:c,heading:n,headingLevel:r,loading:h,menuOpen:m,messageOverrides:u,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,ref:this.setContainerRef},this.renderBackButton(),(0,o.h)("slot",{name:v,slot:d.S.actionBar}),(0,o.h)("slot",{name:w,slot:d.S.headerActionsStart}),(0,o.h)("slot",{name:C,slot:d.S.headerActionsEnd}),(0,o.h)("slot",{name:y,slot:d.S.headerContent}),(0,o.h)("slot",{name:B,slot:d.S.headerMenuActions}),(0,o.h)("slot",{name:E,slot:d.S.fab}),(0,o.h)("slot",{name:S,slot:d.S.footerActions}),(0,o.h)("slot",{name:F,slot:d.S.footer}),(0,o.h)("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function L(){if("undefined"===typeof customElements)return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach((e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,I);break;case"calcite-action":customElements.get(e)||(0,r.d)();break;case"calcite-action-menu":customElements.get(e)||(0,h.d)();break;case"calcite-icon":customElements.get(e)||(0,m.d)();break;case"calcite-loader":customElements.get(e)||(0,u.d)();break;case"calcite-panel":customElements.get(e)||(0,d.d)();break;case"calcite-popover":customElements.get(e)||(0,b.d)();break;case"calcite-scrim":customElements.get(e)||(0,g.d)()}}))}L();const P=I,x=L}}]);
//# sourceMappingURL=8926.222b34d8.chunk.js.map