import { Subscription } from '../../subscriptions/entities/subscription.entity';
export declare class Payment {
    id: string;
    subscription: Subscription;
    externalReference: string;
    amountCents: number;
    status: 'pending' | 'paid' | 'failed';
    paidAt: Date;
    createdAt: Date;
}
