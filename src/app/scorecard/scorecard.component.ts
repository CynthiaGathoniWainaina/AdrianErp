import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.sass']
})
export class ScorecardComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true,
    scales: {
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
        }
      }]
    }
  };
  public barChartLabels = ['2000', '2001', '2003','2004', '2005'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data : ['0', '150000', '300000', '500000', '350000'], label: 'Forecast'},
    {data : ['0', '100000', '200000', '400000', '450000'], label: 'Actual'}
  ];
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: ['#1E90FF', '#C9E5FF'],
      border: 'none',
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    }];


  constructor() { }

  ngOnInit() {
  }

}
