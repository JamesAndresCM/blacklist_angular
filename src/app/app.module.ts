import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { BlacklistComponent } from './components/blacklist.component';
import { BlacklistAddComponent } from './components/addblacklist.component';
import { AbuseComponent } from './components/abuses.component';
import { AbuseAddComponent } from './components/addabuse.component';
import { AbuseDetailComponent } from './components/abuse-detail.component';
import { AbuseEditComponent } from './components/abuse-edit.component';
import { DataTableModule } from "angular2-datatable";

//rutas
import { routing,appRoutingProviders } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    BlacklistComponent,
    BlacklistAddComponent,
    AbuseComponent,
    AbuseAddComponent,
    AbuseDetailComponent,
    AbuseEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DataTableModule
  ],
  providers: [
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
