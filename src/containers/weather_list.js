import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={ cityName }>
        <td>
          { cityName }
        </td>
        <td>
          <Chart data={ temps } color="orange"/>
        </td>
        <td>
          <Chart data={ pressures } color="blue"/>
        </td>
        <td>
          <Chart data={ humidity } color="cyan"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover city-forecast-table">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
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