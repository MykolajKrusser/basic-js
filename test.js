let arr = [1,2,3,4,5];
let sum = 0;
for(let i = 0; i < arr.length; i++){
  sum += arr[i];
}

let sum2 = arr.reduce((item, acc) => item + acc)
console.log(sum + ' ' + sum2)


const ary = [0,2,1,6,4,5,7,8,10,9] // 1 number is missing

function finder(ary){
  let num = null;
  const arr = ary.sort(function(a, b){return a - b})
  for(let i = 0; i < arr.length; i++){
    if ((arr[i+1] - arr[i]) > 1){
      num = arr[i] + 1;
    }
  }
  return num;
}

console.log(finder(ary))