const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const infovalue = JSON.parse(xhr.response);

  let asia = infovalue.filter(
    (country) => country.hasOwnProperty("region") && country.region === "Asia"
  );
  asia.forEach((country) => {
    console.log(country.name.common, ":", country.region);
  });
};
