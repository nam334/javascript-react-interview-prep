class BankAccount {
  #balance;
  constructor(name, balance) {
    this.name = name;
    this.#balance = balance;
  }
  deposit(depAmount) {
    this.#addAmount(depAmount);
  }

  #addAmount(depAmount) {
    if (depAmount > 0) this.#balance = this.#balance + depAmount;
  }
  withdraw(withAmount) {
    this.#deductAmount(withAmount);
  }

  #deductAmount(withAmount) {
    if (withAmount <= this.#balance) this.#balance = this.#balance - withAmount;
  }
  checkBalance() {
    return this.#balance;
  }
}

//inheritance

class SavingsBank extends BankAccount {
  constructor(name, balance, interest) {
    super(name, balance);
    this.interest = interest;
  }

  calculateInterest() {
    console.log(`Interest earned`, (this.checkBalance() * this.interest) / 100);
  }

  //polymorphism
  withdraw(withAmount) {
    //adding a restriction that only an amount > 1000 can be withdrawn
    if (withAmount > 1000) {
      console.log("Withdraw cannot be processed, limit exceeded");
      return;
    } else super.withdraw(withAmount);
  }
}
// const myaccount = new BankAccount("Namrata", 1000);
// myaccount.deposit(500);
// myaccount.withdraw(50);
// console.log("balance is", myaccount.checkBalance());

const account = new SavingsBank("Priya", 1000, 5);
account.deposit(500);
account.withdraw(5000);
account.calculateInterest();
console.log("Balance is", account.checkBalance());
