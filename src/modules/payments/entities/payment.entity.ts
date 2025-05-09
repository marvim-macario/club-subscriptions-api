import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Subscription } from '../../subscriptions/entities/subscription.entity';

@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Subscription, (sub) => sub.payments)
  subscription: Subscription;

  @Column({ nullable: true })
  externalReference: string;

  @Column()
  amountCents: number;

  @Column()
  status: 'pending' | 'paid' | 'failed';

  @Column({ type: 'timestamp', nullable: true })
  paidAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
