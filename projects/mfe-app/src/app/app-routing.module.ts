import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostingComponent } from './main/posting/posting.component';

const routes: Routes = [
    { path: '', redirectTo: 'post', pathMatch: 'full'},
    { path: 'post', component: PostingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
