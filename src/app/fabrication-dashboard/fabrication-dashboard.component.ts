import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-fabrication-dashboard',
  templateUrl: './fabrication-dashboard.component.html',
  styleUrls: ['./fabrication-dashboard.component.css']
})
export class FabricationDashboardComponent {
public isAdmin=true;
public  chart: any;


ngOnInit() {
  this.chart= new Chart('MyChart', {
    type: 'bar', //this denotes tha type of chart

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
      aspectRatio:2.5,
    },
  });

}
}
