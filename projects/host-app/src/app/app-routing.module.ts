import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AppComponent } from './app.component';

const MAIN_APP_URL = "http://localhost:4203/remoteEntry.js"

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: AppComponent},
  {
    path: 'main',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MAIN_APP_URL,
        remoteName: "mainPageApp",
        exposedModule: "./MainModule"
      }).then((m) => m.MainModule).catch(err => console.error('Error loading MainComponent:', err));
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
