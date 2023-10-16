"use strict";
// Principalmente para definir la estructura y los contratos de los objetivos y clases
Object.defineProperty(exports, "__esModule", { value: true });
class People {
    constructor(data) {
        this.data = data;
    }
}
let juan = new People({
    name: 'john',
    age: 2,
    id: 5,
    email: 'emaill@email.com'
});
// let user : User = {
//     name: 'john',
//     id: 5, 
//     email: 'emaill@email.com'
// }
let { name: userName, email } = {
    name: 'john',
    id: 5,
    email: 'emaill@email.com'
}; // Object destructuring
let employee = { name: 'John', id: 2, email: "", salary: 1000 }; // extend interface
//Array destructuring
let [user1, user2, ...restUsers] = [
    { name: 'John', id: 1, email: "" },
    { name: 'John2', id: 2, email: "" },
    { name: 'John3', id: 3, email: "" },
    { name: 'John4', id: 4, email: "" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
// let result = restUsers.filter(user => user.id > 3)
