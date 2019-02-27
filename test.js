function evenize(a){
  if(a % 2 == 0)
  return a;
  return a+1;
}

var a = evenize(13)
document.write(a)


//////////



var arr = [1,3,4,2];
var count = 0;
for(var x = 0; x < arr.length; x++){
  x = arr[x];
  count++
  console.log(x)
}
console.log(count);

/////



let mySet = new Set();
mySet.add(8).add(7).add(1);
for(let v of mySet.values()){
  console.log(mySet.has(1) + v);
  break
}


//////
 var b = 10;
 var s = 20;
 console.log(b + s % 3)


 //////

 var first = function(a,b){
   return a + b
 };
 var second = first.bind(null, 'learn');
 console.log(second('solo'))

