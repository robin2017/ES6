function *es6Generator(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}
//迭代器对象 ==> 内部状态指针对象
let iterator = es6Generator([1, 2, 3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
