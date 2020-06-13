import { NgModule } from '@angular/core';

import { HeroeDetailRoutingModule } from './heroe-detail-routing.module';
import { HeroeDetailComponent } from './heroe-detail.component';

@NgModule({
  declarations: [HeroeDetailComponent],
  imports: [HeroeDetailRoutingModule],
})
export class HeroeDetailModule {}
