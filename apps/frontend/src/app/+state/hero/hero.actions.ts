import { createAction, props } from '@ngrx/store';
import { HeroEntity } from './hero.models';

export const loadHero = createAction('[Hero] GET Hero', props<{ id: number }>());
export const loadHeroSuccess = createAction('[Hero] GET Hero Success', props<{ hero: HeroEntity }>());
export const loadHeroFailure = createAction('[Hero] GET Hero Failure', props<{ error: any }>());

export const loadHeroes = createAction('[Hero] GET all heroes');
export const loadHeroesSuccess = createAction('[Hero] GET all heroes Success', props<{ hero: HeroEntity[] }>());
export const loadHeroesFailure = createAction('[Hero] GET all heroes Failure', props<{ error: any }>());
