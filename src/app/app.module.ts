import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { TaskListingComponent } from './task-listing/task-listing.component';
import { TaskListingDetailedComponent } from './task-listing/task-listing-detailed/task-listing-detailed.component';
import {FormsModule} from "@angular/forms";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectBoardsComponent } from './projects/project-boards/project-boards.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskListingComponent,
    TaskListingDetailedComponent,
    ProjectBoardsComponent,
    ProjectDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent, ProjectDetailsComponent]
})
export class AppModule { }
