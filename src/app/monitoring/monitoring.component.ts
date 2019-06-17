import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.sass']
})
export class MonitoringComponent implements OnInit {

  public doughnutChartOptions = {cutoutPercentage: 80};
  public doughnutChartLabels = ['Open', 'Closed'];
  public doughnutChartType = 'doughnut';
  public doughnutChartData = [120, 66];
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: ['#1E90FF', '#C9E5FF', '#coffee'],
      border: 'none',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2000', '2001', '2003'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data : ['0', '100000', '200000'], label: 'Expenses'},
    {data : ['0', '150000', '300000'], label: 'Budget'}
  ];



  constructor() { }

  ngOnInit() {
  }

}
