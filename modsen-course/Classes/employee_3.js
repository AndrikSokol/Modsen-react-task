class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getAnnualSalary() {
    const bonus = this.salary * 0.1;
    return super.getAnnualSalary() + bonus;
  }
}

const manager1 = new Manager("Andrei", 5000, "Backend");
const manager2 = new Manager("Sanya", 6000, "Frontend");

const annualSalary1 = manager1.getAnnualSalary();
const annualSalary2 = manager2.getAnnualSalary();
