describe("Array and String Functions", function() {

    // Test for sum function
    it("sum() should return the sum of all numbers in an array", function() {
        assert.equal(sum([1, 2, 3, 4]), 10);
        assert.equal(sum([-1, -2, -3, -4]), -10);
        assert.equal(sum([1, -2, 3, -4]), -2);
    });

    // Test for multiply function
    it("multiply() should return the product of all numbers in an array", function() {
        assert.equal(multiply([1, 2, 3, 4]), 24);
        assert.equal(multiply([-1, 2, -3, 4]), 24);
        assert.equal(multiply([1, 2, 0, 4]), 0);
    });

    // Test for reverse function
    it("reverse() should return the reversal of a string", function() {
        assert.equal(reverse("hello"), "olleh");
        assert.equal(reverse("world"), "dlrow");
        assert.equal(reverse(""), "");
    });

    // Test for filterLongWords function
    it("filterLongWords() should return an array of words longer than the given length", function() {
        assert.deepEqual(filterLongWords(["hello", "world", "js", "chai", "mocha"], 4), ["hello", "world", "mocha"]);
        assert.deepEqual(filterLongWords(["short", "longer", "longest"], 5), ["longer", "longest"]);
        assert.deepEqual(filterLongWords(["tiny", "small", "medium", "large"], 4), ["small", "medium", "large"]);
    });

});
