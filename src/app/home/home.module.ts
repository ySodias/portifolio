import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component'
import { HeaderModule } from '../componentes/header/header.module';
import { NbCardModule, NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    NbCardModule,
    NbLayoutModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
