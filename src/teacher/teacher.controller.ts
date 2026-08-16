import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { Teacher } from './schemas/teacher.schema';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async addTeacher(@Body() data: Partial<Teacher>) {
    return this.teacherService.createTeacher(data);
  }

  @Get()
  async getTeachers() {
    return this.teacherService.getAllStudents();
  }

  @Get(':id')
  async getTeacher(@Param('id') id: string) {
    return this.teacherService.getTeacherById(id);
  }
}
