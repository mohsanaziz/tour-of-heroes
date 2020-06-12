import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';

@NgModule({
  exports: [CommonModule, MaterialModule, RouterModule],
})
export class SharedModule {}
