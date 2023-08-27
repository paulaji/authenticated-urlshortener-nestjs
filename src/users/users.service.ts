import { Injectable } from '@nestjs/common';

// creating a user type
export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'user1',
      username: 'user1',
      password: 'resu321321',
    },
    {
      id: 2,
      name: 'user2',
      username: 'user2',
      password: 'resu321321',
    },
    {
      id: 3,
      name: 'user3',
      username: 'user3',
      password: 'resu321321',
    },
  ];
  // writing a function to find a user by username
  //   returns a promise such that if we find a user, return the user object which we searched using username, else return undefined
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
