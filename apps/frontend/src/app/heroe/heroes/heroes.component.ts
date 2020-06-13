import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor(private heroeService: HeroeService) {}

  ngOnInit(): void {
    this.heroes$ = this.heroeService.getHeroes();
  }
}
