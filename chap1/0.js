function getValue(condition) {
    if (condition) {
        let value = "blue";
        console.log(value)
    } else {
        //ReferenceError: value is not defined
        console.log(value)
    }
    //ReferenceError: value is not defined
    console.log(value)
}

getValue(false)