let colors= ["red","green","blue"];
let tracking = new Set([12,23,34]);
let data = new Map();
data.set("title","es6");
data.set("year",2009);

//==>  for(let value of colors.values())
for(let value of colors) {
    console.log(value)
}
//==>  for(let value of colors.values())
for(let value of tracking) {
    console.log(value)
}
//==>  for(let value of colors.entries())
for(let value of data) {
    console.log(value)
}