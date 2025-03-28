import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    CommonModule,
    PanelMenuModule
  ],
  exports: [
    MainMenuComponent
  ]
})
export class MainMenuModule { }
