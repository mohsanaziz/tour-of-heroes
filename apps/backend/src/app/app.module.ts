import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroeModule } from './heroes/heroe.module';

@Module({
  imports: [InMemoryDBModule.forRoot({}), HeroeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
