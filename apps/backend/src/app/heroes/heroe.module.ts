import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';

import { HeroeController } from './heroe.controller';

@Module({
  imports: [InMemoryDBModule.forFeature('heroe', {})],
  controllers: [HeroeController],
})
export class HeroeModule {}
