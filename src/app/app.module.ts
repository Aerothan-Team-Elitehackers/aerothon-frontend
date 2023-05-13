import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabricationDashboardComponent } from './fabrication-dashboard/fabrication-dashboard.component';
import { SubAssemblyDashboardComponent } from './sub-assembly-dashboard/sub-assembly-dashboard.component';
import { AssemblyDashboardComponent } from './assembly-dashboard/assembly-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FabricationDashboardComponent,
    SubAssemblyDashboardComponent,
    AssemblyDashboardComponent,
    AdminDashboardComponent,
    HeaderComponent,
    LoginPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
