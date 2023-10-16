//Functions

//Name function
function add(num1 : number, num2 : number) : number{
    return num1 + num2;
}
console.log(add(2,3))

//Arrow function
const sub = (num1 : number, num2 : number ) : number => num1 - num2;
console.log(sub(2,3))

//Function expression
const mult = function(num1 : number, num2 : number) : number {
    return num1 * num2;
}
console.log(mult(2,3))

//Optional Parameter
function add2(num1 : number, num2 : number, num3? : number) : number{
    return num3? num1 + num2 + num3 : num1 + num2;
}
console.log(add2(2,3, 5))

//Required Parameter (if not given will use default (10))
const sub2 = (num1 : number, num2 : number, num3=10 ) : number => num1 - num2 - num3;
console.log(sub2(2,3,5))

//Rest Parameter
const mult2 = function(num1 : number, num2 : number) : number {
    return num1 * num2
}
console.log(mult2(2,3))

function add3(num1 : number, num2 : number, ...num3: number[]) : number{
    return num1 + num2 + num3.reduce((a, b) => a + b, 0)
}
let numbers = [1,2,3,4,5]
console.log(add3(2,3, ...numbers))

//Generic Function
function getItems<T>(items: T[]) : T[]{
    return new Array<T>().concat(items)
}

let concatResult = getItems<number>([1,2,3,4,5]);

let concatString = getItems<string>(['a','b', 'c', 'd', 'e' ])

function getItems2<T extends any[]>(items: T): T {
    return items;
}

//Con un array tipo tuple
let mixedTypes: [number, string, boolean] = [1, "hello", true];
let result3 = getItems2(mixedTypes);

console.log(result3);