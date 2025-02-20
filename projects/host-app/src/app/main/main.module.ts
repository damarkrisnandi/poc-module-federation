import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FieldsetModule } from 'primeng/fieldset';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    // HomeComponent
  ],
  imports: [
    BrowserModule,
    FieldsetModule
  ],
})
export class MainModule { }
