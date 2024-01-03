const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const infovalue = JSON.parse(xhr.response);

  let population = infovalue.filter(
    (people) =>
      people.hasOwnProperty("population") && people.population < 200000
  );
  population.forEach((people) => {
    console.log(people.name.common, ":", people.population);
  });
};
