let set = new WeakSet(),
    key = {};
set.add(key);
console.log(set.has(key)); //true
key = null;
console.log(set.has(key)); //false


