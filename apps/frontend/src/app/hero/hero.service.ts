import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HeroEntity } from '../+state/hero/hero.models';
import { Hero } from './hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private readonly HERO_API: string = '/api/hero';

  constructor(private http: HttpClient) {}

  /**
   * Get all heroes.
   *
   * @param {string} [query] The name of heroes to search.
   *
   * @returns A list of heroes.
   */
  getHeroes(query?: string): Observable<HeroEntity[]> {
    if (query) {
      return this.http.get<HeroEntity[]>(this.HERO_API, { params: { query } });
    }
    return this.http.get<HeroEntity[]>(this.HERO_API);
  }

  /**
   * Create a hero.
   *
   * @param {Hero} hero The hero to create.
   *
   * @returns The hero created.
   */
  addHero(hero: { name: string }): Observable<Hero> {
    return this.http.post<Hero>(this.HERO_API, hero);
  }

  /**
   * Delete a hero.
   *
   * @param {number} id id of the hero.
   */
  deleteHero(id: number): Observable<void> {
    return this.http.delete<void>(`${this.HERO_API}/${id}`);
  }

  /**
   * Get the hero.
   *
   * @param {number} id id of the hero.
   *
   * @returns The hero.
   */
  getHero(id: number): Observable<HeroEntity> {
    return this.http.get<HeroEntity>(`${this.HERO_API}/${id}`);
  }

  /**
   * Update a hero.
   *
   * @param {Hero} hero The hero to update.
   */
  editHero(hero: Hero): Observable<void> {
    return this.http.put<void>(this.HERO_API, hero);
  }
}
