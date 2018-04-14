var fs = require("fs");
var readFile  = function (filename) {
    return new Promise(function (resolve,reject) {
        fs.readFile(filename,function (err,data) {
            if(err) return reject(err);
            resolve(data)
        })
    })
};
/**yield：将控制权移出generator*/
function *gen() {
    var r1 = yield readFile('config1.json');
    console.log(r1.toString());
    var r2 = yield readFile('config2.json');
    console.log(r2.toString());
}
/**
 * 自动执行器
 * next就是一个递归函数
 * */
function run(gen) {
    var g = gen();
    function next(data) {
        var result = g.next(data);
        if(result.done)return result.value;
        result.value.then(function (data) {
            next(data);
        })
    }
    next();
}
run(gen);


