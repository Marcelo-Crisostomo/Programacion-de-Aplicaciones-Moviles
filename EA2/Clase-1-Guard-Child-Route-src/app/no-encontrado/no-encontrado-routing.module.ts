import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoEncontradoPage } from './no-encontrado.page';

const routes: Routes = [
  {
    path: '',
    component: NoEncontradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoEncontradoPageRoutingModule {}
