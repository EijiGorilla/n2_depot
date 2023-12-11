"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[7658],{22585:(e,t,i)=>{function s(e){const t={};for(const i in e){if("declaredClass"===i)continue;const n=e[i];if(null!=n&&"function"!=typeof n)if(Array.isArray(n)){t[i]=[];for(let e=0;e<n.length;e++)t[i][e]=s(n[e])}else"object"==typeof n?n.toJSON&&(t[i]=JSON.stringify(n)):t[i]=n}return t}i.d(t,{A:()=>s})},5192:(e,t,i)=>{i.d(t,{Ev:()=>g,JT:()=>f,Vn:()=>v,Vr:()=>m,hH:()=>y,n7:()=>_,qp:()=>p});var s=i(76200),n=i(35995),r=i(77981),o=i(91340),a=i(92975),l=i(22585),u=i(27607),c=i(68620);const d="Layer does not support extent calculation.";function h(e,t){var i;const s=e.geometry,n=e.toJSON();delete n.compactGeometryEnabled,delete n.defaultSpatialReferenceEnabled;const o=n;let l,u,c;if(null!=s&&(u=s.spatialReference,c=(0,a.B9)(u),o.geometryType=(0,r.Ji)(s),o.geometry=function(e,t){if(t&&"extent"===e.type)return"".concat(e.xmin,",").concat(e.ymin,",").concat(e.xmax,",").concat(e.ymax);if(t&&"point"===e.type)return"".concat(e.x,",").concat(e.y);const i=e.toJSON();return delete i.spatialReference,JSON.stringify(i)}(s,e.compactGeometryEnabled),o.inSR=c),n.groupByFieldsForStatistics&&(o.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(o.objectIds=n.objectIds.join(",")),n.orderByFields&&(o.orderByFields=n.orderByFields.join(",")),!n.outFields||!n.returnDistinctValues&&(null!==t&&void 0!==t&&t.returnCountOnly||null!==t&&void 0!==t&&t.returnExtentOnly||null!==t&&void 0!==t&&t.returnIdsOnly)?delete o.outFields:n.outFields.includes("*")?o.outFields="*":o.outFields=n.outFields.join(","),n.outSR?(o.outSR=(0,a.B9)(n.outSR),l=e.outSpatialReference):s&&(n.returnGeometry||n.returnCentroid)&&(o.outSR=o.inSR,l=u),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(o.outStatistics=JSON.stringify(n.outStatistics)),n.fullText&&(o.fullText=JSON.stringify(n.fullText)),n.pixelSize&&(o.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=u&&null!=(null===(i=e.quantizationParameters)||void 0===i?void 0:i.extent)&&u.equals(e.quantizationParameters.extent.spatialReference)&&delete n.quantizationParameters.extent.spatialReference,o.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.parameterValues&&(o.parameterValues=JSON.stringify(n.parameterValues)),n.rangeValues&&(o.rangeValues=JSON.stringify(n.rangeValues)),n.dynamicDataSource&&(o.layer=JSON.stringify({source:n.dynamicDataSource}),delete n.dynamicDataSource),n.timeExtent){const e=n.timeExtent,{start:t,end:i}=e;null==t&&null==i||(o.time=t===i?t:"".concat(null!==t&&void 0!==t?t:"null",",").concat(null!==i&&void 0!==i?i:"null")),delete n.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=u&&null!=l&&u.equals(l)&&(o.defaultSR=o.inSR,delete o.inSR,delete o.outSR),o}async function f(e,t,i,s){const n=null!=t.timeExtent&&t.timeExtent.isEmpty?{data:{features:[]}}:await v(e,t,"json",s);return(0,c.p)(t,i,n.data),n}async function p(e,t,i,s){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:i.createFeatureResult()};const n=await _(e,t,s),r=n;return r.data=(0,u.C)(n.data,i),r}function _(e,t,i){return v(e,t,"pbf",i)}function g(e,t,i){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{objectIds:[]}}):v(e,t,"json",i,{returnIdsOnly:!0})}function y(e,t,i){return null!=t.timeExtent&&t.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):v(e,t,"json",i,{returnIdsOnly:!0,returnCountOnly:!0})}async function m(e,t,i){if(null!=t.timeExtent&&t.timeExtent.isEmpty)return{data:{count:0,extent:null}};const s=await v(e,t,"json",i,{returnExtentOnly:!0,returnCountOnly:!0}),n=s.data;if(n.hasOwnProperty("extent"))return s;if(n.features)throw new Error(d);if(n.hasOwnProperty("count"))throw new Error(d);return s}async function v(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};const u="string"==typeof e?(0,n.mN)(e):e,c=t.geometry?[t.geometry]:[],d=await(0,o.aX)(c,null,{signal:r.signal}),f=null===d||void 0===d?void 0:d[0];null!=f&&((t=t.clone()).geometry=f);const p=(0,l.A)({...u.query,f:i,...a,...h(t,a)});return(0,s.Z)((0,n.v_)(u.path,(_=a,null==t.formatOf3DObjects||_.returnCountOnly||_.returnExtentOnly||_.returnIdsOnly?"query":"query3d")),{...r,responseType:"pbf"===i?"array-buffer":"json",query:{...p,...r.query}});var _}},77658:(e,t,i)=>{i.r(t),i.d(t,{default:()=>ie});var s=i(27366),n=(i(59486),i(91505)),r=i(66978),o=i(94172),a=i(49861),l=(i(25243),i(63780)),u=(i(93169),i(69912)),c=i(46634),d=i(78952),h=i(68928),f=i(75878),p=i(22824),_=i(21149),g=i(64575),y=i(59877),m=i(53580),v=i(48817),C=i(7138);let E=class extends C.Z{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(e,t){this._pending.push({promise:e,callback:t}),1===this._pending.length&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const e=this._pending[0];e.promise.then((t=>e.callback(t))).catch((()=>{})).then((()=>{this._pending.shift(),this._process()}))}};(0,s._)([(0,a.Cb)()],E.prototype,"updating",void 0),E=(0,s._)([(0,u.j)("esri.core.AsyncSequence")],E);var F,b=i(14921),S=i(42537),T=i(32718),I=i(92377),w=i(53866),O=i(65156),x=i(83406),R=i(25899),A=i(70436),P=i(5192);class H{constructor(e,t){this.data=e,this.resolution=t,this.state={type:F.CREATED},this.alive=!0}process(e){switch(this.state.type){case F.CREATED:return this.state=this._gotoFetchCount(this.state,e),this.state.task.promise.then(e.resume,e.resume);case F.FETCH_COUNT:break;case F.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,e),this.state.task.promise.then(e.resume,e.resume);case F.FETCH_FEATURES:break;case F.FETCHED_FEATURES:this.state=this._goToDone(this.state,e);case F.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case F.CREATED:case F.FETCH_COUNT:return 0;case F.FETCHED_COUNT:return this.state.featureCount;case F.FETCH_FEATURES:return this.state.previous.featureCount;case F.FETCHED_FEATURES:return this.state.features.length;case F.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case F.CREATED:return"created";case F.FETCH_COUNT:return"fetch-count";case F.FETCHED_COUNT:return"fetched-count";case F.FETCH_FEATURES:return"fetch-features";case F.FETCHED_FEATURES:return"fetched-features";case F.DONE:return"done"}}_gotoFetchCount(e,t){return{type:F.FETCH_COUNT,previous:e,task:(0,b.vr)((async e=>{const i=await(0,b.mt)(t.fetchCount(this,e));this.state.type===F.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,i.ok?i.value:1/0))}))}}_gotoFetchedCount(e,t){return{type:F.FETCHED_COUNT,featureCount:t,previous:e}}_gotoFetchFeatures(e,t){return{type:F.FETCH_FEATURES,previous:e,task:(0,b.vr)((async i=>{const s=await(0,b.mt)(t.fetchFeatures(this,e.featureCount,i));this.state.type===F.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,s.ok?s.value:[]))}))}}_gotoFetchedFeatures(e,t){return{type:F.FETCHED_FEATURES,previous:e,features:t}}_goToDone(e,t){return t.finish(this,e.features),{type:F.DONE,previous:e}}reset(){const e=this.state;switch(this.state={type:F.CREATED},e.type){case F.CREATED:case F.FETCHED_COUNT:case F.FETCHED_FEATURES:case F.DONE:break;case F.FETCH_COUNT:case F.FETCH_FEATURES:e.task.abort()}}intersects(e){return null==e||!this.data.extent||((0,O.oJ)(e,z),(0,O.kK)(this.data.extent,z))}}!function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"}(F||(F={}));const z=(0,O.Ue)();let N=class extends C.Z{get _minimumVerticesPerFeature(){var e;switch(null===(e=this.store)||void 0===e?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const e=new Set;return this.objectIdField&&e.add(this.objectIdField),this.globalIdField&&e.add(this.globalIdField),e}set outFields(e){const t=this._get("outFields"),i=(0,I.G0)(e,this._mandatoryOutFields);(0,I.fS)(i,t)||(this._set("outFields",i),(0,I.ik)(i,t)||this.refresh())}get outFields(){var e;return null!==(e=this._get("outFields"))&&void 0!==e?e:this._mandatoryOutFields}set filter(e){const t=this._get("filter"),i=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(null!=e&&null!=t&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.suspended=!0,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new c.R,this._pendingEdits=new E,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this._updatingHandles.add((()=>this._configuration),(()=>this.refresh())),this._updatingHandles.add((()=>this.tilesOfInterest),((e,t)=>{(0,l.fS)(e,t,((e,t)=>{let{id:i}=e,{id:s}=t;return i===s}))||this._process()}),o.Z_),this.addHandles((0,o.gx)((()=>!this.suspended),(()=>this._process())))}destroy(){this._pendingTiles.forEach((e=>this._deletePendingTile(e))),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach((e=>this._deletePendingTile(e))),this._process()}applyEdits(e){this._pendingEdits.push(e,(async e=>{if(0===e.addedFeatures.length&&0===e.updatedFeatures.length&&0===e.deletedFeatures.length)return;for(const[,i]of this._pendingTiles)i.reset();const t={...e,deletedFeatures:e.deletedFeatures.map((e=>{let{objectId:t,globalId:i}=e;return t&&-1!==t?t:this._lookupObjectIdByGlobalId(i)}))};await this._updatingHandles.addPromise(this.store.processEdits(t,((e,t)=>this._queryFeaturesById(e,t)),this._pendingEditsAbortController.signal)),this._processPendingTiles()}))}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!(0,R.M8)(this.url))return;const e=(0,b.vr)((async e=>{try{var t,i;const s=await(0,P.Vr)(this.url,new _.Z({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:null!==(t=this.capabilities.query.supportsCacheHint)&&void 0!==t?t:void 0}),{query:this._configuration.customParameters,signal:e});this.store.extent=w.Z.fromJSON(null===(i=s.data)||void 0===i?void 0:i.extent)}catch(Z){(0,r.r9)(Z),T.Z.getLogger(this).warn("Failed to fetch data extent",Z)}}));this._updatingHandles.addPromise(e.promise.then((()=>this._process()))),this.addHandles((0,S.kB)((()=>e.abort())))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map((e=>e.debugInfo)),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this._pendingTiles)e.alive=!1}_createPendingTiles(){if(this.suspended)return;const e=this._collectMissingTilesInfo();if(this._setAvailability(null==e?1:e.coveredArea/e.fullArea),null!=e)for(const{data:t,resolution:i}of e.missingTiles){const e=this._pendingTiles.get(t.id);e?(e.resolution=i,e.alive=!0):this._createPendingTile(t,i)}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const i=this.tilesOfInterest[t],s=this.store.process(i,((e,t)=>this._verifyTileComplexity(e,t)),this.outFields);null==e?e=s:e.prepend(s)}return e}_deletePendingTiles(){for(const[,e]of this._pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(e,t)=>this._fetchCount(e,t),fetchFeatures:(e,t,i)=>this._fetchFeatures(e,t,i),finish:(e,t)=>this._finishPendingTile(e,t),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this._updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<k}_verifyFeatureDensity(e,t){if(null==this.tileInfo)return!1;const i=this.tileSize*t;return e*(M/(i*i))<q}_ensureFetchAllCounts(e){let t=!0;for(const[,i]of this._pendingTiles)i.state.type<F.FETCHED_COUNT&&this._updatingHandles.addPromise(i.process(e)),i.state.type<=F.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(null==e?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const i=new H(e,t);return this._pendingTiles.set(e.id,i),i}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}async _fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:j,signal:t})}async _fetchFeatures(e,t,i){let s=0;const n=[];let r=0,o=t;for(;;){const a=this._createFeaturesQuery(e),l=this._setPagingParameters(a,s,o),{features:u,exceededTransferLimit:c}=await this._queryFeatures(a,i);l&&(s+=a.num),r+=u.length;for(const e of u)n.push(e);if(o=t-r,!l||!c||o<=0)return n}}_filterProperties(e){return null==e?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,i=this.objectIdField;if(null==t)throw new Error("Expected globalIdField to be defined");let s=null;if(this.store.featureStore.forEach((n=>{var r;e===n.attributes[t]&&(s=null!==(r=n.objectId)&&void 0!==r?r:n.attributes[i])})),null==s)throw new Error("Expected to find a feature with globalId ".concat(e));return s}_queryFeaturesById(e,t){const i=this._createFeaturesQuery();return i.objectIds=e,this._queryFeatures(i,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}async _queryFeaturesPBF(e,t){const{sourceSpatialReference:i}=this,{data:s}=await(0,P.qp)(this.url,e,new A.J({sourceSpatialReference:i}),{query:this._configuration.customParameters,timeout:j,signal:t});return(0,x.lM)(s)}async _queryFeaturesJSON(e,t){const{sourceSpatialReference:i}=this,{data:s}=await(0,P.JT)(this.url,e,i,{query:this._configuration.customParameters,timeout:j,signal:t});return(0,x.h_)(s,this.objectIdField)}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;const i=this._createBaseQuery(t),s=null!=(null===t||void 0===t?void 0:t.data)?this.store.getAttributesForTile(null===t||void 0===t||null===(e=t.data)||void 0===e?void 0:e.id):null,n=(0,I.G0)((0,I.e5)(this.outFields,null!==s&&void 0!==s?s:new Set),this._mandatoryOutFields);return i.outFields=Array.from(n),i.returnGeometry=!0,null!=t&&(this.capabilities.query.supportsResultType?i.resultType="tile":this.capabilities.query.supportsCacheHint&&(i.cacheHint=!0)),i}_createBaseQuery(e){const t=new _.Z({returnZ:this.hasZ,returnM:!1,geometry:null!=this.tileInfo&&null!=e?(0,O.HH)(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this._configuration.filter;return null!=i&&(t.where=i.where,t.gdbVersion=i.gdbVersion,t.timeExtent=i.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:n,tileMaxRecordCount:r,maxRecordCount:o,supportsResultType:a}=this.capabilities.query,l=s?_.Z.MAX_MAX_RECORD_COUNT_FACTOR:1,u=l*((a||n)&&r?r:o||D);return e.start=t,s?(e.maxRecordCountFactor=Math.min(l,Math.ceil(i/u)),e.num=Math.min(i,e.maxRecordCountFactor*u)):e.num=Math.min(i,u),!0}};(0,s._)([(0,a.Cb)({constructOnly:!0})],N.prototype,"url",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],N.prototype,"objectIdField",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],N.prototype,"globalIdField",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],N.prototype,"capabilities",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],N.prototype,"sourceSpatialReference",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],N.prototype,"spatialReference",void 0),(0,s._)([(0,a.Cb)({constructOnly:!0})],N.prototype,"store",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],N.prototype,"_minimumVerticesPerFeature",null),(0,s._)([(0,a.Cb)()],N.prototype,"_mandatoryOutFields",null),(0,s._)([(0,a.Cb)()],N.prototype,"outFields",null),(0,s._)([(0,a.Cb)()],N.prototype,"suspended",void 0),(0,s._)([(0,a.Cb)()],N.prototype,"filter",null),(0,s._)([(0,a.Cb)()],N.prototype,"customParameters",null),(0,s._)([(0,a.Cb)({readOnly:!0})],N.prototype,"_configuration",null),(0,s._)([(0,a.Cb)()],N.prototype,"tileInfo",null),(0,s._)([(0,a.Cb)()],N.prototype,"tileSize",null),(0,s._)([(0,a.Cb)()],N.prototype,"tilesOfInterest",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],N.prototype,"updating",null),(0,s._)([(0,a.Cb)({readOnly:!0})],N.prototype,"updatingExcludingEdits",null),(0,s._)([(0,a.Cb)({readOnly:!0})],N.prototype,"availability",void 0),(0,s._)([(0,a.Cb)()],N.prototype,"hasZ",null),N=(0,s._)([(0,u.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],N);const D=2e3,j=6e5,k=1e6,M=25,q=1;var U=i(59896),B=i(70116),J=i(66020),V=i(87960);class Z{constructor(){this._store=new Map,this._byteSize=0}set(e,t){this.delete(e),this._store.set(e,t),this._byteSize+=t.byteSize}delete(e){const t=this._store.get(e);return!!this._store.delete(e)&&(null!=t&&(this._byteSize-=t.byteSize),!0)}get(e){return this._used(e),this._store.get(e)}has(e){return this._used(e),this._store.has(e)}clear(){this._store.clear()}applyByteSizeLimit(e,t){for(const[i,s]of this._store){if(this._byteSize<=e)break;this.delete(i),t(s)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(e){const t=this._store.get(e);t&&(this._store.delete(e),this._store.set(e,t))}}let G=class extends C.Z{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*B.Y.MEGABYTES,this._tileBounds=new J.H,this._tiles=new Z,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=(0,O.Ue)()}add(e,t){var i,s;for(const o of t)this._referenceFeature(o.objectId);const n=this.featureStore.upsertMany(t),r=n.map((e=>new Set(Object.keys(e.attributes)))).reduce(((e,t)=>(0,I.jV)(e,t)),new Set(Object.keys(null!==(i=null===(s=n[0])||void 0===s?void 0:s.attributes)&&void 0!==i?i:[])));this._addTileStorage(e,new Set(n.map((e=>e.objectId))),function(e){return e.reduce(((e,t)=>e+function(e){return 32+function(e){if(null==e)return 0;const t=(0,U.do)(e.lengths,4);return 32+(0,U.do)(e.coords,8)+t}(e.geometry)+(0,U.f2)(e.attributes)}(t)),0)}(n),r),this._tiles.applyByteSizeLimit(this.maximumByteSize,(e=>this._removeTileStorage(e)))}getAttributesForTile(e){var t;return e?null===(t=this._tiles.get(e))||void 0===t?void 0:t.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,i){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,i)}_addTileStorage(e,t,i,s){const n=e.id;this._tiles.set(n,new L(e,t,i,s)),this._tileBounds.set(n,e.extent),this._tileFeatureCounts.set(n,t.size)}_remove(e){let{id:t}=e;const i=this._tiles.get(t);i&&this._removeTileStorage(i)}_removeTileStorage(e){const t=[];for(const s of e.objectIds)this._unreferenceFeature(s)===X.REMOVED&&t.push(s);this.featureStore.removeManyById(t);const i=e.data.id;this._tiles.delete(i),this._tileBounds.delete(i)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this._tiles){for(const i of e)t.objectIds.delete(i);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}async _processEditsRefetch(e,t,i){const s=(await t(e,i)).features,{hasZ:n,hasM:r}=this.featureStore;for(const o of s){const e=(0,x.$)(this._tmpBoundingRect,o.geometry,n,r);null!=e&&this._tileBounds.forEachInBounds(e,(e=>{const t=this._tiles.get(e);this.featureStore.add(o);const i=o.objectId;t.objectIds.has(i)||(t.objectIds.add(i),this._referenceFeature(i),this._tileFeatureCounts.set(t.data.id,t.objectIds.size))}))}}process(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>!0,i=arguments.length>2?arguments[2]:void 0;if(null==this.tileInfo||!e.extent||null!=this.extent&&!(0,O.kK)((0,O.oJ)(this.extent,this._tmpBoundingRect),e.extent))return new W(e);const s=this.getAttributesForTile(e.id);if((0,I.ik)(i,s))return new W(e);const n=this._createTileTree(e,this.tileInfo);return this._simplify(n,t,null,0,1),this._collectMissingTiles(e,n,this.tileInfo,i)}get debugInfo(){return Array.from(this._tiles.values()).map((e=>{let{data:t}=e;return{data:t,featureCount:this._tileFeatureCounts.get(t.id)||0}}))}getFeatureCount(e){var t;return null!==(t=this._tileFeatureCounts.get(e.id))&&void 0!==t?t:0}async fetchCount(e,t,i,s){const n=this._tileFeatureCounts.get(e.id);if(null!=n)return n;const r=await(0,P.hH)(t,i,s);return this._tileFeatureCounts.set(e.id,r.data.count),r.data.count}_createTileTree(e,t){const i=new Q(e.level,e.row,e.col);return t.updateTileInfo(i,p.Z.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,(s=>{var n;const r=null===(n=this._tiles.get(s))||void 0===n?void 0:n.data;r&&this._tilesAreRelated(e,r)&&this._populateChildren(i,r,t,this._tileFeatureCounts.get(r.id)||0)})),i}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const i=e.level<t.level,s=i?e:t,n=i?t:e,r=1<<n.level-s.level;return Math.floor(n.row/r)===s.row&&Math.floor(n.col/r)===s.col}_populateChildren(e,t,i,s){const n=t.level-e.level-1;if(n<0)return void(e.isLeaf=!0);const r=t.row>>n,o=t.col>>n,a=e.row<<1,l=o-(e.col<<1)+(r-a<<1),u=e.children[l];if(null!=u)this._populateChildren(u,t,i,s);else{const n=new Q(e.level+1,r,o);i.updateTileInfo(n,p.Z.ExtrapolateOptions.POWER_OF_TWO),e.children[l]=n,this._populateChildren(n,t,i,s)}}_simplify(e,t,i,s,n){const r=n*n;if(e.isLeaf)return t(this.getFeatureCount(e),n)?0:(this._remove(e),null!=i&&(i.children[s]=null),r);const o=n/2,a=o*o;let l=0;for(let u=0;u<e.children.length;u++){const i=e.children[u];l+=null!=i?this._simplify(i,t,e,u,o):a}return 0===l?this._mergeChildren(e):1-l/r<Y&&(this._purge(e),null!=i&&(i.children[s]=null),l=r),l}_mergeChildren(e){var t;const i=new Set;let s,n=0;this._forEachLeaf(e,(e=>{const t=this._tiles.get(e.id);if(t){s=s?(0,I.jV)(s,t.attributeKeys):new Set(t.attributeKeys),n+=t.byteSize;for(const e of t.objectIds)i.has(e)||(i.add(e),this._referenceFeature(e));this._remove(e)}})),this._addTileStorage(e,i,n,null!==(t=s)&&void 0!==t?t:new Set),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,i.size)}_forEachLeaf(e,t){for(const i of e.children)null!=i&&(i.isLeaf?t(i):this._forEachLeaf(i,t))}_purge(e){if(null!=e)if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const i=e.children[t];this._purge(i),e.children[t]=null}}_collectMissingTiles(e,t,i,s){const n=new K(i,e,this.extent);return this._collectMissingTilesRecurse(t,n,1,s),n.info}_collectMissingTilesRecurse(e,t,i,s){const n=this.getAttributesForTile(e.id),r=n&&!(0,I.ik)(s,n);if(r&&t.addMissing(e.level,e.row,e.col,i),e.isLeaf)return;if(!e.hasChildren)return void(r||t.addMissing(e.level,e.row,e.col,i));const o=i/2;for(let a=0;a<e.children.length;a++){const i=e.children[a];null==i?t.addMissing(e.level+1,(e.row<<1)+((2&a)>>1),(e.col<<1)+(1&a),o):this._collectMissingTilesRecurse(i,t,o,s)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),1===t?X.ADDED:X.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return 0===t?(this._refCounts.delete(e),X.REMOVED):(t>0&&this._refCounts.set(e,t),X.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map((e=>"".concat(e.data.id,":[").concat(Array.from(e.objectIds),"]"))),featureReferences:Array.from(this._refCounts.keys()).map((e=>"".concat(e,":").concat(this._refCounts.get(e))))}}};(0,s._)([(0,a.Cb)({constructOnly:!0})],G.prototype,"featureStore",void 0),(0,s._)([(0,a.Cb)()],G.prototype,"tileInfo",void 0),(0,s._)([(0,a.Cb)()],G.prototype,"extent",void 0),(0,s._)([(0,a.Cb)()],G.prototype,"maximumByteSize",void 0),G=(0,s._)([(0,u.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],G);class L{constructor(e,t,i,s){this.data=e,this.objectIds=t,this.byteSize=i,this.attributeKeys=s}}class Q{constructor(e,t,i){this.level=e,this.row=t,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(null!=this.children[0]||null!=this.children[1]||null!=this.children[2]||null!=this.children[3])}}class W{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.missingTiles=t,this.fullArea=0,this.coveredArea=0,this.fullArea=(0,O.SO)(e.extent),this.coveredArea=this.fullArea}prepend(e){this.missingTiles=e.missingTiles.concat(this.missingTiles),this.coveredArea+=e.coveredArea,this.fullArea+=e.fullArea}}class K{constructor(e,t,i){this._tileInfo=e,this._extent=null,this.info=new W(t),null!=i&&(this._extent=(0,O.oJ)(i))}addMissing(e,t,i,s){const n=new V.f(null,e,t,i);this._tileInfo.updateTileInfo(n,p.Z.ExtrapolateOptions.POWER_OF_TWO),null==n.extent||null!=this._extent&&!(0,O.kK)(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:s}),this.info.coveredArea-=(0,O.SO)(n.extent))}}const Y=.18751;var X,$;($=X||(X={}))[$.ADDED=0]="ADDED",$[$.REMOVED=1]="REMOVED",$[$.UNCHANGED=2]="UNCHANGED";var ee=i(77981);let te=class extends n.Z.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=(0,r.hh)(),this._elevationAligner=(0,y.p)(),this._elevationFilter=(0,m.c)(),this._symbologyCandidatesFetcher=(0,v.k)(),this._updatingHandles=new c.R,this._editsUpdatingHandles=new c.R,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(e,t)=>{const i={query:e},s=await this.remoteClient.invoke("alignElevation",i,{signal:t});return(0,r.k_)(t),s},this._getSymbologyCandidates=async(e,t)=>{const i={candidates:e,spatialReference:this._spatialReference.toJSON()},s=await this.remoteClient.invoke("getSymbologyCandidates",i,{signal:t});return(0,r.k_)(t),s}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){var e,t,i;null!==(e=this._featureFetcher)&&void 0!==e&&e.destroy(),null!==(t=this._queryEngine)&&void 0!==t&&t.destroy(),null===(i=this._featureStore)||void 0===i||i.clear()}async setup(e){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:i,timeInfo:s,fieldsIndex:n}=e.serviceInfo,{hasZ:r}=e,a=d.Z.fromJSON(e.spatialReference);this._spatialReference=a,this._featureStore=new h.Z({...e.serviceInfo,hasZ:r,hasM:!1}),this._queryEngine=new f.q({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fieldsIndex:n,hasZ:r,hasM:!1,objectIdField:i,timeInfo:s}),this._featureFetcher=new N({store:new G({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:a,sourceSpatialReference:d.Z.fromJSON(e.serviceInfo.spatialReference)});const l="3d"===e.configuration.viewType;return this._elevationAligner=(0,y.p)(l,{elevationInfo:null!=e.elevationInfo?g.Z.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=(0,m.c)(l),this.addHandles([(0,o.YP)((()=>this._featureFetcher.availability),(e=>this.emit("notify-availability",{availability:e})),o.Z_),(0,o.YP)((()=>this.updating),(()=>this._notifyUpdating()))]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),se}async setSuspended(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),(0,r.k_)(t),this._featureFetcher.suspended=e,se}async updateOutFields(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),(0,r.k_)(t),this._featureFetcher.outFields=new Set(null!==e&&void 0!==e?e:[]),se}async fetchCandidates(e,t){var i;await this._whenSetup.promise,(0,r.k_)(t);const s=function(e){if(!e.filter)return{...e,query:{where:"1=1"}};const{distance:t,units:i,spatialRel:s,where:n,timeExtent:r,objectIds:o}=e.filter,a={geometry:e.filter.geometry?(0,ee.im)(e.filter.geometry):void 0,distance:t,units:i,spatialRel:s,timeExtent:r,objectIds:o,where:null!==n&&void 0!==n?n:"1=1"};return{...e,query:a}}(e),n=null===t||void 0===t?void 0:t.signal,o=await this._queryEngine.executeQueryForSnapping(s,n);(0,r.k_)(n);const a=await this._elevationAligner.alignCandidates(o.candidates,null!==(i=d.Z.fromJSON(e.point.spatialReference))&&void 0!==i?i:d.Z.WGS84,n);(0,r.k_)(n);const l=await this._symbologyCandidatesFetcher.fetch(a,n);(0,r.k_)(n);const u=0===l.length?a:a.concat(l);return{result:{candidates:this._elevationFilter.filter(s,u)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),(0,r.k_)(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=null!=e.tileInfo?p.Z.fromJSON(e.tileInfo):null,se}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),(0,r.k_)(t),this._featureFetcher.refresh(),se}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),(0,r.k_)(t),await(0,o.N1)((()=>!this.updatingExcludingEdits),t),(0,r.k_)(t),se}async getDebugInfo(e,t){return(0,r.k_)(t),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(e,t){this._updatingHandles.addPromise(this._whenSetup.promise),(0,r.k_)(t);const i=(0,r.hh)();return this._pendingApplyEdits.set(e.id,i),this._featureFetcher.applyEdits(i.promise),this._editsUpdatingHandles.addPromise(i.promise),se}async endApplyEdits(e,t){const i=this._pendingApplyEdits.get(e.id);return i&&i.resolve(e.edits),(0,r.k_)(t),se}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),se}async notifySymbologyChange(e,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),se}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=(0,v.k)(e,this._getSymbologyCandidates),se}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=null!=e.filter?_.Z.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};(0,s._)([(0,a.Cb)({readOnly:!0})],te.prototype,"updating",null),(0,s._)([(0,a.Cb)({readOnly:!0})],te.prototype,"updatingExcludingEdits",null),(0,s._)([(0,a.Cb)()],te.prototype,"_isInitializing",void 0),te=(0,s._)([(0,u.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],te);const ie=te;const se={result:{}}},59877:(e,t,i)=>{i.d(t,{p:()=>l});i(93169);var s=i(16054),n=i(77427),r=i(66978),o=i(68860),a=i(88152);function l(){let e=arguments.length>1?arguments[1]:void 0;if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]){const{elevationInfo:t,alignPointsInFeatures:i}=e;return new c(t,i)}return new u}class u{async alignCandidates(e,t,i){return e}notifyElevationSourceChange(){}}class c{constructor(e,t){this._elevationInfo=e,this._alignPointsInFeatures=t,this._alignmentsCache=new s.z(1024),this._cacheVersion=0}async alignCandidates(e,t,i){const s=this._elevationInfo;return null==s||"absolute-height"!==s.mode||s.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,i):(this._alignAbsoluteElevationCandidates(e,t,s),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(e,t,i){const{offset:s,unit:n}=i;if(null==s)return;const r=(0,o._R)(t),l=s*((0,a.Z7)(null!==n&&void 0!==n?n:"meters")/r);for(const o of e)switch(o.type){case"edge":o.start.z+=l,o.end.z+=l;continue;case"vertex":o.target.z+=l;continue}}async _alignComputedElevationCandidates(e,t,i){const s=new Map;for(const r of e)(0,n.s1)(s,r.objectId,f).push(r);const[o,a,l]=this._prepareQuery(s,t),u=await this._alignPointsInFeatures(o,i);if((0,r.k_)(i),l!==this._cacheVersion)return this._alignComputedElevationCandidates(e,t,i);this._applyCacheAndResponse(o,u,a);const{drapedObjectIds:c,failedObjectIds:d}=u,h=[];for(const n of e){const{objectId:e}=n;c.has(e)&&"edge"===n.type&&(n.draped=!0),d.has(e)||h.push(n)}return h}_prepareQuery(e,t){const i=[],s=[];for(const[n,r]of e){const e=[];for(const t of r)this._addToQueriesOrCachedResult(n,t.target,e,s),"edge"===t.type&&(this._addToQueriesOrCachedResult(n,t.start,e,s),this._addToQueriesOrCachedResult(n,t.end,e,s));0!==e.length&&i.push({objectId:n,points:e})}return[{spatialReference:t.toJSON(),pointsInFeatures:i},s,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,i,s){const n=h(e,t),r=this._alignmentsCache.get(n);null==r?i.push(t):s.push(new d(t,r))}_applyCacheAndResponse(e,t,i){let{elevations:s,drapedObjectIds:n,failedObjectIds:r}=t;for(const l of i)l.apply();let o=0;const a=this._alignmentsCache;for(const{objectId:l,points:u}of e.pointsInFeatures){if(r.has(l)){o+=u.length;continue}const e=!n.has(l);for(const t of u){const i=h(l,t),n=s[o++];t.z=n,e&&a.put(i,n,1)}}}}class d{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function h(e,t){let{x:i,y:s,z:n,spatialReference:r}=t;return"".concat(e,"-").concat(i,"-").concat(s,"-").concat(null!==n&&void 0!==n?n:0,"}-wkid:").concat(null===r||void 0===r?void 0:r.wkid)}function f(){return[]}},53580:(e,t,i)=>{i.d(t,{c:()=>o});i(93169);class s{filter(e,t){return t}notifyElevationSourceChange(){}}class n{filter(e,t){const{point:i,distance:s}=e,{z:n}=i;if(null==n)return t;if(0===t.length)return t;const o=function(e){return"number"==typeof e?{x:e,y:e,z:e}:e}(s),a=this._updateCandidatesTo3D(t,i,o).filter(r);return a.sort(u),a}_updateCandidatesTo3D(e,t,i){for(const s of e)switch(s.type){case"edge":a(s,t,i);continue;case"vertex":l(s,t,i);continue}return e}}function r(e){return e.distance<=1}function o(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new n:new s}function a(e,t,i){let{x:s,y:n,z:r}=i;const{start:o,end:a,target:l}=e;e.draped||function(e,t,i,s){const n=s.x-i.x,r=s.y-i.y,o=s.z-i.z,a=n*n+r*r+o*o,l=(t.x-i.x)*n+(t.y-i.y)*r+o*(t.z-i.z),u=Math.min(1,Math.max(0,l/a)),c=i.x+n*u,d=i.y+r*u,h=i.z+o*u;e.x=c,e.y=d,e.z=h}(l,t,o,a);const u=(t.x-l.x)/s,c=(t.y-l.y)/n,d=(t.z-l.z)/r;e.distance=Math.sqrt(u*u+c*c+d*d)}function l(e,t,i){let{x:s,y:n,z:r}=i;const{target:o}=e,a=(t.x-o.x)/s,l=(t.y-o.y)/n,u=(t.z-o.z)/r,c=Math.sqrt(a*a+l*l+u*u);e.distance=c}function u(e,t){return e.distance-t.distance}},48817:(e,t,i)=>{i.d(t,{k:()=>a});i(93169);var s=i(84652),n=i(16054),r=i(66978),o=i(643);function a(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?new u(arguments.length>1?arguments[1]:void 0):new l}class l{async fetch(){return[]}notifySymbologyChange(){}}class u{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new n.z(1024),this._cacheVersion=0}async fetch(e,t){if(0===e.length)return[];const i=[],n=[],o=this._candidatesCache;for(const r of e){const e=c(r),t=o.get(e);if(t)for(const i of t)n.push((0,s.d9)(i));else i.push(r),o.put(e,[],1)}if(0===i.length)return n;const a=this._cacheVersion,{candidates:l,sourceCandidateIndices:u}=await this._getSymbologyCandidates(i,t);if((0,r.k_)(t),a!==this._cacheVersion)return this.fetch(e,t);const d=[],{length:h}=l;for(let r=0;r<h;++r){const e=l[r],t=c(i[u[r]]),n=o.get(t);n.push(e),o.put(t,n,n.length),d.push((0,s.d9)(e))}return n.concat(d)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function c(e){switch(e.type){case"vertex":{var t;const{objectId:i,target:s}=e,n="".concat(i,"-vertex-").concat(s.x,"-").concat(s.y,"-").concat(null!==(t=s.z)&&void 0!==t?t:0);return(0,o.hP)(n).toString()}case"edge":{var i,s;const{objectId:t,start:n,end:r}=e,a="".concat(t,"-edge-").concat(n.x,"-").concat(n.y,"-").concat(null!==(i=n.z)&&void 0!==i?i:0,"-to-").concat(r.x,"-").concat(r.y,"-").concat(null!==(s=r.z)&&void 0!==s?s:0);return(0,o.hP)(a).toString()}default:return""}}}}]);
//# sourceMappingURL=7658.8aac3ffc.chunk.js.map