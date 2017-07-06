// 数组去重
const needPartKong = (arr) => Array.from(new Set(arr));
let needarr = [1, 2, 3, 2, 1];
console.log(needPartKong(needarr));
console.log(needarr);
console.log('needarr', needarr);


// 数组去重
let congarr = [1, 3, 2, 3, 2, 34, 6];
congarr = [...new Set(congarr)];
console.log('congarr', congarr)


// 数组去空   用到了filter
let kongarr = [, 20, undefined, null, 3, 1, 10];
let qukongqrr = kongarr.filter((arr) => arr); //去空
console.log('qukongqrr', qukongqrr)


// fitler
let filterarr = ['abc', 'ddds', 'hellowrold'];
console.log(filterarr.filter((str) => str.length > 5))


// map
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
    return x * 2;
});
console.log('doubles',doubles)
