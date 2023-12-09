"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[1657],{63231:(e,t,n)=>{function s(e){return null!=a(e)||null!=o(e)}function i(e){return u.test(e)}function r(e){var t;return null!==(t=a(e))&&void 0!==t?t:o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,s=0;for(;!t&&s<=e.length;)t=!l.test(e[s]),s++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){var t,n,s,i;const r=u.exec(e);if(null===r||void 0===r||!r.groups)return null;const o=r.groups,a=+o.year,l=+o.month-1,c=+o.day,d=+(null!==(t=o.hours)&&void 0!==t?t:"0"),p=+(null!==(n=o.minutes)&&void 0!==n?n:"0"),y=+(null!==(s=o.seconds)&&void 0!==s?s:"0");if(d>23)return null;if(p>59)return null;if(y>59)return null;const f=null!==(i=o.ms)&&void 0!==i?i:"0",h=f?+f.padEnd(3,"0").substring(0,3):0;let g;if(o.isUTC||!o.offsetSign)g=Date.UTC(a,l,c,d,p,y,h);else{const e=+o.offsetHours,t=+o.offsetMinutes;g=6e4*("+"===o.offsetSign?-1:1)*(60*e+t)+Date.UTC(a,l,c,d,p,y,h)}return Number.isNaN(g)?null:g}n.d(t,{mu:()=>i,of:()=>s,sG:()=>r});const u=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const l=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},51657:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var s=n(76200),i=n(14921),r=n(10064),o=n(32718),a=n(66978),u=n(77981),l=n(92975),c=n(83406),d=n(68928),p=n(19995),y=n(75878),f=n(47615),h=n(63543),g=n(68808),m=n(52410),_=n(85249),b=n(37270),F=n(6701);const v={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class w{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;null!==(e=this._queryEngine)&&void 0!==e&&e.destroy(),this._queryEngine=this._createDefaultAttributes=null}async load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[],[s]=await Promise.all([e.url?this._fetch(null===t||void 0===t?void 0:t.signal):null,this._checkProjection(e.spatialReference)]),i=(0,f.my)(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],a=null!=e.hasZ?e.hasZ:i.hasZ,u=i.geometryType;let c=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const p=e.spatialReference||l.Zn;let g=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});const w=new m.Z(o);let I=w.get(c);I?("esriFieldTypeString"!==I.type&&(I.type="esriFieldTypeOID"),I.editable=!1,I.nullable=!1,c=I.name):(I={alias:c,name:c,type:"string"===i.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(I));const E={};for(const l of o){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new r.Z("geojson-layer:invalid-field-name","field name is missing",{field:l});if(!_.v.jsonValues.includes(l.type))throw new r.Z("geojson-layer:invalid-field-type",'invalid type for field "'.concat(l.name,'"'),{field:l});if(l.name!==I.name){const e=(0,b.os)(l);void 0!==e&&(E[l.name]=e)}null==l.length&&(l.length=(0,b.ZR)(l))}if(g){if(g.startTimeField){const e=w.get(g.startTimeField);e?(g.startTimeField=e.name,e.type="esriFieldTypeDate"):g.startTimeField=null}if(g.endTimeField){const e=w.get(g.endTimeField);e?(g.endTimeField=e.name,e.type="esriFieldTypeDate"):g.endTimeField=null}if(g.trackIdField){const e=w.get(g.trackIdField);e?g.trackIdField=e.name:(g.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:g}}))}g.startTimeField||g.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:g}}),g=null)}const T=u?(0,h.bU)(u):void 0,S=w.dateFields.length?{timeZoneIANA:F.pt}:null,j={warnings:n,featureErrors:[],layerDefinition:{...v,drawingInfo:null!==T&&void 0!==T?T:void 0,templates:(0,h.Hq)(E),extent:void 0,geometryType:u,objectIdField:c,fields:o,hasZ:!!a,timeInfo:g,dateFieldsTimeReference:S}};this._queryEngine=new y.q({fieldsIndex:m.Z.fromLayerJSON({fields:o,timeInfo:g,dateFieldsTimeReference:S}),geometryType:u,hasM:!1,hasZ:a,objectIdField:c,spatialReference:p,timeInfo:g,featureStore:new d.Z({geometryType:u,hasM:!1,hasZ:a}),cacheSpatialQueries:!0});const q=this._queryEngine.fieldsIndex.requiredFields.indexOf(I);q>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(q,1),this._createDefaultAttributes=(0,h.Dm)(E,c);const x=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const P=this._normalizeFeatures(x,j.featureErrors);this._queryEngine.featureStore.addMany(P);const{fullExtent:R,timeExtent:Z}=await this._queryEngine.fetchRecomputedExtents();if(j.layerDefinition.extent=R,Z){const{start:e,end:t}=Z;j.layerDefinition.timeInfo.timeExtent=[e,t]}return j}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,g.b)(t,n),(0,p._W)(e.adds,t),(0,p._W)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;this._loadOptions.customParameters=e,null!==(t=this._snapshotTask)&&void 0!==t&&t.abort(),this._snapshotTask=(0,i.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,a.D_)(e)||o.Z.getLogger("esri.layers.GeoJSONLayer").error(new r.Z("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:n,timeExtent:s}=await this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:s}}async _createFeatures(e){if(null==e)return[];const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=(0,f.lG)(e,{geometryType:t,hasZ:n,objectIdField:s});if(!(0,l.fS)(this._queryEngine.spatialReference,l.Zn))for(const r of i)null!=r.geometry&&(r.geometry=(0,c.GH)((0,p.iV)((0,c.di)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),l.Zn,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,i=(await(0,s.Z)(t,{responseType:"json",query:{...n},signal:e})).data;return(0,f.O3)(i),i}_normalizeFeatures(e,t){const{objectIdField:n,fieldsIndex:s}=this._queryEngine,i=[];for(const r of e){const e=this._createDefaultAttributes(),o=(0,g.O0)(s,e,r.attributes,!0);o?null===t||void 0===t||t.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[n],i.push(r))}return i}async _applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(null!==t&&void 0!==t&&t.length&&this._applyAddEdits(i,t),null!==n&&void 0!==n&&n.length&&this._applyUpdateEdits(i,n),null!==s&&void 0!==s&&s.length){for(const e of s)i.deleteResults.push((0,g.d1)(e));this._queryEngine.featureStore.removeManyById(s)}const{fullExtent:r,timeExtent:o}=await this._queryEngine.fetchRecomputedExtents();return{extent:r,timeExtent:o,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine,y=[];for(const c of t){if(c.geometry&&s!==(0,u.Ji)(c.geometry)){n.push((0,g.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,g.O0)(d,t,c.attributes);if(i)n.push(i);else{if(this._assignObjectId(t,c.attributes),c.attributes=t,null!=c.uid){const t=c.attributes[o];e.uidToObjectId[c.uid]=t}if(null!=c.geometry){var f;const e=null!==(f=c.geometry.spatialReference)&&void 0!==f?f:a;c.geometry=(0,p.iV)((0,g.og)(c.geometry,e),e,a)}y.push(c),n.push((0,g.d1)(c.attributes[o]))}}l.addMany((0,c.Yn)([],y,s,r,i,o))}_applyUpdateEdits(e,t){let{updateResults:n}=e;const{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:a,featureStore:l,fieldsIndex:d}=this._queryEngine;for(const f of t){const{attributes:e,geometry:t}=f,h=null===e||void 0===e?void 0:e[o];if(null==h){n.push((0,g.av)("Identifier field ".concat(o," missing")));continue}if(!l.has(h)){n.push((0,g.av)("Feature with object id ".concat(h," missing")));continue}const m=(0,c.EI)(l.getFeature(h),s,r,i);if(null!=t){var y;if(s!==(0,u.Ji)(t)){n.push((0,g.av)("Incorrect geometry type."));continue}const e=null!==(y=t.spatialReference)&&void 0!==y?y:a;m.geometry=(0,p.iV)((0,g.og)(t,e),e,a)}if(e){const t=(0,g.O0)(d,m.attributes,e);if(t){n.push(t);continue}}l.add((0,c.XA)(m,s,r,i,o)),n.push((0,g.d1)(h))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,p._W)(l.Zn,e)}catch{throw new r.Z("geojson-layer","Projection not supported")}}}},47615:(e,t,n)=>{n.d(t,{O3:()=>I,lG:()=>T,my:()=>E,q9:()=>c});var s=n(63231),i=n(10064),r=n(92975),o=n(3182),a=n(80457),u=n(37270);const l={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function c(e){return l[e]}function*d(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*p(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function y(e){for(const t of e)if(t.length>2)return!0;return!1}function f(e){let t=0;for(let n=0;n<e.length;n++){const s=e[n],i=e[(n+1)%e.length];t+=s[0]*i[1]-i[0]*s[1]}return t<=0}function h(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function g(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const s of t.coordinates)b(e,s,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const s of t.coordinates){m(e,s[0],n);for(let t=1;t<s.length;t++)_(e,s[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return v(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const s=t.coordinates;m(e,s[0],n);for(let i=1;i<s.length;i++)_(e,s[i],n);return e}(e,t,n)}}function m(e,t,n){const s=h(t);!function(e){return!f(e)}(s)?b(e,s,n):F(e,s,n)}function _(e,t,n){const s=h(t);!function(e){return f(e)}(s)?b(e,s,n):F(e,s,n)}function b(e,t,n){for(const s of t)v(e,s,n);e.lengths.push(t.length)}function F(e,t,n){for(let s=t.length-1;s>=0;s--)v(e,t[s],n);e.lengths.push(t.length)}function v(e,t,n){const[s,i,r]=t;e.coords.push(s,i),n.hasZ&&e.coords.push(r||0)}function w(e){switch(typeof e){case"string":return(0,s.mu)(e)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4326;if(!e)throw new i.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new i.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:n}=e;if(!n)return;const s="string"==typeof n?n:"name"===n.type?n.properties.name:"EPSG"===n.type?n.properties.code:null,o=(0,r.oR)({wkid:t})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(".*(".concat(t,")$"),"i");if(!s||!o.test(s))throw new i.Z("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:n})}function E(e){var t,n;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=[],r=new Set,o=new Set;let a,l=!1,f=null,h=!1,{geometryType:g=null}=s,m=!1;for(const b of d(e)){const{geometry:e,properties:t,id:n}=b;if((!e||(g||(g=c(e.type)),c(e.type)===g))&&(l||(l=y(p(e))),h||(h=null!=n,h&&(a=typeof n,t&&(f=Object.keys(t).filter((e=>t[e]===n))))),t&&f&&h&&null!=n&&(f.length>1?f=f.filter((e=>t[e]===n)):1===f.length&&(f=t[f[0]]===n?f:[])),!m&&t)){let e=!0;for(const n in t){if(r.has(n))continue;const s=t[n];if(null==s){e=!1,o.add(n);continue}const a=w(s);if("unknown"===a){o.add(n);continue}o.delete(n),r.add(n);const l=(0,u.q6)(n);l&&i.push({name:l,alias:n,type:a})}m=e}}const _=null!==(t=(0,u.q6)(1===(null===(n=f)||void 0===n?void 0:n.length)&&f[0]||null))&&void 0!==t?t:void 0;if(_)for(const c of i)if(c.name===_&&(0,u.H7)(c)){c.type="esriFieldTypeOID";break}return{fields:i,geometryType:g,hasZ:l,objectIdFieldName:_,objectIdFieldType:a,unknownFields:Array.from(o)}}function T(e,t){return Array.from(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function*(){const{geometryType:n,objectIdField:s}=t;for(const r of e){var i;const{geometry:e,properties:u,id:l}=r;if(e&&c(e.type)!==n)continue;const d=u||{};let p;s&&(p=d[s],null==l||p||(d[s]=p=l));const y=new o.u_(e?g(new a.Z,e,t):null,d,null,null!==(i=p)&&void 0!==i?i:void 0);yield y}}()}(d(e),t))}},63543:(e,t,n)=>{n.d(t,{Dm:()=>c,Hq:()=>d,MS:()=>p,bU:()=>a});var s=n(93169),i=n(84652),r=n(60480),o=n(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function c(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n="this.".concat(t," = null;");for(const t in e)n+="this".concat(u.test(t)?".".concat(t):'["'.concat(t,'"]')," = ").concat(JSON.stringify(e[t]),";");const s=new Function("\n      return class AttributesClass$".concat(l++," {\n        constructor() {\n          ").concat(n,";\n        }\n      }\n    "))();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(e)}}]}function p(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}},68808:(e,t,n)=>{n.d(t,{O0:()=>p,av:()=>u,b:()=>g,d1:()=>c,og:()=>h});var s=n(63231),i=n(92975),r=n(37270);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new a(e)}class l{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new l(e)}const d=new Set;function p(e,t,n){let s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];d.clear();for(const o in n){const i=e.get(o);if(!i)continue;const a=y(i,n[o]);if(d.add(i.name),i&&(s||i.editable)){const e=(0,r.Qc)(i,a);if(e)return u((0,r.vP)(e,i,a));t[i.name]=a}}for(const r of null!==(i=null===e||void 0===e?void 0:e.requiredFields)&&void 0!==i?i:[]){var i;if(!d.has(r.name))return u('missing required field "'.concat(r.name,'"'))}return null}function y(e,t){let n=t;return(0,r.H7)(e)&&"string"==typeof t?n=parseFloat(t):(0,r.qN)(e)&&null!=t&&"string"!=typeof t?n=String(t):(0,r.y2)(e)&&"string"==typeof t&&(n=(0,s.sG)(t)),(0,r.Pz)(n)}let f;function h(e,t){if(!e||!(0,i.JY)(t))return e;if("rings"in e||"paths"in e){if(null==f)throw new TypeError("geometry engine not loaded");return f.simplify(t,e)}return e}async function g(e,t){!(0,i.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return null==f&&(f=await Promise.all([n.e(9058),n.e(3645)]).then(n.bind(n,50309))),f}()}}}]);
//# sourceMappingURL=1657.effebbaa.chunk.js.map