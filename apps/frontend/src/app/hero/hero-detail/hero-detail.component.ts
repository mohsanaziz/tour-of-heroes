import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { loadHero } from '../../+state/hero/hero.actions';
import { HeroEntity } from '../../+state/hero/hero.models';
import { HeroState } from '../../+state/hero/hero.reducer';
import { getHero } from '../../+state/hero/hero.selectors';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'maz-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  public hero$: Observable<HeroEntity>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private store: Store<HeroState>
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.store.dispatch(loadHero({ id }));
    this.hero$ = this.store.pipe(select(getHero));
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
  save(hero: Hero): void {
    this.heroService.editHero(hero).subscribe(() => this.back());
  }
}
