function add(...arg) {
  console.log(arg);
  console.log(arg.sort((a, b) => { return a - b }));
  for (var value of arg) {
    console.log(value);
  }
}
add(1, 10, 5, 2, 3, 4)

const newsortby = (big,small) => { return big - small; }
let newarr = [1, 10, 3, 9, 2].sort(newsortby);
console.log(newarr)