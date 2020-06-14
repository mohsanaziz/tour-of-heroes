import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { addHero, loadHeroes } from '../../+state/hero/hero.actions';
import { HeroEntity } from '../../+state/hero/hero.models';
import { HeroState } from '../../+state/hero/hero.reducer';
import { getHeroes } from '../../+state/hero/hero.selectors';
import { HeroService } from '../hero.service';

@Component({
  selector: 'maz-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  public heroes$: Observable<HeroEntity[]>;
  public heroName: string;

  constructor(private heroService: HeroService, private changeDetectorRef: ChangeDetectorRef, private store: Store<HeroState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadHeroes());
    this.heroes$ = this.store.pipe(select(getHeroes));
  }

  /**
   * Add a hero.
   */
  addHero(): void {
    if (!this.heroName) {
      return;
    }
    this.store.dispatch(addHero({ hero: { name: this.heroName } as HeroEntity }));
    this.heroName = '';
  }

  /**
   * Delete a hero.
   *
   * @param id id of the hero.
   */
  deleteHero(id: number) {
    this.heroService.deleteHero(id).subscribe(() => {
      this.store.dispatch(loadHeroes());
      this.heroes$ = this.store.pipe(select(getHeroes));
      this.changeDetectorRef.markForCheck();
    });
  }
}
