// Exercise 1: Define a filter function on the String object
String.prototype.filter = function(bannedWords) {
    return this.split(' ').filter(word => !bannedWords.includes(word)).join(' ');
};

// Exercise 2: Write a BubbleSort algorithm on the Array object
Array.prototype.bubbleSort = function() {
    let len = this.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = temp;
            }
        }
    }
    return this;
};

// Exercise 3: Create an object called Teacher derived from the Person class
var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
};

var Teacher = function() {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject) {
    return this.name + " is now teaching " + subject;
};
