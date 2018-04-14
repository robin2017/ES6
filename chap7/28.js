var fs= require("fs");
var filename ="config.json";
var callback = function (err,result) {
    console.log(result)
};

//es6 trunk函数转化器 （通用）
const trunk = function (fn) {
    return function (...args) {
        return function (callback) {
            return fn.call(this,...args,callback)
        }
    }
};
//输入：带有回调函数参数的函数
//输出：只有一个回调函数参数的函数
var readFileTrunk = trunk(fs.readFile);
readFileTrunk(filename,'utf-8')(callback);
