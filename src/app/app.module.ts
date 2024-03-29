import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginService } from './common/login.service';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
