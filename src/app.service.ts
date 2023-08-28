// // working
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Welcome to NestJS URL-shortener!';
//   }
// }

// test
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth/auth.service'; // Make sure to use the correct path

@Injectable()
export class AppService {
  constructor(private readonly authService: AuthService) {}

  async authenticateUser(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (user) {
      return user;
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  getHello(): string {
    return 'Welcome to NestJS URL-shortener!';
  }
}
