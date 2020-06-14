import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

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
  on(HeroActions.loadHeroSuccess, (state, { hero }) => heroAdapter.setOne(hero, { ...state, loaded: true, selectedId: hero.id })),
  on(HeroActions.loadHeroFailure, (state, { error }) => ({ ...state, error })),
  on(HeroActions.loadHeroes, (state) => ({ ...state, loaded: false, error: null })),
  on(HeroActions.loadHeroesSuccess, (state, { heroes }) => heroAdapter.setAll(heroes, { ...state, loaded: true })),
  on(HeroActions.loadHeroesFailure, (state, { error }) => ({ ...state, error })),
  on(HeroActions.addHero, (state) => ({ ...state, loaded: false, error: null })),
  on(HeroActions.addHeroSuccess, (state, { hero }) => heroAdapter.addOne(hero, { ...state, loaded: true })),
  on(HeroActions.addHeroFailure, (state, { error }) => ({ ...state, error })),
  on(HeroActions.deleteHero, (state) => ({ ...state, loaded: false, error: null })),
  on(HeroActions.deleteHeroSuccess, (state, { id }) => heroAdapter.removeOne(id, { ...state, loaded: true })),
  on(HeroActions.deleteHeroFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: HeroState | undefined, action: Action) {
  return heroReducer(state, action);
}
