import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(){
    document.getElementById("errorText")!.style.display="none"
  }
  password: any;
  flag=false;
  userrole: any;
  username: any;
  roles = [
    {
      username: 'admin',
      password: 'admin',
      role: 'admin',
    },
    {
      username: 'fe01',
      password: 'fe01',
      role: 'fabrication',
    },
    {
      username: 'sa01',
      password: 'sa01',
      role: 'sub-assembly',
    },
    {
      username: 'as01',
      password: 'as01',
      role: 'assembly',
    },
  ];

  LogIn(username: string, password: string) {
    // this.router.navigate(['/heroes', { id: heroId }]);
    for (let i = 0; i < this.roles.length; i++) {
      if (
        this.roles[i].username == username &&
        this.roles[i].password == password
      ) {
        this.userrole = this.roles[i].role;
        const navigationExtras: NavigationExtras = {
          state: {
            role: this.userrole,
          },
        };
        if (this.userrole == 'admin' || this.userrole == 'fabrication') {
          this.router.navigate(['/fabrication'], navigationExtras);
          this.flag=true
        }
        else if(this.userrole == 'sub-assembly'){
          this.router.navigate(['/sub-assembly'], navigationExtras);
          this.flag=true
        }
        else if(this.userrole == 'assembly'){
          this.router.navigate(['/assembly'], navigationExtras);
          this.flag = true
        }
      }
    }
    if(this.flag != true){
      document.getElementById("errorText")!.style.display="block"
    }

    // this.router.navigate(['/fabrication'])
  }
}
