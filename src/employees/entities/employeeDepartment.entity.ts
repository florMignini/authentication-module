import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  // OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({})
@ObjectType()
export class EmployeeDepartment {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text', {
    array: true,
  })
  @Field(() => [String])
  name: string[];
  @ManyToOne(() => Employee, (employee) => employee.department)
  @JoinColumn()
  employee: Employee;
}
