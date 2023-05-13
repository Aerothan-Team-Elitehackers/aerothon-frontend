import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { AssemblyDashboardService } from './assembly-dashboard.service';


@Component({
  selector: 'app-assembly-dashboard',
  templateUrl: './assembly-dashboard.component.html',
  styleUrls: ['./assembly-dashboard.component.css'],
})
export class AssemblyDashboardComponent {
  public chart1: any;
  public assemblies:any;
  constructor(private assemblyDashboardService: AssemblyDashboardService){}
  ngOnInit(){
    
    this.chart1 = new Chart('MyChart1', {
      type: 'pie', //this denotes tha type of chart
  
      data: {
        // values on X-Axis
        labels: [
          'Component Integration',
          'Electrical Testing',
          'Compliance',
          'Pivot Dome',
          'Module',
          'Brake Assembly',
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

    this.assemblyDashboardService.getAssemblyTableDetails().subscribe((response)=>{
      console.log(response)
      this.assemblies = response
      for(let i = 0;i<this.assemblies.length;i++){

        // this.assemblies[i].assembly_id = this.assemblies[i].assembly_id.slice(-4)
        // this.assemblies[i].created_at = this.assemblies[i].created_at.slice(10)

      }
      console.log(this.assemblies)
    })
  }
}
