const arr = [1,4,3,2];

function maxMin (arr){
  let result = []
  let max;
  let min;
  let arrSum;
  arr.sort((a,b)=> a - b);
  arrSum = arr.reduce((a,b)=> a+b)
  max = arrSum - arr[0];
  min = arrSum - Math.max.apply(null, arr);
  result[0]= min;
  result[1]= max;
  return result;
}
console.log(maxMin(arr))
