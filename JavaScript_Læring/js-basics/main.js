
function testEqual(val, strictVal) {
    if (val === strictVal) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(5, '5'));