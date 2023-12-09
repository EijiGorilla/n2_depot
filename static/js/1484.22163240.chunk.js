"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[1484],{42069:(e,i,s)=>{s.d(i,{A:()=>y});var t=s(27366),a=s(42537),n=s(66978),l=s(94172),r=s(49861),o=(s(25243),s(63780),s(93169),s(69912)),d=s(5354);const y=e=>{let i=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,i=e.signal;this.addHandles((0,a.kB)((()=>e.abort()))),await(0,l.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),i),(0,n.k_)(i);const s=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(s)throw s}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),i=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return i&&i.minScale&&i.maxScale&&i.minScale<i.maxScale&&(e.outsideScaleRange=!0),e}};return(0,t._)([(0,r.Cb)()],i.prototype,"view",void 0),(0,t._)([(0,r.Cb)()],i.prototype,"slicePlaneEnabled",void 0),i=(0,t._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],i),i}},31484:(e,i,s)=>{s.r(i),s.d(i,{default:()=>c});var t=s(27366),a=s(14921),n=s(10064),l=s(92026),r=s(66978),o=s(94172),d=s(49861),y=s(69912),h=s(42069),u=s(67581);const p="analysis-view-handles";let v=class extends((0,h.A)(u.Z)){constructor(e){super(e),this.type="line-of-sight-3d",this._analysisModule=null}initialize(){this.addHandles((0,o.YP)((()=>this.layer.analysis),(e=>{this._destroyAnalysisView(),null!=e&&this._createAnalysisView(e)}),o.tX),p)}destroy(){this.removeHandles(p),this._destroyAnalysisView()}async whenAnalysisView(){if(null!=this.analysisView)return this.analysisView;if(null!=this._createAnalysisViewTask)return this._createAnalysisViewTask.promise;throw new n.Z("layerview:no-analysisview-for-analysis","The analysis has not been set on the LineOfSightLayer of this layer view")}isUpdating(){return null!=this._createAnalysisViewTask||null!=this.analysisView&&this.analysisView.updating}_createAnalysisView(e){const i=(0,a.vr)((async s=>(this.analysisView=await this._createAnalysisViewPromise(e,s),this._createAnalysisViewTask===i&&(this._createAnalysisViewTask=null),this.analysisView)));this._createAnalysisViewTask=i}_destroyAnalysisView(){this.analysisView=(0,l.SC)(this.analysisView),this._createAnalysisViewTask=(0,l.IM)(this._createAnalysisViewTask)}async _createAnalysisViewPromise(e,i){let s=this._analysisModule;if(null==s){const e=await this._loadAnalysisModule();this._analysisModule=e,s=e}const t=new s.default({analysis:e,view:this.view,parent:this});if(await t.when(),(0,r.Hc)(i))throw t.destroy(),new n.Z("layerview:no-analysisview-for-analysis","The analysis has not been added to the LineOfSightLayer of this layer view",{analysis:e});return t}_loadAnalysisModule(){return Promise.all([s.e(2214),s.e(3762),s.e(4664)]).then(s.bind(s,74664))}};(0,t._)([(0,d.Cb)()],v.prototype,"type",void 0),(0,t._)([(0,d.Cb)()],v.prototype,"layer",void 0),(0,t._)([(0,d.Cb)()],v.prototype,"analysisView",void 0),(0,t._)([(0,d.Cb)()],v.prototype,"_createAnalysisViewTask",void 0),v=(0,t._)([(0,y.j)("esri.views.3d.layers.LineOfSightLayerView3D")],v);const c=v},67581:(e,i,s)=>{s.d(i,{Z:()=>v});var t=s(27366),a=s(7138),n=s(91505),l=s(79056),r=s(32718),o=s(92026),d=s(67426),y=s(49861),h=(s(25243),s(63780),s(93169),s(69912)),u=s(46634);let p=class extends((0,l.IG)((0,d.v)(n.Z.EventedMixin(a.Z)))){constructor(e){super(e),this._updatingHandles=new u.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var i;const s=this.layer&&this.layer.id||"no id",t=(null===(i=this.layer)||void 0===i?void 0:i.title)||"no title";r.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(t,"', id: '").concat(s,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,i,s,t;return(null!==(e=null===(i=this.layer)||void 0===i?void 0:i.opacity)&&void 0!==e?e:1)*(null!==(s=null===(t=this.parent)||void 0===t?void 0:t.fullOpacity)&&void 0!==s?s:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,i,s;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(i=this.parent)&&void 0!==i&&i.suspended)&&(null===(s=this.view)||void 0===s?void 0:s.ready)||!1}getSuspendInfo(){var e,i;const s=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(i=this.view)&&void 0!==i&&i.ready||(s.viewNotReady=!0),this.layer&&this.layer.loaded||(s.layerNotLoaded=!0),this.visible||(s.layerInvisible=!0),s}isUpdating(){return!1}};(0,t._)([(0,y.Cb)()],p.prototype,"fullOpacity",null),(0,t._)([(0,y.Cb)()],p.prototype,"layer",void 0),(0,t._)([(0,y.Cb)()],p.prototype,"parent",void 0),(0,t._)([(0,y.Cb)({readOnly:!0})],p.prototype,"suspended",null),(0,t._)([(0,y.Cb)({readOnly:!0})],p.prototype,"suspendInfo",null),(0,t._)([(0,y.Cb)({readOnly:!0})],p.prototype,"legendEnabled",null),(0,t._)([(0,y.Cb)({type:Boolean,readOnly:!0})],p.prototype,"updating",null),(0,t._)([(0,y.Cb)({readOnly:!0})],p.prototype,"updatingProgress",null),(0,t._)([(0,y.Cb)()],p.prototype,"visible",null),(0,t._)([(0,y.Cb)()],p.prototype,"view",void 0),p=(0,t._)([(0,h.j)("esri.views.layers.LayerView")],p);const v=p}}]);
//# sourceMappingURL=1484.22163240.chunk.js.map