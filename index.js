// Question -

// Solving problems using array functions on rest countries data.
// a) Get all the countries from Asia continent /region using Filter function
// b) Get all the countries with a population of less than 2 lakhs using Filter function
// c) Print the following details name, capital, flag using forEach function
// d) Print the total population of countries using reduce function
// e) Print the country which uses US Dollars as currency

// Answer/Code for a)-

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function ()
{
  if (xhr.status >= 200 && xhr.status < 300)
  {
    var data=JSON.parse(this.response);
    let opa=data.filter((con)=>con.region=="Asia").map((con)=>con.name);
    console.log(opa);
  }
};
xhr.send();

// Answer/Code for b)-

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function ()
{
  if (xhr.status >= 200 && xhr.status < 300)
  {
    var data=JSON.parse(this.response);
    let opb=data.filter((con)=>con.population<200000).map((con)=>con.name)
    console.log(opb);
  }
};
xhr.send();

// Answer/Code for c)-

var xhr=new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function ()
{
  if (xhr.status >= 200 && xhr.status < 300)
  {
    var data=JSON.parse(this.response);
    data.forEach((con)=>console.log(`${con.name},${con.capital},${con.flag}`));
  }
};
xhr.send();

// Answer/Code for d)-

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function ()
{
  if (xhr.status >= 200 && xhr.status < 300)
  {
    var data=JSON.parse(this.response);
    let opd=data.reduce((con1,con2)=>con1+con2.population,0);
    console.log(opd);
  }
};
xhr.send();

// Answer/Code for e)-

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

xhr.onload = function ()
{
  if (xhr.status >= 200 && xhr.status < 300)
  {
    var data=JSON.parse(this.response);
    let ope=data.filter((con)=>con.currencies[0].symbol==="$").map((con)=>con.name);
    console.log(ope);
  }
};
xhr.send();
