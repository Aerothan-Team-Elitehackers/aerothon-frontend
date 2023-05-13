import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-assembly-dashboard',
  templateUrl: './sub-assembly-dashboard.component.html',
  styleUrls: ['./sub-assembly-dashboard.component.css']
})
export class SubAssemblyDashboardComponent {
  isSubAssembly=false;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as {
      role: string;
    };
    
    console.log('User role is ', state.role);
    if (state.role == 'sub-assembly') {
      
      this.isSubAssembly = true;
     
    }
   
  }
  ngOnInit(){
    document.getElementById("ModalToEdit")!.style.display="none";
    document.getElementById("subAssemblyStyle")!.style.filter="unset";
  }
 OpenModal(){
  document.getElementById("ModalToEdit")!.style.display="block";
  document.getElementById("subAssemblyStyle")!.style.filter="blur(2px)";
 }

 closeModal(){
  document.getElementById("ModalToEdit")!.style.display="none";
  document.getElementById("subAssemblyStyle")!.style.filter="unset";
 }
}
