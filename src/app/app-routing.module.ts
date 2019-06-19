import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectBoardsComponent } from './projects/project-boards/project-boards.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { CommercialTeamComponent } from './commercial-team/commercial-team.component';
import { ProcurementTeamComponent } from './procurement-team/procurement-team.component';
import { TaskListingComponent } from './tasks/task-listing.component';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';
import {CreateProjectComponent} from './projects/create-project/create-project.component';
import {TaskListingDetailedComponent} from './tasks/task-listing-detailed/task-listing-detailed.component';
import {CommercialTeamFormsComponent} from './commercial-team/commercial-team-forms/commercial-team-forms.component';
import {ApprovedQuoteFormComponent} from './commercial-team/commercial-team-forms/approved-quote-form/approved-quote-form.component';
import {PoFormComponent} from './commercial-team/commercial-team-forms/po-form/po-form.component';
import {ProofFormComponent} from './commercial-team/commercial-team-forms/proof-form/proof-form.component';
import {SteelCostFormComponent} from './procurement-team/procurement-team-forms/steel-cost-form/steel-cost-form.component';
import {ElectricalMaterialCostFormComponent} from './procurement-team/procurement-team-forms/electrical-material-cost-form/electrical-material-cost-form.component';
import {SubcontractorsFormComponent} from './procurement-team/procurement-team-forms/subcontractors-form/subcontractors-form.component';
import {ApprovalFormComponent} from './procurement-team/procurement-team-forms/approval-form/approval-form.component';
import {MonitoringComponent} from './monitoring/monitoring.component';
import {CivilworksTasksComponent} from "./civilworks-team/civilworks-tasks/civilworks-tasks.component";
import {AntennaSubtasksComponent} from "./civilworks-team/antenna-subtasks/antenna-subtasks.component";
import {TowerfoundationSubtasksComponent} from "./civilworks-team/towerfoundation-subtasks/towerfoundation-subtasks.component";
import {BoundarywallSubtasksComponent} from "./civilworks-team/boundarywall-subtasks/boundarywall-subtasks.component";
import {Bs241SubtasksComponent} from "./civilworks-team/bs241-subtasks/bs241-subtasks.component";
import {InstallationTeamComponent} from "./installation-team/installation-team.component";
import {ElectricalSubtasksComponent} from "./installation-team/installationteam-subtasks/electrical-subtasks/electrical-subtasks.component";
import {BtsSubtasksComponent} from "./installation-team/installationteam-subtasks/bts-subtasks/bts-subtasks.component";

const routes: Routes = [
  {path: '', component: ProjectBoardsComponent },
  {path: 'login', component: LoginComponent },
  {path: 'teams', component: ProjectDetailsComponent },
  {path: 'tasks', component: TaskListingComponent },
  {path: 'task-details', component: TaskListingDetailedComponent},
  {path: 'create', component: CreateProjectComponent },
  {path: 'teams/commercial',  component: CommercialTeamComponent},
  {path: 'teams/commercialforms/project-costing',  component: CommercialTeamFormsComponent},
  {path: 'teams/commercialforms/approved-quote', component: ApprovedQuoteFormComponent},
  {path: 'teams/commercialforms/po', component: PoFormComponent},
  {path: 'teams/commercialforms/proof', component: ProofFormComponent},
  {path: 'teams/procurement', component: ProcurementTeamComponent},
  {path: 'teams/procurement/steel', component: SteelCostFormComponent},
  {path: 'teams/procurement/electrical', component: ElectricalMaterialCostFormComponent},
  {path: 'teams/procurement/subcontractors', component: SubcontractorsFormComponent},
  {path: 'teams/procurement/approval', component: ApprovalFormComponent},
  {path: 'teams/civilworks/tasks', component: CivilworksTasksComponent},
  {path: 'teams/civilworks/subtasks/towerfoundation', component: TowerfoundationSubtasksComponent},
  {path: 'teams/civilworks/subtasks/bs241', component: Bs241SubtasksComponent},
  {path: 'teams/civilworks/subtasks/boundary', component: BoundarywallSubtasksComponent},
  {path: 'teams/civilworks/subtasks/antenna', component: AntennaSubtasksComponent},
  {path: 'teams/installation/tasks', component: InstallationTeamComponent},
  {path: 'teams/installation/subtasks/electrical', component: ElectricalSubtasksComponent},
  {path: 'teams/installation/subtasks/bts', component: BtsSubtasksComponent},
  {path: 'monitoring', component: MonitoringComponent},
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
