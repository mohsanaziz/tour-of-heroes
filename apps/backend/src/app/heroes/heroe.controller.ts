import { InjectInMemoryDBService, InMemoryDBEntityController, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { Heroe } from './heroe';

@Controller('heroe')
export class HeroeController extends InMemoryDBEntityController<Heroe> {
  constructor(@InjectInMemoryDBService('heroe') protected readonly heroeService: InMemoryDBService<Heroe>) {
    super(heroeService);
  }

  /**
   * Get all heroes.
   *
   * @param {string} [query] The name of heroes to search.
   *
   * @returns A list of heroe.
   */
  @Get()
  getHeroes(@Query('query') query?: string): Heroe[] {
    if (query) {
      return this.heroeService.query((heroe: Heroe) => heroe.name.toLowerCase().includes(query.toLowerCase()));
    }
    return this.heroeService.getAll();
  }

  /**
   * Create a heroe.
   *
   * @param {Heroe} heroe The heroe to create.
   *
   * @returns The heroe created.
   */
  @Post()
  addHeroe(@Body() heroe: Heroe): Heroe {
    return this.heroeService.create(heroe);
  }

  /**
   * Update a heroe.
   *
   * @param {Heroe} heroe The heroe to update.
   */
  @Put()
  editHeroe(@Body() heroe: Heroe): void {
    return this.heroeService.update(heroe);
  }

  /**
   * Delete a heroe.
   *
   * @param {number} id id of the heroe.
   */
  @Delete(':id')
  deleteHeroe(@Param('id') id: number): void {
    return this.heroeService.delete(id);
  }

  /**
   * Get the heroe.
   *
   * @param {number} id id of the heroe.
   *
   * @returns The heroe.
   */
  @Get(':id')
  getHeroe(@Param('id') id: number): Heroe {
    return this.heroeService.get(id);
  }
}
