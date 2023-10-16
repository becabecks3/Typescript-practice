"use strict";
// Data Types
//String
let lname;
lname = 'Rebeca';
let newName = lname.toUpperCase();
console.log(newName);
//Number
let age;
age = 25;
let dob = '25';
let result = parseInt(dob);
//Boolean
let isValid = false;
console.log(isValid);
//Array
let empList;
empList = ['Rebeca', 'Juan', 'Maria'];
let numList;
numList = [1, 2, 3, 4, 5];
let newNym = numList[0];
let result2 = numList.filter((num) => num > 2);
let num = numList.find((num) => num === 2);
let sum = numList.reduce((acc, num) => acc + num);
console.log(result2);
console.log(num);
console.log(sum);
let c = 2 /* Color.Blue */;
//Tuple (arrays con diferentes datatypes)
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
swapNums[0];
swapNums[1];
//Any (best to avoid)
let department;
department = 'IT';
department = 10;
//Void
//Never
//Functions
