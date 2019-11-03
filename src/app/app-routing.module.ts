import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers/Main/main.component';
import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';


const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
