import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  firstName: string;
  @Column('text')
  lastName: string;
  @Column('text')
  identityNumber: string;
  @Column('text', {
    unique: true,
  })
  username: string;
  @Column('text', {
    unique: true,
  })
  password: string;
  @Column('text', {
    unique: true,
  })
  email: string;
  @Column('text')
  gender: string;
  @Column('text')
  bloodType: string;
  @Column('text')
  city: string;
  @Column('text')
  state: string;
  @Column('text')
  zipCode: string;
  @Column('text', {
    unique: true,
  })
  address: string;
  @Column('text')
  type: string;
}
