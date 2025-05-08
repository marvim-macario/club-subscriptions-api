import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('email_logs')
export class Email {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.email)
  user: User;

  @Column()
  subject: string;

  @Column('text')
  content: string;

  @Column({ default: 'sent' })
  status: 'sent' | 'failed';

  @CreateDateColumn()
  sentAt: Date;
}
