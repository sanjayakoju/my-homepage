"use strict"

class Bank {
    static nextNumber = 1;

    constructor() {
        this.accounts = [];
    }

    addAccount() {
        const acc = new Account(Bank.nextNumber++);
        this.accounts.push(acc);
        return acc.getNumber();
    }

    addSavingsAccount(interest) {
        const sa = new SavingsAccount(Bank.nextNumber++, interest);
        this.accounts.push(sa);
        return sa.getNumber();
    }

    addCheckingAccount(overdraftLimit) {
        const ca = new CheckingAccount(Bank.nextNumber++, overdraftLimit);
        this.accounts.push(ca);
        return ca.getNumber();
    }

    closeAccount(number) {
        this.accounts = this.accounts.filter(acc => acc.getNumber() !== number);
    }

    accountReport() {
        return this.accounts.map(acc => acc.toString()).join('\n');
    }

    endOfMonth() {
        return this.accounts.map(acc => acc.endOfMonth()).filter(report => report !== '').join('\n');
    }
}
