/**
 * Objective: write a function to give me the sum of all numbers
 * step1: declare a function
 * step2: call check whether the function is called properly
 * step3: set a parameter(s)
 * step4: pass the parameter(s),check whether parameter is passed in a proper format
 * step5: do the function tasks(step by step)
 * 
 */

function sumOfNumbers(numbers) {
    // console.log(numbers);
    let sum = 0
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const nums = [12, 45, 65, 70, 86, 90];
const sum = sumOfNumbers(nums);
console.log("Sum of numbers is:", sum);