import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NgCalendarModule  } from 'ionic2-calendar';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntreeComponent } from './entree/entree.component';
import { FormsModule } from '@angular/forms'; // Import 
import { ReactiveFormsModule } from '@angular/forms';
import { Calendar } from '@ionic-native/calendar/ngx'; // Import Calendar
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent,EntreeComponent],
  imports: [BrowserAnimationsModule,HttpClientModule,HttpClientJsonpModule,MatDialogModule,FormsModule,ReactiveFormsModule , NgCalendarModule,BrowserModule, IonicModule.forRoot(),AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Calendar],
  bootstrap: [AppComponent],
})
export class AppModule {}
