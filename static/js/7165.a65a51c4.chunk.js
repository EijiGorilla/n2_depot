"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[7165],{67165:(e,t,i)=>{i.d(t,{ElevationQuery:()=>T});var n=i(14921),l=i(10064),s=i(92026),o=i(66978),a=i(68860),r=i(77577),c=i(585),u=i(29909),h=i(79803),p=i(65156),f=i(8904),m=i(11939);class d{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.tile=e,null!=t&&null!=e){const i=e.extent;this._samplerData=new m.K(t,i)}}get zmin(){return null!=this._samplerData?this._samplerData.data.minValue:0}get zmax(){return null!=this._samplerData?this._samplerData.data.maxValue:0}sample(e,t){if(null==this._samplerData)return;const{safeWidth:i,data:n,dx:l,dy:s,y1:o,x0:a}=this._samplerData,{width:r,values:c,noDataValue:u}=n,h=y(s*(o-t),0,i),p=y(l*(e-a),0,i),f=Math.floor(h),m=Math.floor(p),d=f*r+m,v=d+r,T=c[d],w=c[v],g=c[d+1],_=c[v+1];if(T!==u&&w!==u&&g!==u&&_!==u){const e=p-m,t=T+(g-T)*e;return t+(w+(_-w)*e-t)*(h-f)}}}function y(e,t,i){return e<t?t:e>i?i:e}var v=i(87960);class T{async queryAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new l.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const n=w.fromGeometry(t);let s=!1;i&&i.returnSampleInfo||(s=!0);const o={...q,...i,returnSampleInfo:!0},a=await this.query(e[e.length-1],n,o),r=await this._queryAllContinue(e,a,o);return r.geometry=r.geometry.export(),s&&delete r.sampleInfo,r}async query(e,t,i){if(!e)throw new l.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof w)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new l.Z("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const n={...q,...i},s=new x(e,t.spatialReference,n),o=n.signal;return await e.load({signal:o}),await this._createGeometryDescriptor(s,t,o),await this._selectTiles(s,o),await this._populateElevationTiles(s,o),this._sampleGeometryWithElevation(s),this._createQueryResult(s,o)}async createSampler(e,t,i){if(!e)throw new l.Z("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new l.Z("elevation-query:invalid-extent","Invalid or undefined extent");const n={...q,...i};return this._createSampler(e,t,n)}async createSamplerAll(e,t,i){if(!(e=i&&i.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new l.Z("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new l.Z("elevation-query:invalid-extent","Invalid or undefined extent");const n={...q,...i,returnSampleInfo:!0},s=await this._createSampler(e[e.length-1],t,n);return this._createSamplerAllContinue(e,t,s,n)}async _createSampler(e,t,i,n){const l=i.signal;await e.load({signal:l});const s=t.spatialReference,o=e.tileInfo.spatialReference;s.equals(o)||(await(0,h.initializeProjection)([{source:s,dest:o}],{signal:l}),t=(0,h.project)(t,o));const a=new E(e,t,i,n);return await this._selectTiles(a,l),await this._populateElevationTiles(a,l),new f.Tl(a.elevationTiles,a.layer.tileInfo,a.options.noDataValue)}async _createSamplerAllContinue(e,t,i,n){if(e.pop(),!e.length)return i;const l=i.samplers.map((e=>(0,p.oJ)(e.extent))),s=await this._createSampler(e[e.length-1],t,n,l);if(0===s.samplers.length)return i;const o=i.samplers.concat(s.samplers),a=new f.Tl(o,n.noDataValue);return this._createSamplerAllContinue(e,t,a,n)}async _queryAllContinue(e,t,i){const n=e.pop(),l=t.geometry.coordinates,o=t.sampleInfo;(0,s.O3)(o);const a=[],r=[];for(let s=0;s<l.length;s++){const t=o[s];t.demResolution>=0?t.source||(t.source=n):e.length&&(a.push(l[s]),r.push(s))}if(!e.length||0===a.length)return t;const c=t.geometry.clone(a),u=await this.query(e[e.length-1],c,i),h=u.sampleInfo;if(!h)throw new Error("no sampleInfo");return r.forEach(((e,t)=>{l[e].z=u.geometry.coordinates[t].z,o[e].demResolution=h[t].demResolution})),this._queryAllContinue(e,t,i)}async _createQueryResult(e,t){const i=await e.geometry.project(e.outSpatialReference,t);(0,s.O3)(i);const n={geometry:i.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(n.sampleInfo=this._extractSampleInfo(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),n}async _createGeometryDescriptor(e,t,i){let n;const s=e.layer.tileInfo.spatialReference;if(t instanceof w?n=await t.project(s,i):(await(0,h.initializeProjection)([{source:t.spatialReference,dest:s}],{signal:i}),n=(0,h.project)(t,s)),!n)throw new l.Z("elevation-query:spatial-reference-mismatch","Cannot query elevation in '".concat(t.spatialReference.wkid,"' on an elevation service in '").concat(s.wkid,"'"));e.geometry=w.fromGeometry(n)}async _selectTiles(e,t){"geometry"===e.type&&this._preselectOutsideLayerExtent(e);const i=e.options.demResolution;if("number"==typeof i)this._selectTilesClosestResolution(e,i);else if("finest-contiguous"===i)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==i)throw new l.Z("elevation-query:invalid-dem-resolution","Invalid dem resolution value '".concat(i,'\', expected a number, "finest-contiguous" or "auto"'));await this._selectTilesAuto(e,t)}}_preselectOutsideLayerExtent(e){if(null==e.layer.fullExtent)return;const t=new d(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const i=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const n=e.x,l=e.y;(n<i.xmin||n>i.xmax||l<i.ymin||l>i.ymax)&&(e.elevationTile=t)}))}_selectTilesClosestResolution(e,t){const i=this._findNearestDemResolutionLODIndex(e,t);e.selectTilesAtLOD(i)}_findNearestDemResolutionLODIndex(e,t){const{tileInfo:i,tilemapCache:n}=e.layer,l=t/(0,a.c9)(i.spatialReference),s=I(i,n);let o=s[0],r=0;for(let a=1;a<s.length;a++){const e=s[a];Math.abs(e.resolution-l)<Math.abs(o.resolution-l)&&(o=e,r=a)}return r}async _selectTilesFinestContiguous(e,t){const{tileInfo:i,tilemapCache:n}=e.layer,l=R(i,n,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,l,t)}async _selectTilesFinestContiguousAt(e,t,i){const n=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const s=n.tilemapCache,a=e.getTilesToFetch();try{if(s&&!A(s))await(0,o.Hl)(Promise.all(a.map((e=>s.fetchAvailability(e.level,e.row,e.col,{signal:i})))),i);else if(await this._populateElevationTiles(e,i),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new l.Z("elevation-query:has-unavailable-tiles")}catch(r){(0,o.r9)(r),await this._selectTilesFinestContiguousAt(e,t-1,i)}}async _populateElevationTiles(e,t){const i=e.getTilesToFetch(),n={},l=e.options.cache,s=e.options.noDataValue,a=i.map((async i=>{if(null==i.id)return;const o="".concat(e.layer.uid,":").concat(i.id,":").concat(s),a=null!=l?l.get(o):null,r=null!=a?a:await e.layer.fetchTile(i.level,i.row,i.col,{noDataValue:s,signal:t});null!=l&&l.put(o,r),n[i.id]=new d(i,r)}));await(0,o.Hl)(Promise.allSettled(a),t),e.populateElevationTiles(n)}async _selectTilesAuto(e,t){this._selectTilesAutoFinest(e),this._reduceTilesForMaximumRequests(e);const i=e.layer.tilemapCache;if(!i||A(i))return this._selectTilesAutoPrefetchUpsample(e,t);const l=e.getTilesToFetch(),s={},a=l.map((async e=>{const l=new v.f(null,0,0,0,(0,p.Ue)()),a=await(0,n.q6)(i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:t}));!1!==a.ok?null!=e.id&&(s[e.id]=l):(0,o.r9)(a.error)}));await(0,o.Hl)(Promise.all(a),t),e.remapTiles(s)}_reduceTilesForMaximumRequests(e){const t=e.layer.tileInfo;let i=0;const n={},l=e=>{null!=e.id&&(e.id in n?n[e.id]++:(n[e.id]=1,i++))},s=e=>{if(null==e.id)return;const t=n[e.id];1===t?(delete n[e.id],i--):n[e.id]=t-1};e.forEachTileToFetch(l,s);let o=!0;for(;o&&(o=!1,e.forEachTileToFetch((n=>{i<=e.options.maximumAutoTileRequests||(s(n),t.upsampleTile(n)&&(o=!0),l(n))}),s),o););}_selectTilesAutoFinest(e){const{tileInfo:t,tilemapCache:i}=e.layer,n=R(t,i,e.options.minDemResolution);e.selectTilesAtLOD(n,e.options.maximumAutoTileRequests)}async _selectTilesAutoPrefetchUpsample(e,t){const i=e.layer.tileInfo;await this._populateElevationTiles(e,t);let n=!1;e.forEachTileToFetch(((e,t)=>{i.upsampleTile(e)?n=!0:t()})),n&&await this._selectTilesAutoPrefetchUpsample(e,t)}_sampleGeometryWithElevation(e){e.geometry.coordinates.forEach((t=>{const i=t.elevationTile;let n=e.options.noDataValue;if(i){const e=i.sample(t.x,t.y);null!=e?n=e:t.elevationTile=null}t.z=n}))}_extractSampleInfo(e){const t=e.layer.tileInfo,i=(0,a.c9)(t.spatialReference);return e.geometry.coordinates.map((n=>{let l=-1;return n.elevationTile&&n.elevationTile!==e.outsideExtentTile&&(l=t.lodAt(n.elevationTile.tile.level).resolution*i),{demResolution:l}}))}}class w{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new w;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>e.clone())),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await(0,h.initializeProjection)([{source:this.spatialReference,dest:e}],{signal:t});const i=new r.Z({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),n=(0,h.project)(i,e);if(!n)return null;const l=this.coordinates.map(((e,t)=>{const i=e.clone(),l=n.points[t];return i.x=l[0],i.y=l[1],i})),s=this.clone(l);return s.spatialReference=e,s}static fromGeometry(e){const t=new w;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof w)t.coordinates=e.coordinates.map((e=>e.clone())),t._exporter=(t,i)=>{const n=e.clone(t);return n.spatialReference=i,n};else switch(e.type){case"point":{const i=e,{hasZ:n,hasM:l}=i;t.coordinates=n&&l?[new g(i.x,i.y,i.z,i.m)]:n?[new g(i.x,i.y,i.z)]:l?[new g(i.x,i.y,null,i.m)]:[new g(i.x,i.y)],t._exporter=(t,i)=>e.hasM?new c.Z(t[0].x,t[0].y,t[0].z,t[0].m,i):new c.Z(t[0].x,t[0].y,t[0].z,i);break}case"multipoint":{const i=e,{hasZ:n,hasM:l}=i;t.coordinates=n&&l?i.points.map((e=>new g(e[0],e[1],e[2],e[3]))):n?i.points.map((e=>new g(e[0],e[1],e[2]))):l?i.points.map((e=>new g(e[0],e[1],null,e[2]))):i.points.map((e=>new g(e[0],e[1]))),t._exporter=(t,i)=>e.hasM?new r.Z({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatiaReference:i}):new r.Z(t.map((e=>[e.x,e.y,e.z])),i);break}case"polyline":{const i=e,n=[],l=[],{hasZ:s,hasM:o}=e;let a=0;for(const e of i.paths)if(l.push([a,a+e.length]),a+=e.length,s&&o)for(const t of e)n.push(new g(t[0],t[1],t[2],t[3]));else if(s)for(const t of e)n.push(new g(t[0],t[1],t[2]));else if(o)for(const t of e)n.push(new g(t[0],t[1],null,t[2]));else for(const t of e)n.push(new g(t[0],t[1]));t.coordinates=n,t._exporter=(t,i)=>{const n=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),s=l.map((e=>n.slice(e[0],e[1])));return new u.Z({paths:s,hasM:e.hasM,hasZ:!0,spatialReference:i})};break}}return t}}class g{constructor(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.x=e,this.y=t,this.z=i,this.m=n,this.tile=l,this.elevationTile=s}clone(){return new g(this.x,this.y,this.z,this.m)}}class _{constructor(e,t){this.layer=e,this.options=t}}class x extends _{constructor(e,t,i){super(e,i),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const{tileInfo:t,tilemapCache:i}=this.layer,n=I(t,i)[e].level;this.geometry.coordinates.forEach((e=>e.tile=t.tileAt(n,e.x,e.y)))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const i of this.geometry.coordinates){var t;!i.elevationTile&&(null===(t=i.tile)||void 0===t?void 0:t.id)&&(i.elevationTile=e[i.tile.id])}}remapTiles(e){for(const i of this.geometry.coordinates){var t;const n=null===(t=i.tile)||void 0===t?void 0:t.id;i.tile=n?e[n]:null}}getTilesToFetch(){const e={},t=[];for(const n of this.geometry.coordinates){var i;const l=n.tile;if(!l)continue;const s=null===(i=n.tile)||void 0===i?void 0:i.id;n.elevationTile||!s||e[s]||(e[s]=l,t.push(l))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>{t.tile=null}))}}class E extends _{constructor(e,t,i,n){super(e,i),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.intersection(e.fullExtent),this.maskExtents=n}selectTilesAtLOD(e,t){const i=this._maximumLodForRequests(t),n=Math.min(i,e);n<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(n)}_maximumLodForRequests(e){const{tileInfo:t,tilemapCache:i}=this.layer,n=I(t,i);if(!e)return n.length-1;const l=this.extent;if(null==l)return-1;for(let s=n.length-1;s>=0;s--){const i=n[s],o=i.resolution*t.size[0],a=i.resolution*t.size[1];if(Math.ceil(l.width/o)*Math.ceil(l.height/a)<=e)return s}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const i=t.id&&e[t.id];i&&(this._fetchedCandidates.add(t),this.elevationTiles.push(i))}}remapTiles(e){this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const i=this._candidateTiles;this._candidateTiles=[],i.forEach((i=>{if(this._fetchedCandidates.has(i))return void(t&&t(i));let n=!1;e(i,(()=>n=!0)),n?t&&t(i):this._candidateTiles.push(i)})),this._candidateTiles=this._uniqueNonOverlappingTiles(this._candidateTiles,t)}_uniqueNonOverlappingTiles(e,t){const i={},n=[];for(const s of e){const e=s.id;e&&!i[e]?(i[e]=s,n.push(s)):t&&t(s)}const l=n.sort(((e,t)=>e.level-t.level));return l.filter(((e,i)=>{for(let n=0;n<i;n++){const i=l[n].extent;if(i&&e.extent&&(0,p.r3)(i,e.extent))return t&&t(e),!1}return!0}))}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(null==t)return;const{tileInfo:i,tilemapCache:n}=this.layer,l=I(i,n)[e],s=i.tileAt(l.level,t.xmin,t.ymin),o=s.extent;if(null==o)return;const a=l.resolution*i.size[0],r=l.resolution*i.size[1],c=Math.ceil((t.xmax-o[0])/a),u=Math.ceil((t.ymax-o[1])/r);for(let h=0;h<u;h++)for(let e=0;e<c;e++){const t=new v.f(null,s.level,s.row-h,s.col+e);i.updateTileInfo(t),this._tileIsMasked(t)||this._candidateTiles.push(t)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>e.extent&&(0,p.r3)(t,e.extent)))}}function R(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const n=I(e,t);let l=n.length-1;if(i>0){const t=i/(0,a.c9)(e.spatialReference),s=n.findIndex((e=>e.resolution<t));0===s?l=0:s>0&&(l=s-1)}return l}const q={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function I(e,t){const i=e.lods;if(A(t)){const{effectiveMinLOD:e,effectiveMaxLOD:n}=t;return i.filter((t=>t.level>=e&&t.level<=n))}return i}function A(e){return null!=(null===e||void 0===e?void 0:e.tileInfo)}}}]);
//# sourceMappingURL=7165.a65a51c4.chunk.js.map