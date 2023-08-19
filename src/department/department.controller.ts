import { Body, Controller, Post } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/createDepartment.dto';

@Controller('department')
export class DepartmentController {
    //dependency injection
  constructor(private departmentService: DepartmentService) {}

  @Post('create-department')
  register(@Body() departmentDto: CreateDepartmentDto) {
    return this.departmentService.createDepartment(departmentDto)
  }


}
