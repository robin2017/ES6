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
 * 自动执行器
 *next就是一个递归函数
 * */
function run(fn) {
    var gen = fn();
    function next(err, data) {
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }
    next();
}
run(gen);


