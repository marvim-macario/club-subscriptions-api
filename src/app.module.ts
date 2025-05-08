import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PlansModule } from './plans/plans.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PaymentsModule } from './payments/payments.module';
import { EmailsModule } from './emails/emails.module';

@Module({
  imports: [AuthModule, UsersModule, PlansModule, SubscriptionsModule, PaymentsModule, EmailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
