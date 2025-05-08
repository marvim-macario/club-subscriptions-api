import { EmailsService } from './emails.service';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
export declare class EmailsController {
    private readonly emailsService;
    constructor(emailsService: EmailsService);
    create(createEmailDto: CreateEmailDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEmailDto: UpdateEmailDto): string;
    remove(id: string): string;
}
