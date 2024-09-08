// 1no method
function add(price1, price2) {
    const total = price1 + price2;
    return total;
}
const bill = add(145, 215);
console.log("Total Bill:", bill);

// shortcut method
function add2(price1, price2) {
    return price1 + price2;
}
const bill2 = add2(100, 50);
console.log(bill2);

function doMath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multi = sum * diff;
    const result = multi / 2;
    return sum;
}
const totalMath = doMath(70, 15);
console.log(totalMath);

// even numbers find out true or false
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(5));
console.log(isEven(110));

// odd numbers find out true or false
function isOdd(numbers) {
    if (numbers % 2 !== 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isOdd(5));
console.log(isOdd(10));
