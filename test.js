function findNextSquare(sq) {
    let num = Math.sqrt(sq);
    function isInteger(number) {
        return (number ^ 0) === number;
      }
    if(isInteger(num)){
        return Math.pow((num + 1), 2)
    } else{
        return -1;
         // Return the next square if sq if a perfect square, -1 otherwise
    }
  
}

console.log(findNextSquare(4));