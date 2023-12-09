"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[6126],{36126:(e,t,r)=>{r.d(t,{save:()=>p,saveAs:()=>d});var a=r(65286),o=r(73117);const n="Stream Service",i="stream-layer-save",l="stream-layer-save-as";function s(e){return{isValid:"stream"===e.type&&!!e.url&&!e.webSocketUrl,errorMessage:"Stream layer should be created using a url to a stream service"}}function u(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function c(e,t){const{parsedUrl:r,title:a,fullExtent:n}=e;t.url=r.path,t.title||(t.title=a),t.extent=null,null!=n&&(t.extent=await(0,o.$o)(n)),(0,o.qj)(t,o.Kz.SINGLE_LAYER)}async function p(e,t){return(0,a.a1)({layer:e,itemType:n,validateLayer:s,createItemData:u,errorNamePrefix:i},t)}async function d(e,t,r){return(0,a.po)({layer:e,itemType:n,validateLayer:s,createItemData:u,errorNamePrefix:l,newItem:t,setItemProperties:c},r)}},65286:(e,t,r)=>{r.d(t,{a1:()=>w,po:()=>g});var a=r(10064),o=r(15909),n=r(7575),i=r(98995),l=r(32698),s=r(73117),u=r(81359);async function c(e){const{layer:t,errorNamePrefix:r,validateLayer:o}=e;await t.load(),function(e,t,r){const o=r(e);if(!o.isValid)throw new a.Z("".concat(t,":invalid-parameters"),o.errorMessage,{layer:e})}(t,r,o)}function p(e,t){return"Layer (title: ".concat(e.title,", id: ").concat(e.id,") of type '").concat(e.declaredClass,"' ").concat(t)}function d(e){const{item:t,itemType:r,errorNamePrefix:o,layer:n,validateItem:i}=e;if((0,u.w)(t),t.type!==r)throw new a.Z("".concat(o,":portal-item-wrong-type"),'Portal item type should be "'.concat(r,'"'),{item:t,layer:n});if(i){const e=i(t);if(!e.isValid)throw new a.Z("".concat(o,":invalid-parameters"),e.errorMessage,{layer:n})}}function m(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:o}=t;if(!o)throw new a.Z("".concat(r,":portal-item-not-set"),p(t,"requires the portalItem property to be set"));if(!o.loaded)throw new a.Z("".concat(r,":portal-item-not-loaded"),p(t,"cannot be saved to a portal item that does not exist or is inaccessible"));d({...e,item:o})}function y(e){var t,r,a,o;const{newItem:l,itemType:s}=e;let u=i.default.from(l);return u.id&&(u=u.clone(),u.id=null),null!==(r=(t=u).type)&&void 0!==r||(t.type=s),null!==(o=(a=u).portal)&&void 0!==o||(a.portal=n.Z.getDefault()),d({...e,item:u}),u}async function f(e,t,r){var o,n;"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const i=e.write({},t);return await Promise.all(null!==(o=null===(n=t.resources)||void 0===n?void 0:n.pendingOperations)&&void 0!==o?o:[]),function(e,t){var r;let o=(null!==(r=e.messages)&&void 0!==r?r:[]).filter((e=>{let{type:t}=e;return"error"===t})).map((e=>{let{name:t,message:r,details:o}=e;return new a.Z(t,r,o)}));if(e.blockedRelativeUrls&&(o=o.concat(e.blockedRelativeUrls.map((e=>new a.Z("url:unsupported","Relative url '".concat(e,"' is not supported")))))),null!==t&&void 0!==t&&t.ignoreUnsupported&&(o=o.filter((e=>{let{name:t}=e;return"layer:unsupported"!==t&&"symbol:unsupported"!==t&&"symbol-layer:unsupported"!==t&&"property:unsupported"!==t&&"url:unsupported"!==t}))),o.length>0)throw new a.Z("layer-write:unsupported","Failed to save layer due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:o})}(t,r),i}function v(e){(0,s.qj)(e,s.Kz.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function w(e,t){const{layer:r,createItemData:a,createJSONContext:n,saveResources:i}=e;await c(e),m(e);const s=r.portalItem,u=n?n(s):(0,l.Yv)(s),p=await f(r,u,t),d=await a({layer:r,layerJSON:p},s);return v(s),await s.update({data:d}),(0,o.D)(u),await(null===i||void 0===i?void 0:i(s,u)),s}async function g(e,t){const{layer:r,createItemData:a,createJSONContext:n,setItemProperties:i,saveResources:s}=e;await c(e);const u=y(e),p=n?n(u):(0,l.Yv)(u),d=await f(r,p,t),m=await a({layer:r,layerJSON:d},u);return await i(r,u),v(u),await async function(e,t,r){var a;const o=e.portal;await o.signIn(),await(null===(a=o.user)||void 0===a?void 0:a.addItem({item:e,data:t,folder:null===r||void 0===r?void 0:r.folder}))}(u,m,t),r.portalItem=u,(0,o.D)(p),await(null===s||void 0===s?void 0:s(u,p)),u}},32698:(e,t,r)=>{r.d(t,{M4:()=>s,Yv:()=>i,ht:()=>n,wk:()=>l});var a=r(35995),o=r(7575);function n(e){return{origin:"portal-item",url:(0,a.mN)(e.itemUrl),portal:e.portal||o.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function i(e){const t=(0,a.mN)(e.itemUrl);return{origin:"portal-item",messages:[],writtenProperties:[],url:t,portal:e.portal||o.Z.getDefault(),portalItem:e,verifyItemRelativeUrls:t?{rootPath:t.path,writtenUrls:[]}:null,blockedRelativeUrls:[]}}function l(e){return{origin:"web-map",url:(0,a.mN)(e.itemUrl),portal:e.portal||o.Z.getDefault(),portalItem:e,readResourcePaths:[]}}function s(e,t){const r=(0,a.mN)(e.itemUrl);return{origin:"web-map",messages:[],writtenProperties:[],url:r,portal:e.portal||o.Z.getDefault(),portalItem:e,initiator:t,verifyItemRelativeUrls:r?{rootPath:r.path,writtenUrls:[]}:null,blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}}}}}]);
//# sourceMappingURL=6126.5e2b0512.chunk.js.map