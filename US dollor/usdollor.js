const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const infovalue = JSON.parse(xhr.response);

  let usdollor = infovalue.filter(
    (usd) => usd.hasOwnProperty("currencies") && usd.currencies.USD
  );
  usdollor.forEach((country) => {
    console.log(country.name.common);
  });
};
