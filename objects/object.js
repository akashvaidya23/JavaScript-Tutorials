let a = ['Akash', 'Anand', 'Dhananjay'];
a[1] = 'Parth';
console.log(a[1]);

let ages = [27, 24, 18];
console.log(ages[2]);

let mix = ['Akash', 23, 2.6];
console.log(mix);

//Array methods
console.log(a.length);//length menthos

let b = a.join('_');// join all array element with specified symbol
console.log(b);

let index = a.indexOf('Dhananjay');
console.log(index);

let c = a.concat(['Salil', 'Rasika']);
console.log(c);

let d = a.push('Supriya');// d returns the length of new array. It changes the value of the array so called destructive method
console.log(a);
console.log(d);// 4 in this case

let e = a.pop();
console.log(e);

var r = null;
console.log(r, r + 3);