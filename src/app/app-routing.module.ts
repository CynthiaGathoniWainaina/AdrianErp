import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectBoardsComponent} from "./projects/project-boards/project-boards.component";
import {LoginComponent} from "./login/login.component";
import {ProjectDetailsComponent} from "./projects/project-details/project-details.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 path:  'project-details'; component: ProjectDetailsComponent

}
