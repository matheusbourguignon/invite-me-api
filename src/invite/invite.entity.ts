import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Event } from "../event/event.entity";

@Entity()
export class Invite extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')

  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  email: string

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @ManyToOne(() => Event, (event) => event.invites, { onDelete: 'CASCADE' })
  event: Event;
}
