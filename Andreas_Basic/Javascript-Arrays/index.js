let arr = [2, "tall", 5]

let first = arr[0]
let last = arr[2]

arr.push("tekst")
last = arr.pop()
arr.sort()
arr.includes(4)

function loop(number) {
    for (let index = 0; index < number; index++) {
        console.log(index) 
    }
}
