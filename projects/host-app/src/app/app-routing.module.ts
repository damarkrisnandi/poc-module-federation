import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AppComponent } from './app.component';

const MAIN_APP_URL = "http://localhost:4203/remoteEntry.js"

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  {
    path: 'main',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MAIN_APP_URL,
        remoteName: "mainPageApp",
        exposedModule: "./MainModule"
      }).then(m => m.MainModule).catch(err => console.error('Error loading MainComponent:', err));
    }
  },
  {
    path: 'contact',
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: MAIN_APP_URL,
        remoteName: "mainPageApp",
        exposedModule: "./ContactModule"
      }).then(m => m.ContactModule).catch(err => console.error('Error loading ContactComponent:', err));
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
