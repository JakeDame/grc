import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component'; 

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
    appRoutes, 
    { enableTracing: true }
    ),
    BrowserModule ],
  declarations: [ AppComponent, HomeComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
