import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    private users = [
        { id: 1, name: "John Doe", age: 20 },
        { id: 2, name: "Jane Doe", age: 21 },
    ];

    findAll() {
        return this.users;
    }

    findOne(id: number) {
        return this.users.find((user) => user.id === id);
    }

    searchByAge(age: number) {
        return this.users.filter((user) => user.age === age);
    }

    deleteUser(id: number) {
        this.users = this.users.filter((user) => user.id !== id);
    }

    updateUser(id: number, updateUserDto: UpdateUserDto) {
        const user = this.users.find((user) => user.id === id);
        if (!user) {
            throw new NotFoundException("User not found");
        }
        Object.assign(user, updateUserDto);
        return user;
    }
}
