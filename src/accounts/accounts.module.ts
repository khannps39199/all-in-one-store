import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { Account } from './account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]), // ✅ Fix circular dependency
  ],
  controllers: [AccountsController],
  providers: [AccountsService],
  exports: [TypeOrmModule, AccountsService],
})
export class AccountsModule {}
