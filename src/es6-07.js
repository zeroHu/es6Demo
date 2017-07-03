let newarr = [
    { first: 'hu', last: 'jianxia' },
    { first: 'yang', last: 'lei' }
];


let newjson = {
    money: 10,
    year: 20,
    name: 'mike'
};

newarr.map((item) => {
    item.first += '111'
    item.last += '333';
});

console.log(newarr)
