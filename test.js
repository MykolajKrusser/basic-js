"use strict"
function fn2(){
    console.log( this )
}
fn2();
/////
function update(obj){
    console.log(obj)
}
let a = {color : 'blue'};
update(a);

//////

function funk(){
    console.log(this === window)
}
funk()

/////

var obj = {
    get: function(){
        return this;
    }
};

console.log(obj.get() === obj)
/////

console.log( typeof this)

/////

var obj2 = {
    get: function(){
        console.log(this);
    }
};

obj2.get()

///////////

function foo(){
    console.log(this)
}
foo();

////////////

var foo3 = {
    get: function () {
            function fn(){
                 console.log(this)
            }
            fn();
        }
}
foo3.get();