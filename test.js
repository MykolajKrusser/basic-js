let nums = [1, 2, 2, 3]; // [1,2,3]
console.log([...new Set(nums)]);


let f = ()=>{
  {
    (function () {
      let l = 'let';
      var v = 'var';
    })();
  };
  //console.log(v);
  //console.log(l)

}
f();

console.log(5 < 6 < 7);
console.log(7 > 6 > 5);

let b  = function() { return arguments};
console.log(b('hi'))

let a  = (...n) => { return n};
console.log(a('hi'))

let x = function(){
  return{
    messege: 'hi'
  }
}
console.log(x())


let profile = {
  name : 'qwer'
}

Object.defineProperty( profile, 'age', {
  value: 3,
  writable: false
})
profile.name = 'asaaa';
profile.age = 5;
console.log(profile);

console.log(Math.max())