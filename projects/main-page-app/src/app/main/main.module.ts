import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainPageComponent 
      }
    ])
  ],
  providers: [DatePipe],
})
export class MainModule {}
