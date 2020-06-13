import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'maz-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroeDetailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
