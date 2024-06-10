"use strict"

class SavingsAccount extends Account {

    constructor(number, interest) {
        super(number);
        this._interest = interest
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        const interestAmount = (this._balance * this._interest) / 100;
        this.deposit(interestAmount);
    }

    toString() {
        return `SavingsAccount ${this._number}: balance ${this._balance}, interest ${this._interest}`;
    }

    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${(this._balance * this._interest) / 100}`;
    }

}
