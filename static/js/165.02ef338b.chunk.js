"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[165],{60165:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var r,o=a(27366),n=(a(59486),a(76200)),i=a(10064),l=a(43404),s=a(97642),u=a(49861),p=(a(25243),a(63780),a(93169),a(69912)),d=a(78952),c=a(53866),g=a(65156),h=a(30651),y=a(6693),b=a(71684),v=a(56811),w=a(83690),m=a(22824);const Z=new(a(87960).f)("0/0/0",0,0,0,void 0);let M=r=class extends((0,y.h)((0,v.M)((0,b.Q)(h.Z)))){constructor(){super(...arguments),this.tileInfo=m.Z.create({spatialReference:d.Z.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new c.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.Z.WebMercator),this.spatialReference=d.Z.WebMercator}getTileBounds(e,t,a,r){const o=r||(0,g.Ue)();return Z.level=e,Z.row=t,Z.col=a,Z.extent=o,this.tileInfo.updateTileInfo(Z),Z.extent=void 0,o}fetchTile(e,t,a){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:o}=r,i=this.getTileUrl(e,t,a),l={responseType:"image",signal:o,query:{...this.refreshParameters}};return(0,n.Z)(null!==i&&void 0!==i?i:"",l).then((e=>e.data))}async fetchImageBitmapTile(e,t,a){var o;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:l}=i;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,a,i);return(0,w.V)(r,e,t,a,l)}const s=null!==(o=this.getTileUrl(e,t,a))&&void 0!==o?o:"",u={responseType:"blob",signal:l,query:{...this.refreshParameters}},{data:p}=await(0,n.Z)(s,u);return(0,w.V)(p,e,t,a,l)}getTileUrl(){throw new i.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,o._)([(0,u.Cb)({type:m.Z})],M.prototype,"tileInfo",void 0),(0,o._)([(0,u.Cb)({type:["show","hide"]})],M.prototype,"listMode",void 0),(0,o._)([(0,u.Cb)({readOnly:!0,value:"base-tile"})],M.prototype,"type",void 0),(0,o._)([(0,u.Cb)({nonNullable:!0})],M.prototype,"fullExtent",void 0),(0,o._)([(0,u.Cb)()],M.prototype,"spatialReference",void 0),M=r=(0,o._)([(0,p.j)("esri.layers.BaseTileLayer")],M);const f=M;var _=a(6061),T=a(59068),C=a(585);const S=new l.X({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});let k=class extends((0,y.h)((0,_.q)((0,s.R)(f)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new m.Z({size:[256,256],dpi:96,origin:new C.Z({x:-20037508.342787,y:20037508.342787,spatialReference:d.Z.WebMercator}),spatialReference:d.Z.WebMercator,lods:[new T.Z({level:1,resolution:78271.5169639999,scale:295828763.795777}),new T.Z({level:2,resolution:39135.7584820001,scale:147914381.897889}),new T.Z({level:3,resolution:19567.8792409999,scale:73957190.948944}),new T.Z({level:4,resolution:9783.93962049996,scale:36978595.474472}),new T.Z({level:5,resolution:4891.96981024998,scale:18489297.737236}),new T.Z({level:6,resolution:2445.98490512499,scale:9244648.868618}),new T.Z({level:7,resolution:1222.99245256249,scale:4622324.434309}),new T.Z({level:8,resolution:611.49622628138,scale:2311162.217155}),new T.Z({level:9,resolution:305.748113140558,scale:1155581.108577}),new T.Z({level:10,resolution:152.874056570411,scale:577790.554289}),new T.Z({level:11,resolution:76.4370282850732,scale:288895.277144}),new T.Z({level:12,resolution:38.2185141425366,scale:144447.638572}),new T.Z({level:13,resolution:19.1092570712683,scale:72223.819286}),new T.Z({level:14,resolution:9.55462853563415,scale:36111.909643}),new T.Z({level:15,resolution:4.77731426794937,scale:18055.954822}),new T.Z({level:16,resolution:2.38865713397468,scale:9027.977411}),new T.Z({level:17,resolution:1.19432856685505,scale:4513.988705}),new T.Z({level:18,resolution:.597164283559817,scale:2256.994353}),new T.Z({level:19,resolution:.298582141647617,scale:1128.497176}),new T.Z({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}get operationalLayerType(){return S.toJSON(this.style)}get bingLogo(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new i.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,a){if(!this.loaded||null==this.bingMetadata)return null;const r=this.bingMetadata.resourceSets[0].resources[0],o=r.imageUrlSubdomains[t%r.imageUrlSubdomains.length],n=this._getQuadKey(e,t,a);return r.imageUrl.replace("{subdomain}",o).replace("{quadkey}",n)}async fetchAttributionData(){return this.load().then((()=>null==this.bingMetadata?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,n.Z)("".concat("https://dev.virtualearth.net","/REST/v1/Imagery/Metadata/").concat(e),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new i.Z("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new i.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new i.Z("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new i.Z("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){var e;return(0,n.Z)(null!==(e=this.portalUrl)&&void 0!==e?e:"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new i.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new i.Z("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,a){let r="";for(let o=e;o>0;o--){let e=0;const n=1<<o-1;0!=(a&n)&&(e+=1),0!=(t&n)&&(e+=2),r+=e.toString()}return r}};(0,o._)([(0,u.Cb)({json:{read:!1,write:!1},value:null})],k.prototype,"bingMetadata",null),(0,o._)([(0,u.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],k.prototype,"type",void 0),(0,o._)([(0,u.Cb)({type:m.Z})],k.prototype,"tileInfo",void 0),(0,o._)([(0,u.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],k.prototype,"copyright",null),(0,o._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],k.prototype,"key",void 0),(0,o._)([(0,u.Cb)({type:S.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:S.read}}})],k.prototype,"style",void 0),(0,o._)([(0,u.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],k.prototype,"operationalLayerType",null),(0,o._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],k.prototype,"culture",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!1,read:!1}})],k.prototype,"region",void 0),(0,o._)([(0,u.Cb)({type:String,json:{write:!0,read:!0}})],k.prototype,"portalUrl",void 0),(0,o._)([(0,u.Cb)({type:Boolean,json:{write:!1,read:!1}})],k.prototype,"hasAttributionData",void 0),(0,o._)([(0,u.Cb)({type:String,readOnly:!0})],k.prototype,"bingLogo",null),k=(0,o._)([(0,p.j)("esri.layers.BingMapsLayer")],k);const U=k},83690:(e,t,a)=>{a.d(t,{V:()=>i,g:()=>n});var r=a(10064),o=a(66978);async function n(e,t,a){let n;try{n=await createImageBitmap(e)}catch(i){throw new r.Z("request:server","Unable to load ".concat(t),{url:t,error:i})}return(0,o.k_)(a),n}async function i(e,t,a,n,i){let l;try{l=await createImageBitmap(e)}catch(s){throw new r.Z("request:server","Unable to load tile ".concat(t,"/").concat(a,"/").concat(n),{error:s,level:t,row:a,col:n})}return(0,o.k_)(i),l}}}]);
//# sourceMappingURL=165.02ef338b.chunk.js.map