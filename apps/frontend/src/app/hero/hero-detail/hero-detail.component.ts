import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { editHero, loadHero } from '../../+state/hero/hero.actions';
import { HeroEntity } from '../../+state/hero/hero.models';
import { HeroState } from '../../+state/hero/hero.reducer';
import { getHero } from '../../+state/hero/hero.selectors';

@Component({
  selector: 'maz-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  public hero$: Observable<HeroEntity>;
  public heroName: string;

  constructor(private activatedRoute: ActivatedRoute, private location: Location, private store: Store<HeroState>) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch(loadHero({ id }));
    this.hero$ = this.store.pipe(
      select(getHero),
      tap((hero: HeroEntity) => (this.heroName = hero?.name))
    );
  }

  /**
   * Go bakc to the last page.
   */
  back(): void {
    this.location.back();
  }

  /**
   * Save the edited hero.
   *
   * @param hero The hero.
   */
  save(hero: HeroEntity): void {
    const heroToUpdate = { ...hero, name: this.heroName };

    this.store.dispatch(editHero({ hero: heroToUpdate }));
    this.back();
  }
}
