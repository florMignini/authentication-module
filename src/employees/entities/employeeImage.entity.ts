import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class EmployeeImage {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  url: string;
  @OneToOne(() => Employee, (employee) => employee.image)
  employee: Employee;
}
