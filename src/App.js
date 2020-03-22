import React, { Component, Fragment } from 'react';
import { usePromiseTracker, trackPromise } from 'react-promise-tracker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import Select from 'react-select';
import Navigation from './components/navigation/navigation';
import DataMap from './components/data-map/data-map';
import DataPanel from './components/data-panel/data-panel';
import Loader from './components/loader/loader';
import Survey from './components/survey/survery';
import { filterPropValuePair } from './utilities/data-mutations';
//import { shiftDateBack } from './utilities/datetime';
//import { dateString } from './utilities/formatting';
import { interfaceOutGeoJSON } from './utilities/interfaces';
import './App.css';

import __DATA__MOCKUP from './data-mockup';

const __SATELLITE = 'satellite-v9';
const __LIGHTMODE = 'light-v10';
const __DARKMODE = 'dark-v10';
const __STREETS = 'streets-v11';

const permuteMapStyles = (currentValue) => {
  switch(currentValue) {
    case __SATELLITE:
      return __LIGHTMODE;
    case __LIGHTMODE:
      return __DARKMODE;
    case __DARKMODE:
      return __STREETS;
    case __STREETS:
      return __SATELLITE;
    default:
      console.log(`Sorry, the style '${currentValue}' doesn't exist.`);
  }
}

const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker({ delay: 3000 });
  return(promiseInProgress && <Loader />);  
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mapStyle: __DARKMODE,
      data: {
        fetched: {},
        filtered: {},
      },
      survey: {},
      currentTime: 1584820813832,
      filteredRegions: [],
      chartsExpanded: false,
      filtersExpanded: false,
    }
    this.registeredRegions = null;
  }

  handleReload = () => {
    document.location.reload();
  }

  handleSwitchTheme = () => {
    const { mapStyle } = this.state;
    this.setState({ mapStyle: permuteMapStyles(mapStyle) });
  }

  handleSetLive = () => {
    this.setState({
      currentTime: Date.now(),
    });
  }

  handleToggleCharts = () => {
    this.setState({
      chartsExpanded: !this.state.chartsExpanded,
    });
  }

  handleCollapseCharts = () => {
    this.setState({ chartsExpanded: false });
  }

  handleToggleFilters = () => {
    this.setState({
      filtersExpanded: !this.state.filtersExpanded,
    });
  }

  handleCollapseFilters = () => {
    this.setState({ filtersExpanded: false });
  }

  setCountryFilter = (filteredRegions) => {
    this.setState({ filteredRegions });
    let { data } = this.state;
    const { fetched } = data;
    if(!!filteredRegions && filteredRegions.length > 0) {
      filteredRegions = filteredRegions.map(r => r.value);
      data.filtered = filterPropValuePair(['province', 'country'], filteredRegions, fetched);
    } else {
      data.filtered = data.fetched;
    }
    this.setState({ data });
  }

  setTime = (unixtime) => {
    this.setState({
      currentTime: unixtime,
    });
  }

  getLiveData = async () => {
    // TODO: fetch from backend here
    return __DATA__MOCKUP;
  }

  async componentDidMount() {
    const data = await this.getLiveData();
    this.setState({
      data: {
        fetched: data,
        filtered: data,
      }
    });
    // TODO: get from endpoint '/getAllRegisteredRegions'
    this.registeredRegions = [
      { value: 'Auenland', label: 'Auenland' },
      { value: 'Eriador', label: 'Eriador' },
      { value: 'Hyarrostar', label: 'Hyarrostar' },
      { value: 'Númenor', label: 'Númenor' },
      { value: 'Gorgoroth', label: 'Gorgoroth' },
      { value: 'Mordor', label: 'Mordor' },
    ]
  }

  render(){
    const {
      state,
      registeredRegions,
      setCountryFilter,
      handleToggleCharts,
      handleCollapseCharts,
      handleToggleFilters,
      handleCollapseFilters,
    } = this;
    const {
      mapStyle,
      data: {filtered},
      //survey,
      currentTime,
      filteredRegions,
      chartsExpanded,
      filtersExpanded,
    } = state;

    const geoData = interfaceOutGeoJSON(filtered[currentTime]);

    return(
      <Router>
        <div className="app">
          <LoadingIndicator />
          <Navigation />
          <Switch>
            <Route path="/">
              <Modal
                open={filtersExpanded}
                onClose={handleCollapseFilters}
                classNames={{ modal: 'modal-filters' }}
                center
              >
                <h2>Data filters</h2>
                <Select
                  isMulti
                  name="countries"
                  options={registeredRegions}
                  defaultValue={filteredRegions}
                  onChange={setCountryFilter}
                />
              </Modal>
              <DataPanel
                data={filtered}
                currentTime={currentTime}
                chartsExpanded={chartsExpanded}
                onToggleFilters={handleToggleFilters}
                onToggleCharts={handleToggleCharts}
              />
              {geoData && <DataMap
                data={geoData}
                mapStyle={mapStyle}
                onClick={handleCollapseCharts}
              />}
            </Route>
            <Route path="/table">
              <Fragment />
            </Route>
            <Route path="/survey">
              <Survey />
            </Route>
            <Route path="/contact">
              <Fragment />
            </Route>
            <Route path="/imprint">
              <Fragment />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
