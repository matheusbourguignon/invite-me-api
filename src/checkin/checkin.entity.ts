import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Event } from '../event/event.entity';


@Entity()
@Unique(['email', 'name']) // Garantindo que o par email + nome seja único para cada check-in
export class CheckIn {
  [x: string]: any;
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  email: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  
  @ManyToOne(() => User, user => user.checkIns, { nullable: false })
  @JoinColumn({ name: 'userId' })  // Nome da coluna de referência
  user: User;

  @ManyToOne(() => Event, event => event.checkIns, { nullable: false })
  @JoinColumn({ name: 'eventId' })  
  event: Event;
}
