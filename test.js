function partlist(arr) {
  let result = [];
  
  for(let i = 0; i < arr.length; i++){
    let subarray = [];
    if(i === 0){
      return result
    }
    subarray = [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]
    return result.concat([subarray])
  }
  
}

console.log(partlist(["I", "wish", "I", "hadn't", "come"]))
