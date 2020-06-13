import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Heroe } from '../heroe.model';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'maz-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent implements OnInit {
  public heroes$: Observable<Heroe[]>;
  public heroeName: string;

  constructor(private heroeService: HeroeService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.heroes$ = this.heroeService.getHeroes();
  }

  /**
   * Add a heroe.
   */
  addHeroe(): void {
    this.heroeService.addHeroe({ name: this.heroeName }).subscribe(() => {
      this.heroes$ = this.heroeService.getHeroes();
      this.changeDetectorRef.markForCheck();
    });
    this.heroeName = '';
  }
}
