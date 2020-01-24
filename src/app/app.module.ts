import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [ AppComponent, ContactComponent, HomeComponent ],
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
