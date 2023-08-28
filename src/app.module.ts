// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';

// @Module({
//   imports: [UsersModule, AuthModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

// static module serve configuration
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// to serve static modules
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UrlShortenModule } from './urlshorten/urlshorten.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    UrlShortenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
