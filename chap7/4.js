let set = new Set();
let key1 = {};
let key2 = {};
set.add("5");
set.add(5);
set.add(key1);
set.add(key2);
let arr = [...set]
console.log(arr)
