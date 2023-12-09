"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[7481],{37481:(e,t,i)=>{i.d(t,{default:()=>p});var s=i(10064),r=i(32718),o=i(65156),n=i(376),l=i(20994),a=i(77095),h=i(20311),d=i(21149),u=i(36876),c=i(76672);const _=r.Z.getLogger("esri.views.2d.layers.features.support.whereUtils"),y={getAttribute:(e,t)=>e.readAttribute(t)};class p{constructor(e){this._geometryBounds=(0,o.Ue)(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach(((e,t)=>{this._idToVisibility.set(t,0)}))}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,1)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach(((e,r)=>{const o=!!(1&this._idToVisibility.get(r)),n=s.has(r);!o&&n?t.push(r):o&&!n&&i.push(r),this._idToVisibility.set(r,n?3:0)})),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r}=this;return d.Z.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:r})}async update(e,t){this._hash=JSON.stringify(e);const i=await(0,l.j6)(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(null===e||void 0===e||!e.where)return this._clause=null,void(this.where=null);this._clause=await async function(e,t){try{const i=await(0,c.E)(e,t);if(!i.isStandardized){const e=new s.Z("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);_.error(e)}return e=>{const t=e.readArcadeFeature();return i.testFeature(t,y)}}catch(i){return _.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=(null===e||void 0===e?void 0:e.objectIds)&&new Set(e.objectIds),this._idsToHide=(null===e||void 0===e?void 0:e.hiddenIds)&&new Set(e.hiddenIds),this.objectIds=null===e||void 0===e?void 0:e.objectIds}async _setGeometryFilter(e){if(null===e||void 0===e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await(0,a.cW)(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);(0,n.$P)(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,null!==e&&void 0!==e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=(0,h.y)(this._serviceInfo.timeInfo,e.timeExtent,u.k);else{const t=new s.Z("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);r.Z.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){var t,i;return(!(null!==(t=this._idsToHide)&&void 0!==t&&t.size)||!this._idsToHide.has(e.getObjectId()))&&(!(null!==(i=this._idsToShow)&&void 0!==i&&i.size)||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return null==this._timeOperator||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach(((t,i)=>{1&t||(this._idToVisibility.set(i,1),e.push(i))})),e}}}}]);
//# sourceMappingURL=7481.fbc79a3b.chunk.js.map