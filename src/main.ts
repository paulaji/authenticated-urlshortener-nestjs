import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // express session properties
  app.use(
    session({
      secret: 'resu321321', // secret is set as resu321321 for easiness
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000 }, // setting cookie age as 1 hour
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();
