"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[8035],{77372:(e,t,i)=>{i.d(t,{Z:()=>b});var r=i(27366),n=(i(59486),i(11582)),o=i(17768),s=i(46784),a=i(92026),c=i(49861),l=i(89125),d=(i(84936),i(93169),i(69912)),u=i(25243),g=i(96866),h=i(848);let p=class extends((0,n.J)(s.wq)){constructor(e){super(e),this.type="plane",this.position=null,this.heading=0,this.tilt=0,this.width=10,this.height=10}equals(e){return this.heading===e.heading&&this.tilt===e.tilt&&(0,a._W)(this.position,e.position)&&this.width===e.width&&this.height===e.height}};(0,r._)([(0,c.Cb)({readOnly:!0,json:{read:!1,write:!0}})],p.prototype,"type",void 0),(0,r._)([(0,c.Cb)({type:h.Z}),(0,g.B)()],p.prototype,"position",void 0),(0,r._)([(0,c.Cb)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,g.B)(),(0,l.p)((e=>o.BV.normalize((0,u.q9)(e),0,!0)))],p.prototype,"heading",void 0),(0,r._)([(0,c.Cb)({type:Number,nonNullable:!0,range:{min:0,max:360}}),(0,g.B)(),(0,l.p)((e=>o.BV.normalize((0,u.q9)(e),0,!0)))],p.prototype,"tilt",void 0),(0,r._)([(0,c.Cb)({type:Number,nonNullable:!0}),(0,g.B)()],p.prototype,"width",void 0),(0,r._)([(0,c.Cb)({type:Number,nonNullable:!0}),(0,g.B)()],p.prototype,"height",void 0),p=(0,r._)([(0,d.j)("esri.analysis.SlicePlane")],p);const b=p},11316:(e,t,i)=>{i.d(t,{S:()=>h,b:()=>g});var r,n,o=i(30168),s=i(41012),a=i(95276),c=i(58406),l=i(98634),d=i(64201),u=i(4760);function g(e){const t=new d.kG,{vertex:i,fragment:g,attributes:h,varyings:p}=t;return(0,s.Sv)(i,e),h.add(u.T.POSITION,"vec3"),h.add(u.T.UV0,"vec2"),p.add("vUV","vec2"),i.code.add((0,l.H)(r||(r=(0,o.Z)(["void main(void) {\nvUV = uv0;\ngl_Position = proj * view * vec4(position, 1.0);\n}"])))),g.uniforms.add(new a.N("backgroundColor",(e=>e.backgroundColor)),new a.N("gridColor",(e=>e.gridColor)),new c.p("gridWidth",(e=>e.gridWidth))),g.code.add((0,l.H)(n||(n=(0,o.Z)(["void main() {\nconst float LINE_WIDTH = 1.0;\nvec2 uvScaled = vUV * gridWidth;\nvec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));\nvec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);\ngrid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);\ngrid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);\nfloat gridFade = max(grid.x, grid.y);\nfloat gridAlpha = gridColor.a * gridFade;\nfragColor =\nvec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +\nvec4(gridColor.rgb, 1.0) * gridAlpha;\n}"])))),t}const h=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}))},12350:(e,t,i)=>{i.d(t,{o:()=>b});var r=i(51995),n=i(94172),o=i(12400),s=i(3319),a=i(38978),c=i(35284),l=i(83639),d=i(40508),u=i(70619),g=i(56529),h=i(58901),p=i(99034);class b extends c.Z{constructor(e,t){const i=(0,a.J0)(t),o=i?s.QG:s.cf,c=o*s.Mr,d=s.cf,u={renderOccluded:g.yD.OccludeAndTransparent,isDecoration:!0},p=new h.U({...u,width:o}),b=new h.U({...u,width:c}),M=new h.U({...u,width:d});super({view:e,...l.X9,...m({isCorner:i,unfocusedMaterial:p,focusedMaterial:b,outlineMaterial:M})}),this._themeHandle=(0,n.YP)((()=>e.effectiveTheme.accentColor),(e=>{const t=r.Z.toUnitRGBA(e);p.setParameters({color:t}),b.setParameters({color:t}),M.setParameters({color:t})}),n.nn)}destroy(){this._themeHandle.remove(),super.destroy()}}function m(e){let{isCorner:t,unfocusedMaterial:i,focusedMaterial:r,outlineMaterial:n}=e;const c=t?[(0,o.al)(1,0,0),(0,o.al)(0,0,0),(0,o.al)(0,1,0)]:[(0,o.al)(1,0,0),(0,o.al)(-1,0,0)];return{renderObjects:[new d.r((0,u.rh)(i,c),p.Q9.Unfocused|a.Sc),new d.r((0,u.rh)(r,c),p.Q9.Focused|a.Sc),new d.r((0,u.rh)(n,c),a.vc)],collisionType:{type:"line",paths:[c]},radius:t?s.Qf:s.yy,state:a.Sc}}},37947:(e,t,i)=>{i.d(t,{Z:()=>f});var r=i(51995),n=i(86950),o=i(94172),s=i(38978),a=i(35284),c=i(83639),l=i(40508),d=i(91526),u=i(40779),g=i(70619),h=i(56529),p=i(4760),b=i(66156),m=i(58901),M=i(99034);class f extends a.Z{constructor(e,t){const i=new b.j({transparent:!0,writeDepth:!1,renderOccluded:h.yD.Opaque,isDecoration:!0}),s=c.rotateManipulatorDefaults.calloutWidth,a=new m.U({width:s,renderOccluded:h.yD.OccludeAndTransparent,isDecoration:!0});super({view:e,...I({imageMaterial:i,calloutMaterial:a})}),this._currentTexture=null,this._themeHandle=(0,o.YP)((()=>e.effectiveTheme.accentColor),(e=>{const o=(0,n.G)(e,.5),s=(0,n.mj)(e),c=this._currentTexture,l=t(o,s);i.setParameters({textureId:l.texture.id}),a.setParameters({color:r.Z.toUnitRGBA(e)}),this._currentTexture=l,null===c||void 0===c||c.release()}),o.nn)}destroy(){var e;this._themeHandle.remove(),null!==(e=this._currentTexture)&&void 0!==e&&e.release(),super.destroy()}}function I(e){let{imageMaterial:t,calloutMaterial:i}=e;const{focusMultiplier:r,calloutLength:n,discRadius:o}=c.rotateManipulatorDefaults,a=o*r,h=(e,t)=>{const i=[0,1,2,2,3,0];return new u.Z(t,[[p.T.POSITION,new d.a([n-e,-e,0,n+e,-e,0,n+e,e,0,n-e,e,0],i,3,!0)],[p.T.UV0,new d.a([0,0,1,0,1,1,0,1],i,2,!0)]])},b=(0,g.rh)(i,[[0,0,0],[n-o,0,0]]),m=(0,g.rh)(i,[[0,0,0],[n-a,0,0]]),f=s.do;return{autoScaleRenderObjects:!1,collisionPriority:1,collisionType:{type:"disc",direction:[0,0,1],offset:[n,0,0]},focusMultiplier:r,radius:o,renderObjects:[new l.r(h(o,t),M.Q9.Unfocused|f),new l.r(b,M.Q9.Unfocused|f),new l.r(h(a,t),M.Q9.Focused|f),new l.r(m,M.Q9.Focused|f)],state:f}}},61074:(e,t,i)=>{i.d(t,{K:()=>N,l:()=>r});var r,n,o=i(51995),s=i(86950),a=i(94172),c=i(29134),l=i(7025),d=i(68700),u=i(32035),g=i(12400),h=i(51378),p=i(3319),b=i(38978),m=i(35284),M=i(40508),f=i(68401),I=i(70619),w=i(56529),C=i(66832),T=i(58901),v=i(99034);(n=r||(r={}))[n.CENTER_ON_CALLOUT=0]="CENTER_ON_CALLOUT",n[n.CENTER_ON_ARROW=1]="CENTER_ON_ARROW";class N extends m.Z{constructor(e,t){const i=new T.U({width:1,renderOccluded:w.yD.OccludeAndTransparent,isDecoration:!0}),r=new C.E({cullFace:f.Vr.Back,renderOccluded:w.yD.Opaque,isDecoration:!0}),n=new C.E({cullFace:f.Vr.Back,renderOccluded:w.yD.Opaque,isDecoration:!0}),c=new C.E({cullFace:f.Vr.Back,renderOccluded:w.yD.Opaque,isDecoration:!0}),l=new C.E({writeDepth:!1,cullFace:f.Vr.Front,renderOccluded:w.yD.Transparent,isDecoration:!0});super({view:e,..._({offsetMode:t,tubeMaterial:r,tipMaterial:n,capMaterial:c,outlineMaterial:l,calloutMaterial:i})}),this._themeHandle=(0,a.YP)((()=>e.effectiveTheme.accentColor),(e=>{const t=(0,s.mj)(e),a=o.Z.toUnitRGBA(e),d=o.Z.toUnitRGBA(t),u=o.Z.toUnitRGBA(o.Z.blendColors(t,e,.4)),g=o.Z.toUnitRGBA(o.Z.blendColors(t,e,.14));i.setParameters({color:a}),r.setParameters({color:g}),n.setParameters({color:d}),c.setParameters({color:u}),l.setParameters({color:a})}),a.nn)}destroy(){this._themeHandle.remove(),super.destroy()}}function _(e){let{offsetMode:t,tubeMaterial:i,tipMaterial:n,capMaterial:o,outlineMaterial:s,calloutMaterial:a}=e;const c=t===r.CENTER_ON_CALLOUT?p.Eu:0,l=[(0,g.al)(c,0,-p.C7/2),(0,g.al)(c,0,p.C7/2)],d=function(e,t){const i=(0,u.f)((0,g.Ue)(),e[e.length-1],e[e.length-2]);(0,u.n)(i,i),(0,u.j)(i,i,p.GW),(0,u.g)(i,i,e[e.length-1]);{const t=(0,u.f)((0,g.Ue)(),e[0],e[1]);return(0,u.n)(t,t),(0,u.j)(t,t,p.GW),(0,u.g)(t,t,e[0]),[t,...e,i]}}(l),h=y({vertices:l,padding:0,materials:{tube:i,tip:n,cap:o}}),m=y({vertices:l,padding:p.K_,materials:{tube:s,tip:s,cap:s}}),f=(0,I.rh)(a,[[c,0,0],[c-p.Eu,0,0]]),w=(0,I.rh)(a,[[c,0,0],[c-p.Eu,0,0]]);return{renderObjects:[...h.normal.map((e=>new M.r(e,v.Q9.Unfocused|b.do))),...m.normal.map((e=>new M.r(e,v.Q9.Unfocused|b.do))),new M.r(f,v.Q9.Unfocused|b.do|b.Df),...h.focused.map((e=>new M.r(e,v.Q9.Focused|b.do))),...m.focused.map((e=>new M.r(e,v.Q9.Focused|b.do))),new M.r(w,v.Q9.Focused|b.do|b.Df)],autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[d]},collisionPriority:1,radius:p.tv,state:b.do}}function y(e){let{vertices:t,padding:i,materials:r}=e;const n=e=>{const n=t.slice(0),o=(0,u.f)(h.WM.get(),n[0],n[1]);(0,u.n)(o,o);const s=(0,u.f)(h.WM.get(),n[n.length-1],n[n.length-2]);if((0,u.n)(s,s),i>0){const e=(0,u.j)((0,g.Ue)(),s,-i);n[n.length-1]=(0,u.g)(e,e,n[n.length-1]);const t=(0,u.j)((0,g.Ue)(),o,-i);n[0]=(0,u.g)(t,t,n[0])}const a=e?p.XC:1,b=p.GW*a,m=p.tv*a,M=(0,c.yR)(h.MP.get());if(i>0){const e=b/4,t=(0,u.s)(h.WM.get(),0,e,0),r=1+i/e;(0,c.Iu)(M,M,t),(0,c.bA)(M,M,(0,u.s)(h.WM.get(),r,r,r)),(0,c.Iu)(M,M,(0,u.j)(t,t,-1/r))}const f=(0,c.yR)((0,l.Ue)()),w=(0,g.al)(0,1,0),C=(0,c.en)((0,l.Ue)(),(0,d.b0)(h.vD.get(),w,s));C[12]=n[n.length-1][0],C[13]=n[n.length-1][1],C[14]=n[n.length-1][2],(0,c.Jp)(C,C,M);const T=r.tube,v=function(e,t,i){const r=[],n=12;for(let o=0;o<n;o++){const t=o/n*2*Math.PI;r.push([Math.cos(t)*e,Math.sin(t)*e])}return(0,I.x2)(i,r,t,[],[],!1)}(p.sz*(e?p.L0:1)+i,n,T);v.transformation=f;const N=[v],_=r.tip,y=(0,I.QL)(_,b,m,24,!1,!1,!0);y.transformation=C,N.push(y);const A=r.cap,O=(0,I.QL)(A,b,m,24,!1,!0,!1);O.transformation=C,N.push(O);const W=(0,c.en)((0,l.Ue)(),(0,d.b0)(h.vD.get(),w,o));return W[12]=n[0][0],W[13]=n[0][1],W[14]=n[0][2],(0,c.Jp)(W,W,M),N.push(y.instantiate({transformation:W})),N.push(O.instantiate({transformation:W})),N};return{normal:n(!1),focused:n(!0)}}},32909:(e,t,i)=>{i.d(t,{CB:()=>o,bL:()=>s,ku:()=>n});var r=i(86950);const n=(0,i(86361).al)(0,0,0,.04);function o(e){let{accentColor:t}=e;return(0,r.Ch)(t,.5)}function s(e){let{accentColor:t}=e;return(0,r.Ch)(t,.7)}},3319:(e,t,i)=>{i.d(t,{AN:()=>d,C7:()=>T,Ci:()=>W,Eu:()=>C,G0:()=>h,GI:()=>s,GW:()=>w,K_:()=>v,L0:()=>c,Lf:()=>m,Mr:()=>a,P3:()=>u,QG:()=>N,Qf:()=>A,Wp:()=>g,XC:()=>l,Yn:()=>y,ZE:()=>p,ae:()=>j,cf:()=>_,fg:()=>M,sz:()=>f,tW:()=>o,tv:()=>I,v9:()=>b,yy:()=>O});var r=i(93169),n=i(16889);const o=(0,r.Z)("mac")?"Meta":"Control",s="Shift",a=2,c=1.15,l=1.15,d=2500,u=.02,g=Math.cos((0,n.Vl)(45)),h=Math.cos((0,n.Vl)(5)),p=.95,b=.3,m=2,M=1,f=3,I=11,w=22.5,C=40,T=48,v=2.25,N=4,_=1,y=.3,A=6,O=4,W=1600,j=.4},38978:(e,t,i)=>{i.d(t,{do:()=>Ce,Df:()=>Ne,aZ:()=>Te,ww:()=>ve,zY:()=>ne,Lw:()=>he,fT:()=>ie,R_:()=>me,i3:()=>be,j6:()=>ee,Rd:()=>oe,TA:()=>re,J0:()=>pe,lR:()=>We,Hq:()=>Me,m3:()=>Ie,oP:()=>we,Sc:()=>Ae,vc:()=>Oe,Q3:()=>te,EC:()=>ae,A5:()=>ce,wj:()=>le,tF:()=>se});i(59486);var r=i(77372),n=(i(93169),i(32718)),o=i(16889),s=i(17842),a=i(29134),c=i(32035),l=i(12400),d=i(79803),u=i(14320),g=i(82218),h=i(55652),p=i(40885),b=i(40927),m=i(51378),M=i(32909),f=i(3319),I=i(33906),w=i(83639),C=i(33837),T=i(19093),v=i(86361),N=i(52168),_=i(70619),y=i(56529),A=i(37081),O=i(33559),W=i(23620),j=i(93822),P=i(12594),D=i(64642),R=i(11983),L=i(98634),E=i(82144),Z=i(31132),S=i(7566),U=i(27627),x=i(11316),H=i(8548),G=i(36207);class V extends L.K{constructor(){super(...arguments),this.backgroundColor=(0,v.al)(1,0,0,.5),this.gridColor=(0,v.al)(0,1,0,.5),this.gridWidth=4}}class z extends Z.A{initializeProgram(e){return new U.$(e.rctx,z.shader.get().build(this.configuration),S.i)}initializePipeline(){return(0,G.sm)({blending:(0,G.wK)(H.zi.ONE,H.zi.ONE,H.zi.ONE_MINUS_SRC_ALPHA,H.zi.ONE_MINUS_SRC_ALPHA),depthTest:{func:H.wb.LESS},colorWrite:G.BK})}}z.shader=new E.J(x.S,(()=>i.e(8492).then(i.bind(i,18492))));class k extends R.c{constructor(e){super(e,new B),this.produces=new Map([[j.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>e===A.H_.Color]]),this._configuration=new O.m}createBufferWriter(){return new P.G(D.W1)}createGLMaterial(e){return new Y(e)}getConfiguration(){return this._configuration}}class Y extends W.Z{constructor(e){super(e),this.ensureTechnique(z,null)}beginSlot(){return this.technique}}class B extends V{constructor(){super(...arguments),this.renderOccluded=y.yD.Occlude,this.isDecoration=!1}}class Q extends N._{constructor(e){super(e),this._material=null,this._renderOccluded=y.yD.OccludeAndTransparent,this._gridWidth=1,this._gridColor=(0,v.al)(1,0,0,1),this._backgroundColor=(0,v.al)(1,0,0,1),this.applyProperties(e)}get renderOccluded(){return this._renderOccluded}set renderOccluded(e){e!==this._renderOccluded&&(this._renderOccluded=e,this._updateMaterial())}get gridWidth(){return this._gridWidth}set gridWidth(e){this._gridWidth!==e&&(this._gridWidth=e,this._updateMaterial())}get gridColor(){return this._gridColor}set gridColor(e){(0,T.c)(this._gridColor,e),this._updateMaterial()}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){(0,T.c)(this._backgroundColor,e),this._updateMaterial()}createExternalResources(){this._material=new k(this._materialParameters)}destroyExternalResources(){this._material=null}forEachExternalMaterial(e){null!=this._material&&e(this._material)}createGeometries(e){if(null!=this._material){const t=(0,_.g7)(this._material);e.addGeometry(t)}}get _materialParameters(){return{backgroundColor:this._backgroundColor,gridWidth:this._gridWidth,gridColor:this._gridColor,renderOccluded:this._renderOccluded,isDecoration:this.isDecoration}}_updateMaterial(){null!=this._material&&this._material.setParameters(this._materialParameters)}}var X,F,J=i(91643),q=i(81703),K=i(99034),$=i(848);i(53866);function ee(e,t,i,r,n,o,s,a){return function(e,t,i,r,n,o){const s=(0,c.m)(e,t),a=m.WM.get(),l=m.WM.get();switch(r===ve.HORIZONTAL_OR_VERTICAL?Math.abs(s)>f.Wp?ve.HORIZONTAL:ve.VERTICAL:r){case ve.VERTICAL:{const r=Math.abs(s)<=f.G0?e:i.viewUp;(0,c.b)(a,r,t),(0,c.c)(l,t);break}case ve.HORIZONTAL:(0,c.b)(a,i.viewUp,t),(0,c.b)(l,t,a);break;case ve.TILTED:{const r=Math.abs(s)<=f.G0?t:i.viewUp;(0,c.b)(a,r,e),(0,c.b)(l,e,a);break}}const d=(0,c.b)(m.WM.get(),a,l);(0,c.m)(d,i.viewForward)>0&&(0,c.j)(l,l,-1),(0,c.n)(n,a),(0,c.n)(o,l)}(t,s.worldUpAtPosition(e,m.WM.get()),n,o,a.basis1,a.basis2),(0,c.j)(a.basis1,a.basis1,i),(0,c.j)(a.basis2,a.basis2,r),(0,c.c)(a.origin,e),(0,h.my)(a.basis2,a.basis1,a.origin,a.plane),a}function te(e,t,i,r,n,o){const s=(0,c.c)(m.WM.get(),n.origin);(0,c.g)(s,s,(0,c.j)(m.WM.get(),n.basis1,e.direction[0]<0?1:-1)),(0,c.g)(s,s,(0,c.j)(m.WM.get(),n.basis2,e.direction[1]<0?1:-1));const a=(0,c.l)(n.basis1),l=(0,c.l)(n.basis2),d=(0,c.f)(m.WM.get(),i,s),u=(0,c.f)(m.WM.get(),t,s);let h=0,p=0;if(pe(e)){const t=he(n),i=he(o);h=a-.5*e.direction[0]*(0,c.m)(n.basis1,u)/a,p=l-.5*e.direction[1]*(0,c.m)(n.basis2,u)/l;const r=i/t;h*=r,p*=r}const b=h+.5*e.direction[0]*(0,c.m)(n.basis1,d)/a,M=p+.5*e.direction[1]*(0,c.m)(n.basis2,d)/l,I=(0,c.j)(m.WM.get(),n.basis1,b/a),w=(0,c.j)(m.WM.get(),n.basis2,M/l);(b<=0||ue(o.origin,I,r)<=f.Ci)&&(0,c.c)(I,o.basis1),(M<=0||ue(o.origin,w,r)<=f.Ci)&&(0,c.c)(w,o.basis2);const C=(0,c.c)(m.WM.get(),s);return(0,c.g)(C,C,(0,c.j)(m.WM.get(),I,e.direction[0]<0?-1:1)),(0,c.g)(C,C,(0,c.j)(m.WM.get(),w,e.direction[1]<0?-1:1)),(0,g.f)(C,I,w,o)}function ie(e,t){return f.ae*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function re(e,t,i,r){const n=(0,c.b)(m.WM.get(),t,i);return(0,c.b)(n,n,t),(0,h.Yq)(e,n,r)}function ne(e,t){return(0,w.Aq)(e.basis1,e.basis2,e.origin,t)}function oe(e,t,i,r){const n=t.worldUpAtPosition(e.origin,m.WM.get()),o=m.WM.get();switch(i){case Te.HEADING:(0,c.c)(o,n);break;case Te.TILT:(0,c.c)(o,e.basis1)}return(0,h.Yq)(e.origin,o,r)}function se(e,t,i,r){const n=de(i,X.NEGATIVE_X),o=m.MP.get();(0,a.jI)(o,t,n.edge*Math.PI/2);const d=(0,c.n)(m.WM.get(),n.basis);let u=(0,c.j)(m.WM.get(),d,n.direction*r.computeScreenPixelSizeAt(n.position)*f.Eu);(0,c.g)(u,u,n.position);const h=r.projectToRenderScreen(u,(0,s.Wv)(m.WM.get())),p=function(e,t){const[i,r,n,o]=e.viewport,s=Math.min(n,o)/16;let a=!0;return t[0]<i+s?(t[0]=i+s,a=!1):t[0]>i+n-s&&(t[0]=i+n-s,a=!1),t[1]<r+s?(t[1]=r+s,a=!1):t[1]>r+o-s&&(t[1]=r+o-s,a=!1),a}(r,h);(0,q.Bh)(r,h,_e),(0,c.n)(_e.direction,_e.direction);const b=m.WM.get();!p&&(0,g.i)(i,_e,b)&&(u=b),o[12]=0,o[13]=0,o[14]=0,e.modelTransform=o,e.renderLocation=(0,l.d9)(u),p?e.state|=Ne:e.state&=~Ne}function ae(e,t,i,r){const n=(0,c.l)(r.basis1),o=(0,c.l)(r.basis2),s=ge(r),l=he(r),d=(0,c.s)(m.WM.get(),0,0,0);(0,c.g)(d,(0,c.j)(m.WM.get(),r.basis1,t.direction[0]),(0,c.j)(m.WM.get(),r.basis2,t.direction[1])),(0,c.g)(d,r.origin,d);let u=0,g=1;if(pe(t))1===t.direction[0]&&-1===t.direction[1]?u=ye:1===t.direction[0]&&1===t.direction[1]?u=Math.PI:-1===t.direction[0]&&1===t.direction[1]&&(u=3*Math.PI/2),g=l;else{const e=0!==t.direction[0]?1:2;u=1===e?ye:0,g=(1===e?o:n)-s}const h=(0,a.QO)(m.MP.get(),u);(0,a.bA)(h,h,(0,c.s)(m.WM.get(),g,g,g)),(0,a.Jp)(h,i,h),h[12]=0,h[13]=0,h[14]=0,e.modelTransform=h,e.renderLocation=d}function ce(e,t,i,r){const n=r.worldUpAtPosition(i.origin,m.WM.get()),o=de(i,X.POSITIVE_X),s=(0,a.QO)(m.MP.get(),o.edge*Math.PI/2);(0,a.lM)(s,s,-fe(i,n)),(0,a.Jp)(s,t,s),s[12]=0,s[13]=0,s[14]=0,e.modelTransform=s,e.renderLocation=o.position}function le(e,t,i){const r=de(i,X.POSITIVE_Y),n=(0,a.QO)(m.MP.get(),r.edge*Math.PI/2);(0,a.lM)(n,n,ye),(0,a.Jp)(n,t,n),n[12]=0,n[13]=0,n[14]=0,e.modelTransform=n,e.renderLocation=r.position}function de(e,t){switch(t){case X.POSITIVE_X:return{basis:e.basis1,direction:1,position:(0,c.g)(m.WM.get(),e.origin,e.basis1),edge:t};case X.POSITIVE_Y:return{basis:e.basis2,direction:1,position:(0,c.g)(m.WM.get(),e.origin,e.basis2),edge:t};case X.NEGATIVE_X:return{basis:e.basis1,direction:-1,position:(0,c.f)(m.WM.get(),e.origin,e.basis1),edge:t};case X.NEGATIVE_Y:return{basis:e.basis2,direction:-1,position:(0,c.f)(m.WM.get(),e.origin,e.basis2),edge:t}}}function ue(e,t,i){const r=i.projectToRenderScreen((0,c.g)(m.WM.get(),e,t),(0,s.Wv)(m.WM.get())),n=i.projectToRenderScreen((0,c.f)(m.WM.get(),e,t),(0,s.Wv)(m.WM.get()));return(0,c.q)((0,c.f)(r,r,n))}function ge(e){const t=(0,c.l)(e.basis1),i=(0,c.l)(e.basis2);return f.Yn*Math.min(t,i)}function he(e){return ge(e)}function pe(e){return 0!==e.direction[0]&&0!==e.direction[1]}function be(e){return new C.r({view:e,attached:!1,color:(0,M.bL)(e.effectiveTheme),width:f.fg,renderOccluded:y.yD.OccludeAndTransparent,geometry:[[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]]],isDecoration:!0})}function me(e){return new Q({view:e,attached:!1,backgroundColor:M.ku,gridColor:(0,M.CB)(e.effectiveTheme),gridWidth:4,renderOccluded:y.yD.OccludeAndTransparent,isDecoration:!0})}function Me(e,t,i){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new r.Z;if(null==e)return null;const{renderCoordsHelper:s}=t,a=s.fromRenderCoords(e.origin,new $.Z({spatialReference:t.spatialReference}));if(null==a)return null;const l=(0,d.tryProjectWithZConversion)(a,i);if(null==l)return null;n.position=l;const u=2*(0,c.l)(e.basis1),g=2*(0,c.l)(e.basis2),h=J.Z.renderUnitScaleFactor(t.spatialReference,i);n.width=u*h,n.height=g*h;const p=s.worldUpAtPosition(e.origin,m.WM.get());return n.tilt=(0,o.BV)(fe(e,p)),n.heading=s.headingAtPosition(e.origin,e.basis1)-90,n}function fe(e,t){return(0,b.cp)(t,e.basis2,e.basis1)+ye}function Ie(e,t){if(null==(null===e||void 0===e?void 0:e.position))return null;const i=(0,I.G)(e.position,t.spatialReference,t.elevationProvider);if(null==i)return null;const r=J.Z.renderUnitScaleFactor(e.position.spatialReference,t.spatialReference),n=e.width*r,o=e.height*r;return{position:i,heading:e.heading,tilt:e.tilt,renderWidth:n,renderHeight:o}}function we(e,t,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:(0,g.a)();if(null==e)return null;const s=function(e,t,i,r,s,a){let l=arguments.length>6&&void 0!==arguments[6]?arguments[6]:(0,g.a)();return a.toRenderCoords(e,l.origin)?(a.worldBasisAtPosition(l.origin,u.R.X,l.basis1),a.worldBasisAtPosition(l.origin,u.R.Y,l.basis2),(0,h.my)(l.basis2,l.basis1,l.origin,l.plane),(0,g.r)(l,-(0,o.Vl)(t),(0,g.n)(l),l),(0,g.r)(l,(0,o.Vl)(i),l.basis1,l),(0,c.j)(l.basis1,l.basis1,r/2),(0,c.j)(l.basis2,l.basis2,s/2),(0,g.u)(l),l):(n.Z.getLogger("esri.views.3d.analysis.Slice.sliceToolUtils").error("Failed to project slice plane position, projection from ".concat(e.spatialReference.wkid," is not supported")),null)}(e.position,e.heading,e.tilt,e.renderWidth,e.renderHeight,t.renderCoordsHelper,r);return i.tiltEnabled||null==s||function(e,t,i){const r=t.worldUpAtPosition(e.origin,m.WM.get()),n=e.basis1,o=fe(e,r),s=Math.round(o/ye)*ye;(0,g.r)(e,s-o,n,i)}(s,t.renderCoordsHelper,s),s}(F=X||(X={}))[F.POSITIVE_X=0]="POSITIVE_X",F[F.POSITIVE_Y=1]="POSITIVE_Y",F[F.NEGATIVE_X=2]="NEGATIVE_X",F[F.NEGATIVE_Y=3]="NEGATIVE_Y";const Ce=K.jg.Custom1;var Te,ve;!function(e){e[e.HEADING=1]="HEADING",e[e.TILT=2]="TILT"}(Te||(Te={})),function(e){e[e.HORIZONTAL_OR_VERTICAL=0]="HORIZONTAL_OR_VERTICAL",e[e.HORIZONTAL=1]="HORIZONTAL",e[e.VERTICAL=2]="VERTICAL",e[e.TILTED=3]="TILTED"}(ve||(ve={}));const Ne=K.jg.Custom2,_e=(0,p.Ue)(),ye=Math.PI/2,Ae=K.jg.Custom1,Oe=K.jg.Custom2;function We(e){return null!=("building-scene-3d"===e.type?e:null)}},11526:(e,t,i)=>{i.d(t,{O:()=>d,s:()=>u});const r="theme-style";function n(e,t){return function(e,t){const i=new Image(t,t);return i.src=e,i}(function(e){const t=(new XMLSerializer).serializeToString(e);return"data:image/svg+xml;base64,".concat(btoa(t))}(o(function(e){const t=e.split(",")[1],i=atob(t);return(new DOMParser).parseFromString(i,"image/svg+xml")}(e),t)),t.size)}function o(e,t){let{accentColor:i,contrastColor:n}=t;const o=i.toHex(),s=i.a,a=n.toHex(),c=n.a,l=e.getElementsByTagNameNS("http://www.w3.org/2000/svg","style").namedItem(r);return l&&(l.innerHTML="\n      .contrast-fill { fill: ".concat(a,"; fill-opacity: ").concat(c,"; }\n      .contrast-stroke { stroke: ").concat(a,"; stroke-opacity: ").concat(c,";  }\n      .accent-fill { fill: ").concat(o,"; fill-opacity: ").concat(s,"; }\n      .accent-stroke { stroke: ").concat(o,"; stroke-opacity:  ").concat(s,"; }")),e}const s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxwYXRoIGQ9Ik0yOCAwYTI4IDI4IDAgMSAxIDAgNTYgMjggMjggMCAwIDEgMC01NiIgY2xhc3M9ImFjY2VudC1maWxsIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI0Ljk5IiBkPSJNMjAuMDUgNDAuODZhMTUuMDUgMTUuMDUgMCAwIDAgMTcuMTQtMS41IDE1LjA1IDE1LjA1IDAgMCAwIDQuNDctMTYuNjUgMTUuMDUgMTUuMDUgMCAwIDAtMjIuNzItNy4xNSAxNS4wNSAxNS4wNSAwIDAgMC01LjUgNy4xNSIgY2xhc3M9ImNvbnRyYXN0LXN0cm9rZSIvPjxwYXRoIGQ9Im0xMC45NyAzNS41NyA1LjM4IDEyLjA3IDcuNzktMTMuNDd6IiBjbGFzcz0iY29udHJhc3QtZmlsbCIvPjwvc3ZnPg==",a="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSIgdmVyc2lvbj0iMi4wIj48c3R5bGUgaWQ9InRoZW1lLXN0eWxlIj4uY29udHJhc3QtZmlsbHtmaWxsOiNmZmZ9LmNvbnRyYXN0LXN0cm9rZXtzdHJva2U6I2ZmZn0uYWNjZW50LWZpbGx7ZmlsbDojZmY3ZjAwO2ZpbGwtb3BhY2l0eTouNX08L3N0eWxlPjxjaXJjbGUgY3g9IjM5LjQ3OCIgY3k9IjMuMDc4IiByPSIyOCIgY2xhc3M9ImFjY2VudC1maWxsIiB0cmFuc2Zvcm09InJvdGF0ZSg0MC41NDIpIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSI1IiBkPSJtNy4wNzQgMzAuMDUzIDI5LjM5NyAxMS45ODUtMy42NzMtMzMuNDkzIiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIi8+PHBhdGggc3Ryb2tlLXdpZHRoPSIyLjk5NiIgZD0iTTI0LjUwNCAyMy4yMDdhMTEuOTggMTEuOTggMCAwIDAtOS44IDcuNTA3IiBjbGFzcz0iY29udHJhc3Qtc3Ryb2tlIGNvbnRyYXN0LWZpbGwiLz48cGF0aCBkPSJtMjkuODE4IDIyLjgwOC02LjE4NCA0LjYtLjU0MS04LjM2NHoiIGNsYXNzPSJjb250cmFzdC1maWxsIi8+PC9zdmc+";var c=i(1487);const l=64;function d(e,t){const{accentColor:i,contrastColor:r,preMultiplyAlpha:o}=t;return e.fromData("heading-rotate:[accent:".concat(i,",contrast:").concat(r,",size:").concat(l,"]"),(()=>new c.x(n(s,{accentColor:i,contrastColor:r,size:l}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:o})))}function u(e,t){const{accentColor:i,contrastColor:r,preMultiplyAlpha:o}=t;return e.fromData("tilt-rotate:[accent:".concat(i,",contrast:").concat(r,",size:").concat(l,"]"),(()=>new c.x(n(a,{accentColor:i,contrastColor:r,size:l}),{mipmap:!0,reloadable:!0,preMultiplyAlpha:o})))}}}]);
//# sourceMappingURL=8035.a67071aa.chunk.js.map