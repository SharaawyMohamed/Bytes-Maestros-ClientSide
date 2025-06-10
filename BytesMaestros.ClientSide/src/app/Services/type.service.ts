import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITypeResponse } from '../Modules/itype-response';
import { environment } from '../../Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
constructor(private http:HttpClient){}
  getTypes() {
    return this.http.get<ITypeResponse>(`${environment.baseURL}Type`);
  }
}
