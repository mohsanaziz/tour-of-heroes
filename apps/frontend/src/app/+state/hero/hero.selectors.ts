import { createFeatureSelector, createSelector } from '@ngrx/store';
import { heroAdapter, HeroState, HERO_FEATURE_KEY } from './hero.reducer';

// Lookup the 'Hero' feature state managed by NgRx
export const getHeroState = createFeatureSelector<HeroState>(HERO_FEATURE_KEY);

const { selectAll } = heroAdapter.getSelectors();

export const getHeroes = createSelector(getHeroState, selectAll);
export const getHero = createSelector(getHeroState, (state: HeroState) => state.hero);
