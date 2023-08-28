// working
import { Controller, Get, Post, UseGuards, Request, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // login
  // use the LocalAuthGuard for login - import it
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'User logged in' };
  }

  // making this route protected such that authenticated users can only access
  // we have defined a context such that only if user is authenticated, we pass in the http requests
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Res() res): void {
    // return req.user;
    res.sendFile('index.html', { root: 'public' });
  }
}
