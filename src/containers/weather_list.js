import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const { city, list } = cityData;
    const cityName = city.name;
    const lng = city.coord.lon;
    const lat = city.coord.lat;
    const tempsInCelsius = list.map(weather => weather.main.temp);
    const pressures = list.map(weather => weather.main.pressure);
    const humidity = list.map(weather => weather.main.humidity);

    return (
      <tr key={ cityName }>
        <td className="google-map-cell">
          <GoogleMap lng={lng} lat={lat} />
        </td>
        <td>
          <Chart data={ tempsInCelsius } color="orange" units="C" />
        </td>
        <td>
          <Chart data={ pressures } color="blue" units="hPa" />
        </td>
        <td>
          <Chart data={ humidity } color="cyan" units="%" />
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover city-forecast-table mt-3">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature (C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
        </thead>
        <tbody>
        { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);