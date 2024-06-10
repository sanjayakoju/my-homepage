describe('Account', function()  {

    let bank;

    beforeEach(() => {
        bank = new Bank();
    });

    it('should add a new account and return its number', () => {
        const accNumber = bank.addAccount();
        assert.equal(accNumber, 1);
    });

    it('should add a new savings account and return its number', () => {
        const saNumber = bank.addSavingsAccount(2);
        assert.equal(saNumber, 2);
    });

    it('should add a new checking account and return its number', () => {
        const caNumber = bank.addCheckingAccount(500);
        assert.equal(caNumber, 3);
    });

    it('should close an account', () => {
        const accNumber = bank.addAccount();
        bank.closeAccount(accNumber);
        assert.equal(bank.accounts.length, 0);
    });

    it('should generate a report of all accounts', () => {
        bank.addAccount();
        bank.addSavingsAccount(2);
        bank.addCheckingAccount(500);
        const report = bank.accountReport();
        console.log(report)
        assert.equal(report, 'Account 5: balance 0\n' +
            'SavingsAccount 6: balance 0, interest 2\n' +
            'CheckingAccount 7: balance 0, overdraft limit 500');
        // assert.equal(report).to.include('SavingsAccount 6: balance 0, interest 2');
        // assert.equal(report).to.include('CheckingAccount 7: balance 0, overdraft limit 500');
    });

    it('should perform endOfMonth and collect all outputs', () => {
        const saNumber = bank.addSavingsAccount(2);
        bank.accounts[0].deposit(100);
        const caNumber = bank.addCheckingAccount(500);
        // bank.accounts[1].withdraw(600);
        const endOfMonthReport = bank.endOfMonth();
        console.log(endOfMonthReport)
        assert.equal(endOfMonthReport, 'Interest added SavingsAccount 8: balance: 102 interest: 2.04');
    });

});
