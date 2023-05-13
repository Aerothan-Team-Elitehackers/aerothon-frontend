import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssemblyDashboardComponent } from './assembly-dashboard/assembly-dashboard.component';
import { FabricationDashboardComponent } from './fabrication-dashboard/fabrication-dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SubAssemblyDashboardComponent } from './sub-assembly-dashboard/sub-assembly-dashboard.component';

const routes: Routes = [{
  path:"fabrication",component:FabricationDashboardComponent
},
{
  path:"",component:LoginPageComponent
},
{
  path:"sub-assembly",component:SubAssemblyDashboardComponent
},
{
  path:"assembly",component:AssemblyDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
