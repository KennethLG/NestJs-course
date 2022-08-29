import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class DbRepository {
    abstract getAll<T>(): Promise<T[]>;
  
    abstract get<T>(id: number): Promise<T>;
  
    abstract create<T>(item: T): Promise<T>;
  
    abstract update<T>(id: number, item: T): Promise<T>;
  
    abstract delete(id: number): Promise<void>;
  }
  