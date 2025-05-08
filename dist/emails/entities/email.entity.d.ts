import { User } from '../../users/entities/user.entity';
export declare class Email {
    id: string;
    user: User;
    subject: string;
    content: string;
    status: 'sent' | 'failed';
    sentAt: Date;
}
