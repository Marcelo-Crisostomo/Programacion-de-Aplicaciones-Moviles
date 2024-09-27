import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtegidaPage } from './protegida.page';

const routes: Routes = [
  {
    path: '',
    component: ProtegidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtegidaPageRoutingModule {}
