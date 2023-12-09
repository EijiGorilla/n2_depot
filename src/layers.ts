import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import SceneLayer from '@arcgis/core/layers/SceneLayer';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
import UniqueValueRenderer from '@arcgis/core/renderers/UniqueValueRenderer';
import SimpleRenderer from '@arcgis/core/renderers/SimpleRenderer';
import {
  SimpleMarkerSymbol,
  MeshSymbol3D,
  FillSymbol3DLayer,
  LabelSymbol3D,
  TextSymbol3DLayer,
} from '@arcgis/core/symbols';
import SolidEdges3D from '@arcgis/core/symbols/edges/SolidEdges3D';
import { labelSymbol3DLine } from './Label';

/* Chainage Layer  */
var labelChainage = new LabelClass({
  labelExpressionInfo: { expression: '$feature.KmSpot' },
  symbol: {
    type: 'text',
    color: [85, 255, 0],
    haloColor: 'black',
    haloSize: 0.5,
    font: {
      size: 15,
      weight: 'bold',
    },
  },
});

var chainageRenderer = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 5,
    color: [255, 255, 255, 0.9],
    outline: {
      width: 0.2,
      color: 'black',
    },
  }),
});

export const chainageLayer = new FeatureLayer({
  portalItem: {
    id: 'e47e9f4d475e4e24acad458a1428f3f9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 5,
  title: 'Chainage',
  elevationInfo: {
    mode: 'relative-to-ground',
  },
  labelingInfo: [labelChainage],
  minScale: 150000,
  maxScale: 0,
  renderer: chainageRenderer,
  outFields: ['*'],
  popupEnabled: false,
});

// * PROW *//
export const rowLayer = new FeatureLayer({
  portalItem: {
    id: 'e47e9f4d475e4e24acad458a1428f3f9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 1,
  title: 'ROW',
  definitionExpression: "Extension = 'N2'",
  popupEnabled: false,
});

// * Station Layer * //
const stationLayerTextSymbol = labelSymbol3DLine({
  materialColor: '#d4ff33',
  fontSize: 15,
  fontFamily: 'Ubuntu Mono',
  fontWeight: 'normal',
  haloColor: 'black',
  haloSize: 0.5,
  vOffsetScreenLength: 100,
  vOffsetMaxWorldLength: 700,
  vOffsetMinWorldLength: 80,
});

var labelClass = new LabelClass({
  symbol: stationLayerTextSymbol,
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: 'DefaultValue($feature.Station, "no data")',
    //value: "{TEXTSTRING}"
  },
});

export const stationLayer = new FeatureLayer({
  portalItem: {
    id: 'e47e9f4d475e4e24acad458a1428f3f9',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  layerId: 2,
  title: 'Station',
  labelingInfo: [labelClass],
  elevationInfo: {
    mode: 'relative-to-ground',
  },
});
stationLayer.listMode = 'hide';

// * Depot * //
const colorDepot = [
  [225, 225, 225, 0.1], // To be Constructed (white)
  [130, 130, 130, 0.5], // Under Construction
  [255, 0, 0, 0.8], // Delayed
  [0, 112, 255, 0.8], // Completed
];

function renderDepotLayer() {
  const renderer = new UniqueValueRenderer({
    field: 'Status',
  });

  for (var i = 0; i < colorDepot.length; i++) {
    renderer.addUniqueValueInfo({
      value: i + 1,
      symbol: new MeshSymbol3D({
        symbolLayers: [
          new FillSymbol3DLayer({
            material: {
              color: colorDepot[i],
              colorMixMode: 'replace',
            },
            edges: new SolidEdges3D({
              color: [225, 225, 225, 0.3],
            }),
          }),
        ],
      }),
    });
  }
  depotLayer.renderer = renderer;
}

export const depotLayer = new SceneLayer({
  portalItem: {
    id: '95a3d13d629c49cbb011b78576be7310',
  },
  elevationInfo: {
    mode: 'absolute-height', //absolute-height, relative-to-ground
  },
  title: 'Depot Buildings',
  labelsVisible: false,
  outFields: ['*'],
  popupTemplate: {
    title: '<h5>{Status}</h5>',
    lastEditInfoEnabled: false,
    returnGeometry: true,
    content: [
      {
        type: 'fields',
        fieldInfos: [
          {
            fieldName: 'StructureType',
            label: 'Structure Type',
          },
          {
            fieldName: 'StructureLevel',
            label: 'Structure Level',
          },
          {
            fieldName: 'Type',
            label: 'Type of Structure',
          },
          {
            fieldName: 'SubType',
            label: 'Subtype of Structure',
          },
        ],
      },
    ],
  },
});

renderDepotLayer();

/* building spot layer */
const buildingSpotSymbol = new SimpleRenderer({
  symbol: new SimpleMarkerSymbol({
    size: 5,
    color: 'white',
    outline: {
      // autocasts as new SimpleLineSymbol()
      width: 0.5,
      color: [0, 0, 0, 0],
    },
  }),
});

const buildingSpotLabelClass = new LabelClass({
  symbol: new LabelSymbol3D({
    symbolLayers: [
      new TextSymbol3DLayer({
        material: {
          color: 'orange',
        },
        size: 12,
        halo: {
          size: 1,
          color: 'black',
        },
        font: {
          family: 'Ubuntu Mono',
        },
      }),
    ],
    verticalOffset: {
      screenLength: 50,
      maxWorldLength: 300,
      minWorldLength: 40,
    },
    callout: {
      type: 'line', // autocasts as new LineCallout3D()
      color: 'white',
      size: 0.5,
      border: {
        color: 'grey',
      },
    },
  }),
  labelPlacement: 'above-center',
  labelExpressionInfo: {
    expression: '$feature.Name',
    //value: "{TEXTSTRING}"
  },
});

export const buildingSpotLayer = new FeatureLayer({
  portalItem: {
    id: 'd6364ecc11fa4d7f87b379aae771c9a2',
    portal: {
      url: 'https://gis.railway-sector.com/portal',
    },
  },
  elevationInfo: {
    mode: 'relative-to-ground',
  },
  title: 'Building Spot',
  renderer: buildingSpotSymbol,
  labelingInfo: [buildingSpotLabelClass],
  popupEnabled: false,
  outFields: ['*'],
});
