"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[4763,641],{10641:(e,t,i)=>{i.r(t),i.d(t,{CIMSymbolRasterizer:()=>c});var n=i(82272),a=i(51e3);class l{constructor(){this._resourceMap=new Map,this._inFlightResourceMap=new Map,this.geometryEngine=null,this.geometryEnginePromise=null}destroy(){this._inFlightResourceMap.clear(),this._resourceMap.clear()}getResource(e){var t;return null!==(t=this._resourceMap.get(e))&&void 0!==t?t:null}async fetchResource(e,t){const i=this._resourceMap.get(e);if(i)return{width:i.width,height:i.height};let n=this._inFlightResourceMap.get(e);return n?n.then((e=>({width:e.width,height:e.height}))):(n=(0,a.n$)(e,t),this._inFlightResourceMap.set(e,n),n.then((t=>(this._inFlightResourceMap.delete(e),this._resourceMap.set(e,t),{width:t.width,height:t.height})),(()=>({width:0,height:0}))))}deleteResource(e){this._inFlightResourceMap.delete(e),this._resourceMap.delete(e)}loadFont(e){return(0,n.mx)(e)}}var r=i(33795),s=i(94457),o=i(26707),h=i(31027);class c{constructor(e){this._spatialReference=e,this._imageDataCanvas=null,this._cimResourceManager=new l}get _canvas(){return this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas")),this._imageDataCanvas}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(e,t,i,n,a,l,r,c,g){if(!e)return null;const{data:d}=e;if(!d||"CIMSymbolReference"!==d.type||!d.symbol)return null;const{symbol:y}=d;l||(l=(0,h.JW)(y));const m=await o.E.resolveSymbolOverrides(d,t,this._spatialReference,a,l,r,c),w=this._cimResourceManager,p=[];s.B$.fetchResources(m,w,p),s.B$.fetchFonts(m,w,p),p.length>0&&await Promise.all(p);const{width:f,height:M}=i,b=u(l,f,M,n),v=s.B$.getEnvelope(m,b,w);if(!v)return null;let _=1,R=0,C=0;switch(y.type){case"CIMPointSymbol":case"CIMTextSymbol":{let e=1;v.width>f&&(e=f/v.width);let t=1;v.height>M&&(t=M/v.height),"preview"===n&&(v.width<f&&(e=f/v.width),v.height<M&&(t=M/v.height)),_=Math.min(e,t),R=v.x+v.width/2,C=v.y+v.height/2}break;case"CIMLineSymbol":{(g||v.height>M)&&(_=M/v.height),C=v.y+v.height/2;const e=v.x*_+f/2,t=(v.x+v.width)*_+f/2,{paths:i}=b;i[0][0][0]-=e/_,i[0][2][0]-=(t-f)/_}break;case"CIMPolygonSymbol":{R=v.x+v.width/2,C=v.y+v.height/2;const e=v.x*_+f/2,t=(v.x+v.width)*_+f/2,i=v.y*_+M/2,n=(v.y+v.height)*_+M/2,{rings:a}=b;e<0&&(a[0][0][0]-=e,a[0][3][0]-=e,a[0][4][0]-=e),i<0&&(a[0][0][1]+=i,a[0][1][1]+=i,a[0][4][1]+=i),t>f&&(a[0][1][0]-=t-f,a[0][2][0]-=t-f),n>M&&(a[0][2][1]+=n-M,a[0][3][1]+=n-M)}}const S={type:"cim",data:{type:"CIMSymbolReference",symbol:m}};return this.rasterize(S,f,M,R,C,_,l,1,b)}rasterize(e,t,i,n,a,l,s){let o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,c=arguments.length>8&&void 0!==arguments[8]?arguments[8]:null;const{data:g}=e;if(!g||"CIMSymbolReference"!==g.type||!g.symbol)return null;const{symbol:d}=g,y=this._canvas,m=1.3333333333333333*(window.devicePixelRatio||1);y.width=t*m,y.height=i*m,s||(s=(0,h.JW)(d)),c||(c=u(s,t,i,"legend")),y.width+=2*o,y.height+=2*o;const w=y.getContext("2d",{willReadFrequently:!0}),p=r.zA.createIdentity();return p.translate(-n,-a),p.scale(l*m,-l*m),p.translate(t*m/2+o,i*m/2+o),w.clearRect(0,0,y.width,y.height),new r.cD(w,this._cimResourceManager,p,!0).drawSymbol(d,c),w.getImageData(0,0,y.width,y.height)}}function u(e,t,i,n){const a=-t/2+1,l=t/2-1,r=i/2-1,s=-i/2+1;switch(e){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[a,0],[0,0],[l,0]]]};default:return"legend"===n?{rings:[[[a,r],[l,0],[l,s],[a,s],[a,r]]]}:{rings:[[[a,r],[l,r],[l,s],[a,s],[a,r]]]}}}},54763:(e,t,i)=>{i.d(t,{previewCIMSymbol:()=>w});var n=i(17842),a=i(94457),l=i(10641),r=i(26707),s=i(31027),o=i(37817),h=i(69157);const c=new l.CIMSymbolRasterizer(null),u=(0,n.Wz)(o.b_.size),g=(0,n.Wz)(o.b_.maxSize),d=(0,n.Wz)(o.b_.lineWidth),y=1;async function m(e,t,i){const n=null===t||void 0===t?void 0:t.size;let l=null!=n&&"object"==typeof n&&"width"in n?n.width:n,s=null!=n&&"object"==typeof n&&"height"in n?n.height:n;if(null==l||null==s)if("esriGeometryPolygon"===i)l=u,s=u;else{const n=await async function(e,t,i){const{feature:n,fieldMap:l,viewParams:s}=t.cimOptions||t,o=await r.E.resolveSymbolOverrides(e.data,n,null,l,i,null,s);if(!o)return null;(e=e.clone()).data={type:"CIMSymbolReference",symbol:o},e.data.primitiveOverrides=void 0;const h=[];return a.B$.fetchResources(o,c.resourceManager,h),a.B$.fetchFonts(o,c.resourceManager,h),h.length>0&&await Promise.all(h),a.B$.getEnvelope(o,null,c.resourceManager)}(e,t,i);n&&(l=n.width,s=n.height),"esriGeometryPolyline"===i&&(l=d),l=null!=l&&isFinite(l)?Math.min(l,g):u,s=null!=s&&isFinite(s)?Math.max(Math.min(s,g),y):u}return"legend"===t.style&&"esriGeometryPolyline"===i&&(l=d),{width:l,height:s}}async function w(e){var t,i,a;let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{node:r,opacity:o,symbolConfig:u}=l,g=null!=u&&"object"==typeof u&&"isSquareFill"in u&&u.isSquareFill,d=l.cimOptions||l,y=d.geometryType||(0,s.JW)(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.symbol),w=await m(e,l,y),{feature:p,fieldMap:f}=d,M=g||"esriGeometryPolygon"!==y?"preview":"legend",b=await c.rasterizeCIMSymbolAsync(e,p,w,M,f,y,null,d.viewParams,d.allowScalingUp);if(!b)return null;const{width:v,height:_}=b,R=document.createElement("canvas");R.width=v,R.height=_,R.getContext("2d").putImageData(b,0,0);const C=(0,n.F2)(w.width),S=(0,n.F2)(w.height),I=new Image(C,S);I.src=R.toDataURL(),I.ariaLabel=null!==(i=l.ariaLabel)&&void 0!==i?i:null,I.alt=null!==(a=l.ariaLabel)&&void 0!==a?a:"",null!=o&&(I.style.opacity="".concat(o));let F=I;if(null!=l.effectView){const e={shape:{type:"image",x:0,y:0,width:C,height:S,src:I.src},fill:null,stroke:null,offset:[0,0]};F=(0,h.wh)([[e]],[C,S],{effectView:l.effectView,ariaLabel:l.ariaLabel})}return r&&F&&r.appendChild(F),F}}}]);
//# sourceMappingURL=4763.7d880412.chunk.js.map