"use strict"
console.log(new String("This is a string") instanceof String);
console.log("This is a string" instanceof String);
console.log(typeof ([] + [] + 'foo'.split('')));
console.log(NaN === NaN);


var x = 0;
function foo() {
    return foo;
}
var bar = new new foo;
console.log(bar.x);


var bax = 1,
    fooz = {};

fooz: {
    bax: 2;
    baz: ++bar;
};
console.log(fooz.baz + fooz.bax + bax);

var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr);

var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
console.log(arr.length);



function foof(a, b) {
    arguments[1] = 2;
    console.log(b);
}
foof(1);
