import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./hero/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./hero/heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'hero-detail/:id',
    loadChildren: () => import('./hero/hero-detail/hero-detail.module').then((m) => m.HeroDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
