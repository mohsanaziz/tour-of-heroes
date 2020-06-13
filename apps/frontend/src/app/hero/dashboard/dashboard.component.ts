import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { loadHeroes } from '../../+state/hero/hero.actions';
import { HeroEntity } from '../../+state/hero/hero.models';
import { HeroState } from '../../+state/hero/hero.reducer';
import { getHeroes } from '../../+state/hero/hero.selectors';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'maz-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public heroes$: Observable<HeroEntity[]>;
  public searchHeroes$: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService, private store: Store<HeroState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadHeroes());
    this.heroes$ = this.store.pipe(select(getHeroes));

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
