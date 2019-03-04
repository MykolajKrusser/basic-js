let arr = [
  {
    num: 3,
    str: 'apple'
  },
  {
    num: 4,
    str: 'cabbage'
  },
  {
    num: 7,
    str: 'banana'
  }
];

arr.sort(function(val1, val2){
  if(val1.num > val2.num){
    return -1;
  }else{
    return 1;
  };
});

let arr2 = [...arr];
arr2.sort(function(val1, val2){
  if(val1.str < val2.str){
    return -1;
  }else{
    return 1;
  };
})
console.log(arr)
console.log(arr2)