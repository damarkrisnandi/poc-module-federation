import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PostingComponent } from './posting/posting.component';

@NgModule({
  declarations: [
    PostingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostingComponent 
      }
    ])
  ],
  providers: [DatePipe],
})
export class MainModule {}
