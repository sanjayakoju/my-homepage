var z = 10;
function outer(a, b) {
    console.log(`1: ${x} ${this}`); // 1 undefined window{...}
    var z = 3;
    const k = function inner(a) {
        console.log(`2: ${x} ${a} ${z}`); // 2: undefined 50 3
        return {a: a};
    }

    const res = k(50);
    if(res.a === 10) {
        res.a = 500;
    }

    var x = 1;
    console.log(`3: ${x} ${res.a} ${z}`); // 3 1 50 3
    return res;
}

let result = outer(10, 20);
console.log(`4: ${result.a} ${z}`) // 4: 50 10
