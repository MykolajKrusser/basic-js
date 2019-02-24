fib = function(numMax){
  for(var fibArray = [0,1], i=0,j=1,k=0; k<numMax;i=j,j=x,k++ ){
      x=i+j;
      fibArray.push(x);
  }
  console.log(fibArray);
}

fib(10)

////


function fib2(n) {
  if (n <= 1) {
    return n;
  } else {
    return fib2(n - 1) + fib2(n - 2);
  }
}
console.log(fib2(6));
