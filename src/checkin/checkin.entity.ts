import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';  // Importando a entidade User
import { Event } from '../event/event.entity';  // Importando a entidade Event


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

  // Relacionamento com o User (Many-to-One)
  @ManyToOne(() => User, user => user.checkIns, { nullable: false })
  @JoinColumn({ name: 'userId' })  // Nome da coluna de referência
  user: User;

  // Relacionamento com o Event (Many-to-One)
  @ManyToOne(() => Event, event => event.checkIns, { nullable: false })
  @JoinColumn({ name: 'eventId' })  // Nome da coluna de referência
  event: Event;
}
