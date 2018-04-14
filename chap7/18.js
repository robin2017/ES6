/**part1：类似于回调函数*/
//参数为生成器函数，代表执行的任务
function run(taskDef) {
    let task = taskDef();
    let result = task.next();
    function step() {
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function (err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }
                    result = task.next(data);
                    step();
                })
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }
    step();
}
/**part2*/
let fs = require("fs");
function readFile(filename) {
    return function (callback) {
        fs.readFile(filename, 'utf-8', callback)
    }
}
/**
 * part3：定义生成器
 * 异步的readFile()操作和同步代码完全一样执行
 * */
function *generator() {
    let contents = yield readFile("config.json")
    console.log(contents)
}
/**part4:执行*/
run(generator)