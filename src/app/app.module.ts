import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { ContainersComponent } from './containers/containers.component';
import { MainComponent } from './containers/Main/main.component';
import { RegisterComponent } from './containers/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainersComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
