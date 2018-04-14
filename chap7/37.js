var fs = require("fs");
var readFile = function (filename) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, function (err, data) {
            if (err) return reject(err);
            resolve(data)
        })
    })
};
/**await：将控制权移出async*/
var asyncReadFile = async function () {
    var r1 = await readFile('config1.json');
    console.log(r1.toString());
    var r2 = await readFile('config2.json');
    console.log(r2.toString());
};

asyncReadFile();





