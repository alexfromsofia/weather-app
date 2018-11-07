import axios from 'axios';

import { FETCH_WEATHER, WEATHER_API_URL } from '../constants';


export function fetchWeather(city) {
  const url = `${WEATHER_API_URL}&q=${city}`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }

}
