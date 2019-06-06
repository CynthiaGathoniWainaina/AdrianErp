import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectBoardsComponent } from './projects/project-boards/project-boards.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { CommercialTeamComponent } from './commercial-team/commercial-team.component';
import { ProcurementTeamComponent } from './procurement-team/procurement-team.component';
import { TaskListingComponent } from './civilworks-team/task-listing.component';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';
import {CreateProjectComponent} from './projects/create-project/create-project.component';
import {TaskListingDetailedComponent} from './civilworks-team/task-listing-detailed/task-listing-detailed.component';
import {CommercialTeamFormsComponent} from './commercial-team/commercial-team-forms/commercial-team-forms.component';
import {ApprovedQuoteFormComponent} from './commercial-team/commercial-team-forms/approved-quote-form/approved-quote-form.component';
import {PoFormComponent} from './commercial-team/commercial-team-forms/po-form/po-form.component';
import {ProofFormComponent} from './commercial-team/commercial-team-forms/proof-form/proof-form.component';

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
  {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
