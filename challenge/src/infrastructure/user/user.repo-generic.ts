import { DbRepository } from "src/domain/db.repository";

export class MySQLRepo<T> implements DbRepository {
    async create<T>(item: T): Promise<T> {
        return item;
    }

    async delete(id: number): Promise<void> {
        
    }

    async get<T>(id: number): Promise<T> {
        return;
    }

    async getAll<T>(): Promise<T[]> {
        return;
    }

    async update<T>(id: number, item: T): Promise<T> {
        return item;
    }

}