const fxn = (callbackFunc) => {
    let a = 100;
    callbackFunc(a);
}

fxn(a => {
    console.log(a)
});

const number = (a) => {
    console.log(a);
};

number(10);