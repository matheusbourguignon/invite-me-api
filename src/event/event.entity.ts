import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany  } from "typeorm";
import { Invite } from "../invite/invite.entity";

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')

  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'date'})
  date: Date;

  @OneToMany(() => Invite, (invite) => invite.event)
  invites: Invite[]
}
