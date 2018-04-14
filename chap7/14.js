function *es6GeneratorWithReturn() {
    yield 1;
    return 2;
    yield 3;
}

let iterator = es6GeneratorWithReturn();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

