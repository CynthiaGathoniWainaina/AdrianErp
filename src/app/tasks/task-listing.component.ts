import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.sass']
})
export class TaskListingComponent implements OnInit {

  team = 'Civil Works Team';

  constructor() { }

  ngOnInit() {
  }

}
