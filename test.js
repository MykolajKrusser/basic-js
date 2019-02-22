"use strict"
var time = setTimeout(update, 2000);
function update(){
    //console.log(typeof time)
    //console.log(time)
}
update();
/////

var x = 3;
var one = {
    x: 2,
    two: {
        x: 1,
        three: function() {
            //return this.x
        } 
    }
}
var go = one.two.three;

//console.log(one.two.three() + '' + go())

var arr = [2,5,2,4];
var xy = 1;
for(var i = 0; i < arr.length; i++){
    if(arr[i]%2 === 0){
        xy*=arr[i]
        //console.log(xy)
    }
}
//console.log(xy)

var first = [2,5,2,4];
var second = [...first, 6554];
//var another = first;
second.push(5);
//another.push(1111)
console.log(second)

/////

