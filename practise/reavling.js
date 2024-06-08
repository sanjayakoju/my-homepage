var COUNTER = (function () {
    let counter = 0;

    return {
        add: function () {
            return counter += 1;
        },

        sub: function () {
            return counter -= 1;
        }
    }
})();

console.log('Increment', COUNTER.add())
console.log('Increment', COUNTER.add())
console.log('Decrement', COUNTER.sub())
