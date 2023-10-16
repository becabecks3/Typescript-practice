// Creating classes, properties and construtor
import { login, User } from './interfaces'

class Employee implements login {
    #id : number;
    // #id: --> private
    name: string;
    // protected name: --> I's use to extend a particular class
    address: string;

    get empId(): number{
        return this.#id;
    } // get the value

    set empId(id: number){
        this.#id = id;
    } // asign de the value

    static getEmployeeCount() : number {
        return 50;
    }
    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.name = name;
        this.#id = id;
        
    }
    login() : User {
        return {name: 'John', id: 2, email: ""}
    }

    getNameWithAddress() : string{
        return `${this.name} stays at ${this.address}` 
    } // Class Methods
}

let john = new Employee(1, 'John',  'Highway 71' ); // Instansce of a class

john.empId = 100; // setter
console.log(john.empId); // getter


Employee.getEmployeeCount(); // You can call this method without creating a new instance

//Member visibility
class Manager extends Employee {
    constructor(id: number, name: string, address: string){
        super(id, name, address)
    }
    getNameWithAddress(): string {
        return `${this.name} is manager at ${this.address}`
    }
}

let mike = new Manager(2, 'Mike', 'Cherise Drive');

let address = john.getNameWithAddress();
// john.id = 1
// john.name = 'John';
// john.address = 'Highway 71'

console.log(john);
console.log(address);
console.log(mike.getNameWithAddress());


