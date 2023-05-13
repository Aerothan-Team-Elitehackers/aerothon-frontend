import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ComponentsEndPoints } from '../WM.endpoints';

@Injectable({
  providedIn: 'root'
})
export class AssemblyDashboardService {

  constructor(private http:HttpClient) { }
  getAssemblyTableDetails(): Observable<any> {
    return this.http.get<any>(ComponentsEndPoints.GET_ASSEMBLY_TABLE.PROD).pipe(
      map((result:any)=>{
        return result;
      })
    );
    
  }
}
