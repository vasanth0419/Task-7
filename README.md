## _*DAY 7 TASK SUMMITION*_

#### **1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).**

##### _Question 1: Get all the countries from Asia continent /region using Filter function_

#### Step 1:

#### _CREATE A HTML FILE NAME_: `index.html`

#### _CREATE A JS FILE NAME_: `asia.js`

#### Step 2:

#### _Write a `asia.js` file and join in `index.html` file._

#### codes in the `index.html` file

```
<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
  </head>
  <body>
      <script src="./asia.js"></script>
  </body>
</html>
```

#### codes in the `asia.js` file

```
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

```

---

##### _Question 2: Get all the countries with a population of less than 2 lakhs using Filter function_

#### Step 1:

#### _CREATE A HTML FILE NAME_: `index.html`

#### _CREATE A JS FILE NAME_: `population.js`

#### Step 2:

#### _Write a `population.js` file and join in `index.html` file._

#### codes in the `index.html` file

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script src="./population.js"></script>
    </body>
</html>
```

#### codes in the `population.js` file

```
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

```

---

##### _Question 3: Print the following details name, capital, flag, using forEach function_

#### Step 1:

#### _CREATE A HTML FILE NAME_: `index.html`

#### _CREATE A JS FILE NAME_: `name.js` , `capital.js` & `flag.js`

#### Step 2:

#### _Write a `name.js` file and join in `index.html` file._

#### codes in the `index.html` this file can use to all 3 js file.

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script src="./countryname.js"></script> <!-- for countryname.js file-->

        <!--  <script src="./capital.js"></script>     for capital.js file-->
        <!--  <script src="./flag.js"></script>        for flag.js file-->

    </body>
</html>
```

### Getting country names:

```
const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const infovalue = JSON.parse(xhr.response);
  infovalue.forEach((country) => {
    console.log("COUNTRY NAME :", country.name.common);
  });
};

```

### Getting capitals:

```
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

```

### Getting flags:

```
const URL = "https://restcountries.com/v3.1/all";
const xhr = new XMLHttpRequest();
xhr.open("GET", URL);
xhr.send();

xhr.onload = () => {
  const infovalue = JSON.parse(xhr.response);
  infovalue.forEach((country) => {
    console.log("FLAG :", country.flags.png);
  });
};

```

---

##### _Question 4: Print the total population of countries using reduce function_

#### Step 1:

#### _CREATE A HTML FILE NAME_: `index.html`

#### _CREATE A JS FILE NAME_: `total.js`

#### Step 2:

#### _Write a `total.js` file and join in `index.html` file._

#### codes in the `index.html` file

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script src="./total.js"></script>
    </body>
</html>
```

#### codes in the `total.js` file

```
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

```

---

##### _Question 5: Print the country that uses US dollars as currency._

#### Step 1:

#### _CREATE A HTML FILE NAME_: `index.html`

#### _CREATE A JS FILE NAME_: `usdollor.js`

#### Step 2:

#### _Write a `usdollor.js` file and join in `index.html` file._

#### codes in the `index.html` file

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <script src="./usdollor.js"></script>
    </body>
</html>
```

#### codes in the `usdollor.html` file

```
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

```
