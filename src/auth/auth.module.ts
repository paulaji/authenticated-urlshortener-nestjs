import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  // import the UsersModule
  imports: [UsersModule, PassportModule.register({ session: true })], // activate the sessions as true because we are using that method
  providers: [AuthService, LocalStrategy, SessionSerializer],
  // extra
  exports: [AuthService, LocalStrategy, SessionSerializer], // Export the providers
})
export class AuthModule {}
