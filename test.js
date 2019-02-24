
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x)

////



const add = (a) => {
    let sum = a;
    const func = (b) => {
      if (b) {
        sum += b;
        return func;
      } else {
        return sum;
      }
    };
    return func;
  };
  

  console.log(add(2)(3)())

  ////

  const add2 = (a) => {
    let sum = a;
    const func = (b) => {
      sum += b;
      return func;
    };
    func.valueOf = () => sum;
  return func;
  };
  console.log(add2(2)(3));

  /////

  const arr = [1, [1, 2, [3, 4]], [2, 4]];
  const flatten = (arr) => arr.reduce((flat, toFlatten) =>  flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
      console.log(flatten)