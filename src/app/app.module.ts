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
    MonitoringComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [AuthenticationServiceService, GetprojectsService, FetchtasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
