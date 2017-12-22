import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatIcon, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { icon } from 'material-design-icons';


import { AppComponent } from './app.component';
import { NavBarModule } from './components/navbar/navbar.component';
import { AppRoutes } from './routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    NavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
