"use strict"
var Employee = {
    company: 'xyz'
}
var emp = Object.create(Employee);
delete emp.company;
console.log(emp)
//////

function Person(){
    console.log(this)
}

var person = new Person();

/////


function foo(){
    this.baz = 'baz';
    console.log(this.bar, baz)
}
var bar = 'bar';
new foo()

///

