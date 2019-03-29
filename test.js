function squareDigits(num){
  let arr = num.toString().split('');
  for(let i = 0; i < arr.length; i++){
    arr[i] = Math.pow(arr[i], 2)
  };
  return Number(arr.join(''));
}
//console.log(squareDigits(124324))


function expandedForm(num) {
  let nums = num
  console.log(nums.toString().split("").reverse().map((a, i) => a * Math.pow(10 , i)).filter(a => a > 0).reverse().join(" + "))
}

expandedForm(14258);