import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectBoardsComponent} from "./projects/project-boards/project-boards.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 path:  'project-boards'; component: ProjectBoardsComponent


}
