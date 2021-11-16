let radius = 10;
const PI = 3.14;
console.log(radius);
console.log(PI);

//Maths Operations

console.log(10 / 2);

let result = radius % 3;
console.log(result);

let CircleArea = PI * radius ** 2;
console.log(CircleArea);

let likes = 10;
//likes = likes + 1;
likes = likes--;
likes = likes /= 2;
console.log(likes);

console.log(10 / "Akash");
console.log(5 * "Akash");

//Numbers concatination

let A = "My likes are " + likes + " likes";
console.log(A);

//Template string

const Title = "Best roads of 2021";
const author = "Akash";
const like = 100;

//For this we write string between ` `
const B = `The blog called ${Title} by ${author} has ${like} likes`;
console.log(B);

//creating html tempaltes

let html = `
    <h2>${Title}</h2>
    <p>By ${author}</p>
    <span>and has ${like} likes</span>
`;

console.log(html);