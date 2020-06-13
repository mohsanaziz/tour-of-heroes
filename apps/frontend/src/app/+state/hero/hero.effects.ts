import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromHero from './hero.reducer';
import * as HeroActions from './hero.actions';

@Injectable()
export class HeroEffects {
  loadHero$ = createEffect(() =>
    this.actions$.pipe(
      ofType(HeroActions.loadHero),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return HeroActions.loadHeroSuccess({ hero: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return HeroActions.loadHeroFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
