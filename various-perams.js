/**
 * for a given string tell me wether it has even numbers or not
 * 
 */
function evenSizedString(str) {
    const size = str.length;
    console.log(str, size);

    if (size % 2 === 0) {
        console.log("Even Size");
        return true;
    }
    else {
        console.log("Odd Size");
        return false;
    }
}
// evenSizedString('Abu Nayim Mohammad Rakib');

// double or triple
function doubleOrTriple(number, doDouble) {
    if (doDouble) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(numbers) {
    const len = numbers.length;
    return len;
}
// numberOfElements([12, 14, 47, 25, 21, 33]);

function getAge(person) {
    const age = person.age;
    return age;
}
getAge([26]);