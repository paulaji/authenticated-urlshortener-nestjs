import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  // since we have imported UsersModule in auth.module.ts, we can use UsersService which we have defined
  // creating a constructor of UsersService so that we can use it here
  constructor(private usersService: UsersService) {}

  // define a function which can validate a user by taking in the username from the injected data and checking it with it's corresponding password
  async validateUser(username: string, password: string): Promise<any> {
    // use the findOne function which we have defined in the UsersService
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      const { username, password, ...rest } = user;
      // while  defining a user object we had, id, name, username and password and the ...rest (the spread operator) will have id and name
      return rest;
    }
    return null;
  }
}
