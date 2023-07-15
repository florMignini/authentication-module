import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import { IsIn } from 'class-validator';

@Entity({})
@ObjectType()
export class EmployeeDepartment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text', {
    array: true,
  })
  @Field(() => [String])
  @IsIn(['admin', 'rrhh', 'user'])
  name: string[];
  @OneToMany(() => Employee, (employee) => employee.department)
  employee: Employee;
}
