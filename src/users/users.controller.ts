import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get() // Get /users
  findAll(@Query('role') role?: 'Admin' | 'User') {
    return [];
  }
  @Get(':id') // Get users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
  @Post() // Post /users
  create(@Body() user: {}) {
    return user;
  }
  @Patch(':id') //Patch
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }
  @Delete(':id') // Get users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
