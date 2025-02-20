import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { CommonModule, DatePipe } from '@angular/common';
import { PrimengModule } from './primeng/primeng.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    // MainPageComponent,
    // ContactPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MainModule,
    ContactModule,
    PrimengModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
