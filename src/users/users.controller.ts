import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers() {
        return this.usersService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.usersService.findOne(Number(id));
    }

    @Get("search")
    searchUsers(@Query("age") age: string) {
        return this.usersService.searchByAge(Number(age));
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return {
            message: "User created",
            data: createUserDto
        }
    }

    @Delete(":id")
    deleteUser(@Param("id") id: string) {
        this.usersService.deleteUser(Number(id));
        return {
            message: "User deleted",
            data: id
        }
    }

    @Patch(':id')
    updateUser(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(Number(id), updateUserDto);
    }
}
