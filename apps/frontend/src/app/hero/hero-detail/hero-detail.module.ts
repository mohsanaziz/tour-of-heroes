import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { HeroDetailRoutingModule } from './hero-detail-routing.module';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [HeroDetailRoutingModule, SharedModule],
})
export class HeroDetailModule {}
