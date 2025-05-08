import { Subscription } from '../../subscriptions/entities/subscription.entity';
export declare class Plan {
    id: string;
    name: string;
    description: string;
    priceCents: number;
    interval: 'monthly' | 'yearly';
    isActive: boolean;
    createdAt: Date;
    subscriptions: Subscription[];
}
