import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  getAllCategories() {
    return ['Mobile', 'Tablet', 'Laptop'];
  }
}
