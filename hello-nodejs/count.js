var counter = function (arr) {
    return "There are " + arr.length + " elements in the array";
}

// console.log(counter(["ruby","nodejs","react"]));

var adder = function (a, b) {
    return `the sum of the 2 numbers is ${a+b}`;
}

var pi = 3.14;

//把接口暴露出去
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}