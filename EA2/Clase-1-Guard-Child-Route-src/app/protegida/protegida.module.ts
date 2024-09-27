import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtegidaPageRoutingModule } from './protegida-routing.module';

import { ProtegidaPage } from './protegida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtegidaPageRoutingModule
  ],
  declarations: [ProtegidaPage]
})
export class ProtegidaPageModule {}
