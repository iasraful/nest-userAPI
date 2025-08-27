import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.deto';
import { CreateUserDto } from './dto/create-user.dto';

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
      const roleArrays = this.users.filter((user) => user.role === role);
      if (roleArrays.length === 0)
        throw new NotFoundException('User not found.');
      return roleArrays;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(user: CreateUserDto) {
    const userID = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: userID[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUser: UpdateUserDto) {
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
