// This is Rest Operator
function num (...rest: number[]): number[] {
    return rest;
}
const numArray = num(8, 7, 4, 4, 9, 2);
console.log(numArray, "\n");

function str (...rest: string[]): string[] {
    return rest;
}
const strArray = str("C++", "JavaScript", "TypeScript", "Python");
console.log(strArray, "\n");


// This is Spread Operator
const arr1 = [2, 4, 6, 8];
console.log(arr1);

const arr2 = [...arr1];
console.log(arr2);
arr2.pop();
console.log(arr1);
console.log(arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);