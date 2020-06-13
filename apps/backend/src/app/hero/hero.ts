import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface Hero extends InMemoryDBEntity {
  name: string;
}
