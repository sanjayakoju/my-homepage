function Cookie(size) {
    this.size = size;
}

Cookie.prototype.eat = function () {
    console.log(`eating cookie of size ${this.size}`);
}

function ChocolateCookie(size, noOfChocolate) {
    Cookie.call(this, size);
    this.noOfChocolate = noOfChocolate;
}

ChocolateCookie.prototype.__proto__ = Cookie.prototype;

ChocolateCookie.prototype.test = function () {
    if (this.noOfChocolate > 5) {
        console.log('I loving it');
    } else {
        console.log('Less tha 10 Sweet')
    }
}

let chocolateCookie = new ChocolateCookie(6, 10);
chocolateCookie.eat();
chocolateCookie.test();
