/*
let f;

if(true){
  let i = 1;
  f = ()=>{
    console.log(i)
  }

}
console.dir(f);
f();
*/

let f = ()=>{
  let i = 1;
  let j = 2;
  return ()=>{
    console.log(i)
    console.log(j)
  }
}
console.dir(f())

for(var i = 0; i < 3; i++){
  ((i)=>{
      setTimeout (()=>{
      console.log(i)
    }, 1000)
  })(i);
  
}