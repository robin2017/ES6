let arr = [1,2,3];
let set = new Set(["he","hi"]);
let map = new Map([["name","robin"],["age",27]]);
let result1 = [...arr,...set,...map];
console.log(result1)