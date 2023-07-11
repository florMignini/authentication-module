import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';
import { Field } from '@nestjs/graphql';

@Entity()
export class EmployeeImage {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  @Field(() => String)
  url: string;
  @OneToOne(() => Employee, (employee) => employee.image)
  employee: Employee;
}
