import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  // export the user service because we are planning to use it elsewhere
  exports: [UsersService],
})
export class UsersModule {}
