import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from './heroe.model';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {
  private readonly HEROE_API: string = '/api/heroe';

  constructor(private http: HttpClient) {}

  /**
   * Get all heroes.
   *
   * @param {string} [query] The name of heroes to search.
   *
   * @returns A list of heroe.
   */
  getHeroes(query?: string): Observable<Heroe[]> {
    if (query) {
      return this.http.get<Heroe[]>(this.HEROE_API, { params: { query } });
    }
    return this.http.get<Heroe[]>(this.HEROE_API);
  }

  /**
   * Create a heroe.
   *
   * @param {Heroe} heroe The heroe to create.
   *
   * @returns The heroe created.
   */
  addHeroe(heroe: { name: string }): Observable<Heroe> {
    return this.http.post<Heroe>(this.HEROE_API, heroe);
  }

  /**
   * Delete a heroe.
   *
   * @param {number} id id of the heroe.
   */
  deleteHeroe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.HEROE_API}/${id}`);
  }
}
