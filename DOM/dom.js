// const para = document.querySelector('.error');
// console.log(para);

// const div = document.querySelector('div.error');
// console.log(div);

// const a = document.querySelector('body > h4');
// console.log(a);

// const b = document.querySelectorAll('p');
// b.forEach(para => {
//     console.log(para);
// });
// console.log(b);

// const error = document.querySelectorAll('.error');
// console.log(error);


// // get elements bt tag name

// const title = document.getElementById('title');
// console.log(title);

// const e = document.getElementsByClassName('error');
// console.log(e);

// const tag = document.getElementsByTagName('p');
// console.log(tag[2]);

// const select = document.querySelector('p');
// console.log(select.innerText);

// select.innerText = 'DOM';

// const all = document.querySelectorAll('p');
// all.forEach(para => {
//     para.innerText += 'Go to hell';
//     console.log(para.innerText);
// });

const content = document.querySelector('.error');
// //console.log(content.innerHTML);

// content.innerHTML += '<h2>This is H2</h2>'

const people = ['Akash', 'Anand', 'Salil'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'http://sc.jmkinfosoft.com');

const message = document.querySelector('p');

message.setAttribute('class', 'success');

message.setAttribute('style', 'color:red');

console.log(message.getAttribute('class'));


