let user = {
    name: 'Akash',
    age: 27,
    email: 'akash@gmail.com',
    location: 'Aurangabad',
    blog: ['How to win friends', 'Influence people']
};

// console.log(user);

// console.log(user.name);

// user.age = 30;

// console.log(user.age);

// const key = 'location';

// console.log(user[key]);

// console.log(user['name']);

// user['name'] = 'Anand';

// console.log(user['name']);

// console.log(typeof (user));


//Add methods to objects/ object literals

let user2 = {
    name: 'Anand',
    age: 25,
    email: 'Anand@gmail.com',
    location: 'Aurangabad',
    blog: [
        { title: 'Fauda', likes: 100 },
        { title: 'The king:Eternal Monarch', likes: 200 }
    ],
    login: function () {
        console.log('User logged in');
    },
    logout: function () {
        console.log('User logged out');
    },
    logBlogs() {// Short hand version to declare a function
        //console.log(this.blog);
        console.log('The books are:')
        this.blog.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

// // user2.login();

// // user2.logout();

user2.logBlogs();


// const blogs = [
//     { title: 'Fauda', likes: 100 },
//     { title: 'The king:Eternal Monarch', likes: 200 }
// ];

//console.log(blogs);


//Math objects

// console.log(Math);

// console.log(Math.PI);

// console.log(Math.E);

// const area = 7.1;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// //Generate random numbers

// const randm = Math.random();
// console.log(Math.round(randm * 100));


//Primitive and reference types
// let scoreOne = 100;
// let scoreTwo = scoreOne;

// console.log(`ScoreOne: ${scoreOne} , scoreTwo: ${scoreTwo}`);

// scoreOne = 50;

// console.log(`ScoreOne: ${scoreOne} , scoreTwo: ${scoreTwo}`);

const UserOne = { name: "Akash", age: 27 };
const UserTwo = UserOne;

console.log(UserOne, UserTwo);

UserTwo.age = 40;
UserTwo.name = 'Parth';
console.log(UserOne, UserTwo);