function fn() {
    console.log('fn');
}

function fn1(fn) {
    console.log('fn1');
    // fn && setTimeout(() => {
    //     fn();
    // })
    return new Promise(function(resolve, reject) {
        if (typeof fn === 'function') {
            resolve(fn);
        } else {
            reject("TypeError:" + fn + "no a function.");
        }
    });
}

function fn2(fn) {
    console.log('fn2');
    // fn && setTimeout(() => {
    //     fn();
    // })
    return new Promise(function(resolve, reject) {
        if (typeof fn === 'function') {
            resolve(fn);
        } else {
            reject("TypeError:" + fn + "no a function.");
        }
    });
}

function fn3(fn) {
    console.log('fn3');
    // fn && setTimeout(() => {
    //     fn();
    // })
    return new Promise(function(resolve, reject) {
        if (typeof fn === 'function') {
            resolve(fn);
        } else {
            reject("TypeError:" + fn + "no a function.");
        }
    });
}

// fn1(fn2(fn3(fn)));

fn1(fn)
    .then(function(fn) {
        return fn2(fn);
    })
    .then(function(fn) {
        return fn3(fn);
    })
    .then(function(fn) {
        fn();
    });
