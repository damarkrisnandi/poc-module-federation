import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactPageComponent 
      }
    ])
  ],
  providers: [DatePipe],
})
export class ContactModule {}
