let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}
if (mm < 10) {
    mm = '0' + mm;
}

console.log(dd + '/' + mm + '/' + yyyy)


sqTriangl = (a, b, c)=>{
    const p = (a + b + c)/2;
    console.log('Triangl S= ' + Math.sqrt(p * (p - a) * (p - b) * (p - c)));
};
sqTriangl(4, 5, 6);

stringRevers = (str)=>{
    let ar = str.split("").reverse().join("");
    console.log(ar);
};
stringRevers('abcde');

let text = 'outside';
function scopeFunc() {
    console.log(text);
}
scopeFunc();

closureFunc = ()=>{
    for(let i = 0; i < 4; i++){

        setTimeout(()=>{
            console.log(i)
        }, 1000)

    }
}
closureFunc();
