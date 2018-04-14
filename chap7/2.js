var map = Object.create(null);
var key = {};
map[5] = "foo";
map[key] = "bar";
console.log(map["5"]);
console.log(map["[object Object]"]);
