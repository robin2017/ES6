var fs = require("fs");
var thunkify = require('thunkify');
var readFileTrunk = thunkify(fs.readFile);
/**yield：将控制权移出generator*/
function *gen() {
    var r1 = yield readFileTrunk('config1.json');
    console.log(r1.toString());
    var r2 = yield readFileTrunk('config2.json');
    console.log(r2.toString());
}
/**
 * 回调函数:将控制权交还给generator
 * yield返回的就是一个函数，唯一的参数为回调函数
 * */
var g = gen();
var s1 = g.next();
s1.value(function (err, data) {
    var s2 = g.next(data);
    s2.value(function (err, data) {
        g.next(data)
    })
});



