import { InjectInMemoryDBService, InMemoryDBEntityController, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Heroe } from './heroe';

@Controller('heroe')
export class HeroeController extends InMemoryDBEntityController<Heroe> {
  constructor(@InjectInMemoryDBService('heroe') protected readonly heroeService: InMemoryDBService<Heroe>) {
    super(heroeService);
  }

  /**
   * Get all heroes.
   */
  @Get()
  getHeroes() {
    return this.heroeService.getAll();
  }

  /**
   * Create a heroe.
   *
   * @param heroe The heroe to create.
   */
  @Post()
  addHeroe(@Body() heroe: Heroe) {
    return this.heroeService.create(heroe);
  }

  /**
   * Update a heroe.
   *
   * @param heroe The heroe to update.
   */
  @Put()
  editHeroe(@Body() heroe: Heroe) {
    return this.heroeService.update(heroe);
  }

  /**
   * Delete a heroe.
   *
   * @param id id of the heroe.
   */
  @Delete(':id')
  deleteHeroe(@Param('id') id: number) {
    return this.heroeService.delete(id);
  }

  /**
   * Get the heroe.
   *
   * @param id id of the heroe.
   */
  @Get(':id')
  getHeroe(@Param('id') id: number) {
    return this.heroeService.get(id);
  }
}
