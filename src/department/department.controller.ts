import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentDto } from './dto/department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Post('createDepartment')
  register(@Body() departmentDto: DepartmentDto) {
    return this.departmentService.createDepartment(departmentDto);
    // throw new NotFoundException(`not implemented yet`);
  }

  /* @Post('login')
  signin() {
    return `login a user`;
  } */
}
