import { fetchRequest } from './fetchRequest';

const getWeatherForecast = (city) => {
  return fetchRequest(city)
};

export { getWeatherForecast };