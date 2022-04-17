//Ejemplo numero 1 de Callback

function sum (a , b) {
    return a + b;
}

function calc (a,b,callback) {
    return callback (a, b);
}

console.log(calc(5,10,sum));

//Ejemplo numero 2 de Callback

function date(callback) {
    console.log (new Date);
    setTimeout(function () {
        let date = new Date;
        callback(date);
    }, 3000)
}

function printDate (dateNow) {
    console.log(dateNow);
}

date(printDate);