class Student {
  constructor(studentId) {
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
  setStudentId(studentId) {
    this.studentId = studentId;
  }
}

let s1 = new Student(201311844);

studentId = s1.getStudentId();

console.log(s1.getStudentId());
