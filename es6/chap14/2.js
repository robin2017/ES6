var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(new Error('FAIL'))
        console.log("p1====")
    }, 3000)
})

var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //将p1放在p2前面
        resolve(p1);
        console.log('p2====')
    }, 1000)
})

//等价，最好的写法
p2.then(result=>console.log(result))
    .catch(error=>console.log(error))
//等价
p2.then(result=>console.log(result))
    .then(null, error=>console.log(error))
//等价
p2.then(result=>console.log(result),
    error=>console.log(error))