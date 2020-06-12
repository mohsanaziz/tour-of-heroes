import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Heroe extends InMemoryDBEntity {
  name: string;
}
