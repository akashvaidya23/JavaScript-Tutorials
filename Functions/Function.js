function greet() {
    console.log("Hello everyone");
}

greet();

//Function expression
const speak = function () {
    console.log("Good Day");
};

speak();

const a = function (name) {
    console.log(`Good day ${name}`);
}

a('Akash');

const b = function (name = "Akash", Time = "Night") {
    console.log(`Good ${Time} ${name}`);
}

b('Anand', 'Evening');
b();

// returning values

const areaCircle = function (radius) {
    return 3.14 * radius ** 2;
};

const c = areaCircle(10);
console.log(c);

//Arrow function
const calcArea = (radius) => {
    return 3.14 * radius ** 2;
}

const area = calcArea(5);
console.log(`Area is ${area}`);

//Short hand version of arrow function
const calcA = radius => 3.14 * radius ** 2;
const ar = calcA(20);
console.log(`Area is ${ar}`);

const wish = () => "Hi There";
const d = wish()
console.log(d);

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total = total + products[i] + products[i] * tax;
    }
    return total;
};

const result = bill([10, 20, 30, 40, 50], 0.1);
console.log(result);

const name1 = "Akash";

//Functions 

const vaidya = () => "Hello";
console.log(vaidya());

//Methods
let output = name1.toUpperCase();
console.log(output);

//Callback
const fxn = (callbackFunc) => {
    let value = 100;
    callbackFunc(value);
};
//value must be passed in place of callbackFunc

fxn(value => {
    console.log(value);
});

//Foreach 
// Callback function is used here as persons to get all the elements in an array
let people = ['Akash', 'Salil', 'Rasika', 'Anand'];

// const logP = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }
// people.forEach(logP);

// people.forEach((person, index) => {
//     console.log(person, index);
// });

let html = '';

const ul = document.querySelector(".people");

people.forEach((person) => {
    html += `<li style="color:red">${person}</li>`
});

console.log(html);
ul.innerHTML = html;