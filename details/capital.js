const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const infovalue = JSON.parse(xhr.response);
  infovalue.forEach((country) => {
    if (country.capital && country.capital[0]) {
      console.log("CAPITAL:", country.capital[0]);
    }
  });
};
