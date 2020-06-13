import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'maz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public heroes$: Observable<Hero[]>;
  public searchHeroes$: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes();

    this.searchHeroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((query: string) => {
        if (!query) {
          return of([]);
        }

        return this.heroService.getHeroes(query);
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
