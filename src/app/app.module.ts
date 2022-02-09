import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './employee/form/form.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'employees', component: FormComponent , pathMatch: 'full'},
  { path: '', redirectTo: '/employees' , pathMatch: 'full'},
  
];
@NgModule({
  declarations: [
    
    AppComponent,
    FormComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
    ,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
