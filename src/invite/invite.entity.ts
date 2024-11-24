import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Invite extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')

  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  email: string

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;


}
