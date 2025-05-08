import { User } from '../../users/entities/user.entity';
import { Plan } from '../../plans/entities/plan.entity';
import { Payment } from '../../payments/entities/payment.entity';
export declare class Subscription {
    id: string;
    user: User;
    plan: Plan;
    status: 'active' | 'pending' | 'canceled';
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    payments: Payment[];
}
