import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { FabricationDashboardService } from './fabrication-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fabrication-dashboard',
  templateUrl: './fabrication-dashboard.component.html',
  styleUrls: ['./fabrication-dashboard.component.css']
})
export class FabricationDashboardComponent {
public isAdmin=true;
public  chart: any;
public isFE=false;
constructor(private fabricationDashboardService:FabricationDashboardService,private router: Router){
  const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as {
      role: string;
    };
    
    console.log('User role is ', state.role);
    if (state.role == 'fabrication') {
      
      this.isFE = true;
     
    }
}
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


  this.fabricationDashboardService.getFabricationTableDetails().subscribe((response)=>{
    console.log(response)
  })

}
}
