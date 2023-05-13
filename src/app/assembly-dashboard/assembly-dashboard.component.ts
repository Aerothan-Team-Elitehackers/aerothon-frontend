import { Component } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-assembly-dashboard',
  templateUrl: './assembly-dashboard.component.html',
  styleUrls: ['./assembly-dashboard.component.css'],
})
export class AssemblyDashboardComponent {
  public chart1: any;
  ngOnInit(){
    this.chart1 = new Chart('MyChart1', {
      type: 'pie', //this denotes tha type of chart
  
      data: {
        // values on X-Axis
        labels: [
          '#33567F',
          '#416C9F',
          '#4C7DB7',
          '#8AA3CC',
          '#A3B5D4',
          '#CCD5E6',
        ],
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 240, 100, 432, 253, 34],
            backgroundColor: [
              '#33567F',
              '#416C9F',
              '#4C7DB7',
              '#8AA3CC',
              '#A3B5D4',
              '#CCD5E6',
            ],
          },
        ],
      },
      options: {
        aspectRatio: 5,
      },
    });
  }
}
