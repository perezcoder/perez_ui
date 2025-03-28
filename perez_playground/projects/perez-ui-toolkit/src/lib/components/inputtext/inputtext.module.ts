import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputtextComponent } from './inputtext.component';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [InputtextComponent],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [
    InputtextComponent
  ]
})
export class InputtextModule { }
