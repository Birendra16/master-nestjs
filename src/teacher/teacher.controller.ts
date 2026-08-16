import { Body, Controller, Get, Param, Patch, Post, Put } from '@nestjs/common';
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

  @Put(':id')
  async updateTeacher(@Param('id') id: string, @Body() data: Partial<Teacher>) {
    return this.teacherService.updateTeacher(id, data);
  }

  @Patch(':id')
  async patchTeacher(@Param('id') id: string, @Body() data: Partial<Teacher>) {
    return this.teacherService.patchTeacher(id, data);
  }
}
