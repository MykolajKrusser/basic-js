function squareDigits(num){
  let arr = num.toString().split('');
  for(let i = 0; i < arr.length; i++){
    arr[i] = Math.pow(arr[i], 2)
  };
  return Number(arr.join(''));
}
console.log(squareDigits(124324))
