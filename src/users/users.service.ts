import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Lukas',
      email: 'lucas@gas.com',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Ghram',
      email: 'ghram@live.com',
      role: 'User',
    },
    {
      id: 3,
      name: 'Paul',
      email: 'sean@paul.com',
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Sen',
      email: 'sean@live.com',
      role: 'User',
    },
    {
      id: 5,
      name: 'Abend',
      email: 'abend@live.com',
      role: 'User',
    },
  ];

  findAll(role?: 'Admin' | 'User') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: { name: string; email: string; role: 'Admin' | 'User' }) {
    const userID = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userID[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updateUser: { name?: string; email?: string; role?: 'Admin' | 'User' },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          ...updateUser,
        };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removeUser;
  }
}
