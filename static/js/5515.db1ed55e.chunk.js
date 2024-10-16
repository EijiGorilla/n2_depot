"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[5515],{55515:(e,t,a)=>{a.r(t),a.d(t,{createArcadeExecutor:()=>x,createArcadeProfile:()=>Z});var r=a(52639),n=a(51064),o=a(97246),c=a(10064),s=a(84652),i=a(84726),l=a(58237),u=a(64326),p=a(7575),f=a(49818),y=a(819);let m=null;function d(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n=t.elementType,c="value",s="array"===n.type?[{name:c,type:n.type,elementType:n.elementType}]:"dictionary"===n.type?[{name:c,type:n.type,properties:n.properties}]:[{name:c,type:n.type}];return new o.Z(e.map((e=>{const t={};return b(t,s,{[c]:e},a,r),t[c]})))}function v(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=e instanceof f.Z?new u.default({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return t.constructFeatureSet(r,a.spatialReference,null,!0,a.lruCache,a.interceptor)}function h(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const{spatialReference:r,interceptor:n,lruCache:o}=a;return"string"==typeof e?t.createFeatureSetCollectionFromService(e,r,o,n):t.createFeatureSetCollectionFromMap(e,r,o,n)}function g(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const n={};return b(n,t.properties,e,a,r),new m.Dictionary(n)}function b(e,t,a,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const c={};for(const n of Object.keys(a))c[n.toLowerCase()]=a[n];for(const s of t){const t=s.name.toLowerCase();if(o.variablesPreProcessed)e[t]=c[t];else switch(s.type){case"array":{const a=c[t];e[t]=null==a?null:d(a,s,r,o);break}case"feature":{const a=c[t];e[t]=null==a?null:m.Feature.createFromGraphic(a,null===o||void 0===o?void 0:o.timeZone);break}case"featureSet":{const a=c[t];e[t]=null==a?null:r?v(a,r,o):null;break}case"featureSetCollection":{const a=c[t];e[t]=null==a?null:r?h(a,r,o):null;break}case"dictionary":{const a=c[t];e[t]=null==a?null:g(a,s,r,o);break}case"date":{const a=c[t];e[t]=a?a instanceof n.iG?a:null!==o&&void 0!==o&&o.timeZone?n.iG.dateJSAndZoneToArcadeDate(a,null===o||void 0===o?void 0:o.timeZone):n.iG.dateJSToArcadeDate(a):null;break}case"dateOnly":{const a=c[t];e[t]=a?a instanceof i.u?a:i.u.fromReader(a):null;break}case"time":{const a=c[t];e[t]=a?a instanceof l.n?a:l.n.fromReader(a):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[t]=c[t]}}}function S(e,t){for(const a of e)t.push(a),"dictionary"===a.type&&S(a.properties,t);return t}function w(e,t,a,r,n){const{spatialReference:o,interceptor:c,lruCache:s,console:i,abortSignal:l,timeZone:u,services:f={portal:p.Z.getDefault()}}=a,y={vars:{},spatialReference:o,interceptor:c,timeZone:u,lrucache:s,useAsync:n,services:f,console:i,abortSignal:l};return t?(b(y.vars,e.variables,t,r,a),y):y}function C(e,t){switch(t.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const t=(e.type,e),a="geometry"in t?t.geometry():null,n="readAttributes"in t?t.readAttributes():t.attributes;return new r.Z({geometry:a,attributes:n})}case"dictionary":{const a=e,r=a.attributes,n={};for(const e of Object.keys(r))n[e]=C(a.field(e),t);return n}case"array":return("toArray"in e?e.toArray():e).map((e=>C(e,t)))}return e}const $={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},A={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},k=new Map([["aggregate-field",{variables:[{name:"$feature",type:"feature"}]}],["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",$],["popup-element",$],["feature-reduction-popup",A],["feature-reduction-popup-element",A],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]]);function Z(e){const t=k.get(e);if(!t){const t=Array.from(k.keys()).map((e=>"'".concat(e,"'"))).join(", ");throw new c.Z("createArcadeProfile:invalid-profile-name","Invalid profile name '".concat(e,"'. You must specify one of the following values: ").concat(t))}return(0,s.d9)(t)}async function x(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};m||(m=await(0,y.LC)());const{arcade:r,arcadeUtils:n}=m,{loadScriptDependencies:o,referencesMember:s,scriptIsAsync:i}=r,l=S(t.variables,[]),u=l.filter((e=>"featureSet"===e.type||"featureSetCollection"===e.type)).map((e=>e.name.toLowerCase())),p=r.parseScript(e,u);if(!p)throw new c.Z("arcade:invalid-script","Unable to create SyntaxTree");const f=n.extractFieldNames(p),d=r.scriptTouchesGeometry(p),v=l.map((e=>e.name.toLowerCase())).filter((e=>s(p,e))),h=i(p,u);await o(p,h,u);const g={vars:{},spatialReference:null,useAsync:h};for(const c of v)g.vars[c]="any";const{lruCache:b}=a,$=r.compileScript(p,g),A=r.featureSetUtils(),{services:k}=a;return{execute:function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(h)throw new c.Z("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const r=$(w(t,e,{lruCache:b,...a},A,h));return a.rawOutput?r:C(r,n)},executeAsync:async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=await $(w(t,e,{lruCache:b,services:k,...a},A,h));return a.rawOutput?r:C(r,n)},isAsync:h,variablesUsed:v,fieldsUsed:f,geometryUsed:d,syntaxTree:p}}},97246:(e,t,a)=>{a.d(t,{Z:()=>r});class r{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this._elements=e}length(){return this._elements.length}get(e){return this._elements[e]}toArray(){return this.slice()}slice(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.length();const a=[];for(let r=e;r<t;r++)a.push(this.get(r));return a}}}}]);
//# sourceMappingURL=5515.db1ed55e.chunk.js.map