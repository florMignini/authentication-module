// role.entity.ts
import { Field, ObjectType } from '@nestjs/graphql';
import { ValidDepartment } from 'src/auth/enums/valid-department.enum';
import { Employee } from 'src/employees/entities/employee.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'department' })
@ObjectType()
export class Department {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @Column('text')
  @Field(() => [ValidDepartment])
  departmentName: [string];

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];
}
