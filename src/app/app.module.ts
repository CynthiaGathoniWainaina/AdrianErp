import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { TaskListingComponent } from './tasks/task-listing.component';
import { TaskListingDetailedComponent } from './tasks/task-listing-detailed/task-listing-detailed.component';
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
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { CommercialTeamFormsComponent } from './commercial-team/commercial-team-forms/commercial-team-forms.component';
import { ApprovedQuoteFormComponent } from './commercial-team/commercial-team-forms/approved-quote-form/approved-quote-form.component';
import { PoFormComponent } from './commercial-team/commercial-team-forms/po-form/po-form.component';
import { ProofFormComponent } from './commercial-team/commercial-team-forms/proof-form/proof-form.component';
import { SteelCostFormComponent } from './procurement-team/procurement-team-forms/steel-cost-form/steel-cost-form.component';
import { ElectricalMaterialCostFormComponent } from './procurement-team/procurement-team-forms/electrical-material-cost-form/electrical-material-cost-form.component';
import { SubcontractorsFormComponent } from './procurement-team/procurement-team-forms/subcontractors-form/subcontractors-form.component';
import { ApprovalFormComponent } from './procurement-team/procurement-team-forms/approval-form/approval-form.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import {ChartsModule} from 'ng2-charts';
import { CivilworksTasksComponent } from './civilworks-team/civilworks-tasks/civilworks-tasks.component';
import { TowerfoundationSubtasksComponent } from './civilworks-team/towerfoundation-subtasks/towerfoundation-subtasks.component';
import { Bs241SubtasksComponent } from './civilworks-team/bs241-subtasks/bs241-subtasks.component';
import { BoundarywallSubtasksComponent } from './civilworks-team/boundarywall-subtasks/boundarywall-subtasks.component';
import { AntennaSubtasksComponent } from './civilworks-team/antenna-subtasks/antenna-subtasks.component';
import {SidebarModule} from "ng-sidebar";
import { SidebarComponent } from './sidebar/sidebar.component';
import { InstallationTeamComponent } from './installation-team/installation-team.component';
import { ElectricalSubtasksComponent } from './installation-team/installationteam-subtasks/electrical-subtasks/electrical-subtasks.component';
import { BtsSubtasksComponent } from './installation-team/installationteam-subtasks/bts-subtasks/bts-subtasks.component';

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
    CreateProjectComponent,
    CommercialTeamFormsComponent,
    ApprovedQuoteFormComponent,
    PoFormComponent,
    ProofFormComponent,
    SteelCostFormComponent,
    ElectricalMaterialCostFormComponent,
    SubcontractorsFormComponent,
    ApprovalFormComponent,
    MonitoringComponent,
    CivilworksTasksComponent,
    TowerfoundationSubtasksComponent,
    Bs241SubtasksComponent,
    BoundarywallSubtasksComponent,
    AntennaSubtasksComponent,
    SidebarComponent,
    InstallationTeamComponent,
    ElectricalSubtasksComponent,
    BtsSubtasksComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule,
    SidebarModule
  ],
  providers: [AuthenticationServiceService, GetprojectsService, FetchtasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
