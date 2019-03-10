String.prototype.toJadenCase = function () {
    strArray = this.split('');
    if(strArray.length === 0){
        return null
    }else{
        for(let i = 0; i < strArray.length; i++){
            if(strArray[i] === ' '){
                strArray[i + 1]= strArray[i + 1].toUpperCase();
            }
        }
        strArray[0] = strArray[0].toUpperCase()
        return strArray.join('');
    }
};
var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())
