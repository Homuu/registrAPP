import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginprofePageRoutingModule } from './loginprofe-routing.module';

import { LoginprofePage } from './loginprofe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginprofePageRoutingModule
  ],
  declarations: [LoginprofePage]
})
export class LoginprofePageModule {}
