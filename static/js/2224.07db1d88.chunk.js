"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[2224],{2224:(e,t,a)=>{a.d(t,{save:()=>N,saveAs:()=>O});var r=a(63780),n=(a(10064),a(65286)),o=a(25899),i=a(74368),s=a(37933),l=a(19610),c=a(73117);const u="Feature Service",d="feature-layer-utils",y="".concat(d,"-save"),f="".concat(d,"-save-as");"".concat(d,"-saveall"),"".concat(d,"-saveall-as");function p(e){return{isValid:(0,s.fP)(e)&&("feature"!==e.type||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e){const t=[],a=[];for(const{layer:r,layerJSON:n}of e)r.isTable?a.push(n):t.push(n);return{layers:t,tables:a}}function v(e){return m([e])}async function w(e,t){return/\/\d+\/?$/.test(e.url)?v(t[0]):h(t,e)}async function h(e,t){if(e.reverse(),!t)return m(e);const a=await async function(e,t){let a=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(a))return a;a||(a={}),function(e){e.layers||(e.layers=[]),e.tables||(e.tables=[])}(a);const{layer:{url:r,customParameters:n,apiKey:o}}=t[0];return await async function(e,t,a){const{url:r,customParameters:n,apiKey:o}=t,{serviceJSON:s,layersJSON:c}=await(0,i.V)(r,{customParameters:n,apiKey:o}),u=S(e.layers,s.layers,a),d=S(e.tables,s.tables,a);e.layers=u.itemResources,e.tables=d.itemResources;const y=[...u.added,...d.added],f=c?[...c.layers,...c.tables]:[];await async function(e,t,a,r){const n=await async function(e){const t=[];e.forEach((e=>{let{type:a}=e;const r=(0,i.W)(a),n=l.T[r];t.push(n())}));const a=await Promise.all(t),r=new Map;return e.forEach(((e,t)=>{let{type:n}=e;r.set(n,a[t])})),r}(t),o=t.map((e=>{let{id:t,type:o}=e;return new(n.get(o))({url:a,layerId:t,sourceJSON:r.find((e=>{let{id:a}=e;return a===t}))})}));await Promise.allSettled(o.map((e=>e.load()))),o.forEach((t=>{const{layerId:a,loaded:r,defaultPopupTemplate:n}=t;if(!r||null==n)return;const o={id:a,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(o.layerType=t.operationalLayerType),T(t,o,e)}))}(e,y,r,f)}(a,{url:null!==r&&void 0!==r?r:"",customParameters:n,apiKey:o},t.map((e=>e.layer.layerId))),a}(t,e);for(const r of e)T(r.layer,r.layerJSON,a);return function(e,t){const a=[],r=[];for(const{layer:n}of t){const{isTable:e,layerId:t}=n;e?r.push(t):a.push(t)}b(e.layers,a),b(e.tables,r)}(a,e),a}function b(e,t){if(e.length<2)return;const a=[];for(const{id:r}of e)a.push(r);(0,r.fS)(a.sort(I),t.slice().sort(I))&&e.sort(((e,a)=>{const r=t.indexOf(e.id),n=t.indexOf(a.id);return r<n?-1:r>n?1:0}))}function I(e,t){return e<t?-1:e>t?1:0}function S(e,t,a){const n=(0,r.e5)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const o=n.added;return o.forEach((t=>{let{id:a}=t;e.push({id:a})})),{itemResources:e,added:o.filter((e=>{let{id:t}=e;return!a.includes(t)}))}}function T(e,t,a){e.isTable?L(a.tables,t):L(a.layers,t)}function L(e,t){const a=e.findIndex((e=>{let{id:a}=e;return a===t.id}));-1===a?e.push(t):e[a]=t}async function P(e,t){var a;const{url:r,layerId:n,title:i,fullExtent:s,isTable:l}=e,u=(0,o.Qc)(r);t.url=null!==(a="FeatureServer"===(null===u||void 0===u?void 0:u.serverType)?r:"".concat(r,"/").concat(n))&&void 0!==a?a:null,t.title||(t.title=i),t.extent=null,l||null==s||(t.extent=await(0,c.$o)(s)),(0,c.ck)(t,c.hz.METADATA),(0,c.ck)(t,c.hz.MULTI_LAYER),(0,c.qj)(t,c.hz.SINGLE_LAYER),l&&(0,c.qj)(t,c.hz.TABLE)}async function N(e,t){return(0,n.a1)({layer:e,itemType:u,validateLayer:p,createItemData:(e,t)=>w(t,[e]),errorNamePrefix:y},t)}async function O(e,t,a){return(0,n.po)({layer:e,itemType:u,validateLayer:p,createItemData:(e,t)=>Promise.resolve(v(e)),errorNamePrefix:f,newItem:t,setItemProperties:P},a)}},65286:(e,t,a)=>{a.d(t,{a1:()=>b,po:()=>I});var r=a(10064),n=a(15909),o=a(7575),i=a(98995),s=a(32698),l=a(73117),c=a(76926),u=a(9634);async function d(e){const{layer:t,errorNamePrefix:a,validateLayer:n}=e;await t.load(),function(e,t,a){const n=a(e);if(!n.isValid)throw new r.Z("".concat(t,":invalid-parameters"),n.errorMessage,{layer:e})}(t,a,n)}function y(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function f(e){const{item:t,errorNamePrefix:a,layer:n,validateItem:o}=e;if((0,c.w)(t),function(e){const{item:t,itemType:a,additionalItemType:n,errorNamePrefix:o,layer:i}=e,s=[a];if(n&&s.push(n),!s.includes(t.type)){const e=s.map((e=>"'".concat(e,"'"))).join(", ");throw new r.Z("".concat(o,":portal-item-wrong-type"),'Portal item type should be one of: "'.concat(e,'"'),{item:t,layer:i})}}(e),o){const e=o(t);if(!e.isValid)throw new r.Z("".concat(a,":invalid-parameters"),e.errorMessage,{layer:n})}}function p(e){const{layer:t,errorNamePrefix:a}=e,{portalItem:n}=t;if(!n)throw new r.Z("".concat(a,":portal-item-not-set"),y(t,"requires the portalItem property to be set"));if(!n.loaded)throw new r.Z("".concat(a,":portal-item-not-loaded"),y(t,"cannot be saved to a portal item that does not exist or is inaccessible"));f({...e,item:n})}function m(e){var t,a,r,n;const{newItem:s,itemType:l}=e;let c=i.default.from(s);return c.id&&(c=c.clone(),c.id=null),null!==(a=(t=c).type)&&void 0!==a||(t.type=l),null!==(n=(r=c).portal)&&void 0!==n||(r.portal=o.Z.getDefault()),f({...e,item:c}),c}function v(e){return(0,s.Y)(e,"portal-item")}async function w(e,t,a){var r,n;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const o=e.write({},t);return await Promise.all(null!==(r=null===(n=t.resources)||void 0===n?void 0:n.pendingOperations)&&void 0!==r?r:[]),(0,u.z)(t,{errorName:"layer-write:unsupported"},a),o}function h(e){(0,l.qj)(e,l.hz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,a)=>a.indexOf(e)===t)))}async function b(e,t){const{layer:a,createItemData:r,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await d(e),p(e);const c=a.portalItem,u=o?o(c):v(c),y=await w(a,u,{...t,supplementalUnsupportedErrors:l}),f=await r({layer:a,layerJSON:y},c);return await(null===i||void 0===i?void 0:i(a,c)),h(c),await c.update({data:f}),(0,n.D)(u),await(null===s||void 0===s?void 0:s(c,u)),c}async function I(e,t){const{layer:a,createItemData:r,createJSONContext:o,setItemProperties:i,saveResources:s,supplementalUnsupportedErrors:l}=e;await d(e);const c=m(e),u=o?o(c):v(c),y=await w(a,u,{...t,supplementalUnsupportedErrors:l}),f=await r({layer:a,layerJSON:y},c);return await i(a,c),h(c),await async function(e,t,a){var r;const n=e.portal;await n.signIn(),await(null===(r=n.user)||void 0===r?void 0:r.addItem({item:e,data:t,folder:null===a||void 0===a?void 0:a.folder}))}(c,f,t),a.portalItem=c,(0,n.D)(u),await(null===s||void 0===s?void 0:s(c,u)),c}},74368:(e,t,a)=>{a.d(t,{V:()=>o,W:()=>y});var r=a(41226);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function o(e,t){var a;const{loadContext:n,...o}=t||{},i=n?await n.fetchServiceMetadata(e,o):await(0,r.T)(e,o);d(i),l(i);const s={serviceJSON:i};if((null!==(a=i.currentVersion)&&void 0!==a?a:0)<10.5)return s;const c="".concat(e,"/layers"),u=n?await n.fetchServiceMetadata(c,o):await(0,r.T)(c,o);return d(u),l(u),s.layersJSON={layers:u.layers,tables:u.tables},s}function i(e){const{type:t}=e;return!!t&&n.has(t)}function s(e){return"Table"===e.type}function l(e){var t,a;e.layers=null===(t=e.layers)||void 0===t?void 0:t.filter(i),e.tables=null===(a=e.tables)||void 0===a?void 0:a.filter(s)}function c(e){e.type||(e.type="Feature Layer")}function u(e){e.type||(e.type="Table")}function d(e){var t,a;null!==(t=e.layers)&&void 0!==t&&t.forEach(c),null===(a=e.tables)||void 0===a||a.forEach(u)}function y(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},41226:(e,t,a)=>{a.d(t,{T:()=>n});var r=a(76200);async function n(e,t){const{data:a}=await(0,r.Z)(e,{responseType:"json",query:{f:"json",...null===t||void 0===t?void 0:t.customParameters,token:null===t||void 0===t?void 0:t.apiKey}});return a}}}]);
//# sourceMappingURL=2224.07db1d88.chunk.js.map