import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HeroeDetailRoutingModule } from './heroe-detail-routing.module';
import { HeroeDetailComponent } from './heroe-detail.component';

@NgModule({
  declarations: [HeroeDetailComponent],
  imports: [HeroeDetailRoutingModule, SharedModule],
})
export class HeroeDetailModule {}
