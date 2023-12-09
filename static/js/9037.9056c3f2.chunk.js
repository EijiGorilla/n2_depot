"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[9037],{32500:(e,t,i)=>{i.d(t,{I:()=>E,b:()=>x});var n,s,r,a=i(30168),o=i(37081),l=i(33280),d=i(94951),u=i(15226),h=i(26461),p=i(116),c=i(41012),_=i(58406),m=i(98634),y=i(64201),v=i(19253),g=i(25920),f=i(4760);function x(e){const t=new y.kG,{vertex:i,fragment:x}=t;return(0,c.Sv)(i,e),t.include(d.w,e),t.attributes.add(f.T.POSITION,"vec3"),t.attributes.add(f.T.UV0,"vec2"),e.perspectiveInterpolation&&t.attributes.add(f.T.PERSPECTIVEDIVIDE,"float"),t.varyings.add("vpos","vec3"),e.multipassEnabled&&t.varyings.add("depth","float"),i.code.add((0,m.H)(n||(n=(0,a.Z)(["\n    void main(void) {\n      vpos = position;\n      ","\n      vTexCoord = uv0;\n      gl_Position = transformPosition(proj, view, vpos);\n\n      ","\n    }\n  "])),e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":"",e.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":"")),t.include(l.f5,e),t.include(u.l,e),x.uniforms.add(new v.A("tex",(e=>e.texture)),new _.p("opacity",(e=>e.opacity))),t.varyings.add("vTexCoord","vec2"),e.output===o.H.Alpha?x.code.add((0,m.H)(s||(s=(0,a.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n\n      float alpha = texture(tex, vTexCoord).a * opacity;\n      if (alpha  < ",") {\n        discard;\n      }\n\n      fragColor = vec4(alpha);\n    }\n    "])),e.multipassEnabled?"terrainDepthTest(depth);":"",m.H.float(h.F))):(x.include(p.Y),x.code.add((0,m.H)(r||(r=(0,a.Z)(["\n    void main() {\n      discardBySlice(vpos);\n      ","\n      fragColor = texture(tex, vTexCoord) * opacity;\n\n      if (fragColor.a < ",") {\n        discard;\n      }\n\n      fragColor = highlightSlice(fragColor, vpos);\n      ","\n    }\n    "])),e.multipassEnabled?"terrainDepthTest(depth);":"",m.H.float(h.F),e.transparencyPassType===g.A.Color?"fragColor = premultiplyAlpha(fragColor);":""))),t}const E=Object.freeze(Object.defineProperty({__proto__:null,build:x},Symbol.toStringTag,{value:"Module"}))},67593:(e,t,i)=>{i.d(t,{E:()=>p,H:()=>h});var n=i(22753),s=i(11873),r=i(88396),a=i(11186);const o=(0,i(71353).c)(),l=(0,s.a)(),d=(0,s.a)(),u=(0,s.a)();function h(e,t,i){return(0,a.s)(o,t[0],t[1],1),(0,a.t)(o,o,(0,n.t)(l,i)),0===o[2]?(0,r.s)(e,o[0],o[1]):(0,r.s)(e,o[0]/o[2],o[1]/o[2])}function p(e,t,i){return c(d,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),c(u,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]),(0,n.m)(e,(0,n.a)(d,d),u),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e}function c(e,t,i,s,r,d,u,h,p){(0,n.s)(e,t,s,d,i,r,u,1,1,1),(0,a.s)(o,h,p,1),(0,n.a)(l,e);const[c,_,m]=(0,a.t)(o,o,(0,n.t)(l,l));return(0,n.s)(l,c,0,0,0,_,0,0,0,m),(0,n.m)(e,l,e)}},47991:(e,t,i)=>{i.d(t,{SR:()=>h,Ui:()=>u});var n=i(46784),s=i(65156),r=i(376),a=i(69662),o=i(77981),l=i(76335),d=i(92975);function u(e){return p(e,!0)}function h(e){return p(e,!1)}function p(e,t){if(null==e)return null;const i=e.spatialReference,s=(0,d.C5)(i),a=(0,n.AK)(e)?e.toJSON():e;if(!s)return a;const u=(0,d.sS)(i)?102100:4326,h=l.UZ[u].maxX,p=l.UZ[u].minX;if((0,o.wp)(a))return _(a,h,p);if((0,o.aW)(a))return a.points=a.points.map((e=>_(e,h,p))),a;if((0,o.YX)(a))return c(a,s);if((0,o.oU)(a)||(0,o.l9)(a)){const e=(0,r.$P)(x,a),i={xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3]},n=(0,l.XZ)(i.xmin,p)*(2*h),s=0===n?a:(0,l.Sy)(a,n);return i.xmin+=n,i.xmax+=n,i.xmax>h?g(s,h,t):i.xmin<p?g(s,p,t):s}return a}function c(e,t){if(!t)return e;const i=function(e,t){const i=[],{ymin:n,ymax:s,xmin:r,xmax:a}=e,o=e.xmax-e.xmin,[l,d]=t.valid,{x:u,frameId:h}=m(e.xmin,t),{x:p,frameId:c}=m(e.xmax,t),_=u===p&&o>0;if(o>2*d){const e={xmin:r<a?u:p,ymin:n,xmax:d,ymax:s},t={xmin:l,ymin:n,xmax:r<a?p:u,ymax:s},o={xmin:0,ymin:n,xmax:d,ymax:s},_={xmin:l,ymin:n,xmax:0,ymax:s},m=[],v=[];y(e,o)&&m.push(h),y(e,_)&&v.push(h),y(t,o)&&m.push(c),y(t,_)&&v.push(c);for(let i=h+1;i<c;i++)m.push(i),v.push(i);i.push(new f(e,[h]),new f(t,[c]),new f(o,m),new f(_,v))}else u>p||_?i.push(new f({xmin:u,ymin:n,xmax:d,ymax:s},[h]),new f({xmin:l,ymin:n,xmax:p,ymax:s},[c])):i.push(new f({xmin:u,ymin:n,xmax:p,ymax:s},[h]));return i}(e,t).map((e=>e.extent));return i.length<2?i[0]||e:i.length>2?(e.xmin=t.valid[0],e.xmax=t.valid[1],e):{rings:i.map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}}function _(e,t,i){if(Array.isArray(e)){const n=e[0];if(n>t){const i=(0,l.XZ)(n,t);e[0]=n+i*(-2*t)}else if(n<i){const t=(0,l.XZ)(n,i);e[0]=n+t*(-2*i)}}else{const n=e.x;if(n>t){const i=(0,l.XZ)(n,t);e.x+=i*(-2*t)}else if(n<i){const t=(0,l.XZ)(n,i);e.x+=t*(-2*i)}}return e}function m(e,t){const[i,n]=t.valid,s=2*n;let r,a=0;return e>n?(r=Math.ceil(Math.abs(e-n)/s),e-=r*s,a=r):e<i&&(r=Math.ceil(Math.abs(e-i)/s),e+=r*s,a=-r),{x:e,frameId:a}}function y(e,t){const{xmin:i,ymin:n,xmax:s,ymax:r}=t;return v(e,i,n)&&v(e,i,r)&&v(e,s,r)&&v(e,s,n)}function v(e,t,i){return t>=e.xmin&&t<=e.xmax&&i>=e.ymin&&i<=e.ymax}function g(e,t){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const n=!(0,o.l9)(e);if(n&&(0,a.Zy)(e),i)return(new E).cut(e,t);const s=n?e.rings:e.paths,r=n?4:2,l=s.length,d=-2*t;for(let a=0;a<l;a++){const e=s[a];if(e&&e.length>=r){const t=[];for(const i of e)t.push([i[0]+d,i[1]]);s.push(t)}}return n?e.rings=s:e.paths=s,e}class f{constructor(e,t){this.extent=e,this.frameIds=t}}const x=(0,s.Ue)();class E{constructor(){this._linesIn=[],this._linesOut=[]}cut(e,t){let i;if(this._xCut=t,e.rings)this._closed=!0,i=e.rings,this._minPts=4;else{if(!e.paths)return null;this._closed=!1,i=e.paths,this._minPts=2}for(const s of i){if(!s||s.length<this._minPts)continue;let e=!0;for(const t of s)e?(this.moveTo(t),e=!1):this.lineTo(t);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),i=[];for(const s of this._linesIn)s&&s.length>=this._minPts&&i.push(s);const n=-2*this._xCut;for(const s of this._linesOut)if(s&&s.length>=this._minPts){for(const e of s)e[0]+=n;i.push(s)}return this._closed?e.rings=i:e.paths=i,e}moveTo(e){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(e[0]),this._moveTo(e[0],e[1],this._prevSide),this._prevPt=e,this._firstPt=e}lineTo(e){const t=this._side(e[0]);if(t*this._prevSide==-1){const i=this._intersect(this._prevPt,e);this._lineTo(this._xCut,i,0),this._prevSide=0,this._lineTo(e[0],e[1],t)}else this._lineTo(e[0],e[1],t);this._prevSide=t,this._prevPt=e}close(){const e=this._firstPt,t=this._prevPt;e[0]===t[0]&&e[1]===t[1]||this.lineTo(e),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(e,t,i){this._closed?(this._lineIn.push([i<=0?e:this._xCut,t]),this._lineOut.push([i>=0?e:this._xCut,t])):(i<=0&&this._lineIn.push([e,t]),i>=0&&this._lineOut.push([e,t]))}_lineTo(e,t,i){this._closed?(this._addPolyVertex(this._lineIn,i<=0?e:this._xCut,t),this._addPolyVertex(this._lineOut,i>=0?e:this._xCut,t)):i<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([e,t])):i>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([e,t])):this._prevSide<0?(this._lineIn.push([e,t]),this._lineOut.push([e,t])):this._prevSide>0&&(this._lineOut.push([e,t]),this._lineIn.push([e,t]))}_addPolyVertex(e,t,i){const n=e.length;n>1&&e[n-1][0]===t&&e[n-2][0]===t?e[n-1][1]=i:e.push([t,i])}_checkClosingPt(e){const t=e.length;t>3&&e[0][0]===this._xCut&&e[t-2][0]===this._xCut&&e[1][0]===this._xCut&&(e[0][1]=e[t-2][1],e.pop())}_side(e){return e<this._xCut?-1:e>this._xCut?1:0}_intersect(e,t){const i=(this._xCut-e[0])/(t[0]-e[0]);return e[1]+i*(t[1]-e[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}},59568:(e,t,i)=>{i.d(t,{L:()=>h});var n=i(27366),s=i(7138),r=i(49861),a=(i(25243),i(63780),i(93169),i(69912)),o=i(80885),l=i(79803),d=i(65156),u=i(47991);let h=class extends s.Z{constructor(e){super(e)}get bounds(){const e=this.coords;return null==(null===e||void 0===e?void 0:e.extent)?null:(0,d.oJ)(e.extent)}get coords(){var e;const t=null===(e=this.element.georeference)||void 0===e?void 0:e.coords;return(0,l.projectOrLoad)(t,this.spatialReference).geometry}get normalizedCoords(){return o.Z.fromJSON((0,u.Ui)(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?(0,d.oJ)(e):null}};(0,n._)([(0,r.Cb)()],h.prototype,"spatialReference",void 0),(0,n._)([(0,r.Cb)()],h.prototype,"element",void 0),(0,n._)([(0,r.Cb)()],h.prototype,"bounds",null),(0,n._)([(0,r.Cb)()],h.prototype,"coords",null),(0,n._)([(0,r.Cb)()],h.prototype,"normalizedCoords",null),(0,n._)([(0,r.Cb)()],h.prototype,"normalizedBounds",null),h=(0,n._)([(0,a.j)("esri.layers.support.MediaElementView")],h)},42069:(e,t,i)=>{i.d(t,{A:()=>u});var n=i(27366),s=i(42537),r=i(66978),a=i(94172),o=i(49861),l=(i(25243),i(63780),i(93169),i(69912)),d=i(5354);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,s.kB)((()=>e.abort()))),await(0,a.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,r.k_)(t);const i=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,n._)([(0,o.Cb)()],t.prototype,"view",void 0),(0,n._)([(0,o.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,n._)([(0,l.j)("esri.views.3d.layers.LayerView3D")],t),t}},99037:(e,t,i)=>{i.r(t),i.d(t,{default:()=>D});var n=i(27366),s=i(10064),r=i(42537),a=i(67593),o=i(66978),l=i(94172),d=i(49861),u=(i(25243),i(63780),i(93169),i(69912)),h=i(11873),p=i(65156),c=i(59568),_=i(26279),m=i(42069),y=i(19265),v=i(91526),g=i(40779),f=i(78289),x=i(39077),E=i(1487),P=i(78485),T=i(4760),I=i(66156),w=i(67581),b=i(8548);let C=class extends((0,m.A)(w.Z)){constructor(){super(...arguments),this.type="media-3d",this.drapeSourceType=_.Lw.RasterImage,this.updatePolicy=P.j.ASYNC,this._uidToElement=new Map,this._renderedElements=new Map,this._lastDrapingExtent=null,this._update=(0,o.Ds)((async(e,t,i)=>{const n=await this._collectMediaElements(e,t,i);this._synchronizeRenderElements(n)}),0)}initialize(){this._renderer=this.view.basemapTerrain.overlayManager.registerGeometryDrapeSource(this);const e=()=>this._updateWithLastDrapingExtent();this.addHandles([(0,r.kB)((()=>this.view.basemapTerrain.overlayManager.unregisterDrapeSource(this))),(0,l.on)((()=>this.layer.effectiveSource),"change",e),(0,l.on)((()=>this.layer.effectiveSource),"refresh",e)]),this._updatingHandles.add((()=>this.suspended),e)}setDrapingExtent(e,t){this._lastDrapingExtent={overlays:e,spatialReference:t},this._updateWithLastDrapingExtent()}getHit(e){const t=this._uidToElement.get(e);return t?{type:"media",element:t,layer:this.layer}:null}_updateWithLastDrapingExtent(){if(null==this._lastDrapingExtent||this.suspended)return void(this._renderer&&this._synchronizeRenderElements(new Set));const{overlays:e,spatialReference:t}=this._lastDrapingExtent;this._updatingHandles.addPromise(this._update(e,t).catch((()=>{})))}async _collectMediaElements(e,t,i){const n=this.layer.effectiveSource;return null==n?new Set:new Set((await Promise.all(e.map((e=>n.queryElements((0,p.HH)(e.extent,t),{signal:i}))))).flat())}_synchronizeRenderElements(e){this._synchronizeRenderElementsRemove(e),this._synchronizeRenderElementsAdd(e)}_synchronizeRenderElementsRemove(e){const t=new Set,i=[];this._renderedElements.forEach(((n,s)=>{e.has(s)||(t.add(s),null!=n.renderData&&i.push(n.renderData.renderGeometry),this._removeElement(s,n))})),this._renderer.removeGeometries(i,f.T.REMOVE)}_synchronizeRenderElementsAdd(e){for(const t of e)this._renderedElements.has(t)||this._createRenderElement(t)}_removeElement(e,t){let{renderData:i,handle:n}=t;this._destroyRenderData(i),this._renderedElements.delete(e),this._uidToElement.delete(e.uid),n.remove()}async _createRenderElement(e){const t=new c.L({spatialReference:this.view.spatialReference,element:e}),i={renderData:null,handle:(0,r.AL)([this._updatingHandles.add((()=>e.opacity),(e=>{null!=i.renderData&&i.renderData.material.setParameters({opacity:e})})),this._updatingHandles.add((()=>t.coords),(()=>{null!=i.renderData?this._updateGeometry(t,i,i.renderData):this._initializeRenderData(t,i)})),this._updatingHandles.add((()=>e.content),(()=>this._initializeRenderData(t,i))),(0,r.ed)(t)])};this._renderedElements.set(e,i),this._uidToElement.set(e.uid,e),this._updatingHandles.addPromise(e.load().catch((()=>{}))),this._initializeRenderData(t,i)}_initializeRenderData(e,t){const{coords:i,element:n}=e,{contentWidth:s,contentHeight:r}=n;if(null==i||null==n.content)return void(t.renderData=this._destroyRenderData(t.renderData));if(null!=t.renderData)return;const a=this._createTexture(n.content),l=a.load(this.view._stage.renderView.renderingContext);this.view._stage.add(a),(0,o.y8)(l)&&this._updatingHandles.addPromise(l);const d=new I.j({initTextureTransparent:!0,textureId:a.id,opacity:n.opacity,transparent:!0,perspectiveInterpolation:!0}),u=this._getPositionAttributeArray(i),h=this._getPerspectiveDivideAttributeArray(u,s,r),p=[0,1,2,0,2,3],c=new g.Z(d,[[T.T.POSITION,new v.a(u,p,3,!0)],[T.T.UV0,new v.a([0,0,1,0,1,1,0,1],p,2,!0)],[T.T.PERSPECTIVEDIVIDE,new v.a(h,p,1,!0)]]),_=new x.z(c,{layerUid:this.layer.uid,graphicUid:n.uid});this._renderer.addGeometries([_],f.T.ADD),t.renderData={renderGeometry:_,texture:a,material:d}}_updateGeometry(e,t,i){const{coords:n,element:s}=e;if(null==n||null==s.content)return void(t.renderData=this._destroyRenderData(t.renderData));const r=this._getPositionAttributeArray(n);i.renderGeometry.geometry.setAttributeData(T.T.POSITION,r);const a=this._getPerspectiveDivideAttributeArray(r,s.contentWidth,s.contentHeight);i.renderGeometry.geometry.setAttributeData(T.T.PERSPECTIVEDIVIDE,a),this._renderer.modifyGeometries([i.renderGeometry],f.$.GEOMETRY)}_getPositionAttributeArray(e){const[t,i,n,s]=e.rings[0];return[t[0],t[1],y.gi,s[0],s[1],y.gi,n[0],n[1],y.gi,i[0],i[1],y.gi]}_getPerspectiveDivideAttributeArray(e,t,i){(0,a.E)(S,[0,0,t,0,t,i,0,i],[e[0],e[1],e[3],e[4],e[6],e[7],e[9],e[10]]);const n=S[6]/S[8]*t,s=S[7]/S[8]*i;return[1,1+n,1+n+s,1+s]}_destroyRenderData(e){if(null==e)return null;const t=e.texture;return t.unload(),this.view._stage.remove(t),this._renderer.removeGeometries([e.renderGeometry],f.T.REMOVE),null}_createTexture(e){const t=e instanceof HTMLImageElement?e.naturalWidth:e.width,i=e instanceof HTMLImageElement?e.naturalHeight:e.height;if("getFrame"in e)throw new s.Z("media-layer-view-3d","animation is not supported");return new E.x(e,{wrap:{s:b.e8.CLAMP_TO_EDGE,t:b.e8.CLAMP_TO_EDGE},preMultiplyAlpha:!0,width:t,height:i,mipmap:!0,updateCallback:()=>this.view.basemapTerrain.overlayManager.setDrawTexturesDirty()})}get test(){const e=this;return{get numberOfElements(){return e._renderedElements.size}}}};(0,n._)([(0,d.Cb)({readOnly:!0})],C.prototype,"type",void 0),(0,n._)([(0,d.Cb)()],C.prototype,"layer",void 0),C=(0,n._)([(0,u.j)("esri.views.3d.layers.MediaLayerView3D")],C);const S=(0,h.a)(),D=C},66156:(e,t,i)=>{i.d(t,{j:()=>A});var n=i(25158),s=i(37081),r=i(68401),a=i(17363),o=i(56529),l=i(78041),d=i(93822),u=i(97731),h=i(4760),p=i(12594),c=i(64642),_=i(11983),m=i(33236),y=i(27366),v=(i(98634),i(82144)),g=i(31132),f=i(33559),x=i(27627),E=i(50411),P=i(25920),T=i(8883),I=i(32500),w=i(8548),b=i(36207);class C extends g.A{initializeProgram(e){return new x.$(e.rctx,C.shader.get().build(this.configuration),O)}_setPipelineState(e,t){const i=this.configuration,n=e===P.A.NONE,r=e===P.A.FrontFace;return(0,b.sm)({blending:i.output!==s.H.Color&&i.output!==s.H.Alpha||!i.transparent?null:n?S:(0,l.j7)(e),culling:(0,b.zp)(i.cullFace),depthTest:{func:(0,l.Bh)(e)},depthWrite:n?i.writeDepth?b.LZ:null:(0,l.K5)(e),colorWrite:b.BK,stencilWrite:i.hasOccludees?E.s3:null,stencilTest:i.hasOccludees?t?E.eD:E.RY:null,polygonOffset:n||r?null:(0,l.je)(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}C.shader=new v.J(I.I,(()=>i.e(8957).then(i.bind(i,18957))));const S=(0,b.if)(w.zi.ONE,w.zi.ONE_MINUS_SRC_ALPHA);class D extends T.W{constructor(){super(...arguments),this.output=s.H.Color,this.cullFace=r.Vr.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=P.A.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}(0,y._)([(0,f.o)({count:s.H.COUNT})],D.prototype,"output",void 0),(0,y._)([(0,f.o)({count:r.Vr.COUNT})],D.prototype,"cullFace",void 0),(0,y._)([(0,f.o)()],D.prototype,"hasSlicePlane",void 0),(0,y._)([(0,f.o)()],D.prototype,"transparent",void 0),(0,y._)([(0,f.o)()],D.prototype,"enableOffset",void 0),(0,y._)([(0,f.o)()],D.prototype,"writeDepth",void 0),(0,y._)([(0,f.o)()],D.prototype,"hasOccludees",void 0),(0,y._)([(0,f.o)({count:P.A.COUNT})],D.prototype,"transparencyPassType",void 0),(0,y._)([(0,f.o)()],D.prototype,"multipassEnabled",void 0),(0,y._)([(0,f.o)()],D.prototype,"cullAboveGround",void 0),(0,y._)([(0,f.o)()],D.prototype,"perspectiveInterpolation",void 0),(0,y._)([(0,f.o)({constValue:!1})],D.prototype,"occlusionPass",void 0);const O=new Map([[h.T.POSITION,0],[h.T.UV0,2],[h.T.PERSPECTIVEDIVIDE,3]]);class A extends _.c{constructor(e){super(e,new M),this.supportsEdges=!0,this._vertexAttributeLocations=O,this._configuration=new D}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<l.ve,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}produces(e,t){return(t===s.H.Color||t===s.H.Alpha||t===s.H.Highlight)&&(e===d.r.DRAPED_MATERIAL||(t===s.H.Highlight?e===d.r.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?d.r.TRANSPARENT_MATERIAL:d.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:d.r.OPAQUE_MATERIAL)))}createGLMaterial(e){return new R(e)}createBufferWriter(){const e=c.W1.clone();return this.parameters.perspectiveInterpolation&&e.f32(h.T.PERSPECTIVEDIVIDE),new H(e)}}class R extends a.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(C,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==s.H.Color&&this._output!==s.H.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class H extends p.G{write(e,t,i,s,r){for(const a of this.vertexBufferLayout.fields.keys()){const o=i.attributes.get(a);if(o)if(a===h.T.PERSPECTIVEDIVIDE){(0,u.hu)(1===o.size);const e=s.getField(a,n.ly);e&&(0,m.XW)(o,e,r)}else(0,m.i9)(a,o,e,t,s,r)}}}class M extends o.Mt{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=r.Vr.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}},67581:(e,t,i)=>{i.d(t,{Z:()=>_});var n=i(27366),s=i(7138),r=i(91505),a=i(79056),o=i(32718),l=i(92026),d=i(67426),u=i(49861),h=(i(25243),i(63780),i(93169),i(69912)),p=i(46634);let c=class extends((0,a.IG)((0,d.v)(r.Z.EventedMixin(s.Z)))){constructor(e){super(e),this._updatingHandles=new p.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",n=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(n,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,n;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(n=this.parent)||void 0===n?void 0:n.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,n._)([(0,u.Cb)()],c.prototype,"fullOpacity",null),(0,n._)([(0,u.Cb)()],c.prototype,"layer",void 0),(0,n._)([(0,u.Cb)()],c.prototype,"parent",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,n._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,n._)([(0,u.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,n._)([(0,u.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,n._)([(0,u.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,n._)([(0,u.Cb)()],c.prototype,"visible",null),(0,n._)([(0,u.Cb)()],c.prototype,"view",void 0),c=(0,n._)([(0,h.j)("esri.views.layers.LayerView")],c);const _=c}}]);
//# sourceMappingURL=9037.9056c3f2.chunk.js.map