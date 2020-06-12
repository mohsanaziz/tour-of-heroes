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
}
