import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent // The Default Route
  },
  {
    path: 'dashboard',
    component: DashboardComponent // The Dashboard Route
  },
  {
    path: 'register',
    component: RegisterComponent // The Register Route
  },
  {
    path: 'login',
    component: LoginComponent // Login Route
  },
  {
    path: 'profile',
    component: ProfileComponent // Profile Route
  },
  { path: '**', component: HomeComponent } // The "Catch-All" Route
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
