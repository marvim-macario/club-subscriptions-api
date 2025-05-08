import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
export declare class EmailsService {
    create(createEmailDto: CreateEmailDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEmailDto: UpdateEmailDto): string;
    remove(id: number): string;
}
