
function testSize(num) {

    if (num < 5) {
        return 'Tiny';
    }else if (num < 10) {
        return 'Small';
    }else if (num < 15) {
        return 'Medium';
    }else if (num < 20) {
        return 'Large';
    }else if (num < 25) {
        return 'Huge';
    }else {
        return 'Humongous';
    }

    return "Change Me";
}

console.log(testSize(23));