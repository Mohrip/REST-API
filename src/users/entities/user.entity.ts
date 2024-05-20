import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column('text')
//   firstname: string;

//   @Column('text')
//   lastname: string;

//   @Column('text')
//   email: string;
// }


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({
    name: 'firstname',
    nullable: false,
    type: 'text',
    primary: false,
  })
  firstname: string;

  @Column({
    name: 'lastname',
    nullable: false,
    type: 'text',
    primary: false,
  })
  lastname: string;


  @Column({
    name: 'username',
    nullable: false,
    type: 'varchar',
    length: 255,
    unique: true,
    primary: true,
  })
  username: string;

  @Column({
  name: 'email',
  nullable: true,
  type: 'varchar',
  length: 255,
  primary: false,
  })
  email: number;



}