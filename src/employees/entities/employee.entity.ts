import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EmployeeImage } from './employeeImage.entity';
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
  @Column('text', {
    unique: true,
  })
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
    array: true,
    default: ['developer'],
  })
  @Field(() => [String])
  position: string[];
  @Column({
    type: 'boolean',
    default: true,
  })
  @Field(() => Boolean)
  available: boolean;
  //relationships
  //employee image
  @OneToOne(() => EmployeeImage, {
    cascade: true,
    eager: true,
  })
  @JoinColumn()
  image: EmployeeImage;
}
