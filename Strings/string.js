console.log('Akash Vaidya');

let email = "Akash@gmail.com";

console.log(email);

// string concatination
let firstName = "Akash";
let LastName = "Vaidya";
let FullName = firstName + ' ' + LastName;
console.log(FullName);
console.log(FullName[0]);

//string length
console.log(FullName.length);

//string methods
console.log(FullName.toUpperCase());
let lower = FullName.toUpperCase();
console.log(lower);

//indexof
let index = email.indexOf('@');
console.log(email.indexOf('@'));
console.log(index);

//lastindexof
let last = email.lastIndexOf('a');
console.log(last);

//slice 
let result = email.slice(0, 9); //slice(from,to)
console.log(result);

let result1 = email.substr(0, 10);//substr(from position, no of cgaracters we want)
console.log(result1);

//replace
let result2 = email.replace('k', 'H');
console.log(result2);

let result3 = email.replace('A', 'L');
console.log(result3);