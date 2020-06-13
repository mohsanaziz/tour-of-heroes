import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';

@Module({
  imports: [InMemoryDBModule.forRoot({}), HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
