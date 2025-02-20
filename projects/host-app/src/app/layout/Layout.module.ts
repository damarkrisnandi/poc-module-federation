import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    // TopBarComponent
  ],
  imports: [
    MenubarModule
  ]
})
export class LayoutModule {}
