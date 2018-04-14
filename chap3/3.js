let fs = require("fs")

//将回调模式封装成promise模式
function readFile(filename) {
    //构造函数内为执行期executor
    return new Promise(function (resolve,reject) {
        fs.readFile(filename,function (err,content) {
            if(err){
                reject(err);
                return;
            }
            resolve(content)
        });
    });
}

let promise = readFile("example.txt");

promise.then(function (contents) {
    console.log(contents)
},function (err) {
    console.log(err.message)
})