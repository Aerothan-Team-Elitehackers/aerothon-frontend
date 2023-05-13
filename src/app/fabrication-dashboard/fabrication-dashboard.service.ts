import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { ComponentsEndPoints } from '../WM.endpoints';

@Injectable({
  providedIn: 'root'
})
export class FabricationDashboardService {

  constructor(private http:HttpClient) { }

  getFabricationTableDetails(): Observable<any> {
    return this.http.post<any>(ComponentsEndPoints.GET_FABRICATION_TABLE.PROD,[]).pipe(
      map((result:any)=>{
        return result;
      })
    );
  }
}
