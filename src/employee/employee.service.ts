import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
  private employees = [
    { id: 1, name: 'Ram', salary: 2000 },
    { id: 2, name: 'Shyam', salary: 3000 },
    { id: 3, name: 'Hari', salary: 4000 },
  ];

  getAllUsers() {
    return this.employees;
  }
}
