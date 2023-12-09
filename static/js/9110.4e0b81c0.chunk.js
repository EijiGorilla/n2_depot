"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[9110],{80573:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(27366),s=n(7138),o=n(63780),r=n(11582),l=n(79056),p=n(46784),a=n(49861),u=(n(25243),n(93169),n(69912));let d=0,y=class extends((0,p.eC)((0,r.J)((0,l.IG)(s.Z)))){constructor(e){super(e),this.id="".concat(Date.now().toString(16),"-analysis-").concat(d++),this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(o.pC)}};(0,i._)([(0,a.Cb)({type:String,constructOnly:!0,clonable:!1})],y.prototype,"id",void 0),(0,i._)([(0,a.Cb)({type:String})],y.prototype,"title",void 0),(0,i._)([(0,a.Cb)({constructOnly:!0})],y.prototype,"type",void 0),(0,i._)([(0,a.Cb)({clonable:!1,value:null})],y.prototype,"parent",null),(0,i._)([(0,a.Cb)({readOnly:!0})],y.prototype,"isEditable",null),(0,i._)([(0,a.Cb)({readOnly:!0})],y.prototype,"requiredPropertiesForEditing",void 0),y=(0,i._)([(0,u.j)("esri.analysis.Analysis")],y);const c=y},25810:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(27366),s=(n(59486),n(48805)),o=n(11582),r=n(17768),l=n(46784),p=n(49861),a=n(89125),u=(n(63780),n(93169),n(69912)),d=n(25243),y=n(585);let c=class extends((0,l.eC)(o.j)){constructor(e){super(e),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=s.n.Direct,this.offset=0,this.orientation=0}};(0,i._)([(0,p.Cb)({type:["length"],json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,i._)([(0,p.Cb)({type:y.Z,json:{write:!0}})],c.prototype,"startPoint",void 0),(0,i._)([(0,p.Cb)({type:y.Z,json:{write:!0}})],c.prototype,"endPoint",void 0),(0,i._)([(0,p.Cb)({type:s.V,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"measureType",void 0),(0,i._)([(0,p.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"offset",void 0),(0,i._)([(0,p.Cb)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,a.p)((e=>r.BV.normalize((0,d.q9)(e),0,!0)))],c.prototype,"orientation",void 0),c=(0,i._)([(0,u.j)("esri.analysis.LengthDimension")],c);const h=c},48805:(e,t,n)=>{var i;n.d(t,{V:()=>s,n:()=>i}),function(e){e.Horizontal="horizontal",e.Vertical="vertical",e.Direct="direct"}(i||(i={}));const s=[i.Horizontal,i.Vertical,i.Direct]},49110:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var i=n(27366),s=n(80573),o=n(51995),r=n(11582),l=n(46784),p=n(17842),a=n(49861),u=n(25243),d=(n(63780),n(93169),n(69912));let y=class extends((0,l.eC)(r.j)){constructor(e){super(e),this.type="simple",this.color=new o.Z("black"),this.lineSize=2,this.fontSize=10,this.textColor=new o.Z("black"),this.textBackgroundColor=new o.Z([255,255,255,.6])}};(0,i._)([(0,a.Cb)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],y.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:o.Z,nonNullable:!0,json:{type:[u.z8],write:{isRequired:!0}}})],y.prototype,"color",void 0),(0,i._)([(0,a.Cb)({type:Number,cast:p.t_,nonNullable:!0,range:{min:(0,p.Wz)(1)},json:{write:{isRequired:!0}}})],y.prototype,"lineSize",void 0),(0,i._)([(0,a.Cb)({type:Number,cast:p.t_,nonNullable:!0,json:{write:{isRequired:!0}}})],y.prototype,"fontSize",void 0),(0,i._)([(0,a.Cb)({type:o.Z,nonNullable:!0,json:{type:[u.z8],write:{isRequired:!0}}})],y.prototype,"textColor",void 0),(0,i._)([(0,a.Cb)({type:o.Z,nonNullable:!0,json:{type:[u.z8],write:{isRequired:!0}}})],y.prototype,"textBackgroundColor",void 0),y=(0,i._)([(0,d.j)("esri.analysis.DimensionSimpleStyle")],y);const c=y;var h=n(25810),b=n(80987),m=n(60354),_=n(94172),C=n(53866),g=n(79803);const v=b.Z.ofType(h.Z);let w=class extends s.Z{constructor(e){super(e),this.type="dimension",this.style=new c,this.extent=null}initialize(){this.addHandles((0,_.YP)((()=>this._computeExtent()),(e=>{null==(null===e||void 0===e?void 0:e.pending)&&this._set("extent",null!=e?e.extent:null)}),_.tX))}get dimensions(){return this._get("dimensions")||new v}set dimensions(e){this._set("dimensions",(0,m.Z)(e,this.dimensions,v))}get spatialReference(){for(const e of this.dimensions){if(null!=e.startPoint)return e.startPoint.spatialReference;if(null!=e.endPoint)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==e)return{pending:null,extent:null};const t=[];for(const s of this.dimensions)null!=s.startPoint&&t.push(s.startPoint),null!=s.endPoint&&t.push(s.endPoint);const n=(0,g.projectOrLoadMany)(t,e);if(null!=n.pending)return{pending:n.pending,extent:null};let i=null;return null!=n.geometries&&(i=n.geometries.reduce(((e,t)=>null==e?null!=t?C.Z.fromPoint(t):null:null!=t?e.union(C.Z.fromPoint(t)):e),null)),{pending:null,extent:i}}clear(){this.dimensions.removeAll()}};(0,i._)([(0,a.Cb)({type:["dimension"]})],w.prototype,"type",void 0),(0,i._)([(0,a.Cb)({cast:m.R,type:v,nonNullable:!0})],w.prototype,"dimensions",null),(0,i._)([(0,a.Cb)({readOnly:!0})],w.prototype,"spatialReference",null),(0,i._)([(0,a.Cb)({types:{key:"type",base:null,typeMap:{simple:c}},nonNullable:!0})],w.prototype,"style",void 0),(0,i._)([(0,a.Cb)({value:null,readOnly:!0})],w.prototype,"extent",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],w.prototype,"requiredPropertiesForEditing",null),w=(0,i._)([(0,d.j)("esri.analysis.DimensionAnalysis")],w);const f=w;var P=n(97642),j=n(31201),x=n(30651),R=n(6061);let Z=class extends((0,R.q)((0,P.R)(x.Z))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new f,this.opacity=1,e){const{source:t,style:n}=e;t&&n&&(t.style=n)}}initialize(){this.addHandles([(0,_.YP)((()=>this.source),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),_.tX)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new f)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,t,n,i){t.dimensions=e.filter((e=>{let{startPoint:t,endPoint:n}=e;return null!=t&&null!=n})).map((e=>e.toJSON(i))).toJSON()}};(0,i._)([(0,a.Cb)({json:{read:!1},readOnly:!0})],Z.prototype,"type",void 0),(0,i._)([(0,a.Cb)({type:["ArcGISDimensionLayer"]})],Z.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.Cb)({nonNullable:!0})],Z.prototype,"source",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],Z.prototype,"spatialReference",null),(0,i._)([(0,a.Cb)({types:{key:"type",base:null,typeMap:{simple:c}},json:{write:{ignoreOrigin:!0}}})],Z.prototype,"style",null),(0,i._)([(0,a.Cb)({readOnly:!0})],Z.prototype,"fullExtent",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],Z.prototype,"opacity",void 0),(0,i._)([(0,a.Cb)({type:["show","hide"]})],Z.prototype,"listMode",void 0),(0,i._)([(0,a.Cb)({type:b.Z.ofType(h.Z),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],Z.prototype,"dimensions",null),(0,i._)([(0,j.c)("web-scene","dimensions")],Z.prototype,"writeDimensions",null),Z=(0,i._)([(0,d.j)("esri.layers.DimensionLayer")],Z);const O=Z}}]);
//# sourceMappingURL=9110.4e0b81c0.chunk.js.map