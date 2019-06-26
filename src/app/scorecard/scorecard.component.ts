import { Component, OnInit } from '@angular/core';
import {Popup, PopupModule} from 'ng2-opd-popup';

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
          color: 'rgba(0, 0, 0, 0)',
        }
      }],
      yAxes: [{
        gridLines: {
          color: 'rgba(0, 0, 0, 0)',
        }
      }]
    }
  };
  public barChartLabels = ['2000', '2001', '2003', '2004', '2005'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data : ['0', '150000', '300000', '150000', '350000'], label: 'Forecast'},
    {data : ['0', '100000', '200000', '400000', '450000'], label: 'Actual'}
  ];
  public chartColors: Array<any> = [
    { // first color
      backgroundColor: ['#1155ff', '#C9E5FF'],
      border: 'none',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff'
    }];


  constructor(private popup: Popup) { }

  public ShowPopup() {
    this.popup.show(this.popup.options);
    this.popup.options = {
      cancleBtnClass: 'ng2-opd-popup-Button',
      color: '#4180ab',
      header: 'Revenue Detailed Summary'
    };
  }

  ngOnInit() {
  }

}
