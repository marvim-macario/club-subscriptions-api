import { Subscription } from '../../subscriptions/entities/subscription.entity';
import { Email } from '../../emails/entities/email.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    passwordHash: string;
    role: 'user' | 'admin';
    createdAt: Date;
    updatedAt: Date;
    subscriptions: Subscription[];
    emailLogs: Email[];
}
