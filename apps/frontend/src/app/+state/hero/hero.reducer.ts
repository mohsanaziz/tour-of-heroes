import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as HeroActions from './hero.actions';
import { HeroEntity } from './hero.models';

export const HERO_FEATURE_KEY = 'hero';

export interface State extends EntityState<HeroEntity> {
  selectedId?: string | number; // which Hero record has been selected
  loaded: boolean; // has the Hero list been loaded
  error?: string | null; // last none error (if any)
}

export interface HeroPartialState {
  readonly [HERO_FEATURE_KEY]: State;
}

export const heroAdapter: EntityAdapter<HeroEntity> = createEntityAdapter<HeroEntity>();

export const initialState: State = heroAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const heroReducer = createReducer(
  initialState,
  on(HeroActions.loadHero, (state) => ({ ...state, loaded: false, error: null })),
  on(HeroActions.loadHeroSuccess, (state, { hero }) => heroAdapter.addAll(hero, { ...state, loaded: true })),
  on(HeroActions.loadHeroFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return heroReducer(state, action);
}
