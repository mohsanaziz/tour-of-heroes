import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as HeroActions from './hero.actions';
import { HeroEntity } from './hero.models';

export const HERO_FEATURE_KEY = 'hero';

export interface HeroState extends EntityState<HeroEntity> {
  hero: HeroEntity;
  selectedId?: string | number; // which Hero record has been selected
  loaded: boolean; // has the Hero list been loaded
  error?: string | null; // last none error (if any)
}

export interface HeroPartialState {
  readonly [HERO_FEATURE_KEY]: HeroState;
}

export const heroAdapter: EntityAdapter<HeroEntity> = createEntityAdapter<HeroEntity>();

export const initialState: HeroState = heroAdapter.getInitialState({
  // set initial required properties
  hero: { id: null, name: null },
  loaded: false,
});

const heroReducer = createReducer(
  initialState,
  on(HeroActions.loadHero, (state) => ({ ...state, loaded: false, error: null })),
  on(HeroActions.loadHeroSuccess, (state, { hero }) => ({ ...state, loaded: true, hero })),
  on(HeroActions.loadHeroFailure, (state, { error }) => ({ ...state, error })),
  on(HeroActions.loadHeroes, (state) => ({ ...state, loaded: false, error: null })),
  on(HeroActions.loadHeroesSuccess, (state, { hero }) => heroAdapter.setAll(hero, { ...state, loaded: true })),
  on(HeroActions.loadHeroesFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: HeroState | undefined, action: Action) {
  return heroReducer(state, action);
}
