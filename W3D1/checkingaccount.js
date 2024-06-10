"use strict"

class CheckingAccount extends Account {
    constructor(number, overdraftLimit) {
        super(number);
        this._overdraftLimit = overdraftLimit;
    }

    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    setOverdraftLimit(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdraw amount has to be greater than zero');
        }
        if (amount > this._balance + this._overdraftLimit) {
            throw new Error('Insufficient funds, overdraft limit reached');
        }
        this._balance -= amount;
    }

    toString() {
        return `CheckingAccount ${this._number}: balance ${this._balance}, overdraft limit ${this._overdraftLimit}`;
    }

    endOfMonth() {
        if (this._balance < 0) {
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraftLimit}`;
        }
        return '';
    }
}
