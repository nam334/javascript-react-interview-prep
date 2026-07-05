//Encapsulation - Restrict direct access to internal data

class BankAccount {
  //private variable
  //speed here is a private variable - we can return the value but should not
  //prvide direct access to change it
  #balance = 1000;

  //public method
  deposit() {
    this.#balance += 1000;
  }

  checkBalance() {
    return this.#balance;
  }
}

const myaccount = new BankAccount();
myaccount.deposit();
console.log("Account balance is", myaccount.checkBalance());
