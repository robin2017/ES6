let p1 = new Promise(function (resolve,reject) {
    resolve(41)
})
let p2 = new Promise(function (resolve,reject) {
    resolve(42)
})
let p3 = new Promise(function (resolve,reject) {
    resolve(43)
})

let p4 = Promise.all([p1,p2,p3]);

p4.then(function (value) {
    console.log(Array.isArray(value))
    console.log(value[0])
    console.log(value[1])
    console.log(value[2])
})
