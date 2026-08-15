import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Ram', age: 24 },
    { id: 2, name: 'Ram', age: 25 },
    { id: 3, name: 'Ram', age: 26 },
  ];

  // Get
  getAllStudents() {
    return this.students;
  }

  //Get
  getStudentById(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student) {
      throw new NotFoundException('Student not found!');
    }
    return student;
  }

  // POST
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  // PUT
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not found');
    }

    this.students[index] = {
      id,
      ...data,
    };

    return this.students[index];
  }

  //Patch
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    if (!student) {
      throw new NotFoundException('Student not found');
    }

    Object.assign(student, data);
    return student;
  }

  // Delete
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new NotFoundException('Student not found!');
    }

    const deleted = this.students.splice(index, 1);
    return { message: 'Student Deleted', student: deleted[0] };
  }
}
