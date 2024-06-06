describe("String.prototype.filter", function() {
    it("should remove banned words from the string", function() {
        assert.equal("This house is not nice!".filter(['not']), "This house is nice!");
        assert.equal("I love programming!".filter(['love']), "I programming!");
    });
});

describe("Array.prototype.bubbleSort", function() {
    it("should sort the array in ascending order", function() {
        assert.deepEqual([6, 4, 0, 3, -2, 1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
        assert.deepEqual([3, 2, 1].bubbleSort(), [1, 2, 3]);
    });
});

describe("Teacher.prototype.teach", function() {
    it("should return the correct teaching string", function() {
        var teacher = new Teacher();
        teacher.initialize("John", 30);
        assert.equal(teacher.teach("Math"), "John is now teaching Math");
        teacher.initialize("Jane", 28);
        assert.equal(teacher.teach("Science"), "Jane is now teaching Science");
    });
});
