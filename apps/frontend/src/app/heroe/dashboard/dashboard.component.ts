import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Heroe } from '../heroe.model';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'maz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public heroes$: Observable<Heroe[]>;
  public searchHeroes$: Observable<Heroe[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroeService: HeroeService) {}

  ngOnInit(): void {
    this.heroes$ = this.heroeService.getHeroes();

    this.searchHeroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) => {
        if (!query) {
          return of([]);
        }

        return this.heroeService.getHeroes(query);
      })
    );
  }

  /**
   * Search the heroes according to the query.
   *
   * @param query The query to search.
   */
  searchHeroe(query: string): void {
    this.searchTerms.next(query);
  }
}
