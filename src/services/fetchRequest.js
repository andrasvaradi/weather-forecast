const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast?q='

const { REACT_APP_OPENWEATHER_API } = process.env;

function fetchRequest(path, options) {
  const url = `${BASE_URL}${path}&appid=${REACT_APP_OPENWEATHER_API}`;
  console.log('tried', url)
  return fetch(url, options)
    .then(res => res.ok ? res : Promise.reject())
    .then(response => response.json())
    .catch(err => {
      console.log(`Error fetching ${path}: `, err)
    })
}

export { fetchRequest };
