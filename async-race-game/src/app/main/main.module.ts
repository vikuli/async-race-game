import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageComponent } from './garage/garage.component';
import { WinnersComponent } from './winners/winners.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'garage',
    component: GarageComponent,
  },
  {
    path: 'winners',
    component: WinnersComponent,
  },
  {
    path: '**',
    redirectTo: '/garage',
  },
];

@NgModule({
  declarations: [GarageComponent, WinnersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MainModule {}
