import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin } from '../../models/userModel';
import { IResponse } from '../../models/responseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoremanagerService {
    private baseURL: string = "http://localhost:3000/storemanager"
  constructor(private http: HttpClient) { }

  login(data:IUserLogin):Observable<IResponse<string>>{
    return this.http.post<IResponse<string>>(`${this.baseURL}/login`,data)
  }
  
}
