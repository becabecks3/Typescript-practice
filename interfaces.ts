// Principalmente para definir la estructura y los contratos de los objetivos y clases

export interface User {
    name: string;
    age?: number;
    // age? to make a property optional
    id: number;
    email: string;
}

class People {
    data : User;
    constructor(data: User){
        this.data = data;
    }
}

let juan = new People({
    name: 'john', 
    age: 2, 
    id: 5, 
    email: 'emaill@email.com'
})

// let user : User = {
//     name: 'john',
//     id: 5, 
//     email: 'emaill@email.com'
// }

let {name : userName, email} : User = {
    name: 'john',
    id: 5, 
    email: 'emaill@email.com'
} // Object destructuring

// userName = ''

// user.name;
// user.email;

interface Employees extends User {
    salary: number;
}

let employee : Employees = {name: 'John', id: 2, email: "", salary: 1000} // extend interface

export interface login {
    login() : User;
}

//Array destructuring
let [user1, user2, ...restUsers] : User[] = [
    {name: 'John', id: 1, email: ""},
    {name: 'John2', id: 2, email: ""},
    {name: 'John3', id: 3, email: ""},
    {name: 'John4', id: 4, email: ""},
]

console.log(user1)
console.log(user2)
console.log(restUsers)

// let result = restUsers.filter(user => user.id > 3)

