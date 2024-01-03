const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const infovalue = JSON.parse(xhr.response);

  let totalPopulation = infovalue.reduce((people, value) => {
    return people + (value.population || 0);
  }, 0);

  console.log("Total Population:", totalPopulation);
};
