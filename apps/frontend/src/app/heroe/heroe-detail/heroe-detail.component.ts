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
  public heroe$: Observable<Heroe>;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroeService) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroe$ = this.heroeService.getHeroe(id);
  }
}
