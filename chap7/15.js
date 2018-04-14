function *es6Generator1() {
    yield 1;
    yield 2;
}

function *es6Generator2() {
    yield "red";
    yield "yellow";
}

function *CombinedGenerator() {
    yield *es6Generator1();
    yield *es6Generator2();
    yield "end";
}

let iterator = CombinedGenerator();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
