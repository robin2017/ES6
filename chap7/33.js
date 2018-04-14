var fs = require("fs");
var thunkify = require('thunkify');
var readFileTrunk = thunkify(fs.readFile);
/**yield：将控制权移出generator*/
function *generator() {
    var r1 = yield readFileTrunk('config1.json');
    console.log(r1.toString());
    var r2 = yield readFileTrunk('config2.json');
    console.log(r2.toString());
}

/**
 * co执行器
 * */
var co = require("co");

co(generator).then(function () {
    console.log('ending')
});




