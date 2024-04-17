class University {
  constructor(name, faculties) {
    this.name = name;
    this.faculties = [faculties];
    this.departments = [];
  }

  addDepartment(name) {
    this.departments.push(name);
  }

  removeDepartment(name) {
    this.departments = this.departments.filter(
      (department) => department !== name
    );
  }

  addFaculty(name) {
    this.faculty.push(name);
  }

  removefaculties(name) {
    this.faculties = this.faculty.filter((faculty) => faculty !== name);
  }

  infoDepartment() {
    return this.departments.toString();
  }
}

const university = new University("BNTU", "FITR");
university.addDepartment("ABC");
university.addDepartment("HHHH");
university.addDepartment("F");
university.removeDepartment("HHHH");

console.log(university.infoDepartment());
