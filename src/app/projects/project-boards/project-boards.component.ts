import { Component, OnInit } from '@angular/core';
import {Project} from "../../shared/models/project";
import {GetprojectsService} from "../../shared/services/getprojects.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-boards',
  templateUrl: './project-boards.component.html',
  styleUrls: ['./project-boards.component.sass']
})
export class ProjectBoardsComponent implements OnInit {
  project$: Project[];

  constructor(
    private router: Router,
    private getProjectsService: GetprojectsService
  ) {

  }

  ngOnInit() {
    return this.getProjectsService.getProjects()
      .subscribe(onloadeddata => this.project$ = onloadeddata)
  }

}
