import { UserEntity } from "src/domain/user.entity";
import { MySQLRepo } from "./user.repo-generic";

export class UserRepo extends MySQLRepo<UserEntity> {}