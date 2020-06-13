import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'maz-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  public heroes$: Observable<Hero[]>;
  public heroName: string;

  constructor(private heroService: HeroService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.heroes$ = this.heroService.getHeroes();
  }

  /**
   * Add a hero.
   */
  addHero(): void {
    if (!this.heroName) {
      return;
    }
    this.heroService.addHero({ name: this.heroName }).subscribe(() => {
      this.heroes$ = this.heroService.getHeroes();
      this.changeDetectorRef.markForCheck();
    });
    this.heroName = '';
  }

  /**
   * Delete a hero.
   *
   * @param id id of the hero.
   */
  deleteHero(id: number) {
    this.heroService.deleteHero(id).subscribe(() => {
      this.heroes$ = this.heroService.getHeroes();
      this.changeDetectorRef.markForCheck();
    });
  }
}
