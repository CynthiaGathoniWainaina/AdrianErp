import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { TaskListingComponent } from './civilworks-team/task-listing.component';
import { TaskListingDetailedComponent } from './civilworks-team/task-listing-detailed/task-listing-detailed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectBoardsComponent } from './projects/project-boards/project-boards.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationServiceService } from './shared/services/authentication-service.service';
import { GetprojectsService } from './shared/services/getprojects.service';
import { FetchtasksService } from './shared/services/fetchtasks.service';
import { CommercialTeamComponent } from './commercial-team/commercial-team.component';
import { ProcurementTeamComponent } from './procurement-team/procurement-team.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TaskListingComponent,
    TaskListingDetailedComponent,
    ProjectBoardsComponent,
    ProjectDetailsComponent,
    CommercialTeamComponent,
    ProcurementTeamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthenticationServiceService, GetprojectsService, FetchtasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
