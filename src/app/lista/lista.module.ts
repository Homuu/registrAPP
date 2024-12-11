import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPageRoutingModule } from './lista-routing.module';

import { ListaPage } from './lista.page';

import { QRCodeModule } from 'angularx-qrcode'; 

@NgModule({
  imports: [
    QRCodeModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPageRoutingModule
  ],
  declarations: [ListaPage]
})
export class ListaPageModule {}
