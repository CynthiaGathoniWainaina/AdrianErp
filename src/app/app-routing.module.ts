import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectBoardsComponent } from './projects/project-boards/project-boards.component';
import { LoginComponent } from './login/login.component';
import { ProjectDetailsComponent } from './projects/project-details/project-details.component';
import { CommercialTeamComponent } from './commercial-team/commercial-team.component';
import { ProcurementTeamComponent } from './procurement-team/procurement-team.component';
import { TaskListingComponent } from './civilworks-team/task-listing.component';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  {path: '', component: ProjectBoardsComponent },
  {path: 'login', component: LoginComponent },
  {path: 'teams', component: ProjectDetailsComponent },
  {path: 'tasks', component: TaskListingComponent },
  {path: 'teams/commercial',  component: CommercialTeamComponent},
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
