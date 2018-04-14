//thunk函数转化器
var thunkify = require('thunkify');
var fs= require("fs");
var filename ="config.json";
var callback = function (err,result) {
    console.log(result)
};

//输入：带有回调函数参数的函数
//输出：只有一个回调函数参数的函数
var readFileTrunk = thunkify(fs.readFile);
readFileTrunk(filename,'utf-8')(callback);