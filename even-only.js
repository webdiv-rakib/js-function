/**
 * create a function that will return only the even numbers
 * return the sum of even numbers
 */
function evenNumbersOnly(numbers) {

    // declaring empty array for evens numbers that we got
    const evens = [];
    for (const number of numbers) {
        // console.log(number);
        if (number % 2 === 0) {
            // console.log(number);
            // pushing even numbers that we got from condition
            evens.push(number);
        }
    }
    return evens;
}
// declare array:
const numbers = [5, 48, 4, 7, 9, 11, 12, 15, 18, 22,];

// calling function:
evenNumbersOnly(numbers);
// putting parameter into new variable
const evens = evenNumbersOnly(numbers);
console.log("Even numbers are: ", evens);

// Sum of even numbers
function sumOfEvenNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 0) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const sum = sumOfEvenNumbers(numbers);
console.log("Sum of even numbers: ", sum);