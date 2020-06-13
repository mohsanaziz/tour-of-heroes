import { createAction, props } from '@ngrx/store';
import { HeroEntity } from './hero.models';

export const loadHero = createAction('[Hero] Load Hero');

export const loadHeroSuccess = createAction('[Hero] Load Hero Success', props<{ hero: HeroEntity[] }>());

export const loadHeroFailure = createAction('[Hero] Load Hero Failure', props<{ error: any }>());
