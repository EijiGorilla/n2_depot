"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[1863],{41863:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var i=r(27366),a=r(10064),s=r(94172),o=r(49861),n=(r(93169),r(32718),r(84936),r(69912)),l=r(79803),p=r(37933),c=r(28554),d=r(25626);let u=class extends d.Z{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=(0,c.Vi)()}initialize(){var e;const{layer:t,view:r}=this;null!==(e=(0,p.S1)(t))&&void 0!==e&&e.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new a.Z("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:t}))),null!=t.infoFor3D&&(this.direct3DObjectFeatureLayerDisplayEnabled?this.addResolvingPromise((async()=>{const e=await(0,s.N1)((()=>this.graphicsPipeline));this.destroyed||e.destroyed||(e.suspendResumeExtentMode="computed")})()):this.addResolvingPromise(Promise.reject(new a.Z("featurelayerview3d:unsupported-geometry-type","Unsupported geometry type ".concat(t.geometryType))))),"mesh"!==t.geometryType||(0,l.canProjectWithoutEngine)(t.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e;return null===(e=this.view.featureTiles)||void 0===e||null===(e=e.tilingScheme)||void 0===e?void 0:e.spatialReference}};(0,i._)([(0,o.Cb)({constructOnly:!0})],u.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),(0,i._)([(0,o.Cb)()],u.prototype,"layer",void 0),u=(0,i._)([(0,n.j)("esri.views.3d.layers.FeatureLayerView3D")],u);const y=u}}]);
//# sourceMappingURL=1863.08312d0e.chunk.js.map