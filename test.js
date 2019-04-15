function containAllRots(strng, arr) {
  for (let i = 0; i < strng.length; i++){
    console.log(strng.slice(i) + strng.slice(0, i))
    if(arr.indexOf(strng.slice(i) + strng.slice(0, i)) === -1){
      return false;
    };
  };
  return true;
}

console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))