import { InjectInMemoryDBService, InMemoryDBEntityController, InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import { Hero } from './hero';

@Controller('hero')
export class HeroController extends InMemoryDBEntityController<Hero> {
  constructor(@InjectInMemoryDBService('hero') protected readonly heroService: InMemoryDBService<Hero>) {
    super(heroService);
  }

  /**
   * Get all heroes.
   *
   * @param {string} [query] The name of heroes to search.
   *
   * @returns A list of heroes.
   */
  @Get()
  getHeroes(@Query('query') query?: string): Hero[] {
    if (query) {
      return this.heroService.query((hero: Hero) => hero.name.toLowerCase().includes(query.toLowerCase()));
    }
    return this.heroService.getAll();
  }

  /**
   * Create a hero.
   *
   * @param {Hero} hero The hero to create.
   *
   * @returns The hero created.
   */
  @Post()
  addHero(@Body() hero: Hero): Hero {
    return this.heroService.create(hero);
  }

  /**
   * Update a hero.
   *
   * @param {Hero} hero The hero to update.
   */
  @Put()
  editHero(@Body() hero: Hero): void {
    return this.heroService.update(hero);
  }

  /**
   * Delete a hero.
   *
   * @param {number} id id of the hero.
   */
  @Delete(':id')
  deleteHero(@Param('id') id: number): void {
    return this.heroService.delete(id);
  }

  /**
   * Get the hero.
   *
   * @param {number} id id of the hero.
   *
   * @returns The hero.
   */
  @Get(':id')
  getHero(@Param('id') id: number): Hero {
    return this.heroService.get(id);
  }
}
