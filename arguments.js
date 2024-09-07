function doubleIt(number) {
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log("I will call the function");
doubleIt(4);
console.log("-------------------");
doubleIt(8);
console.log("-------------------");
doubleIt(2);
console.log("-------------------");
doubleIt(101);

// also can call variable inside function
console.log("-------------------");
const money = 547;
doubleIt(money);