import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AlertModule } from 'ngx-bootstrap';
import { ContainersComponent } from './containers/containers.component';
import { ItemsComponent } from './containers/items/items.component';
import { WorkersComponent } from './containers/workers/workers.component';
import { RegisterComponent } from './containers/register/register.component';
import { FormComponent } from './containers/register/form/form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainersComponent,
    ItemsComponent,
    WorkersComponent,
    RegisterComponent,
    FormComponent,
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
