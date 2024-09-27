import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoEncontradoPageRoutingModule } from './no-encontrado-routing.module';

import { NoEncontradoPage } from './no-encontrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoEncontradoPageRoutingModule
  ],
  declarations: [NoEncontradoPage]
})
export class NoEncontradoPageModule {}
