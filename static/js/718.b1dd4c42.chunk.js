"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[718],{718:(e,n,t)=>{t.r(n),t.d(n,{registerFunctions:()=>P});var a=t(51064),i=t(72741),r=t(62357),o=t(22564),l=t(5431),s=t(97879),c=t(12260),u=t(97246),f=t(44715),d=t(93249),m=t(12829),y=t(67820),h=t(89066),p=t(45184),w=t(73954),g=t(84272),F=t(82279),I=t(29876),D=t(65247),E=t(93106),T=t(66978),v=t(54054),b=t(64326),N=t(83040),C=t(7575);async function x(e,n,t){const a=e.getVariables();if(a.length>0){const i=[];for(let e=0;e<a.length;e++){const r={name:a[e]};i.push(await n.evaluateIdentifier(t,r))}const r={};for(let e=0;e<a.length;e++)r[a[e]]=i[e];return e.parameters=r,e}return e}function S(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(const a in e)if(a.toLowerCase()===n.toLowerCase())return e[a];return t}function A(e){if(null===e)return null;const n={type:S(e,"type",""),name:S(e,"name","")};if("range"===n.type)n.range=S(e,"range",[]);else{n.codedValues=[];for(const t of S(e,"codedValues",[]))n.codedValues.push({name:S(t,"name",""),code:S(t,"code",null)})}return n}function H(e){if(null===e)return null;const n={},t=S(e,"wkt",null);null!==t&&(n.wkt=t);const a=S(e,"wkid",null);return null!==a&&(n.wkid=a),n}function L(e){if(null===e)return null;const n={hasZ:S(e,"hasz",!1),hasM:S(e,"hasm",!1)},t=S(e,"spatialreference",null);t&&(n.spatialReference=H(t));const a=S(e,"x",null);if(null!==a)return n.x=a,n.y=S(e,"y",null),n;const i=S(e,"rings",null);if(null!==i)return n.rings=i,n;const r=S(e,"paths",null);if(null!==r)return n.paths=r,n;const o=S(e,"points",null);if(null!==o)return n.points=o,n;for(const l of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const t=S(e,l,null);null!==t&&(n[l]=t)}return n}function Z(e){return"utc"===(null===e||void 0===e?void 0:e.toLowerCase())?"UTC":"unknown"===(null===e||void 0===e?void 0:e.toLowerCase())?"Unknown":e}function P(e){"async"===e.mode&&(e.functions.timezone=function(n,t){return e.standardFunctionAsync(n,t,(async(e,i,l)=>{var s,c,u,d;if((0,f.E)(l,1,2,n,t),(0,f.n)(l[0]))return"Unknown";if((0,f.m)(l[0]))return"Unknown";if((0,f.u)(l[0])){if(await l[0].load(),1===l.length||null===l[1])return l[0].datesInUnknownTimezone?Z("unknown"):Z(l[0].dateFieldsTimeZone);if(!(l[1]instanceof r.Z)||!1===l[1].hasField("type"))throw new o.aV(n,o.rH.InvalidParameter,t);const e=l[1].field("type");if(!1===(0,f.c)(e))throw new o.aV(n,o.rH.InvalidParameter,t);switch((0,f.j)(e).toLowerCase()){case"preferredtimezone":return Z(l[0].preferredTimeZone);case"editfieldsinfo":return Z(null!==(s=null===(c=l[0].editFieldsInfo)||void 0===c?void 0:c.timeZone)&&void 0!==s?s:null);case"timeinfo":return Z(null!==(u=null===(d=l[0].timeInfo)||void 0===d?void 0:d.timeZone)&&void 0!==u?u:null);case"field":if(l[1].hasField("fieldname")&&(0,f.c)(l[1].field("fieldname")))return Z(l[0].fieldTimeZone((0,f.j)(l[1].field("fieldname"))))}throw new o.aV(n,o.rH.InvalidParameter,t)}const m=(0,f.l)(l[0],(0,f.L)(n));if(null===m)return null;const y=m.timeZone;return"system"===y?a.iG.systemTimeZoneCanonicalName:"utc"===y.toLowerCase()?"UTC":"unknown"===y.toLowerCase()?"Unknown":y}))},e.functions.sqltimestamp=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,i)=>{(0,f.E)(i,1,3,n,t);const r=i[0];if((0,f.k)(r)){if(1===i.length)return r.toSQLWithKeyword();if(2===i.length)return r.changeTimeZone((0,f.j)(i[1])).toSQLWithKeyword();throw new o.aV(n,o.rH.InvalidParameter,t)}if((0,f.m)(r))return r.toSQLWithKeyword();if((0,f.u)(r)){if(3!==i.length)throw new o.aV(n,o.rH.InvalidParameter,t);await r.load();const e=(0,f.j)(i[1]);if((0,f.m)(i[2]))return i[2].toSQLWithKeyword();if(!1===(0,f.k)(i[2]))throw new o.aV(n,o.rH.InvalidParameter,t);const a=r.fieldTimeZone(e);return null===a?i[2].toSQLWithKeyword():i[2].changeTimeZone(a).toSQLWithKeyword()}throw new o.aV(n,o.rH.InvalidParameter,t)}))},e.signatures.push({name:"sqltimestamp",min:2,max:4}),e.functions.featuresetbyid=function(n,t){return e.standardFunctionAsync(n,t,((e,a,i)=>{if((0,f.E)(i,2,4,n,t),i[0]instanceof s.Z){const e=(0,f.j)(i[1]);let a=(0,f.H)(i[2],null);const r=(0,f.h)((0,f.H)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,f.o)(a))throw new o.aV(n,o.rH.InvalidParameter,t);return i[0].featureSetById(e,r,a)}throw new o.aV(n,o.rH.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyid",min:2,max:4}),e.functions.getfeatureset=function(n,t){return e.standardFunctionAsync(n,t,((e,a,i)=>{if((0,f.E)(i,1,2,n,t),(0,f.r)(i[0])){let e=(0,f.H)(i[1],"datasource");return null===e&&(e="datasource"),e=(0,f.j)(e).toLowerCase(),(0,c.convertToFeatureSet)(i[0].fullSchema(),e,n.lrucache,n.interceptor,n.spatialReference)}throw new o.aV(n,o.rH.InvalidParameter,t)}))},e.signatures.push({name:"getfeatureset",min:1,max:2}),e.functions.featuresetbyportalitem=function(n,t){return e.standardFunctionAsync(n,t,((e,a,r)=>{var l,s;if((0,f.E)(r,2,5,n,t),null===r[0])throw new o.aV(n,o.rH.PortalRequired,t);if(r[0]instanceof i.Z){var u;const e=(0,f.j)(r[1]),a=(0,f.j)(r[2]);let i=(0,f.H)(r[3],null);const l=(0,f.h)((0,f.H)(r[4],!0));if(null===i&&(i=["*"]),!1===(0,f.o)(i))throw new o.aV(n,o.rH.InvalidParameter,t);let s=null;return s=null!==(u=n.services)&&void 0!==u&&u.portal?n.services.portal:C.Z.getDefault(),s=(0,d._)(r[0],s),(0,c.constructFeatureSetFromPortalItem)(e,a,n.spatialReference,i,l,s,n.lrucache,n.interceptor)}if(!1===(0,f.c)(r[0]))throw new o.aV(n,o.rH.PortalRequired,t);const m=(0,f.j)(r[0]),y=(0,f.j)(r[1]);let h=(0,f.H)(r[2],null);const p=(0,f.h)((0,f.H)(r[3],!0));if(null===h&&(h=["*"]),!1===(0,f.o)(h))throw new o.aV(n,o.rH.InvalidParameter,t);return(0,c.constructFeatureSetFromPortalItem)(m,y,n.spatialReference,h,p,null!==(l=null===(s=n.services)||void 0===s?void 0:s.portal)&&void 0!==l?l:C.Z.getDefault(),n.lrucache,n.interceptor)}))},e.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),e.functions.featuresetbyname=function(n,t){return e.standardFunctionAsync(n,t,((e,a,i)=>{if((0,f.E)(i,2,4,n,t),i[0]instanceof s.Z){const e=(0,f.j)(i[1]);let a=(0,f.H)(i[2],null);const r=(0,f.h)((0,f.H)(i[3],!0));if(null===a&&(a=["*"]),!1===(0,f.o)(a))throw new o.aV(n,o.rH.InvalidParameter,t);return i[0].featureSetByName(e,r,a)}throw new o.aV(n,o.rH.InvalidParameter,t)}))},e.signatures.push({name:"featuresetbyname",min:2,max:4}),e.functions.featureset=function(n,t){return e.standardFunction(n,t,((e,a,i)=>{var l;(0,f.E)(i,1,1,n,t);let s=i[0];const c={layerDefinition:{geometryType:"",objectIdField:"",hasM:!1,hasZ:!1,globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if((0,f.c)(s))s=JSON.parse(s),void 0!==s.layerDefinition?(c.layerDefinition=s.layerDefinition,c.featureSet=s.featureSet,s.layerDefinition.spatialReference&&(c.layerDefinition.spatialReference=s.layerDefinition.spatialReference)):(c.featureSet.features=s.features,c.featureSet.geometryType=s.geometryType,c.layerDefinition.geometryType=c.featureSet.geometryType,c.layerDefinition.objectIdField=null!==(l=s.objectIdFieldName)&&void 0!==l?l:"",c.layerDefinition.typeIdField=s.typeIdFieldName,c.layerDefinition.globalIdField=s.globalIdFieldName,c.layerDefinition.fields=s.fields,s.spatialReference&&(c.layerDefinition.spatialReference=s.spatialReference));else{if(!(i[0]instanceof r.Z))throw new o.aV(n,o.rH.InvalidParameter,t);{s=JSON.parse(i[0].castToText(!0));const e=S(s,"layerdefinition");if(null!==e){c.layerDefinition.geometryType=S(e,"geometrytype",""),c.featureSet.geometryType=c.layerDefinition.geometryType,c.layerDefinition.globalIdField=S(e,"globalidfield",""),c.layerDefinition.objectIdField=S(e,"objectidfield",""),c.layerDefinition.typeIdField=S(e,"typeidfield",""),c.layerDefinition.hasZ=!0===S(e,"hasz",!1),c.layerDefinition.hasM=!0===S(e,"hasm",!1);const n=S(e,"spatialreference",null);n&&(c.layerDefinition.spatialReference=H(n));for(const a of S(e,"fields",[])){const e={name:S(a,"name",""),alias:S(a,"alias",""),type:S(a,"type",""),nullable:S(a,"nullable",!0),editable:S(a,"editable",!0),length:S(a,"length",null),domain:A(S(a,"domain"))};c.layerDefinition.fields.push(e)}const t=S(s,"featureset",null);if(t){const e={};for(const n of c.layerDefinition.fields)e[n.name.toLowerCase()]=n.name;for(const n of S(t,"features",[])){const t={},a=S(n,"attributes",{});for(const n in a)t[e[n.toLowerCase()]]=a[n];c.featureSet.features.push({attributes:t,geometry:L(S(n,"geometry",null))})}}}else{c.layerDefinition.hasZ=!0===S(s,"hasz",!1),c.layerDefinition.hasM=!0===S(s,"hasm",!1),c.layerDefinition.geometryType=S(s,"geometrytype",""),c.featureSet.geometryType=c.layerDefinition.geometryType,c.layerDefinition.objectIdField=S(s,"objectidfieldname",""),c.layerDefinition.typeIdField=S(s,"typeidfieldname","");const e=S(s,"spatialreference",null);e&&(c.layerDefinition.spatialReference=H(e));let n=S(s,"fields",null);if((0,f.o)(n))for(const i of n){const e={name:S(i,"name",""),alias:S(i,"alias",""),type:S(i,"type",""),nullable:S(i,"nullable",!0),editable:S(i,"editable",!0),length:S(i,"length",null),domain:A(S(i,"domain"))};c.layerDefinition.fields.push(e)}else n=null,c.layerDefinition.fields=n;const t={};for(const i of c.layerDefinition.fields)t[i.name.toLowerCase()]=i.name;let a=S(s,"features",null);if((0,f.o)(a))for(const i of a){const e={},n=S(i,"attributes",{});for(const a in n)e[t[a.toLowerCase()]]=n[a];c.featureSet.features.push({attributes:e,geometry:L(S(i,"geometry",null))})}else a=null,c.featureSet.features=a}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,n){for(const t of n)if(t===e)return!0;return!1}(e.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&!1!==(0,f.o)(e.layerDefinition.fields)&&!1!==(0,f.o)(e.featureSet.features)}(c))throw new o.aV(n,o.rH.InvalidParameter,t);return c.layerDefinition.geometryType||(c.layerDefinition.geometryType="esriGeometryNull"),g.Z.create(c,n.spatialReference)}))},e.signatures.push({name:"featureset",min:1,max:1}),e.functions.filter=function(n,t){return e.standardFunctionAsync(n,t,(async(a,i,r)=>{if((0,f.E)(r,2,2,n,t),(0,f.o)(r[0])||(0,f.q)(r[0])){const e=[];let a=r[0];a instanceof u.Z&&(a=a.toArray());let i=null;if(!(0,f.i)(r[1]))throw new o.aV(n,o.rH.InvalidParameter,t);i=r[1].createFunction(n);for(const n of a){const t=i(n);(0,T.y8)(t)?!0===await t&&e.push(n):!0===t&&e.push(n)}return e}if((0,f.u)(r[0])){const t=await r[0].load(),a=v.WhereClause.create(r[1],t.getFieldsIndex(),t.dateFieldsTimeZoneDefaultUTC),i=a.getVariables();if(i.length>0){const t=[];for(let a=0;a<i.length;a++){const r={name:i[a]};t.push(await e.evaluateIdentifier(n,r))}const o={};for(let e=0;e<i.length;e++)o[i[e]]=t[e];return a.parameters=o,new y.Z({parentfeatureset:r[0],whereclause:a})}return new y.Z({parentfeatureset:r[0],whereclause:a})}throw new o.aV(n,o.rH.InvalidParameter,t)}))},e.signatures.push({name:"filter",min:2,max:2}),e.functions.orderby=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,i)=>{if((0,f.E)(i,2,2,n,t),(0,f.u)(i[0])){const e=new F.Z(i[1]);return new h.Z({parentfeatureset:i[0],orderbyclause:e})}throw new o.aV(n,o.rH.InvalidParameter,t)}))},e.signatures.push({name:"orderby",min:2,max:2}),e.functions.top=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,i)=>{if((0,f.E)(i,2,2,n,t),(0,f.u)(i[0]))return new p.Z({parentfeatureset:i[0],topnum:i[1]});if((0,f.o)(i[0]))return(0,f.g)(i[1])>=i[0].length?i[0].slice(0):i[0].slice(0,(0,f.g)(i[1]));if((0,f.q)(i[0]))return(0,f.g)(i[1])>=i[0].length()?i[0].slice(0):i[0].slice(0,(0,f.g)(i[1]));throw new o.aV(n,o.rH.InvalidParameter,t)}))},e.signatures.push({name:"top",min:2,max:2}),e.functions.first=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,i)=>{if((0,f.E)(i,1,1,n,t),(0,f.u)(i[0])){const t=await i[0].first(e.abortSignal);if(null!==t){const e=l.Z.createFromGraphicLikeObject(t.geometry,t.attributes,i[0],n.timeZone);return e._underlyingGraphic=t,e}return t}return(0,f.o)(i[0])?0===i[0].length?null:i[0][0]:(0,f.q)(i[0])?0===i[0].length()?null:i[0].get(0):null}))},e.signatures.push({name:"first",min:1,max:1}),e.functions.attachments=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,i)=>{(0,f.E)(i,1,2,n,t);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(i.length>1)if(i[1]instanceof r.Z){if(i[1].hasField("minsize")&&(l.minsize=(0,f.g)(i[1].field("minsize"))),i[1].hasField("metadata")&&(l.returnMetadata=(0,f.h)(i[1].field("metadata"))),i[1].hasField("maxsize")&&(l.maxsize=(0,f.g)(i[1].field("maxsize"))),i[1].hasField("types")){const e=(0,f.a2)(i[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==i[1])throw new o.aV(n,o.rH.InvalidParameter,t);if((0,f.r)(i[0])){let e=i[0]._layer;return e instanceof b.default&&(e=(0,c.constructFeatureSet)(e,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===e||!1===(0,f.u)(e)?[]:(await e.load(),e.queryAttachments(i[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===i[0])return[];throw new o.aV(n,o.rH.InvalidParameter,t)}))},e.signatures.push({name:"attachments",min:1,max:2}),e.functions.featuresetbyrelationshipname=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,i)=>{(0,f.E)(i,2,4,n,t);const r=i[0],l=(0,f.j)(i[1]);let s=(0,f.H)(i[2],null);const u=(0,f.h)((0,f.H)(i[3],!0));if(null===s&&(s=["*"]),!1===(0,f.o)(s))throw new o.aV(n,o.rH.InvalidParameter,t);if(null===i[0])return null;if(!(0,f.r)(i[0]))throw new o.aV(n,o.rH.InvalidParameter,t);let d=r._layer;if(d instanceof b.default&&(d=(0,c.constructFeatureSet)(d,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===d)return null;if(!1===(0,f.u)(d))return null;d=await d.load();const m=d.relationshipMetaData().filter((e=>e.name===l));if(0===m.length)return null;if(void 0!==m[0].relationshipTableId&&null!==m[0].relationshipTableId&&m[0].relationshipTableId>-1)return(0,c.constructFeatureSetFromRelationship)(d,m[0],r.field(d.objectIdField),d.spatialReference,s,u,n.lrucache,n.interceptor);let y=d.serviceUrl();if(!y)return null;y="/"===y.charAt(y.length-1)?y+m[0].relatedTableId.toString():y+"/"+m[0].relatedTableId.toString();const h=await(0,c.constructFeatureSetFromUrl)(y,d.spatialReference,s,u,n.lrucache,n.interceptor);await h.load();let p=h.relationshipMetaData();if(p=p.filter((e=>e.id===m[0].id)),!1===r.hasField(m[0].keyField)||null===r.field(m[0].keyField)){const e=await d.getFeatureByObjectId(r.field(d.objectIdField),[m[0].keyField]);if(e){const n=v.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return n.parameters={id:e.attributes[m[0].keyField]},h.filter(n)}return new w.Z({parentfeatureset:h})}const g=v.WhereClause.create(p[0].keyField+"= @id",h.getFieldsIndex(),h.dateFieldsTimeZoneDefaultUTC);return g.parameters={id:r.field(m[0].keyField)},h.filter(g)}))},e.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),e.functions.featuresetbyassociation=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,i)=>{(0,f.E)(i,2,3,n,t);const r=i[0],l=(0,f.j)((0,f.H)(i[1],"")).toLowerCase(),s=(0,f.c)(i[2])?(0,f.j)(i[2]):null;if(null===i[0])return null;if(!(0,f.r)(i[0]))throw new o.aV(n,o.rH.InvalidParameter,t);let u=r._layer;if(u instanceof b.default&&(u=(0,c.constructFeatureSet)(u,n.spatialReference,["*"],!0,n.lrucache,n.interceptor)),null===u)return null;if(!1===(0,f.u)(u))return null;await u.load();const d=u.serviceUrl(),y=await(0,c.constructAssociationMetaDataFeatureSetFromUrl)(d,n.spatialReference);let h=null,p=null,w=!1;if(null!==s&&""!==s&&void 0!==s){for(const e of y.terminals)e.terminalName===s&&(p=e.terminalId);null===p&&(w=!0)}const g=y.associations.getFieldsIndex(),F=g.get("TOGLOBALID").name,D=g.get("FROMGLOBALID").name,E=g.get("TOTERMINALID").name,T=g.get("FROMTERMINALID").name,C=g.get("FROMNETWORKSOURCEID").name,x=g.get("TONETWORKSOURCEID").name,S=g.get("ASSOCIATIONTYPE").name,A=g.get("ISCONTENTVISIBLE").name,H=g.get("OBJECTID").name;for(const n of u.fields)if("global-id"===n.type){h=r.field(n.name);break}let L=null,Z=new m.yN(new N.Z({name:"percentalong",alias:"percentalong",type:"double"}),v.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),P=new m.yN(new N.Z({name:"side",alias:"side",type:"string"}),v.WhereClause.create("''",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));const V="globalid",W="globalId",k={};for(const n in y.lkp)k[n]=y.lkp[n].sourceId;const R=new m.TO(new N.Z({name:"classname",alias:"classname",type:"string"}),null,k);let U="";switch(l){case"midspan":{U="((".concat(F,"='").concat(h,"') OR ( ").concat(D,"='").concat(h,"')) AND (").concat(S," IN (5))"),R.codefield=v.WhereClause.create("CASE WHEN (".concat(F,"='").concat(h,"') THEN ").concat(C," ELSE ").concat(x," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,I.JW)(m.Xx.findField(y.associations.fields,D));e.name=V,e.alias=V,L=new m.yN(e,v.WhereClause.create("CASE WHEN (".concat(D,"='").concat(h,"') THEN ").concat(F," ELSE ").concat(D," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),Z=y.unVersion>=4?new m.$X(m.Xx.findField(y.associations.fields,g.get("PERCENTALONG").name)):new m.yN(new N.Z({name:"percentalong",alias:"percentalong",type:"double"}),v.WhereClause.create("0",y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"junctionedge":{U="((".concat(F,"='").concat(h,"') OR ( ").concat(D,"='").concat(h,"')) AND (").concat(S," IN (4,6))"),R.codefield=v.WhereClause.create("CASE WHEN (".concat(F,"='").concat(h,"') THEN ").concat(C," ELSE ").concat(x," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const e=(0,I.JW)(m.Xx.findField(y.associations.fields,D));e.name=V,e.alias=V,L=new m.yN(e,v.WhereClause.create("CASE WHEN (".concat(D,"='").concat(h,"') THEN ").concat(F," ELSE ").concat(D," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC)),P=new m.yN(new N.Z({name:"side",alias:"side",type:"string"}),v.WhereClause.create("CASE WHEN (".concat(S,"=4) THEN 'from' ELSE 'to' END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"connected":{var j,M;let e="".concat(F,"='@T'"),n="".concat(D,"='@T'");null!==p&&(e+=" AND ".concat(E,"=@A"),n+=" AND ".concat(T,"=@A")),U="(("+e+") OR ("+n+"))",U=(0,f.S)(U,"@T",null!==(j=h)&&void 0!==j?j:""),e=(0,f.S)(e,"@T",null!==(M=h)&&void 0!==M?M:""),null!==p&&(e=(0,f.S)(e,"@A",p.toString()),U=(0,f.S)(U,"@A",p.toString())),R.codefield=v.WhereClause.create("CASE WHEN "+e+" THEN ".concat(C," ELSE ").concat(x," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC);const t=(0,I.JW)(m.Xx.findField(y.associations.fields,D));t.name=V,t.alias=V,L=new m.yN(t,v.WhereClause.create("CASE WHEN "+e+" THEN ".concat(D," ELSE ").concat(F," END"),y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC));break}case"container":U="".concat(F,"='").concat(h,"' AND ").concat(S," = 2"),null!==p&&(U+=" AND ".concat(E," = ")+p.toString()),R.codefield=C,U="( "+U+" )",L=new m.QP(m.Xx.findField(y.associations.fields,D),V,V);break;case"content":U="(".concat(D,"='").concat(h,"' AND ").concat(S," = 2)"),null!==p&&(U+=" AND ".concat(T," = ")+p.toString()),R.codefield=x,U="( "+U+" )",L=new m.QP(m.Xx.findField(y.associations.fields,F),V,V);break;case"structure":U="(".concat(F,"='").concat(h,"' AND ").concat(S," = 3)"),null!==p&&(U+=" AND ".concat(E," = ")+p.toString()),R.codefield=C,U="( "+U+" )",L=new m.QP(m.Xx.findField(y.associations.fields,D),V,W);break;case"attached":U="(".concat(D,"='").concat(h,"' AND ").concat(S," = 3)"),null!==p&&(U+=" AND ".concat(T," = ")+p.toString()),R.codefield=x,U="( "+U+" )",L=new m.QP(m.Xx.findField(y.associations.fields,F),V,W);break;default:throw new o.aV(n,o.rH.InvalidParameter,t)}return w&&(U="1 <> 1"),new m.Xx({parentfeatureset:y.associations,adaptedFields:[new m.$X(m.Xx.findField(y.associations.fields,H)),new m.$X(m.Xx.findField(y.associations.fields,A)),L,P,R,Z],extraFilter:U?v.WhereClause.create(U,y.associations.getFieldsIndex(),y.associations.dateFieldsTimeZoneDefaultUTC):null})}))},e.signatures.push({name:"featuresetbyassociation",min:2,max:6}),e.functions.groupby=function(n,t){return e.standardFunctionAsync(n,t,(async(a,i,l)=>{if((0,f.E)(l,3,3,n,t),!(0,f.u)(l[0]))throw new o.aV(n,o.rH.InvalidParameter,t);const s=await l[0].load(),c=[],u=[];let d=!1,m=[];if((0,f.c)(l[1]))m.push(l[1]);else if(l[1]instanceof r.Z)m.push(l[1]);else if((0,f.o)(l[1]))m=l[1];else{if(!(0,f.q)(l[1]))throw new o.aV(n,o.rH.InvalidParameter,t);m=l[1].toArray()}for(const e of m)if((0,f.c)(e)){const n=v.WhereClause.create((0,f.j)(e),s.getFieldsIndex(),s.dateFieldsTimeZoneDefaultUTC),t=!0===(0,D.y5)(n)?(0,f.j)(e):"%%%%FIELDNAME";c.push({name:t,expression:n}),"%%%%FIELDNAME"===t&&(d=!0)}else{if(!(e instanceof r.Z))throw new o.aV(n,o.rH.InvalidParameter,t);{const a=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",i=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===a&&(d=!0),!a)throw new o.aV(n,o.rH.InvalidParameter,t);c.push({name:a,expression:v.WhereClause.create(i||a,s.getFieldsIndex(),s.dateFieldsTimeZoneDefaultUTC)})}}if(m=[],(0,f.c)(l[2]))m.push(l[2]);else if((0,f.o)(l[2]))m=l[2];else if((0,f.q)(l[2]))m=l[2].toArray();else{if(!(l[2]instanceof r.Z))throw new o.aV(n,o.rH.InvalidParameter,t);m.push(l[2])}for(const e of m){if(!(e instanceof r.Z))throw new o.aV(n,o.rH.InvalidParameter,t);{const a=e.hasField("name")?e.field("name"):"",i=e.hasField("statistic")?e.field("statistic"):"",r=e.hasField("expression")?e.field("expression"):"";if(!a||!i||!r)throw new o.aV(n,o.rH.InvalidParameter,t);u.push({name:a,statistic:i.toLowerCase(),expression:v.WhereClause.create(r,s.getFieldsIndex(),s.dateFieldsTimeZoneDefaultUTC)})}}if(d){const e={};for(const t of s.fields)e[t.name.toLowerCase()]=1;for(const t of c)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);for(const t of u)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let n=0;for(const t of c)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}for(const t of c)await x(t.expression,e,n);for(const t of u)await x(t.expression,e,n);return l[0].groupby(c,u)}))},e.signatures.push({name:"groupby",min:3,max:3}),e.functions.distinct=function(n,t){return e.standardFunctionAsync(n,t,(async(a,i,l)=>{if((0,f.u)(l[0])){(0,f.E)(l,2,2,n,t);const a=await l[0].load(),i=[];let s=[];if((0,f.c)(l[1]))s.push(l[1]);else if(l[1]instanceof r.Z)s.push(l[1]);else if((0,f.o)(l[1]))s=l[1];else{if(!(0,f.q)(l[1]))throw new o.aV(n,o.rH.InvalidParameter,t);s=l[1].toArray()}let c=!1;for(const e of s)if((0,f.c)(e)){const n=v.WhereClause.create((0,f.j)(e),a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC),t=!0===(0,D.y5)(n)?(0,f.j)(e):"%%%%FIELDNAME";i.push({name:t,expression:n}),"%%%%FIELDNAME"===t&&(c=!0)}else{if(!(e instanceof r.Z))throw new o.aV(n,o.rH.InvalidParameter,t);{const r=e.hasField("name")?e.field("name"):"%%%%FIELDNAME",l=e.hasField("expression")?e.field("expression"):"";if("%%%%FIELDNAME"===r&&(c=!0),!r)throw new o.aV(n,o.rH.InvalidParameter,t);i.push({name:r,expression:v.WhereClause.create(l||r,a.getFieldsIndex(),a.dateFieldsTimeZoneDefaultUTC)})}}if(c){const e={};for(const t of a.fields)e[t.name.toLowerCase()]=1;for(const t of i)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let n=0;for(const t of i)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}for(const t of i)await x(t.expression,e,n);return l[0].groupby(i,[])}return function(e,n,t,a){if(1===a.length){if((0,f.o)(a[0]))return(0,E.t)(e,a[0],-1);if((0,f.q)(a[0]))return(0,E.t)(e,a[0].toArray(),-1)}return(0,E.t)(e,a,-1)}("distinct",0,0,l)}))}),e.functions.getfeaturesetinfo=function(n,t){return e.standardFunctionAsync(n,t,(async(e,a,i)=>{var o,l;if((0,f.E)(i,1,1,n,t),!(0,f.u)(i[0]))return null;const s=await i[0].getFeatureSetInfo();return s?r.Z.convertObjectToArcadeDictionary({layerId:s.layerId,layerName:s.layerName,itemId:s.itemId,serviceLayerUrl:s.serviceLayerUrl,webMapLayerId:null!==(o=s.webMapLayerId)&&void 0!==o?o:null,webMapLayerTitle:null!==(l=s.webMapLayerTitle)&&void 0!==l?l:null,className:null,objectClassId:null},(0,f.L)(n),!1,!1):null}))},e.signatures.push({name:"getfeaturesetinfo",min:1,max:1})}},93249:(e,n,t)=>{t.d(n,{_:()=>i});var a=t(7575);function i(e,n){return null===e?n:new a.Z({url:e.field("url")})}}}]);
//# sourceMappingURL=718.b1dd4c42.chunk.js.map