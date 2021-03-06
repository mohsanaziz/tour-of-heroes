import { createAction, props } from '@ngrx/store';

import { HeroEntity } from './hero.models';

export const loadHero = createAction('[Hero] GET Hero', props<{ id: number }>());
export const loadHeroSuccess = createAction('[Hero] GET Hero Success', props<{ hero: HeroEntity }>());
export const loadHeroFailure = createAction('[Hero] GET Hero Failure', props<{ error: any }>());

export const loadHeroes = createAction('[Hero] GET all heroes');
export const loadHeroesSuccess = createAction('[Hero] GET all heroes Success', props<{ heroes: HeroEntity[] }>());
export const loadHeroesFailure = createAction('[Hero] GET all heroes Failure', props<{ error: any }>());

export const addHero = createAction('[Hero] ADD Hero', props<{ hero: HeroEntity }>());
export const addHeroSuccess = createAction('[Hero] ADD Hero Success', props<{ hero: HeroEntity }>());
export const addHeroFailure = createAction('[Hero] ADD Hero Failure', props<{ error: any }>());

export const deleteHero = createAction('[Hero] DELETE Hero', props<{ id: number }>());
export const deleteHeroSuccess = createAction('[Hero] DELETE Hero Success', props<{ id: number }>());
export const deleteHeroFailure = createAction('[Hero] DELETE Hero Failure', props<{ error: any }>());

export const editHero = createAction('[Hero] PUT Hero', props<{ hero: HeroEntity }>());
export const editHeroSuccess = createAction('[Hero] PUT Hero Success');
export const editHeroFailure = createAction('[Hero] PUT Hero Failure', props<{ error: any }>());
