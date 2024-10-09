import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin } from '../../models/userModel';
import { Observable } from 'rxjs';
import { IResponse } from '../../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private baseURL: string = "http://localhost:3000/admin"
  constructor(private http: HttpClient) { }

  adminlogin(data:IUserLogin):Observable<IResponse<string>>{
    return this.http.post<IResponse<string>>(`${this.baseURL}/login`,data)
  }
}
