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
            return this.x
        } 
    }
}
var go = one.two.three;

console.log(one.two.three() + '' + go())