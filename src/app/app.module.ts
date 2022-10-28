import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { TesteComponent } from './pages/teste/teste.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {DataformModule} from "./shared/components/estado-cidade/dataform.module";
import {DropdownService} from "./shared/services/dropdown.service";

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    ReactiveFormsModule,
    FooterModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    DataformModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService,
    DropdownService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
