import SceneView from '@arcgis/core/views/SceneView';
import Map from '@arcgis/core/Map';
import BasemapGallery from '@arcgis/core/widgets/BasemapGallery';
import LayerList from '@arcgis/core/widgets/LayerList';
import Search from '@arcgis/core/widgets/Search';
import Expand from '@arcgis/core/widgets/Expand';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import Compass from '@arcgis/core/widgets/Compass';
import Measurement from '@arcgis/core/widgets/Measurement';
import { rowLayer, stationLayer, depotLayer, buildingSpotLayer } from './layers';

export const map = new Map({
  basemap: 'dark-gray-vector', // "streets-night-vector", basemap
  ground: 'world-elevation',
});

const depotGroupLayer = new GroupLayer({
  title: 'Depot Buildings',
  visible: true,
  visibilityMode: 'independent',
  layers: [buildingSpotLayer, depotLayer],
});

map.add(rowLayer);
map.add(depotGroupLayer);
// map.add(stationLayer);

export const view = new SceneView({
  container: undefined,
  map,
  center: [120.5793, 15.18],
  zoom: 13,
  viewingMode: 'local',
  environment: {
    starsEnabled: false,
  },
});

export const basemaps = new BasemapGallery({
  view,
  container: undefined,
});

export const layerList = new LayerList({
  view: view,
  selectionMode: 'multiple',
  visibilityAppearance: 'checkbox',
  container: undefined,
  listItemCreatedFunction: (event) => {
    const item = event.item;
    if (item.layer.type !== 'group') {
      item.panel = {
        content: 'legend',
        open: true,
      };
    }

    item.title === 'Chainage' ? (item.visible = false) : (item.visible = true);
  },
});

// Compass
export const compass = new Compass({
  view: view,
});

// Search
// const sources = [
//   {
//     layer: buildingSpotLayer,
//     searchFields: ['PIER'],
//     displayField: 'PIER',
//     exactMatch: false,
//     outFields: ['PIER'],
//     name: 'Pier No',
//     zoomScale: 1000,
//     placeholder: 'example: P-288',
//   },
// ];

// const searchWidget = new Search({
//   view: view,
//   locationEnabled: false,
//   allPlaceholder: 'Chainage or pier no',
//   includeDefaultSources: false,
//   sources: sources,
// });

// export const searchExpand = new Expand({
//   view: view,
//   content: searchWidget,
//   expandIconClass: 'esri-icon-search',
//   group: 'top-right',
// });

// Measurement Tool
export const measurement = new Measurement({
  view: view,
  activeTool: undefined,
  container: undefined,
});
