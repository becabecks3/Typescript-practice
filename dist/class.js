"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    } // get the value
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    } // asign de the value
    static getEmployeeCount() {
        return 50;
    }
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        this.address = address;
        this.name = name;
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    login() {
        return { name: 'John', id: 2, email: "" };
    }
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    } // Class Methods
}
_Employee_id = new WeakMap();
let john = new Employee(1, 'John', 'Highway 71'); // Instansce of a class
john.empId = 100; // setter
console.log(john.empId); // getter
Employee.getEmployeeCount(); // You can call this method without creating a new instance
//Member visibility
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return `${this.name} is manager at ${this.address}`;
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
