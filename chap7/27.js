var fs= require("fs");
var filename ="config.json";
var callback = function (err,result) {
    console.log(result)
};

//正常版本的readFile(多参数版本)
fs.readFile(filename,'utf-8',callback);

//thunk本身是一个函数
var thunk = function (filename) {
    //返回也是一个函数，但是这个函数只有一个回调函数的行参
    return function (callback) {
        return fs.readFile(filename,'utf-8',callback);
    }
};
var readFileThunk = thunk(filename);
//thunk版本的readFile(单参数版本，仅仅回调函数)
readFileThunk(callback);




