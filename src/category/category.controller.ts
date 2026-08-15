import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {} // automatically inject through constructor

  @Get()
  getCategories() {
    return this.categoryService.getAllCategories();
  }
}
