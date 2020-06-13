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
    loadChildren: () => import('./heroe/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroe/heroes/heroes.module').then((m) => m.HeroesModule),
  },
  {
    path: 'heroe-detail/:id',
    loadChildren: () => import('./heroe/heroe-detail/heroe-detail.module').then((m) => m.HeroeDetailModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
