import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // login
  // use the LocalAuthGuard for login - import it
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return req.users;
  }

  // making this route protected such that authenticated users can only access
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
