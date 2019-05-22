import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectBoardsComponent} from "./projects/project-boards/project-boards.component";
import {LoginComponent} from "./login/login.component";
import {ProjectDetailsComponent} from "./projects/project-details/project-details.component";
import {Projects} from "@angular/cli/lib/config/schema";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'projects', component: ProjectBoardsComponent},
  {path:  'project-details', component: ProjectDetailsComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
