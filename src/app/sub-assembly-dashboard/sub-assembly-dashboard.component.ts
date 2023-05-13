import { Component } from '@angular/core';

@Component({
  selector: 'app-sub-assembly-dashboard',
  templateUrl: './sub-assembly-dashboard.component.html',
  styleUrls: ['./sub-assembly-dashboard.component.css']
})
export class SubAssemblyDashboardComponent {
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
