"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[8074],{80573:(t,e,i)=>{i.d(e,{Z:()=>p});var n=i(27366),s=i(7138),a=i(63780),l=i(11582),r=i(79056),o=i(46784),u=i(49861),h=(i(25243),i(93169),i(69912));let c=0,d=class extends((0,o.eC)((0,l.J)((0,r.IG)(s.Z)))){constructor(t){super(t),this.id="".concat(Date.now().toString(16),"-analysis-").concat(c++),this.title=null}get parent(){return this._get("parent")}set parent(t){const e=this.parent;if(null!=e)switch(e.type){case"line-of-sight":case"dimension":e.releaseAnalysis(this);break;case"2d":case"3d":e.analyses.includes(this)&&e.analyses.remove(this)}this._set("parent",t)}get isEditable(){return this.requiredPropertiesForEditing.every(a.pC)}};(0,n._)([(0,u.Cb)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,n._)([(0,u.Cb)({type:String})],d.prototype,"title",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],d.prototype,"type",void 0),(0,n._)([(0,u.Cb)({clonable:!1,value:null})],d.prototype,"parent",null),(0,n._)([(0,u.Cb)({readOnly:!0})],d.prototype,"isEditable",null),(0,n._)([(0,u.Cb)({readOnly:!0})],d.prototype,"requiredPropertiesForEditing",void 0),d=(0,n._)([(0,h.j)("esri.analysis.Analysis")],d);const p=d},55203:(t,e,i)=>{var n,s;i.d(e,{w:()=>n,x:()=>s}),function(t){t[t.None=0]="None",t[t.Direct=1]="Direct",t[t.Triangle=2]="Triangle",t[t.ProjectedGeodesic=3]="ProjectedGeodesic"}(n||(n={})),function(t){t[t.Auto=0]="Auto",t[t.AboveSegment=1]="AboveSegment",t[t.BelowSegment=2]="BelowSegment"}(s||(s={}))},51817:(t,e,i)=>{var n;i.d(e,{e:()=>n}),function(t){t[t.Auto=0]="Auto",t[t.Euclidean=1]="Euclidean",t[t.Geodesic=2]="Geodesic"}(n||(n={}))},48681:(t,e,i)=>{i.d(e,{D1:()=>v,UG:()=>y,Ue:()=>p,Zy:()=>g,fq:()=>b,hO:()=>w,l:()=>_,wE:()=>m,y1:()=>P});var n=i(11186),s=i(71353),a=i(2170),l=i(80885),r=i(78952),o=i(68859),u=i(67751),h=i(94393),c=i(15559),d=i(80064);function p(t,e){const i=e.center;(0,n.s)(i,0,0,0);for(let a=0;a<t.length;++a)(0,n.g)(i,i,t[a]);(0,n.i)(i,i,1/t.length);let s=0;for(let a=0;a<t.length;++a)s=Math.max(s,(0,n.a)(i,t[a]));e.radius=Math.sqrt(s)}function _(t,e){if(t.length<3)throw new Error("need at least 3 points to fit a plane");(0,d.pG)(t[0],t[1],t[2],e)}function v(t,e){return(0,n.j)(t,e)+t[3]}function y(t,e,i){return(0,o.K)(t,C,i)&&(0,o.K)(e,f,i)?(0,n.o)(C,f):0}function g(t,e){if(!(0,u.U)(t,C)||!(0,u.U)(e,f))return 0;const i=new c._q;return(0,c.cA)(i,[C[0],C[1]],[f[0],f[1]]),i.distance}function w(t,e,i){const n=new c._q;return(0,c.cA)(n,[t[0],t[1]],[e[0],e[1]],i),n.distance}function b(t,e,i,n){const s=V;return(0,h.k)(t,n,C)&&(0,h.k)(e,n,f)&&(0,h.k)(i,n,D)?(s.setPoint(0,0,C),s.setPoint(0,1,f),s.setPoint(0,2,D),Math.abs((0,a.geodesicArea)(s,"square-meters"))):0}function m(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const s=(t,e)=>{if(0===e[0]&&0===e[1]&&0===e[2])return!1;for(let i=0;i<t.length;++i)if((0,n.j)(e,t[i])<-1e-6)return!1;return!0};if(0===t.length)return!1;if(1===t.length)return e&&(0,n.c)(e,t[0]),!0;(0,n.s)(M,0,0,0);for(let a=0;a<t.length;++a)(0,n.g)(M,M,t[a]);if((0,n.n)(M,M),s(t,M))return e&&(0,n.c)(e,M),!0;if(!i)return!1;for(let a=0;a<t.length;++a)for(let i=0;i<t.length;++i)if(a!==i&&((0,n.b)(M,t[a],t[i]),(0,n.n)(M,M),s(t,M)))return e&&(0,n.c)(e,M),!0;return!1}function P(t){return"mouse"!==t.pointerType||0===t.button}const C=(0,s.c)(),f=(0,s.c)(),D=(0,s.c)(),V=new l.Z({rings:[[C,f,D]],spatialReference:r.Z.WGS84}),M=(0,s.c)()},68074:(t,e,i)=>{i.r(e),i.d(e,{default:()=>ut});var n=i(27366),s=i(66978),a=i(49861),l=(i(25243),i(63780),i(93169),i(69912)),r=i(33565),o=i(80573),u=i(68860),h=i(585);let c=class extends o.Z{constructor(t){super(t),this.type="direct-line-measurement",this.startPoint=null,this.endPoint=null,this.unit=null}get requiredPropertiesForEditing(){return[this.startPoint,this.endPoint]}clear(){this.startPoint=null,this.endPoint=null}};(0,n._)([(0,a.Cb)({type:["direct-line-measurement"]})],c.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:h.Z})],c.prototype,"startPoint",void 0),(0,n._)([(0,a.Cb)({type:h.Z})],c.prototype,"endPoint",void 0),(0,n._)([(0,a.Cb)({type:u.oD,value:null})],c.prototype,"unit",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],c.prototype,"requiredPropertiesForEditing",null),c=(0,n._)([(0,l.j)("esri.analysis.DirectLineMeasurementAnalysis")],c);const d=c;var p,_,v=i(94172),y=i(77671),g=(i(59486),i(92026)),w=i(97942),b=i(46634),m=i(37818),P=i(48681),C=i(62815),f=i(51328),D=i(51995),V=i(7138),M=i(86950),O=i(71353),L=i(85981),A=i(51817),S=i(55203),T=i(35284),U=i(83639),E=i(40508),x=i(62389),I=i(70619);(_=p||(p={})).Manipulators="manipulators",_.AnalysisViewDestroyed="analysis-view-destroyed",_.AnalysisView="analysis-view";let R=class extends V.Z{constructor(t){super(t),this.cursorPoint=null,this._visible=!1,this._laserLine=null,this.laserLineEnabled=!0,this._lastDraggedHandle=null}initialize(){this._laserLine=new x.W({view:this.view,attached:!0,isDecoration:!0}),this._updateVisibility(this._visible),this._connectToAnalysisView(),this.addHandles((0,v.YP)((()=>this._params),(t=>{let{laserLineGlowColor:e,laserLineInnerColor:i,laserLineGlobalAlpha:n}=t;const s=this._laserLine,a=s.style;s.style={...a,innerColor:i,glowColor:e,globalAlpha:n}})))}destroy(){this._laserLine=(0,g.SC)(this._laserLine)}get _params(){const{accentColor:t}=this.view.effectiveTheme;return{laserLineGlowColor:D.Z.toUnitRGB(t),laserLineGlowWidth:8,laserLineGlowFalloff:8,laserLineInnerColor:D.Z.toUnitRGB((0,M.mj)(t)),laserLineInnerWidth:.75,laserLineGlobalAlpha:.75*t.a,handleColor:(0,M.Ch)(t,.5),handleRadius:5}}get visible(){return this._visible}set visible(t){t?this.show():this.hide()}get testData(){const t=this._laserLine.testData,e=this.analysisViewData.testData;return{labels:null===e||void 0===e?void 0:e.labels,stripeLength:null===e||void 0===e?void 0:e.stripeLength,laserLineRenderer:{heightManifoldEnabled:null!=t&&t.heightManifoldEnabled,heightManifoldTarget:null!=t?t.heightManifoldTarget:null,pointDistanceEnabled:null!=t&&t.pointDistanceEnabled,pointDistanceOrigin:null!=t?t.pointDistanceOrigin:null,pointDistanceTarget:null!=t?t.pointDistanceTarget:null,lineVerticalPlaneEnabled:null!=t&&t.lineVerticalPlaneEnabled}}}get _cursorPosition(){const t=(0,O.c)(),e=this.cursorPoint;return e&&this.view.renderCoordsHelper.toRenderCoords(e,t),t}get _startPosition(){const t=(0,O.c)(),e=this.analysis.startPoint;return e&&this.view.renderCoordsHelper.toRenderCoords(e,t),t}get _endPosition(){const t=(0,O.c)(),e=this.analysis.endPoint;return e&&this.view.renderCoordsHelper.toRenderCoords(e,t),t}get _laserLineParams(){const t=this._focusPosition,{active:e,lineState:i}=this.toolState,n=this.analysisViewData,s=this.laserLineEnabled&&!!t&&"measured"!==i&&e;if(!s||!this.visible||null==n||n.destroyed)return{heightManifoldTarget:null,pointDistanceLine:null,lineVerticalPlaneSegment:null};const a=n.actualVisualizedMeasurement,l="local"!==this.view.viewingMode&&s&&!!this.analysis.startPoint&&"geodesic"===a,r=s&&n.viewMode===S.w.Triangle;return{heightManifoldTarget:"euclidean"===a?t:null,pointDistanceLine:l?this._pointDistanceLine:null,lineVerticalPlaneSegment:r?(0,L.zk)(this._startPosition,this._endPosition):null}}get _focusPosition(){const{lineState:t}=this.toolState,e=this.analysisViewData,i=null!=e&&!e.destroyed&&e.measurementMode===A.e.Euclidean&&e.viewMode===S.w.Direct;switch(t){case"drawing":return i?this._startPosition:this.analysis.endPoint?this._endPosition:this._startPosition;case"editing":return i?"start"===this._lastDraggedHandle?this._endPosition:this._startPosition:"start"===this._lastDraggedHandle?this._startPosition:this._endPosition;default:return null!=this.cursorPoint?this._cursorPosition:null}}get _pointDistanceLine(){return{origin:"drawing"===this.toolState.lineState||"end"===this._lastDraggedHandle?this._startPosition:this._endPosition,target:this._focusPosition}}createManipulators(){const t=this._params,{view:e}=this,i=()=>{const i=(0,U.EA)(t.handleColor),n=[new E.r((0,I.PI)(i,1,32,32))],s=new T.Z({view:e,renderObjects:n});return s.available=!1,s.radius=t.handleRadius,[s,i]},[n,s]=i(),[a,l]=i(),r=new T.Z({view:this.view});r.available=!1,r.interactive=!1,null!=this.analysis.startPoint&&(n.location=this.analysis.startPoint,n.available=!0),null!=this.analysis.endPoint&&(a.location=this.analysis.endPoint,a.available=!0);const o=()=>{let t=this._lastDraggedHandle;n.grabbing&&!a.grabbing&&(t="start"),a.grabbing&&!n.grabbing&&(t="end"),n.grabbing||a.grabbing||(t=null),this._lastDraggedHandle=t},u=n.events.on("grab-changed",o),h=a.events.on("grab-changed",o);return this.addHandles([u,h,(0,v.YP)((()=>(0,M.gp)(this._params.handleColor)),(t=>{s.setParameters({color:t}),l.setParameters({color:t})}),{equals:M.Ht})],p.Manipulators),{start:n,end:a,cursor:r}}show(){this.destroyed||this._visible||this._updateVisibility(!0)}hide(){!this.destroyed&&this._visible&&this._updateVisibility(!1)}_connectToAnalysisView(){this.removeHandles(p.AnalysisView),this.addHandles([(0,v.YP)((()=>{var t;return null===(t=this.analysisViewData)||void 0===t?void 0:t.destroyed}),(t=>{t&&this.removeHandles(p.AnalysisView)}),v.nn),(0,v.YP)((()=>["measured"===this.toolState.lineState,this.analysisViewData]),(t=>{let[e,i]=t;null==i||i.destroyed||(i.allowVisualElementsOrientationChange=!e)}),v.nn),(0,v.YP)((()=>this._laserLineParams),(t=>{const e=this._laserLine;e.heightManifoldTarget=t.heightManifoldTarget,e.pointDistanceLine=t.pointDistanceLine,e.lineVerticalPlaneSegment=t.lineVerticalPlaneSegment}),v.nn)],p.AnalysisView)}_updateVisibility(t){this.initialized&&(this._visible=t,t?this._laserLine.style={innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,glowFalloff:this._params.laserLineGlowFalloff,globalAlpha:this._params.laserLineGlobalAlpha}:this.view.cursor=null,this._laserLine.visible=t)}};(0,n._)([(0,a.Cb)({constructOnly:!0})],R.prototype,"view",void 0),(0,n._)([(0,a.Cb)()],R.prototype,"_params",null),(0,n._)([(0,a.Cb)({constructOnly:!0})],R.prototype,"analysis",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],R.prototype,"analysisViewData",void 0),(0,n._)([(0,a.Cb)()],R.prototype,"cursorPoint",void 0),(0,n._)([(0,a.Cb)()],R.prototype,"toolState",void 0),(0,n._)([(0,a.Cb)()],R.prototype,"visible",null),(0,n._)([(0,a.Cb)()],R.prototype,"testData",null),(0,n._)([(0,a.Cb)()],R.prototype,"_visible",void 0),(0,n._)([(0,a.Cb)()],R.prototype,"_laserLine",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],R.prototype,"laserLineEnabled",void 0),(0,n._)([(0,a.Cb)()],R.prototype,"_cursorPosition",null),(0,n._)([(0,a.Cb)()],R.prototype,"_startPosition",null),(0,n._)([(0,a.Cb)()],R.prototype,"_endPosition",null),(0,n._)([(0,a.Cb)()],R.prototype,"_lastDraggedHandle",void 0),(0,n._)([(0,a.Cb)()],R.prototype,"_laserLineParams",null),(0,n._)([(0,a.Cb)()],R.prototype,"_focusPosition",null),(0,n._)([(0,a.Cb)()],R.prototype,"_pointDistanceLine",null),R=(0,n._)([(0,l.j)("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DView")],R);var k=i(77648),H=i(86509),G=i(14813),N=i(5693),F=i(84954),z=i(95172),W=i(92839),Z=i(34019),Y=i(80151),j=i(64674),q=i(72612);let B=class extends H.f{constructor(t){super(t),this._updatingHandles=new b.R,this._emulatedDrag=null,this.lineState="initial",this.startPointSurfaceLocation=null,this.endPointSurfaceLocation=null,this.cursorPointSurfaceLocation=null,this.startManipulator=null,this.endManipulator=null,this.cursorManipulator=null,this._getSnappingContext=(0,w.H)((t=>new Z.N({elevationInfo:{mode:"absolute-height",offset:0},pointer:t,editGeometryOperations:new z.c(new F.XE("point",(0,G.Y6)(!0,!1,this.view.spatialReference))),visualizer:new C._})))}initialize(){const{view:t,analysis:e,analysisViewData:i,visible:n}=this;this.measurementView=new R({toolState:this,view:t,analysis:e,analysisViewData:i,visible:n});const s=(0,W.u)(t);this._snappingManagerResult=s,this.addHandles(s);const{start:a,end:l,cursor:r}=this.measurementView.createManipulators(),o=(t,e,i)=>(0,N.Xd)(t,((t,n,s,a)=>{const l=(0,f.J4)(t),r=this._snappingManager,o=this._getSnappingContext(a),u=this._updatingHandles,{lineState:c}=this;s=s.next(l).next((0,N.di)(this,[i,e])).next((i=>{if("cursorPoint"!==e){const i=this.analysis[e];null!=i&&(t.location=i)}return i}));const d=(0,f.gv)(this.view);let p=n.next(l).next((t=>{const n=d(t);return n||"drawing"!==this.lineState&&"initial"!==this.lineState||(this[e]=null,this[i]=null),n}));if("touch"!==a||"editing"===c){const{snappingStep:t,cancelSnapping:e}=(0,Y.W)({snappingManager:r,snappingContext:o,updatingHandles:u});s=s.next(e),p=p.next(...t)}p.next((t=>"start"!==t.action?t:null)).next((n=>{const s=(0,m.WG)(n.mapEnd,new h.Z);this[e]=s,t.location=s,this[i]=this._surfaceLocation(s,n.surfaceType)}))})),u=t=>t.events.on("grab-changed",(()=>{const t=a.grabbing||l.grabbing;this.lineState=t?"editing":"measured"}));this.addHandles([o(a,"startPoint","startPointSurfaceLocation"),o(l,"endPoint","endPointSurfaceLocation"),o(r,"cursorPoint","cursorPointSurfaceLocation"),u(a),u(l)]),this.manipulators.add(a),this.manipulators.add(l),this.manipulators.add(r),this.startManipulator=a,this.endManipulator=l,this.cursorManipulator=r,this.addHandles((0,v.YP)((()=>this.state),(t=>{"measured"===t&&this.finishToolCreation()}),v.tX)),(0,j.Ob)(this)}destroy(){this._updatingHandles=(0,g.SC)(this._updatingHandles),this.measurementView=(0,g.SC)(this.measurementView)}get _snappingManager(){return this._snappingManagerResult.snappingManager}get state(){const{analysis:t}=this;if(null==t.startPoint&&null==t.endPoint)return"ready";const{lineState:e}=this;return this.validMeasurement&&"editing"!==e&&"drawing"!==e?"measured":"measuring"}get cursor(){return"ready"===this.state||"drawing"===this.lineState?"crosshair":null}get startPoint(){return this.analysis.startPoint}set startPoint(t){this.analysis.startPoint=t}get endPoint(){return this.analysis.endPoint}set endPoint(t){this.analysis.endPoint=t}get cursorPoint(){return this.measurementView.cursorPoint}set cursorPoint(t){this.measurementView.cursorPoint=t}get snappingOptions(){return this._snappingManager.options}get validMeasurement(){return null!=this.analysis.startPoint&&null!=this.analysis.endPoint}get updating(){return this._updatingHandles.updating||this._snappingManager.updating}onShow(){this.measurementView.show(),this._updateManipulatorAvailability()}onHide(){this.measurementView.hide()}onDeactivate(){var t;null!==(t=this._emulatedDrag)&&void 0!==t&&t.cancel(),this._emulatedDrag=null}onInputEvent(t){switch(t.type){case"immediate-click":this._handleImmediateClick(t);break;case"pointer-move":this._handlePointerMove(t)}this._updateManipulatorAvailability()}_handlePointerMove(t){var e,i;if(!this.active||this.view.navigating)return;const{pointerType:n}=t;if("mouse"!==n)return;const s=(0,q.vT)(t),{lineState:a,cursorManipulator:l,endManipulator:r}=this;let o=!1;null==this.cursorPoint&&(null!==(e=this._emulatedDrag)&&void 0!==e&&e.cancel(),this._emulatedDrag=X(l,n,s),o=!0),"initial"===a&&(null!==(i=this._emulatedDrag)&&void 0!==i&&i.update(s),o=!0),"drawing"===a&&(r.events.emit("drag",{action:"update",start:s,screenPoint:s}),o=!0),o&&t.stopPropagation()}_handleImmediateClick(t){var e,i,n,s;if(!this.active)return;if(!(0,P.y1)(t))return;const a=(0,q.vT)(t),{pointerType:l}=t,{cursorManipulator:r,startManipulator:o,endManipulator:u,lineState:h}=this;let c=!1;switch(null==this.cursorPoint&&(null!==(e=this._emulatedDrag)&&void 0!==e&&e.cancel(),this._emulatedDrag=X(r,l,a)),h){case"initial":if(null!==(i=this._emulatedDrag)&&void 0!==i&&i.update(a),null!=this.cursorPoint){var d;null!==(d=this._emulatedDrag)&&void 0!==d&&d.end(a),this._emulatedDrag=null;const{cursorPoint:t}=this;this.startPoint=t,this.startPointSurfaceLocation=this.cursorPointSurfaceLocation,o.location=t,o.interactive=!1,u.interactive=!1,this.lineState="drawing",this._emulatedDrag=X(u,l,a),c=!0}break;case"drawing":null!==(n=this._emulatedDrag)&&void 0!==n&&n.update(a),null!=this.endPoint&&(null!==(s=this._emulatedDrag)&&void 0!==s&&s.end(a),this._emulatedDrag=null,o.interactive=!0,u.interactive=!0,this.lineState="measured",c=!0)}c&&t.stopPropagation()}_surfaceLocation(t,e){var i;return e===f.cx.GROUND?"on-the-surface":(null!==(i=t.z)&&void 0!==i?i:0)>=this._getElevation(t)?"above-the-surface":"below-the-surface"}_updateManipulatorAvailability(){this.startManipulator.available=null!=this.analysis.startPoint,this.endManipulator.available=null!=this.analysis.endPoint}_getElevation(t){var e;return this.view.basemapTerrain.ready&&null!==(e=(0,k.KO)(this.view.elevationProvider,t))&&void 0!==e?e:0}get test(){return{snappingManager:this._snappingManager}}};function X(t,e,i){return t.events.emit("drag",{action:"start",pointerType:e,start:i,screenPoint:i}),{update:e=>t.events.emit("drag",{action:"update",start:e,screenPoint:e}),end:e=>t.events.emit("drag",{action:"end",start:e,screenPoint:e}),cancel:()=>t.events.emit("drag",{action:"cancel"})}}(0,n._)([(0,a.Cb)({readOnly:!0})],B.prototype,"state",null),(0,n._)([(0,a.Cb)()],B.prototype,"lineState",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],B.prototype,"cursor",null),(0,n._)([(0,a.Cb)()],B.prototype,"startPoint",null),(0,n._)([(0,a.Cb)()],B.prototype,"endPoint",null),(0,n._)([(0,a.Cb)()],B.prototype,"cursorPoint",null),(0,n._)([(0,a.Cb)({constructOnly:!0})],B.prototype,"analysis",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],B.prototype,"analysisViewData",void 0),(0,n._)([(0,a.Cb)()],B.prototype,"measurementView",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],B.prototype,"view",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],B.prototype,"validMeasurement",null),(0,n._)([(0,a.Cb)({value:null})],B.prototype,"startPointSurfaceLocation",void 0),(0,n._)([(0,a.Cb)({value:null})],B.prototype,"endPointSurfaceLocation",void 0),(0,n._)([(0,a.Cb)({value:null})],B.prototype,"cursorPointSurfaceLocation",void 0),(0,n._)([(0,a.Cb)()],B.prototype,"updating",null),B=(0,n._)([(0,l.j)("esri.views.3d.interactive.measurementTools.directLineMeasurement3D.DirectLineMeasurement3DTool")],B);const K=B;var J=i(40085);let Q=class extends J.O{constructor(t){super(t),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="DirectLineMeasurement3DViewModel is only supported in 3D views.",this._userUnit=null,this._userUnitOptions=null}initialize(){this.addHandles((0,v.YP)((()=>({analysis:this.analysis,unit:this.unit})),(t=>{let{analysis:e,unit:i}=t;null!=e&&(e.unit=i)}),v.tX))}get state(){return this.disabled||!this.ready?"disabled":null==this.tool?"ready":this.tool.state}get measurement(){if(null==this.tool)return null;const t={mode:"euclidean",directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:null,state:"unavailable"},verticalDistance:{text:null,state:"unavailable"}},{analysisViewData:e}=this.tool;if(null==e)return t;const i=e.actualVisualizedMeasurement,n=null!=e.result?"available":"unavailable";switch(i){case"euclidean":return{mode:"euclidean",directDistance:{text:e.directLabelText,state:n},horizontalDistance:{text:e.horizontalLabelText,state:n},verticalDistance:{text:e.verticalLabelText,state:n}};case"geodesic":return{mode:"geodesic",directDistance:{text:null,state:"unavailable"},horizontalDistance:{text:e.horizontalLabelText,state:n},verticalDistance:{text:e.verticalLabelText,state:n}};default:return t}}set unitOptions(t){this._userUnitOptions=t,this._set("unitOptions",this._filteredOrAllUnits(this._userUnitOptions))}get unitOptions(){return this._filteredOrAllUnits(this._userUnitOptions)}set unit(t){this._userUnit=t?this._findSelectableUnit(t,this._userUnit):null}get unit(){return this._userUnit?(this._userUnit=this._findSelectableUnit(this._userUnit,this.defaultUnit),this._userUnit):this._findSelectableUnit(this.defaultUnit)}constructAnalysis(){return new d}constructTool(){return new K({view:this.view,analysis:this.analysis,analysisViewData:this.analysisView,visible:this.visible})}_findSelectableUnit(t,e){const i=this.unitOptions;return i.includes(t)?t:e?this._findSelectableUnit(e):i[0]}_filteredOrAllUnits(t){if(!t)return u.oD.slice();const e=t.filter((t=>u.oD.includes(t)));return 0===e.length?u.oD.slice():e}};(0,n._)([(0,a.Cb)({type:d})],Q.prototype,"analysis",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],Q.prototype,"state",null),(0,n._)([(0,a.Cb)({readOnly:!0})],Q.prototype,"measurement",null),(0,n._)([(0,a.Cb)()],Q.prototype,"unitOptions",null),(0,n._)([(0,a.Cb)()],Q.prototype,"unit",null),(0,n._)([(0,a.Cb)(y.Y)],Q.prototype,"defaultUnit",void 0),(0,n._)([(0,a.Cb)()],Q.prototype,"_userUnit",void 0),(0,n._)([(0,a.Cb)()],Q.prototype,"_userUnitOptions",void 0),Q=(0,n._)([(0,l.j)("esri.widgets.DirectLineMeasurement3D.DirectLineMeasurement3DViewModel")],Q);const $=Q;var tt=i(7021),et=i(33095),it=i(82052),nt=(i(80975),i(80532)),st=i(67005);const at="esri-direct-line-measurement-3d",lt={base:at,newMeasurementButton:"".concat(at,"__clear-button"),widgetIcon:et.W.measureLine};let rt=class extends r.Z{constructor(t,e){super(t,e),this.iconClass=lt.widgetIcon,this.icon=null,this.messages=null,this.messagesCommon=null,this.viewModel=new $}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}get visible(){return this.viewModel.visible}set visible(t){this.viewModel.visible=t}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(t){this.viewModel.analysis=t}get label(){var t,e;return null!==(t=null===(e=this.messages)||void 0===e?void 0:e.widgetLabel)&&void 0!==t?t:""}set label(t){this._overrideIfSome("label",t)}get unitOptions(){return this.viewModel.unitOptions}set unitOptions(t){this.viewModel.unitOptions=t}get unit(){return this.viewModel.unit}set unit(t){this.viewModel.unit=t}render(){const{messages:t,messagesCommon:e,unit:i,unitOptions:n,viewModel:a}=this,{active:l,measurement:r,state:o,supported:u}=a;return(0,st.u)("div",{"aria-label":this.messages.widgetLabel,class:this.classes(lt.base,tt.z.widget,tt.z.panel),key:this,role:"presentation"},this.visible?(0,st.u)(it.s,{active:l,measurementItems:[{key:"direct",title:t.direct,value:ot(null===r||void 0===r?void 0:r.directDistance)},{key:"horizontal",title:t.horizontal,value:ot(null===r||void 0===r?void 0:r.horizontalDistance)},{key:"vertical",title:t.vertical,value:ot(null===r||void 0===r?void 0:r.verticalDistance)}],messages:{...t,notApplicable:null===e||void 0===e?void 0:e.notApplicable},newMeasurementButtonClass:lt.newMeasurementButton,state:o,supported:u,unit:i,unitOptions:n,onNewMeasurementClick:()=>{(0,s.R8)(this.viewModel.start())},onUnitChange:t=>{this.unit=t}}):null)}};function ot(t){return"available"===(null===t||void 0===t?void 0:t.state)?t.text:null}(0,n._)([(0,a.Cb)()],rt.prototype,"view",null),(0,n._)([(0,a.Cb)()],rt.prototype,"visible",null),(0,n._)([(0,a.Cb)()],rt.prototype,"active",null),(0,n._)([(0,a.Cb)({constructOnly:!0,nonNullable:!0})],rt.prototype,"analysis",null),(0,n._)([(0,a.Cb)()],rt.prototype,"iconClass",void 0),(0,n._)([(0,a.Cb)()],rt.prototype,"icon",void 0),(0,n._)([(0,a.Cb)()],rt.prototype,"label",null),(0,n._)([(0,a.Cb)(),(0,nt.H)("esri/widgets/DirectLineMeasurement3D/t9n/DirectLineMeasurement3D")],rt.prototype,"messages",void 0),(0,n._)([(0,a.Cb)(),(0,nt.H)("esri/t9n/common")],rt.prototype,"messagesCommon",void 0),(0,n._)([(0,a.Cb)()],rt.prototype,"uiStrings",void 0),(0,n._)([(0,a.Cb)({type:$})],rt.prototype,"viewModel",void 0),(0,n._)([(0,a.Cb)()],rt.prototype,"unitOptions",null),(0,n._)([(0,a.Cb)()],rt.prototype,"unit",null),rt=(0,n._)([(0,l.j)("esri.widgets.DirectLineMeasurement3D")],rt);const ut=rt},40085:(t,e,i)=>{i.d(e,{O:()=>p});var n,s,a=i(27366),l=i(14921),r=i(92026),o=i(66978),u=i(94172),h=i(49861),c=(i(25243),i(63780),i(93169),i(69912)),d=i(32845);(s=n||(n={}))[s.PENDING=0]="PENDING",s[s.WAIT_FOR_VIEW_READY=1]="WAIT_FOR_VIEW_READY",s[s.RUNNING=2]="RUNNING";let p=class extends d.V{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(t),this.analysisView=null,this._reconnectViewTask=null,this._parentChangeFromReconnect=!1,this._startUserOperation=null;const e=null===t||void 0===t?void 0:t.analysis;null!=e?this.analysis=e:(this._set("analysis",this.constructAnalysis()),this._set("isAnalysisOwner",!0))}normalizeCtorArgs(t){const{analysis:e,...i}=t;return i}initialize(){this.addHandles([(0,u.YP)((()=>{var t;return null===(t=this.analysis)||void 0===t?void 0:t.parent}),(t=>{this._parentChangeFromReconnect||t===this.view||this._set("isAnalysisOwner",!1);const e=!this._parentChangeFromReconnect;this._parentChangeFromReconnect=!1,e&&this._scheduleViewReconnect()}),u.Z_),(0,u.YP)((()=>({view:this.view,ready:null!=this.view&&this.view.ready,supported:this.supported})),((t,e)=>{let{view:i}=t;const n=null===e||void 0===e?void 0:e.view;i!==n&&(this._startUserOperation=(0,r.IM)(this._startUserOperation),this._disconnectFromView(n)),this._scheduleViewReconnect()}),u.tX),(0,u.YP)((()=>this.analysis.isEditable),((t,e)=>{null!=this.analysisView&&(t&&!e&&null==this.tool?this.createTool():t||!e||null==this.tool||this.tool.active||this.removeTool())}))])}destroy(){this._reconnectViewTask=(0,r.IM)(this._reconnectViewTask),this._startUserOperation=(0,r.IM)(this._startUserOperation),null!=this.analysisView&&(this.analysisView.visible=void 0),this._disconnectFromView(this.view),null!=this.analysis&&this.isAnalysisOwner&&(this.analysis.destroy(),this._set("analysis",null))}set analysis(t){t!==this._get("analysis")&&(this._startUserOperation=(0,r.IM)(this._startUserOperation),this._disconnectFromView(this.view),this._setExternalAnalysis(t),this._scheduleViewReconnect())}get ready(){return null!=this.analysisView&&!this.connectingToView}get connectingToView(){return null!=this._reconnectViewTask}get isAnalysisOwner(){return this._get("isAnalysisOwner")}set visible(t){this._set("visible",t),null!=this.analysisView&&(this.analysisView.visible=t)}async start(){this.clear();const t={task:null,abort:null,state:n.PENDING},e=(0,l.vr)((async e=>{t.state=n.WAIT_FOR_VIEW_READY,await(0,u.N1)((()=>this.ready),e),t.state=n.RUNNING,this.createTool({interactive:!0})}));return t.task=e,t.abort=()=>e.abort(),this._startUserOperation=t,e.promise}clear(){this._startUserOperation=(0,r.IM)(this._startUserOperation),this.removeTool(),this.analysis.clear()}onConnectToAnalysisView(t){}onDisconnectFromAnalysisView(){}_scheduleViewReconnect(){this._reconnectViewTask=(0,r.IM)(this._reconnectViewTask);const t=(0,l.vr)((async e=>{try{await this._reconnectView(e)}catch(i){if((0,o.k_)(e),!(0,o.D_)(i))return void this.logger.warn("Failed to use analysis in view model",i);throw i}finally{t===this._reconnectViewTask&&(this._reconnectViewTask=null)}}));this._reconnectViewTask=t}async _reconnectView(t){const{view:e}=this,i=null!=e&&e.ready&&this.supported,n=this.analysis;if(this._startUserOperation=_(this._startUserOperation),this._disconnectFromView(e),i&&null!=e&&null!=n){if(this.isAnalysisOwner){if(null!=n.parent)return void this.logError("expected owned analysis to have null parent when connecting to view");this._parentChangeFromReconnect=!0,e.analyses.add(n)}this.analysisView=await e.whenAnalysisView(n),(0,o.Hc)(t)?this._startUserOperation=_(this._startUserOperation):(this.analysisView.visible=this.visible,this.onConnectToAnalysisView(this.analysisView),this.createTool())}}_disconnectFromView(t){this.removeTool(),null!=t&&this.isAnalysisOwner&&(this._parentChangeFromReconnect=!0,t.analyses.remove(this.analysis),this.analysis.clear()),this.analysisView=null,this.onDisconnectFromAnalysisView()}_setExternalAnalysis(t){null==this.analysisView||this.isAnalysisOwner||(this.analysisView.visible=!0),this.analysisView=null,this._set("isAnalysisOwner",!1),this._set("analysis",t),this._parentChangeFromReconnect=!1}get testInfo(){return{analysisView:this.analysisView}}};function _(t){return null!=t&&t.state>=n.RUNNING?(t.abort(),null):t}(0,a._)([(0,h.Cb)({nonNullable:!0})],p.prototype,"analysis",null),(0,a._)([(0,h.Cb)()],p.prototype,"analysisView",void 0),(0,a._)([(0,h.Cb)()],p.prototype,"ready",null),(0,a._)([(0,h.Cb)()],p.prototype,"connectingToView",null),(0,a._)([(0,h.Cb)({readOnly:!0})],p.prototype,"isAnalysisOwner",null),(0,a._)([(0,h.Cb)({type:Boolean,value:!0})],p.prototype,"visible",null),(0,a._)([(0,h.Cb)()],p.prototype,"_reconnectViewTask",void 0),p=(0,a._)([(0,c.j)("esri.widgets.support.InteractiveAnalysisViewModel")],p)}}]);
//# sourceMappingURL=8074.05fe7e05.chunk.js.map