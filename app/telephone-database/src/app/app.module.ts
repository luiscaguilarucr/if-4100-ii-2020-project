import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineListComponent } from './components/line-list/line-list.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { LineAddComponent } from './components/line-add/line-add.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LineDeleteComponent } from './components/line-delete/line-delete.component';
import { LineUpdateComponent } from './components/line-update/line-update.component';
import { ServiceAddComponent } from './components/service-add/service-add.component';
import { ServiceDeleteComponent } from './components/service-delete/service-delete.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceUpdateComponent } from './components/service-update/service-update.component';
import { CallAddComponent } from './components/call-add/call-add.component';
import { CallDeleteComponent } from './components/call-delete/call-delete.component';
import { CallUpdateComponent } from './components/call-update/call-update.component';
import { CallListComponent } from './components/call-list/call-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LineListComponent,
    LineAddComponent,
    NavbarComponent,
    LineDeleteComponent,
    LineUpdateComponent,
    ServiceAddComponent,
    ServiceDeleteComponent,
    ServiceListComponent,
    ServiceUpdateComponent,
    CallAddComponent,
    CallDeleteComponent,
    CallUpdateComponent,
    CallListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
