/**part1:回调函数*/
function callback(err, data) {
    console.log(data)
}
/**part2*/
let fs = require("fs");
fs.readFile('config.json', 'utf8', callback);

