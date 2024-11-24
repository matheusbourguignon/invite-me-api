import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')

  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'date'})
  date: Date;


}
