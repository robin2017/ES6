function *es6GeneratorWithParams() {
    let first = yield 1;
    let second = yield first + 2;
    yield second + 3;
}

let iterator = es6GeneratorWithParams();
console.log(iterator.next())
console.log(iterator.next(4))
console.log(iterator.next(5))
console.log(iterator.next())