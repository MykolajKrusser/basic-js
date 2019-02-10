"use strict";
var info1 = {
    'palnet':'Earth',
    'living':true
};
var info2 = {
    'palnet':'Earth',
    'living':true
};

console.log(info1===info2 || info1==info2);

/////////////

let a = 3;
let b = 2;
var z = (++b + a--)%5;
console.log(z);

//////////////////

let map = new Map([['1','one'],['1','one'],[1,'one']])
console.log(map);

////////////////


let arr = [1,2,3,4];
let x = 0;
for (let y = 0; y < arr.length; y++){
    if(y % 2 == 0){
        x += arr[y]
        console.log(arr[y])
    }
}
console.log(x)
