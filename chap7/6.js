let map = new Map(),
    key = {};
map.set("title", "es6");
map.set("count", 0);
map.set(key, "value");
map.set(5, "five")
console.log(map.get("count")); //0
console.log(map.get("count2")); //undefined
console.log(map.get(key)); //value
console.log(map.get(5)) //five


