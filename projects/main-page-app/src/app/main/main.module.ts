import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PrimengModule } from '../primeng/primeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PluginProxyComponent } from '../plugins/plugin-proxy.component';

@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    PluginProxyComponent,
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
