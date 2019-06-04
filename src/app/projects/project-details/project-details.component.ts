import { Component, OnInit } from '@angular/core';
import { FetchtasksService } from '../../shared/services/fetchtasks.service';
import { GetprojectsService } from '../../shared/services/getprojects.service';
import { Commercialtask } from '../../shared/models/commercialtask';
import { Commercialprogress } from '../../shared/models/commercialprogress';
import { TaskprogressService } from '../../shared/services/taskprogress.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.sass']
})
export class ProjectDetailsComponent implements OnInit {

  value: number;
  digit: number;
  random: number;
  item: any;

  commercialteam = 'Commercial Team';
  procurementteam = 'Procurement Team';
  civilteam = 'Civil Team';
  task$: Commercialtask[];

  constructor(
    private getProjectsService: GetprojectsService,
    private fetchTaskService: FetchtasksService,
    private taskProgressService: TaskprogressService
  ) { }

  ngOnInit() {
   this.taskOneProgress();
   this.taskTwoProgress();
   this.taskThreeProgress();
  }

  taskOneProgress() {
    return this.taskProgressService.getTaskOneProgress()
    .subscribe(data => this.value = data.progress);
  }
   taskTwoProgress() {
   return this.taskProgressService.getTaskTwoProgress()
    .subscribe(data => this.digit = data.progress);
  }
  taskThreeProgress() {
    return this.taskProgressService.getTaskThreeProgress()
     .subscribe(data => this.random = data.progress);
   }

}
