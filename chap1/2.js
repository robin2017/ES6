function getValue(condition) {
    var value;
    if (condition) {
        value = "blue";
        console.log(value)
    } else {
        //undefined
        console.log(value)
    }
    //undefined
    console.log(value)
}

getValue(false)