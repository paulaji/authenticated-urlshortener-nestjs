import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // login
  @Post('login')
  login(): any {
    return {};
  }

  // making this route protected such that authenticated users can only access
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
