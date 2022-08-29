import { UserEntity } from "./user.entity";

export abstract class UserRepository {
    abstract getAll(): Promise<UserEntity[]>;
  
    abstract get(id: number): Promise<UserEntity>;
  
    abstract create(item: UserEntity): Promise<UserEntity>;
  
    abstract update(id: number, item: UserEntity): Promise<UserEntity>;
  
    abstract delete(id: number): Promise<void>;
  }
  