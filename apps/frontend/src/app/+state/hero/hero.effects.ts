import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import { HeroService } from '../../hero/hero.service';
import * as HeroActions from './hero.actions';

@Injectable()
export class HeroEffects {
  getHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.loadHero),
      fetch({
        run: (action) => {
          return this.heroService.getHero(action.id).pipe(map((hero) => HeroActions.loadHeroSuccess({ hero })));
        },

        onError: (action, error) => {
          console.error('Error', error);
          return HeroActions.loadHeroFailure({ error });
        },
      })
    )
  );

  getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.loadHeroes),
      fetch({
        run: (action) => {
          return this.heroService.getHeroes().pipe(map((heroes) => HeroActions.loadHeroesSuccess({ heroes })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return HeroActions.loadHeroesFailure({ error });
        },
      })
    )
  );

  addHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.addHero),
      fetch({
        run: (action) => {
          return this.heroService.addHero(action.hero).pipe(map((hero) => HeroActions.addHeroSuccess({ hero })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return HeroActions.addHeroFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions, private heroService: HeroService) {}
}
