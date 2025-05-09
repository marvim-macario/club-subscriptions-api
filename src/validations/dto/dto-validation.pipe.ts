import {
  Injectable,
  ValidationError,
  BadRequestException,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { DtoValidationErros } from './dto-validation.erros';

@Injectable()
export class DtoValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      transformOptions: {
        enableImplicitConversion: true,
        exposeDefaultValues: true,
      },
      exceptionFactory: (errors: ValidationError[]) => {
        const res = errors?.flatMap(({ property, constraints }) =>
          Object.getOwnPropertyNames(constraints)?.map((prop) => {
            if (Object.hasOwn(DtoValidationErros, prop)) {
              return DtoValidationErros[prop]?.replace('@@##@@', property);
            }
            return constraints[prop];
          }),
        );
        return new BadRequestException(res);
      },
      ...options,
    });
  }
}
