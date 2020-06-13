import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'maz-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent implements OnInit {
  public hero$: Observable<Hero>;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService, private location: Location) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.hero$ = this.heroService.getHero(id);
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
