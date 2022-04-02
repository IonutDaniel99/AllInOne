import ContryData from './../data/country.json';

export async function getCountry() {
    return fetch("https://ip-api.io/json/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    })
    .catch((error) => {
      console.error(error);
    });
}


