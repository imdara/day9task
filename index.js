// console.log("Hi, 😍");
// let arr=[10,20,30,40];
// for (let value of arr)
// {
//     console.log(value);
// }
// for (let index in arr)
// {
//     console.log(index,arr[index]);
// }
// let op=arr.join();
// op=op.split(",").join("");
// console.log(op);
// let arr1=['a', 'b', 'c', 'd', 'e'];
// let arr2=[... arr1];
// console.log(arr1);
// arr2.push('f');
// console.log(arr2);
// console.log(arr1);
// function getSum(... numbers){
//     let sum=0;
//     for (var value of numbers)
//     {
//     sum=sum+value;
// }
// return sum;
// }
// console.log(getSum(10,20,30,40,50));
// function getSortedData(... data)
// {
//     let sortedData=data.sort((a,b) => a-b);
//     console.log(sortedData);
// }
// getSortedData(6,8,2,5,9,12,18,3);
// class calc {
//     static getAverage(... numbers)
//     {
//         let avg,sum=0; 
//         for (var value of numbers)
//         {
//             sum=sum+value;
//         }
//         avg=sum/numbers.length;
//         return avg;
//     }
// }

// let obj= new calc()
// let average = calc.getAverage(1,2,3,4,5,6,7,8);
// console.log(average);
// function firstUniqueLetter(str){
//     str=str.split("");
//     var i,j,unique;
//     for (i=0; i<str.length; i++){
//     for (j=0; j<str.length; j++){
//     if (str[i] == str[j] && i!=j){
//     break;}}
//     if (j==str.length){
//     unique=str[i];
//     break;}}
//     console.log(unique);}
//     let input=window.prompt("Enter a word: ");
//     firstUniqueLetter(input);
// let characters=['s','t','a','t','i','s','t','i','c','s'];
// (function (arr){
//     let i,j,newarr=[];
//     for (i=0; i<arr.length; i++){
//     for (j=0; j<arr.length; j++){
//     if (arr[i]==arr[j] && i!=j){
//     break;
//     }
//     }
//     if (j==arr.length){
//     newarr.push(arr[i]);
//     }
//     }
//     console.log(newarr);
//     })
//     (characters);
//     // let a="arithmetic";
//     // a=a.split("");

// let numbers=[11,12,13,14,15,16];
// const odd = arr => arr. filter(value => value%2!=0);
// console.log(odd(numbers));

// const titleCaps = str => str.map()
// let numbers = [6,8,2,5,9,12,18,3];
// const sumOfNumbers = num => {
//     let sum=0;
//     for (let i = 0; i < numbers.length; i++) {
//       sum+=num[i];
//     }
//     return sum;
//   };
//   console.log(sumOfNumbers(numbers));

// let numbers = [6,8,2,5,7,9,12,18,3];
// const getPrimeNumbers = arr => {
//     let i,prime=[]
//     for (value of arr){
//         for (i=2; i<value; i++){
//             if (value%i==0)
//             break;
//         }
//         if(i==value)
//         prime.push(value);
//     }
//     console.log(prime);
// } 
// getPrimeNumbers(numbers);

// const titleCaps= str => { 
//     let letters,result="";
//     str=str.split(" ");
//     for (let i=0; i<str.length; i++){
//     letters=str[i].toLowerCase();
//     result=result+" "+letters.charAt(0).toUpperCase()+letters.slice(1)+" ";
//     }
//     console.log(result.trim());
// }
// titleCaps("HelLo uSer");

// let numbers = [66,81,23,515,77,93,12];
// (function(arr){
//     let i,str,temp,reverse,newarr=[];
//     for (i=0; i<arr.length; i++){
//         str=String(arr[i]);
//         temp=str;
//         temp=temp.split("");
//         reverse=temp.reverse().join("");
//         str=Number(str);
//         if (reverse==str){
//             newarr.push(str);
//         }
//     }
//     console.log(newarr);
// })(numbers);

// let data=[ { Id: 101, FirstName: 'John', LastName: 'Adams', Email: 'johnadams123@pqr.com', Age: 27, Profession: 'Architect', Address: '123 Main Street', PhoneNumber: '456-712-3089' },
// {Id: 102, FirstName: 'Jane', LastName: 'Adams', Email: 'jimadams123@pqr.com', Age: 29, Profession: 'Wrestler', Address: '231 Main Street', PhoneNumber: '456-712-3045' },
// {Id: 103, FirstName: 'Jack', LastName: 'Adams', Email: 'jackadams123@pqr.com', Age: 25, Profession: 'Artist', Address: '312 Main Street', PhoneNumber: '433-711-7649' },
// {Id: 104, FirstName: 'Jin', LastName: 'Adams', Email: 'jinadams123@pqr.com', Age: 28, Profession: 'Actor', Address: '121 Main Street', PhoneNumber: '432-346-3889' },
// {Id: 105, FirstName: 'Jill', LastName: 'Adams', Email: 'jilladams123@pqr.com', Age: 21, Profession: 'Athelete', Address: '345 Main Street', PhoneNumber: '466-762-3789' },
// {Id: 106, FirstName: 'Joe', LastName: 'Adams', Email: 'joeadams123@pqr.com', Age: 19, Profession: 'Singer', Address: '567 Main Street', PhoneNumber: '423-722-4179' },
// {Id: 107, FirstName: 'Jonas', LastName: 'Adams', Email: 'jonasdams123@pqr.com', Age: 24, Profession: 'Builder', Address: '835 Main Street', PhoneNumber: '321-712-7089' },
// {Id: 108, FirstName: 'June', LastName: 'Adams', Email: 'juneadams123@pqr.com', Age: 26, Profession: 'Doctor', Address: '157 Main Street', PhoneNumber: '587-712-5689' },
// {Id: 109, FirstName: 'Jude', LastName: 'Adams', Email: 'judeadams123@pqr.com', Age: 22, Profession: 'Entrepreneur', Address: '139 Main Street', PhoneNumber: '569-712-3089' },
// {Id: 110, FirstName: 'Jim', LastName: 'Adams', Email: 'jimadams123@pqr.com', Age: 23, Profession: 'Engineer', Address: '443 Main Street', PhoneNumber: '698-712-3089' } ];

// //Iteration with normal for loop

// for (let i=0; i<data.length; i++){
//     console.log(data[i]);
// }

// // Iteration with for of loop

// for (let value of data){
//     console.log(value);
// }

// // Iteration with for in loop

// for (let index in data){
//     console.log(data[index]);
// }

// // Iteration with forEach function

// data.forEach((element) => {console.log(element);});

// let num1=25;
// let num2=50;
// let num3='25';

// console.log(num1===num2)
// console.log(num1===num3)
// console.log(num1==num3)
// console.log(num1!=num2)
// console.log(num1!=num3)
// console.log(num1!==num3)
// console.log(num1>num2)
// console.log(num1<num2)
// console.log(num1>=num2)
// console.log(num1>=num3)
// console.log(num1<=num3)
// console.log(num1>num3)

// let data=["abba",112,66,"apple",301,707,"madam"];
// //function starts here
// let getPalindrome = (arr) => {
//     let reverse,newarr=[];
//     for (value of arr){
//         reverse=String(value).split("").reverse().join("");
//         if (reverse==value){
//             newarr.push(value);
//         }
//     }
//     console.log(newarr);
// };
// getPalindrome(data);

// let numbers=[11,12,13,14,15,16];
// const odd = arr => {
//     let odd=[];
//     for (let i=0; i<arr.length; i++){
//     if (arr[i]%2!=0)
//     odd.push(arr[i])
//     }
//     console.log(odd);
//     };
// odd(numbers);

// let numbers=[21,32,43,51,25];
// let k=2;
// let rotateByKtimes=function (arr,n){
//     let i,j,newarr=[];
//     for (i=0;i<arr.length;i++){
//         i-n>=0 ? j=i-n : j=i-n+arr.length;
//         newarr.push(arr[j]);
//     }
//     console.log(newarr);
// }
// rotateByKtimes([21,32,43,51,25],2);

// let car={name: "Tata", model:"Sierra", type:"electric", year:2022};
// let normalForLoop = obj => {
//     let carProperties=[],carValues=[];
//     for (key in obj){
//     carProperties.push(key);
//     carValues.push(car[key]);
// }
// for(let i=0; i<carProperties.length; i++){
//     console.log(`${carProperties[i]}: ${carValues[i]}`);
// }
// }
// normalForLoop(car);

//using normal for loop

// // Question -
// // https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

// // Answer/Code -
// class movie {
//   constructor( title, studio, rating="PG" ){
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating;
//   }
//   static getPG(arr){
//   let PgMovies=[];
//   for (let i=0; i<arr.length; i++){
//   if (arr[i].rating=="PG")
//   PgMovies.push(arr[i]);
//   }
//   console.log(PgMovies);
// }
// }

// let movie1 = new movie( "Casino Royale", "Eon Productions", "PG-13" );
// let movie2 = new movie( "The Avengers", "Marvel Studios", "PG-13" );
// let movie3 = new movie ( "Fight Club", "20th Century Studios", "R" );
// let movie4 = new movie ( "Ice Age", "20th Century Studios" );
// let movie5 = new movie ( "Ice Age 2", "20th Century Studios", "PG" );

// let arrayOfMovies = [ movie1, movie2, movie3, movie4, movie5 ];

// movie.getPG(arrayOfMovies);

// //Output =>
// // [
// //   movie {
// //     title: 'Ice Age',
// //     studio: '20th Century Studios',
// //     rating: 'PG'
// //   },
// //   movie {
// //     title: 'Ice Age 2',
// //     studio: '20th Century Studios',
// //     rating: 'PG'
// //   }
// // ]

// // Question -
// // https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

// // Answer/Code -
// class Circle{
//   getRadius(radius){this.radius = radius;}
//   setRadius(){console.log(this.radius);}
//   getColor(color){this.color = String(color);}
//   setColor(){console.log(this.color);}
//   toString(){console.log(`Circle[ ${this.radius}, ${this.color}]`);}
//   getArea(){console.log((22/7)*this.radius**2);}
//   getCircumference(){console.log(2*(22/7)*this.radius);}
// }

// let cir = new Circle;
// cir.getRadius(21);
// cir.getColor("Blue");
// cir.setRadius();
// cir.setColor();
// cir.toString();
// cir.getArea();
// cir.getCircumference();

// // Output =>
// // 21
// // Blue
// // Circle[ 21, Blue]
// // 1386
// // 132

// // Question -
// // Write a “person” class to hold all the details.

// // Answer/Code -
// //super/parent class
// class person{
//     static companyName ="Amazon";
//     constructor(name,age,address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     getData() {
//         console.log(`
//         Name : ${this.name}
//         Age : ${this.age}
//         Address : ${this.address}`);
//     }
//     static getCompanyName() {
//         console.log(person.companyName);
//     }
// }
// //child class
// class employee extends person{
//     constructor(name,age,address,designation,salary) {
//         super(name,age,address)
//         this.designation = designation;
//         this.salary = salary;
//     }
//     getData() {
//         console.log(`
//         Name : ${this.name}
//         Age : ${this.age}
//         Address : ${this.address}
//         Designation : ${this.designation}
//         Salary : ${this.salary}`);
//     }
// }

// let person1 = new person( "Jack", 22, "345 main street" );
// let employee1 = new employee( "John", 35, "123 main street", "Senior Software Engineer", "$60000" );
// person1.getData();
// employee1.getData();
// person.getCompanyName();

// //Output =>
// //         Name : Jack
// //         Age : 22
// //         Address : 345 main street

// //         Name : John
// //         Age : 35
// //         Address : 123 main street
// //         Designation : Senior Software Engineer
// //         Salary : $60000
// // Amazon

// // Question -
// // Write a class to calculate uber price.

// // Answer/Code -

// class Uber{
//  getvalue(start,stop,distance){
//      this.start= start;
//      this.stop= stop;
//      this.distance=distance;
//  }
//  price(){
//      let bookingCharge=60,fare,perkm=12;
//        fare=bookingCharge+this.distance*perkm;
//        console.log(`
//        Pickup point: ${this.start}
//        Destination: ${this.stop}
//        Distance: ${this.distance}
//        Fare: Rs. ${fare}`);
//  }
// }
//  let ride=new Uber();
//   ride.getvalue("Borivili","Matunga",22);
//   ride.price();
//  let ride2=new Uber();
//   ride2.getvalue("Chembur","Malad",21);
//   ride2.price();

// //   Output =>

// // Pickup point: Borivili
// // Destination: Matunga
// // Distance: 22
// // Fare: Rs. 324

// // Pickup point: Chembur
// // Destination: Malad
// // Distance: 21
// // Fare: Rs. 312

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