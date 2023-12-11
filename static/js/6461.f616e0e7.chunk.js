"use strict";(self.webpackChunkn2_depot=self.webpackChunkn2_depot||[]).push([[6461],{16461:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});t(59486);var s=t(42306),o=t(96212),i=t(45502),n=t(17314),l=t(53531),a=t(80394),c=t(21449),m=t(64145),f=t(77960),u=t(43238),d=t(55185),p=t(53866),S=t(585);class h{convertVectorFieldData(e){const r=o.Z.fromJSON(e.pixelBlock),t=(0,m.KC)(r,e.type);return Promise.resolve(null!=t?t.toJSON():null)}computeStatisticsHistograms(e){const r=o.Z.fromJSON(e.pixelBlock),t=(0,c.js)(r);return Promise.resolve(t)}async decode(e){const r=await(0,i.J)(e.data,e.options);return r&&r.toJSON()}symbolize(e){e.pixelBlock=o.Z.fromJSON(e.pixelBlock),e.extent=e.extent?p.Z.fromJSON(e.extent):null;const r=this.symbolizer.symbolize(e);return Promise.resolve(null!=r?r.toJSON():null)}async updateSymbolizer(e){var r;this.symbolizer=u.Z.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===(null===(r=this.symbolizer)||void 0===r?void 0:r.rendererJSON.type)&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=(0,l.Ue)(e.rasterFunctionJSON)}async process(e){var r;const t=this.rasterFunction.process({extent:p.Z.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>null!=e?o.Z.fromJSON(e):null)),primaryPixelSizes:null===(r=e.primaryPixelSizes)||void 0===r?void 0:r.map((e=>null!=e?S.Z.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return null!=t?t.toJSON():null}stretch(e){const r=this.symbolizer.simpleStretch(o.Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(null===r||void 0===r?void 0:r.toJSON())}estimateStatisticsHistograms(e){const r=(0,c.Hv)(o.Z.fromJSON(e.srcPixelBlock));return Promise.resolve(r)}split(e){const r=(0,n.Vl)(o.Z.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return r&&r.forEach(((e,t)=>{r.set(t,null===e||void 0===e?void 0:e.toJSON())})),Promise.resolve(r)}async mosaicAndTransform(e){var r;const t=e.srcPixelBlocks.map((e=>e?new o.Z(e):null)),s=(0,n.us)(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let i,l=s;return e.coefs&&(l=(0,n.Uk)(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(i=(0,n.Qh)(e.destDimension,e.gcsGrid),l=(0,m.xQ)(l,e.isUV?"vector-uv":"vector-magdir",i)),{pixelBlock:null===(r=l)||void 0===r?void 0:r.toJSON(),localNorthDirections:i}}async createFlowMesh(e,r){const t={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:o}=await(0,d.GE)(e.meshType,e.simulationSettings,t,r.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const r=p.Z.fromJSON(e.projectedExtent),t=p.Z.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new s.Z({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,a.Mk)(r.spatialReference,t.spatialReference,o))&&await(0,a.zD)();const i=e.rasterTransform?(0,f.c)(e.rasterTransform):null;return(0,a.Qp)({...e,projectedExtent:r,srcBufferExtent:t,datumTransformation:o,rasterTransform:i})}}}}]);
//# sourceMappingURL=6461.f616e0e7.chunk.js.map