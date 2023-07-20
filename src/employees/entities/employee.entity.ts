import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'employees' })
@ObjectType()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;
  @Column('text')
  @Field(() => String)
  firstName: string;
  @Column('text')
  @Field(() => String)
  lastName: string;
  @Column('date')
  @Field(() => String)
  birthDate: string;
  @Column('text')
  @Field(() => String)
  identityNumber: string;
  @Column('text', {
    unique: true,
  })
  @Field(() => String)
  username: string;
  @Column('text')
  // @Field(() => String)
  password: string;
  @Column('text', {
    unique: true,
  })
  @Field(() => String)
  email: string;
  @Column('text', {
    unique: true,
  })
  @Field(() => String)
  phoneNumber: string;
  @Column('text')
  @Field(() => String)
  gender: string;
  @Column('text')
  @Field(() => String)
  bloodType: string;
  @Column('text')
  @Field(() => String)
  country: string;
  @Column('text')
  @Field(() => String)
  city: string;
  @Column('text')
  @Field(() => String)
  state: string;
  @Column('text')
  @Field(() => String)
  zipCode: string;
  @Column('text', {
    unique: true,
  })
  @Field(() => String)
  address: string;
  @Column('date')
  @Field(() => String)
  hireDate: string;
  @Column({
    type: 'text',
    default: 'developer',
  })
  @Field(() => String)
  position: string;
  @Column({
    type: 'boolean',
    default: true,
  })
  @Field(() => Boolean)
  available: boolean;
  @Column('text', {
    default:
      'https://www.shutterstock.com/image-vector/user-login-authenticate-icon-human-600w-1556952635.jpg',
  })
  @Field(() => String)
  image: string;

  @ManyToOne(() => Employee, (employee) => employee.lastUpdatedBy, {
    nullable: true,
    lazy: true,
  })
  @JoinColumn({ name: 'lastUpdatedBy' })
  @Field(() => Employee, { nullable: true })
  lastUpdatedBy?: Employee;
  // relations
  @ManyToOne(() => Department, (department) => department.employees)
  department: Department;
}
