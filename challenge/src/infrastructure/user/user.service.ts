import { Injectable } from '@nestjs/common';
import { DbRepository } from 'src/domain/db.repository';
import { UserEntity } from 'src/domain/user.entity';
import { UserRepo } from './user.repo';

@Injectable()
export class UserService {

    constructor(private readonly userRepo: UserRepo) {}

    
    getUsers() {
        return this.userRepo.getAll<UserEntity>();
    }
}
