let p1 = Promise.resolve(41)

let p2 = new Promise(function (resolve, reject) {
    resolve(42)
})
let p3 = new Promise(function (resolve, reject) {
    resolve(43)
})

let p4 = Promise.race([p1, p2, p3]);

p4.then(function (value) {
    console.log(value)
})
