let bool = [true, false, 'true', 'false'];
console.log(bool);

let email = "Akash@gmail.com";
let names = ['Akash', 'Anand'];
let result = email.includes('*');
let results = names.includes('Parth');
// console.log(result);
// console.log(results);

let age = 27;

// console.log(age != '27');
// console.log(age != 27);
// console.log(age != 26);
// console.log(age >= 22);
// console.log(age === '27');// check value as well as datatype
// console.log(age !== '27');

let name = "Akash";
// console.log(name == 'Akash');
// console.log(name > 'Dhananjay');

let num = '100';
//console.log(typeof (num));
num = Number(num);//convert string into number
// console.log(typeof (num));
// console.log(num + 1);

var namess = 'Akash';
var n = Number(namess);
//console.log(n);

let varr = 100;
varr = String(varr);
//console.log(varr, typeof (varr));

let tgurg = Boolean('100');
//console.log(tgurg, typeof (tgurg));

let b = Boolean(0);// in type conversion 0 is falsy and all other numbers are truthy
console.log(b, typeof (b));

let w = Boolean("Akash");
console.log(w, typeof (w));