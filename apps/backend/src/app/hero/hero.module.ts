import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';

import { HeroController } from './hero.controller';

@Module({
  imports: [InMemoryDBModule.forFeature('hero', {})],
  controllers: [HeroController],
})
export class HeroModule {}
