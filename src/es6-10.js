function add(...arg) {
    console.log(arg);
    console.log(arg.sort((a, b) => { return a - b }));
    for (var value of arg) {
        console.log(value);
    }
}
add(1, 10, 5, 2, 3, 4)


var arr = [1, 10, 9, 120, 38, 12]

function sortby(a, b) {
    return a - b;
}


var newarr = arr.sort(sortby)
console.log(newarr);
const sortby = (a,b) => a-b;
let newarr = [1,10,3,9,2].sort(sortby)
console.log(newarr)
