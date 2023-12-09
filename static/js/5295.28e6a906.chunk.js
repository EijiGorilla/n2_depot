/*! For license information please see 5295.28e6a906.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[5295],{55295:(e,t,a)=>{a.r(t),a.d(t,{CalciteInputDatePicker:()=>z,defineCustomElement:()=>V});var i=a(51554),s=a(10883),n=a(92358),l=a(65394),r=a(85955),o=a(13160),c=a(19579),h=a(74310),u=a(47242),d=a(46895),p=a(27871),m=a(8152),g=a(52655),v=a(16435),f=a(14387),y=a(64044),D=a(8443),I=a(1029),b=a(20856),x=a(57601),k=a(96506),w=a(87138);const A="assistive-text",C="menu-container",P="menu-container--active",E="toggle-icon";const F=(0,i.GH)(class extends i.mv{constructor(){var e;super(),e=this,this.__registerHost(),this.__attachShadow(),this.calciteInputDatePickerChange=(0,i.yM)(this,"calciteInputDatePickerChange",6),this.calciteInputDatePickerBeforeClose=(0,i.yM)(this,"calciteInputDatePickerBeforeClose",6),this.calciteInputDatePickerClose=(0,i.yM)(this,"calciteInputDatePickerClose",6),this.calciteInputDatePickerBeforeOpen=(0,i.yM)(this,"calciteInputDatePickerBeforeOpen",6),this.calciteInputDatePickerOpen=(0,i.yM)(this,"calciteInputDatePickerOpen",6),this.calciteInternalInputInputHandler=e=>{const t=e.target,a=t.value,i=this.parseNumerals(a),n=this.formatNumerals(i);t.value=n;const{year:l}=(0,s.a)(a,this.localeData);if(l&&l.length<4)return;const r=(0,s.b)(a,this.localeData);(0,s.i)(r,this.min,this.max)&&(this.datePickerActiveDate=r)},this.calciteInternalInputBlurHandler=()=>{this.commitValue()},this.dialogId="date-picker-dialog--".concat((0,f.g)()),this.focusOnOpen=!1,this.lastBlurredInput="none",this.userChangedValue=!1,this.openTransitionProp="opacity",this.valueAsDateChangedExternally=!1,this.placeholderTextId="calcite-input-date-picker-placeholder-".concat((0,f.g)()),this.onInputWrapperClick=()=>{this.range&&"none"!==this.lastBlurredInput&&this.open||(this.open=!this.open),this.lastBlurredInput="none"},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,l.f)(t,e):null},this.setTransitionEl=e=>{this.transitionEl=e},this.setStartInput=e=>{this.startInput=e},this.setEndInput=e=>{this.endInput=e},this.deactivate=()=>{this.open=!1,this.lastBlurredInput="none"},this.keyDownHandler=e=>{const{defaultPrevented:t,key:a}=e;if(!t)if("Enter"===a){var i;if(this.commitValue(),this.shouldFocusRangeEnd())null===(i=this.endInput)||void 0===i||i.setFocus();else if(this.shouldFocusRangeStart()){var s;null===(s=this.startInput)||void 0===s||s.setFocus()}(0,r.s)(this)&&(e.preventDefault(),this.restoreInputFocus())}else"ArrowDown"===a?(this.open=!0,this.focusOnOpen=!0,e.preventDefault()):"Escape"===a&&(this.open=!1,e.preventDefault(),this.restoreInputFocus())},this.startInputFocus=()=>{this.focusedInput="start"},this.startEndInputFocus=e=>{const t=e.relatedTarget;this.lastBlurredInput=t===this.startInput?"start":t===this.endInput?"end":"none"},this.endInputFocus=()=>{this.focusedInput="end"},this.setFloatingEl=e=>{this.floatingEl=e,(0,l.c)(this,this.referenceEl,this.floatingEl)},this.setStartWrapper=e=>{this.startWrapper=e,this.setReferenceEl()},this.setEndWrapper=e=>{this.endWrapper=e,this.setReferenceEl()},this.setDatePickerRef=e=>{this.datePickerEl=e,(0,v.c)(this,{focusTrapEl:e,focusTrapOptions:{initialFocus:!1,setReturnFocus:!1}})},this.handleDateChange=e=>{this.range||(e.stopPropagation(),this.setValue(e.target.valueAsDate),this.localizeInputValues(),this.restoreInputFocus())},this.handleDateRangeChange=e=>{if(!this.range)return;e.stopPropagation();const t=e.target.valueAsDate;this.setRangeValue(t),this.localizeInputValues(),this.restoreInputFocus()},this.setInputValue=function(t){const a=e["".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"start","Input")];a&&(a.value=t)},this.setRangeValue=e=>{if(!this.range)return;const{value:t}=this,a=Array.isArray(t),i=Array.isArray(e),n=i?e[0]:null;let l=i?(0,s.c)(n):"";l&&(l=this.getNormalizedDate(l));const r=i?e[1]:null;let o=i?(0,s.c)(r):"";o&&(o=this.getNormalizedDate(o));const c=l||o?[l,o]:"";if(c===t)return;this.userChangedValue=!0,this.value=c,this.valueAsDate=c?(0,m.g)(c):void 0;const h=this.calciteInputDatePickerChange.emit();h&&h.defaultPrevented&&(this.value=t,a?(this.setInputValue(t[0],"start"),this.setInputValue(t[1],"end")):(this.value=t,this.setInputValue(t)))},this.setValue=e=>{if(this.range)return;const t=this.value;let a=(0,s.c)(e);if(a=this.getNormalizedDate(a),a===t)return;this.userChangedValue=!0,this.valueAsDate=a?(0,s.e)(a):void 0,this.value=a||"";this.calciteInputDatePickerChange.emit().defaultPrevented&&(this.value=t,this.setInputValue(t))},this.commonDateSeparators=[".","-","/"],this.formatNumerals=e=>e?e.split("").map((e=>{var t,a,i;return null!==(t=this.commonDateSeparators)&&void 0!==t&&t.includes(e)?null===(a=this.localeData)||void 0===a?void 0:a.separator:null!==c.n&&void 0!==c.n&&c.n.includes(e)?null===d.n||void 0===d.n||null===(i=d.n.numberFormatter)||void 0===i?void 0:i.format(Number(e)):e})).join(""):"",this.parseNumerals=e=>e?e.split("").map((e=>c.n.includes(e)?d.n.delocalize(e):e)).join(""):"",this.disabled=!1,this.focusTrapDisabled=!1,this.form=void 0,this.readOnly=!1,this.value="",this.flipPlacements=void 0,this.headingLevel=void 0,this.valueAsDate=void 0,this.messageOverrides=void 0,this.messages=void 0,this.minAsDate=void 0,this.maxAsDate=void 0,this.min=void 0,this.max=void 0,this.open=!1,this.name=void 0,this.numberingSystem=void 0,this.scale="m",this.status="idle",this.placement=l.d,this.range=!1,this.required=!1,this.overlayPositioning="absolute",this.proximitySelectionDisabled=!1,this.layout="horizontal",this.datePickerActiveDate=void 0,this.defaultMessages=void 0,this.effectiveLocale="",this.focusedInput="start",this.localeData=void 0}handleFocusTrapDisabled(e){this.open&&(e?(0,v.d)(this):(0,v.a)(this))}handleDisabledAndReadOnlyChange(e){e||(this.open=!1)}valueWatcher(e){if(!this.userChangedValue){let t;t=Array.isArray(e)?(0,m.g)(e):e?(0,s.e)(e):void 0,this.valueAsDateChangedExternally||t===this.valueAsDate||(this.valueAsDate=t),this.localizeInputValues()}this.userChangedValue=!1}valueAsDateWatcher(e){this.datePickerActiveDate=e;const t=this.range&&Array.isArray(e)?[(0,s.c)(e[0]),(0,s.c)(e[1])]:(0,s.c)(e);this.value!==t&&(this.valueAsDateChangedExternally=!0,this.value=t,this.valueAsDateChangedExternally=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}onMinChanged(e){e&&(this.minAsDate=(0,s.e)(e))}onMaxChanged(e){e&&(this.maxAsDate=(0,s.e)(e))}openHandler(e){(0,p.o)(this),this.disabled||this.readOnly?this.open=!1:e&&this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}calciteDaySelectHandler(){this.shouldFocusRangeStart()||this.shouldFocusRangeEnd()||(this.open=!1)}async setFocus(){await(0,u.c)(this),this.el.focus()}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{floatingEl:t,referenceEl:a,placement:i,overlayPositioning:s,filteredFlipPlacements:n}=this;return(0,l.r)(this,{floatingEl:t,referenceEl:a,overlayPositioning:s,placement:i,flipPlacements:n,type:"menu"},e)}connectedCallback(){(0,o.c)(this),(0,d.c)(this);const{open:e}=this;if(e&&this.openHandler(e),Array.isArray(this.value))this.valueAsDate=(0,m.g)(this.value);else if(this.value)try{this.valueAsDate=(0,s.e)(this.value)}catch(t){this.warnAboutInvalidValue(this.value),this.value=""}else this.range&&this.valueAsDate&&this.setRangeValue(this.valueAsDate);this.min&&(this.minAsDate=(0,s.e)(this.min)),this.max&&(this.maxAsDate=(0,s.e)(this.max)),(0,h.c)(this),(0,r.c)(this),(0,g.c)(this),this.setFilteredPlacements(),this.reposition(!0),d.n.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:!1},this.open&&(0,p.o)(this)}async componentWillLoad(){(0,u.a)(this),await Promise.all([this.loadLocaleData(),(0,g.s)(this)]),this.onMinChanged(this.min),this.onMaxChanged(this.max)}componentDidLoad(){(0,u.s)(this),this.localizeInputValues(),this.reposition(!0)}disconnectedCallback(){(0,v.d)(this),(0,o.d)(this),(0,h.d)(this),(0,r.d)(this),(0,l.a)(this,this.referenceEl,this.floatingEl),(0,d.d)(this),(0,g.d)(this)}componentDidRender(){(0,o.u)(this)}render(){var e,t,a;const{disabled:s,effectiveLocale:o,messages:c,numberingSystem:h,readOnly:u}=this;return d.n.numberFormatOptions={numberingSystem:h,locale:o,useGrouping:!1},(0,i.h)(i.AA,{onBlur:this.deactivate,onKeyDown:this.keyDownHandler},this.localeData&&(0,i.h)("div",{class:"input-container"},(0,i.h)("div",{class:"input-wrapper",onClick:this.onInputWrapperClick,ref:this.setStartWrapper},(0,i.h)("calcite-input-text",{"aria-autocomplete":"none","aria-controls":this.dialogId,"aria-describedby":this.placeholderTextId,"aria-expanded":(0,n.t)(this.open),"aria-haspopup":"dialog",class:"input ".concat("vertical"===this.layout&&this.range?"no-bottom-border":""),disabled:s,icon:"calendar",onCalciteInputTextInput:this.calciteInternalInputInputHandler,onCalciteInternalInputTextBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputTextFocus:this.startInputFocus,onFocus:this.startEndInputFocus,placeholder:null===(e=this.localeData)||void 0===e?void 0:e.placeholder,readOnly:u,role:"combobox",scale:this.scale,status:this.status,ref:this.setStartInput}),!this.readOnly&&this.renderToggleIcon(this.open&&"start"===this.focusedInput),(0,i.h)("span",{"aria-hidden":"true",class:A,id:this.placeholderTextId},"Date Format: ",null===(t=this.localeData)||void 0===t?void 0:t.placeholder)),(0,i.h)("div",{"aria-hidden":(0,n.t)(!this.open),"aria-label":c.chooseDate,"aria-live":"polite","aria-modal":"true",class:{[C]:!0,[P]:this.open},id:this.dialogId,role:"dialog",ref:this.setFloatingEl},(0,i.h)("div",{class:{"calendar-picker-wrapper":!0,"calendar-picker-wrapper--end":"end"===this.focusedInput,[l.F.animation]:!0,[l.F.animationActive]:this.open},ref:this.setTransitionEl},(0,i.h)("calcite-date-picker",{activeDate:this.datePickerActiveDate,activeRange:this.focusedInput,headingLevel:this.headingLevel,max:this.max,maxAsDate:this.maxAsDate,messageOverrides:this.messageOverrides,min:this.min,minAsDate:this.minAsDate,numberingSystem:h,onCalciteDatePickerChange:this.handleDateChange,onCalciteDatePickerRangeChange:this.handleDateRangeChange,proximitySelectionDisabled:this.proximitySelectionDisabled,range:this.range,scale:this.scale,tabIndex:this.open?void 0:-1,valueAsDate:this.valueAsDate,ref:this.setDatePickerRef}))),this.range&&"horizontal"===this.layout&&(0,i.h)("div",{class:"horizontal-arrow-container"},(0,i.h)("calcite-icon",{flipRtl:!0,icon:"arrow-right",scale:(0,y.g)(this.scale)})),this.range&&"vertical"===this.layout&&"s"!==this.scale&&(0,i.h)("div",{class:"vertical-arrow-container"},(0,i.h)("calcite-icon",{icon:"arrow-down",scale:(0,y.g)(this.scale)})),this.range&&(0,i.h)("div",{class:"input-wrapper",onClick:this.onInputWrapperClick,ref:this.setEndWrapper},(0,i.h)("calcite-input-text",{"aria-autocomplete":"none","aria-controls":this.dialogId,"aria-expanded":(0,n.t)(this.open),"aria-haspopup":"dialog",class:{input:!0,"border-top-color-one":"vertical"===this.layout&&this.range},disabled:s,icon:"calendar",onCalciteInputTextInput:this.calciteInternalInputInputHandler,onCalciteInternalInputTextBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputTextFocus:this.endInputFocus,onFocus:this.startEndInputFocus,placeholder:null===(a=this.localeData)||void 0===a?void 0:a.placeholder,readOnly:u,role:"combobox",scale:this.scale,status:this.status,ref:this.setEndInput}),!this.readOnly&&this.renderToggleIcon(this.open&&"end"===this.focusedInput))),(0,i.h)(r.H,{component:this}))}renderToggleIcon(e){return(0,i.h)("span",{class:E},(0,i.h)("calcite-icon",{icon:e?"chevron-up":"chevron-down",scale:(0,y.g)(this.scale)}))}setReferenceEl(){const{focusedInput:e,layout:t,endWrapper:a,startWrapper:i}=this;this.referenceEl="end"===e||"vertical"===t?a||i:i||a,requestAnimationFrame((()=>(0,l.c)(this,this.referenceEl,this.floatingEl)))}onLabelClick(){this.setFocus()}onBeforeOpen(){this.calciteInputDatePickerBeforeOpen.emit()}onOpen(){(0,v.a)(this,{onActivate:()=>{this.focusOnOpen&&(this.datePickerEl.setFocus(),this.focusOnOpen=!1)}}),this.calciteInputDatePickerOpen.emit()}onBeforeClose(){this.calciteInputDatePickerBeforeClose.emit()}onClose(){this.calciteInputDatePickerClose.emit(),(0,v.d)(this),this.restoreInputFocus(),this.focusOnOpen=!1,this.datePickerEl.reset()}commitValue(){const{focusedInput:e,value:t}=this,a=this["".concat(e,"Input")].value,i=(0,s.b)(a,this.localeData),n=(0,s.c)(i),l=Array.isArray(t);if(this.range){if(l){if(n===t["start"===e?0:1])return;i?(this.setRangeValue(["start"===e?i:(0,s.e)(t[0]),"end"===e?i:(0,s.e)(t[1])]),this.localizeInputValues()):this.setRangeValue(["end"===e&&(0,s.e)(t[0]),"start"===e&&(0,s.e)(t[1])])}else i&&(this.setRangeValue(["start"===e?i:(0,s.e)(t[0]),"end"===e?i:(0,s.e)(t[1])]),this.localizeInputValues())}else{if(n===t)return;this.setValue(i),this.localizeInputValues()}}async loadLocaleData(){i.Z5.isBrowser&&(d.n.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:!1},this.localeData=await(0,m.a)(this.effectiveLocale),this.localizeInputValues())}shouldFocusRangeStart(){const e=this.value[0];return!(!this.value[1]||e||"end"!==this.focusedInput||!this.startInput)}shouldFocusRangeEnd(){const e=this.value[0],t=this.value[1];return!(!e||t||"start"!==this.focusedInput||!this.endInput)}restoreInputFocus(){if(!this.range)return void this.startInput.setFocus();("start"===this.focusedInput?this.startInput:this.endInput).setFocus()}localizeInputValues(){var e;const t=(0,s.f)(this.range?Array.isArray(this.valueAsDate)&&this.valueAsDate[0]||void 0:this.valueAsDate,this.minAsDate,this.maxAsDate),a=this.range?(0,s.f)(Array.isArray(this.valueAsDate)&&this.valueAsDate[1]||void 0,this.minAsDate,this.maxAsDate):null,i={numberingSystem:d.a},n=t&&this.formatNumerals(t.toLocaleDateString(this.effectiveLocale,i)),l=a&&this.formatNumerals(a.toLocaleDateString(this.effectiveLocale,i));this.setInputValue(null!==n&&void 0!==n?n:"","start"),this.setInputValue(null!==(e=this.range&&l)&&void 0!==e?e:"","end")}warnAboutInvalidValue(e){console.warn('The specified value "'.concat(e,'" does not conform to the required format, "YYYY-MM-DD".'))}getNormalizedDate(e){if(!e)return"";if(!function(e){if(!e)return!1;const{year:t}=(0,s.d)(e);return Number(t)<100}(e))return e;const{day:t,month:a,year:i}=(0,s.d)(e),n=function(e){const t=(new Date).getFullYear();return 100*Math.floor(t/100)+e}(Number(i));return"".concat(n,"-").concat(a,"-").concat(t)}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],disabled:["handleDisabledAndReadOnlyChange"],readOnly:["handleDisabledAndReadOnlyChange"],value:["valueWatcher"],valueAsDate:["valueAsDateWatcher"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],min:["onMinChanged"],max:["onMaxChanged"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],layout:["setReferenceEl"],focusedInput:["setReferenceEl"],effectiveLocale:["loadLocaleData"]}}static get style(){return":host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;vertical-align:top;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host .menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host .menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}:host .menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}:host .menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}:host .menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}:host .menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([scale=s]){--calcite-toggle-spacing:0.5rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1rem)}:host([scale=m]){--calcite-toggle-spacing:0.75rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 1.5rem)}:host([scale=l]){--calcite-toggle-spacing:1rem;--calcite-internal-input-text-input-padding-inline-end:calc(var(--calcite-toggle-spacing) + 2rem)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.calendar-picker-wrapper{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:translate3d(0, 0, 0)}.input-wrapper{position:relative}.toggle-icon{position:absolute;display:flex;cursor:pointer;align-items:center;inset-inline-end:0;inset-block:0;padding-inline:var(--calcite-toggle-spacing)}:host([range]) .input-container{display:flex}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{display:flex;align-items:center;border-width:1px;border-inline-start-width:0px;border-inline-end-width:0px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);padding-block:0px;padding-inline:0.25rem}:host([range][layout=vertical]) .input-wrapper{inline-size:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:flex-start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{inset-block-start:1.5rem;position:absolute;z-index:var(--calcite-app-z-index);margin-inline:1px;background-color:var(--calcite-ui-foreground-1);padding-inline:0.625rem;inset-inline-start:0}.menu-container{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.menu-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.menu-container[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.menu-container[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.menu-container[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.menu-container[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.menu-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .menu-container{visibility:visible}.menu-container--active{visibility:visible}.input .calcite-input__wrapper{margin-block-start:0px}:host([range][layout=vertical][scale=m]) .vertical-arrow-container{inset-block-start:1.5rem;padding-inline-start:0.75rem}:host([range][layout=vertical][scale=m]) .vertical-arrow-container calcite-icon{block-size:0.75rem;inline-size:0.75rem;min-inline-size:0px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{inset-block-start:2.25rem;padding-inline:0.875rem}:host([range][layout=vertical][open]) .vertical-arrow-container{display:none}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-input-date-picker",{disabled:[516],focusTrapDisabled:[516,"focus-trap-disabled"],form:[513],readOnly:[516,"read-only"],value:[1025],flipPlacements:[16],headingLevel:[514,"heading-level"],valueAsDate:[1040],messageOverrides:[1040],messages:[1040],minAsDate:[1040],maxAsDate:[1040],min:[1],max:[1],open:[1540],name:[513],numberingSystem:[513,"numbering-system"],scale:[513],status:[513],placement:[513],range:[516],required:[516],overlayPositioning:[513,"overlay-positioning"],proximitySelectionDisabled:[4,"proximity-selection-disabled"],layout:[513],datePickerActiveDate:[32],defaultMessages:[32],effectiveLocale:[32],focusedInput:[32],localeData:[32],setFocus:[64],reposition:[64]},[[0,"calciteDaySelect","calciteDaySelectHandler"]]]);function O(){if("undefined"===typeof customElements)return;["calcite-input-date-picker","calcite-date-picker","calcite-date-picker-day","calcite-date-picker-month","calcite-date-picker-month-header","calcite-icon","calcite-input-text","calcite-progress"].forEach((e=>{switch(e){case"calcite-input-date-picker":customElements.get(e)||customElements.define(e,F);break;case"calcite-date-picker":customElements.get(e)||(0,m.d)();break;case"calcite-date-picker-day":customElements.get(e)||(0,D.d)();break;case"calcite-date-picker-month":customElements.get(e)||(0,I.d)();break;case"calcite-date-picker-month-header":customElements.get(e)||(0,b.d)();break;case"calcite-icon":customElements.get(e)||(0,x.d)();break;case"calcite-input-text":customElements.get(e)||(0,k.d)();break;case"calcite-progress":customElements.get(e)||(0,w.d)()}}))}O();const z=F,V=O}}]);
//# sourceMappingURL=5295.28e6a906.chunk.js.map