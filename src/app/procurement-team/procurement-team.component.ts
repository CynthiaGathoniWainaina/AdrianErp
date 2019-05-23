import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procurement-team',
  templateUrl: './procurement-team.component.html',
  styleUrls: ['./procurement-team.component.sass']
})
export class ProcurementTeamComponent implements OnInit {

  team = 'Procurement Team';
  constructor() { }

  ngOnInit() {
  }

}
