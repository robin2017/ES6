var promise1 = new Promise(function (resolve, reject) {
    try {
        throw new Error("test")
    } catch (e) {
        reject(e)
    }
})

var promise2 = new Promise(function (resolve, reject) {
    //等价
    reject(new Error("test"))
})


