
function getValue() {
    return 5;
}

function add(first,second=getValue()) {

    return first+second;
}

console.log(add(1,1))
console.log(add(1))
