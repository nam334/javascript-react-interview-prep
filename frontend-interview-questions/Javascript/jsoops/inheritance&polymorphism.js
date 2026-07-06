class Employee {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  isEmployee() {
    console.log(`${this.name} is an employee at XYZ`);
  }
  work() {
    console.log(`${this.name}, has an id of ${this.id}`);
  }
}
class Developer extends Employee {
  constructor(name, id, role) {
    super(name, id);
    this.role = role;
  }

  work() {
    console.log(
      `${this.name}, has an id of ${this.id} and a role of ${this.role}`,
    );
  }
}

const uidev = new Developer("Namrata", "123", "frontend developer");
uidev.isEmployee();
uidev.work();
