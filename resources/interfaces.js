import { countryLocationsLMAO, countryLocationsRapid } from './country-locations';

// TODO: implement interface for this timestamped dataset
// https://enrichman.github.io/covid19/world/full.json

//https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats
export const interfaceInRapidAPI = (dataset) => {
  return dataset.map((point) => {
    const {
      province,
      country,
      lastUpdate,
      confirmed,
      deaths,
      recovered,
    } = point;
    let lat = 0,
        lng = 0;
    if(!!province) {
      if(!!countryLocationsRapid[province]) {
        lat = countryLocationsRapid[province].lat;
        lng = countryLocationsRapid[province].lng;
      } else {
        console.log(`No geographic data for: ${province}`);
      }
    } else {
      if(!!countryLocationsRapid[country]) {
        lat = countryLocationsRapid[country].lat;
        lng = countryLocationsRapid[country].lng;
      } else {
        console.log(`No geographic data for: ${country}`);
      }
    }
    return({
      provinceState: province,
      countryRegion: country,
      timestamp: lastUpdate,
      confirmed,
      deaths,
      recovered,
      lat: lat ? lat : 0,
      lng: lng ? lng : 0,
    })
  });
}

//https://covid19.mathdro.id/api/deaths
export const interfaceInMathroid = (dataset) => {
  return dataset.map((point) => {
    const {
      provinceState,
      countryRegion,
      lastUpdate,
      confirmed,
      deaths,
      recovered,
      lat,
      long,
    } = point;
    return({
      provinceState,
      countryRegion,
      timestamp: lastUpdate,
      confirmed,
      deaths,
      recovered,
      lat,
      lng: long,
    })
  });
}

//https://covid19.mathdro.id/api
export const interfaceInMathroidTotal = (dataset) => {
  const { confirmed, deaths, recovered } = dataset;
  return({
    confirmed: confirmed.value,
    deaths: deaths.value,
    recovered: recovered.value,
  });
}

//https://corona.lmao.ninja/countries
export const interfaceInLMAO = (dataset) => {
  return dataset.map((point) => {
    const {
      country,
      cases,
      deaths,
      recovered,
    } = point;
    let lat = 0,
        lng = 0;
    if(!!country) {
      const coordinates = countryLocationsLMAO[country];
      if(!!coordinates) {
        lat = coordinates.lat;
        lng = coordinates.lng
      } else {
        console.log(`No geographic data for: ${country}`);
      }
    }
    const now = new Date();
    return({
      provinceState: '',
      countryRegion: country,
      timestamp: now.getDate(),
      confirmed: cases,
      deaths,
      recovered,
      lat,
      lng,
    })
  });
}

//https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/${date}.csv
export const interfaceInCSSEarchived = (dataset) => {
  return dataset.map((point) => {
    const [
      provinceState,
      countryRegion,
      timestamp,
      confirmed,
      deaths,
      recovered,
      lat,
      lng,
    ] = point;
    return({
      provinceState,
      countryRegion,
      timestamp,
      confirmed,
      deaths,
      recovered,
      lat,
      lng,
    })
  });
}

export const interfaceOutGeoJSON = (dataset) => {
  let geoData = {
    type: 'FeatureCollection',
    features: [],
  }
  if(dataset) {
    let geodataFeatures = [];
    for(const point of dataset){
      const {
        provinceState,
        countryRegion,
        timestamp,
        confirmed,
        deaths,
        recovered,
        lat,
        lng,
      } = point;
      geodataFeatures.push({
        type: 'Feature',
        properties: {
          province: provinceState,
          country: countryRegion,
          timestamp: Number(timestamp),
          confirmed: Number(confirmed),
          deaths: Number(deaths),
          recovered: Number(recovered),
        },
        geometry: {
          type: 'Point',
          coordinates: [Number(lng), Number(lat)],
        }
      });
    }
    geoData.features = geodataFeatures;
  }
  return geoData;
}
