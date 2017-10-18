import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {ReactiveFormsModule} from "@angular/forms";
import { RoutingModule,routingComponents } from './routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,routingComponents
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,Ng2SearchPipeModule,Ng2OrderModule,ReactiveFormsModule,RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
