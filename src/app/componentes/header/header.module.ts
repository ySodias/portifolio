import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbTooltipModule  } from '@nebular/theme';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbTooltipModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
