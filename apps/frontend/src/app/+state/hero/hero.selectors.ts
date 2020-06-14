import { createFeatureSelector, createSelector } from '@ngrx/store';

import { heroAdapter, HeroState, HERO_FEATURE_KEY } from './hero.reducer';

// Lookup the 'Hero' feature state managed by NgRx
export const getHeroState = createFeatureSelector<HeroState>(HERO_FEATURE_KEY);

const { selectAll, selectEntities } = heroAdapter.getSelectors();

const getHeroEntities = createSelector(getHeroState, selectEntities);

export const getHeroes = createSelector(getHeroState, selectAll);
export const getHero = createSelector(getHeroEntities, getHeroState, (entities, state) => state.selectedId && entities[state.selectedId]);
