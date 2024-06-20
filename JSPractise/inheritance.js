class Device {
    constructor(port) {
        this.port = port;
    }

    display(string) {
        console.log(`Over ${this.port}: ${string}`);
    }
}

class Printer extends Device {
    constructor(port, pagesPerMinute) {
        super(port);
        this.pagesPerMinute = pagesPerMinute;
    }

    printTestPage() {
        this.display("Test Page");
    }
}

// Example usage
const printer = new Printer("USB", 10);
printer.printTestPage();  // Output: Over USB: Test Page
