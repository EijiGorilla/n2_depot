/* eslint-disable react/jsx-no-comment-textnodes */
import { useRef, useEffect, useState } from 'react';
import { map, view, basemaps, layerList, measurement, compass } from './Scene';
import Select from 'react-select';
import './index.css';
import './App.css';
import '@esri/calcite-components/dist/components/calcite-shell';
import '@esri/calcite-components/dist/components/calcite-list';
import '@esri/calcite-components/dist/components/calcite-list-item';
import '@esri/calcite-components/dist/components/calcite-shell-panel';
import '@esri/calcite-components/dist/components/calcite-action';
import '@esri/calcite-components/dist/components/calcite-action-bar';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-switch';
import '@esri/calcite-components/dist/calcite/calcite.css';
import {
  CalciteShell,
  CalciteShellPanel,
  CalciteActionBar,
  CalciteAction,
  CalciteSwitch,
  CalciteTabs,
  CalcitePanel,
  CalciteList,
  CalciteListItem,
  CalciteButton,
} from '@esri/calcite-components-react';
import Chart from './components/Chart';
import { defaultName, dropdownData } from './dropdownData';
import { dateUpdate } from './Query';
import { depotLayer } from './layers';

function App() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  const mapDiv = useRef(null);
  const layerListDiv = useRef<HTMLDivElement | undefined | any>(null);

  // Measurement tools
  const [activeAnalysis, setActiveAnalysis] = useState<any | undefined>('');
  const measurementToolDiv = useRef<HTMLDivElement | undefined | any>(null);

  // For Calcite Design
  const calcitePanelBasemaps = useRef<HTMLDivElement | undefined | any>(null);
  const [activeWidget, setActiveWidget] = useState<undefined | any | unknown>(null);
  const [nextWidget, setNextWidget] = useState<undefined | any | unknown>(null);

  // Calcite switch for see-through-ground
  const [underground, setUnderground] = useState<boolean>(false);

  // For dropdown filter
  const [depotBuildingName, setDepotBuildingName] = useState<null | any>(null);

  //
  const [depotLayerLoaded, setDepotLayerLoaded] = useState<any>();
  useEffect(() => {
    depotLayer.load().then(() => {
      setDepotLayerLoaded(depotLayer.loadStatus);
    });
  });

  useEffect(() => {
    if (activeWidget) {
      const actionActiveWidget = document.querySelector(
        `[data-panel-id=${activeWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionActiveWidget.hidden = true;
    }

    if (nextWidget !== activeWidget) {
      const actionNextWidget = document.querySelector(
        `[data-panel-id=${nextWidget}]`,
      ) as HTMLCalcitePanelElement;
      actionNextWidget.hidden = false;
    }
  });

  // Measurement Tool
  useEffect(() => {
    if (activeAnalysis === 'directLineMeasurementAnalysisButton') {
      measurement.activeTool = 'direct-line';
    } else if (activeAnalysis === 'areaMeasurementAnalysisButton') {
      measurement.activeTool = 'area';
    } else if (activeAnalysis === 'clearButton') {
      measurement.clear();
    }
  }, [activeAnalysis]);

  useEffect(() => {
    setDepotBuildingName({ name: defaultName });

    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });
  }, []);

  const handleMunicipalityChange = (obj: any) => {
    setDepotBuildingName(obj);
  };

  useEffect(() => {
    map.ground.opacity = underground === true ? 0.7 : 1;
    view.environment.atmosphereEnabled = false;
  }, [underground]);

  useEffect(() => {
    if (mapDiv.current) {
      map.ground.navigationConstraint = {
        type: 'none',
      };

      // Measurement tool
      measurement.container = measurementToolDiv.current;
      const measureButton = document.getElementById('measurementToolMenu') as HTMLElement;
      view.ui.add(measureButton, 'top-right');
      view.ui.add(compass, 'top-right');

      view.container = mapDiv.current;
      view.ui.components = [];
      view.ui.empty('top-left');
      basemaps.container = calcitePanelBasemaps.current;
      layerList.container = layerListDiv.current;
    }
  }, []);

  // Style CSS
  const customstyles = {
    option: (styles: any, { data, isDisabled, isFocused, isSelected }: any) => {
      // const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isFocused ? '#999999' : isSelected ? '#2b2b2b' : '#2b2b2b',
        color: '#ffffff',
      };
    },

    control: (defaultStyles: any) => ({
      ...defaultStyles,
      backgroundColor: '#2b2b2b',
      borderColor: '#949494',
      height: 35,
      width: '170px',
      color: '#ffffff',
    }),
    singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: '#fff' }),
  };

  return (
    <>
      <CalciteShell>
        <CalciteTabs slot="panel-end" style={{ width: '25vw' }}>
          {depotLayerLoaded === 'loaded' && (
            <Chart depotname={depotBuildingName === null ? '' : depotBuildingName.name} />
          )}
        </CalciteTabs>
        <header
          slot="header"
          id="header-title"
          style={{ display: 'flex', width: '100%', height: '70px', padding: '0 1rem' }}
        >
          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
            alt="DOTr Logo"
            height={'50px'}
            width={'50px'}
            style={{ marginBottom: 'auto', marginTop: 'auto' }}
          />
          <b className="headerTitle">N2 DEPOT</b>
          <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

          <div className="dropdownFilter">
            <div className="dropdownFilterLayout">
              <b style={{ color: 'white', margin: 10, fontSize: '0.9vw' }}>Buildings</b>
              <Select
                placeholder="Select Buildings"
                value={depotBuildingName}
                options={dropdownData}
                onChange={handleMunicipalityChange}
                getOptionLabel={(x: any) => x.name}
                styles={customstyles}
              />
            </div>
          </div>

          <img
            src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
            alt="GCR Logo"
            height={'50px'}
            width={'70px'}
            style={{
              marginBottom: 'auto',
              marginTop: 'auto',
              marginLeft: 'auto',
              marginRight: '5rem',
            }}
          />
        </header>
        {/* Calcite Action Panel */}
        <CalciteShellPanel
          width-scale="1"
          slot="panel-start"
          position="start"
          id="left-shell-panel"
          displayMode="dock"
        >
          <CalciteActionBar slot="action-bar">
            <CalciteAction
              data-action-id="layers"
              icon="layers"
              text="Layers"
              id="layers"
              //textEnabled={true}
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="basemaps"
              icon="basemap"
              text="Basemaps"
              id="basemaps"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>

            <CalciteAction
              data-action-id="information"
              icon="information"
              text="Information"
              id="information"
              onClick={(event: any) => {
                setNextWidget(event.target.id);
                setActiveWidget(nextWidget === activeWidget ? null : nextWidget);
              }}
            ></CalciteAction>
          </CalciteActionBar>

          <CalcitePanel
            heading="Layers"
            height-scale="l"
            width-scale="l"
            data-panel-id="layers"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="layers-container" ref={layerListDiv}></div>
          </CalcitePanel>

          <CalcitePanel
            heading="Basemaps"
            height-scale="l"
            data-panel-id="basemaps"
            style={{ width: '18vw' }}
            hidden
          >
            <div id="basemap-container" ref={calcitePanelBasemaps}></div>
          </CalcitePanel>

          <CalcitePanel heading="Description" data-panel-id="information" hidden>
            {nextWidget === 'information' ? (
              <div className="informationDiv">
                <ul>
                  <li>
                    You can filter and zoom to individual depot buildings using the dropdown list in
                    the header panel.
                  </li>
                  <li>
                    You can view either 'Complete' or 'Incomplete' progress on individual structural
                    components of a depot building over the map. Please click it in the chart
                    series.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="informationDiv" hidden></div>
            )}
          </CalcitePanel>
        </CalciteShellPanel>
        <div
          className="groundSwitchDiv"
          style={{
            position: 'fixed',
            zIndex: 1,
            bottom: 10,
            right: '23%',
            color: 'white',
            backgroundColor: '#2b2b2b',
            paddingLeft: 5,
            paddingRight: 5,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          Ground: {''}
          On{' '}
          <CalciteSwitch
            onCalciteSwitchChange={(event: any) => setUnderground(event.target.checked)}
          ></CalciteSwitch>{' '}
          Off
        </div>

        <div className="mapDiv" ref={mapDiv}></div>
        {/* Measurement Tools */}
        <div
          id="measurementToolMenu"
          className="esri-widget"
          style={{
            padding: '0.5em',
            maxWidth: '110px',
            width: '200px',
            height: '45px',
          }}
        >
          <CalciteButton
            id="directLineMeasurementAnalysisButton"
            icon-start="measure-line"
            title="Interact with direct line measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
          <CalciteButton
            id="areaMeasurementAnalysisButton"
            icon-start="measure-area"
            title="Interact with area measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
          <CalciteButton
            id="clearButton"
            icon-start="trash"
            title="Clear measurement"
            onClick={(event: any) => setActiveAnalysis(event.currentTarget.id)}
          ></CalciteButton>
        </div>
      </CalciteShell>
    </>
  );
}

export default App;
