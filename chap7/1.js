//对象属性模拟set
var set = Object.create(null);
set.foo = true
if (set.foo) {
    console.log("set中存在foo对象")
}

//对象属性模拟map
var map = Object.create(null);
map.foo = "bar";
var value = map.foo;
console.log("map中foo键的值为:" + value);