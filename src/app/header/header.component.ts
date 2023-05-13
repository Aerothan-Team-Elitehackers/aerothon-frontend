import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  navigationExtras:NavigationExtras;
  isFabrication = false;
  isSubAssembly = false;
  isAssembly = false;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation!.extras.state as {
      role: string;
    };
    this.navigationExtras = {
      state: {
        role: state.role,
      },
    };
    console.log('User role is ', state.role);
    if (state.role == 'admin') {
      this.isFabrication = true;
      this.isSubAssembly = true;
      this.isAssembly = true;
    }
    else if(state.role =='fabrication'){
      this.isFabrication = true;
    }
    else if(state.role=="sub-assembly"){
      this.isFabrication = true;
      this.isSubAssembly = true;
    }
    else if(state.role=="assembly"){
      this.isSubAssembly = true;
      this.isAssembly = true;
    }
  }
  LogOut(){
    this.isFabrication = false;
  this.isSubAssembly = false;
  this.isAssembly = false;
  this.router.navigate(['/']);
  }

  fabricationRoute(){
    this.router.navigate(['/fabrication'], this.navigationExtras);

  }
  subARoute(){
    this.router.navigate(['/sub-assembly'], this.navigationExtras);

  }
  assemblyRoute(){
    this.router.navigate(['/assembly'], this.navigationExtras);

  }
  
}
