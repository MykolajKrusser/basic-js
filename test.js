const x = [1,2,3];
x[-1] = -1;
x[-4] = 4;
console.log(x[x.indexOf(10000)]);
console.log(x)
/////

const ary = [1,2,3,15,30,5,45,7];
console.log(ary.sort((a, b) => {
  return a > b;
}))

/////

let i = Number.MIN_VALUE;
console.log(i)
console.log(i * i) // 0
console.log(i + 1) // +1;
console.log(i - 1) // -1;
console.log(i / i) // 1

////

let y = [1,2,3] + [4,5,6];
let yy = [...[1,2,3], ...[4,5,6]]
console.log(y)
console.log(yy)


/////
console.log(555555555555555555);
console.log(Number.MAX_SAFE_INTEGER);
/////

(function(){
  let a = b = 100;
})()
console.log(b);
//console.log(a);

console.log(NaN === NaN)
console.log(typeof NaN)
