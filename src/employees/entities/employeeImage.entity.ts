import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity({})
@ObjectType()
export class EmployeeImage {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  @Field(() => String)
  url: string;
  @OneToOne(() => Employee)
  @JoinColumn()
  employee: Employee;
}
