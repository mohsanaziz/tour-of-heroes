import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Heroe } from '../heroe.model';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'maz-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroeDetailComponent implements OnInit {
  public hero$: Observable<Heroe>;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroeService, private location: Location) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.hero$ = this.heroeService.getHeroe(id);
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
  save(hero: Heroe): void {
    this.heroeService.editHero(hero).subscribe(() => this.back());
  }
}
