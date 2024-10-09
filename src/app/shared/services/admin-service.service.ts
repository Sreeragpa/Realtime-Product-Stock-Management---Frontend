import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser, IUserLogin } from '../../models/userModel';
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

  addUser(data: IUser):Observable<IResponse<string>>{
    return this.http.post<IResponse<string>>(`${this.baseURL}/addUser`,data)
  }

  editUser(data: IUser):Observable<IResponse<string>>{
    return this.http.put<IResponse<string>>(`${this.baseURL}/editUser`,data)
  }

  getUsers(){
    return this.http.get<IResponse<IUser[]>>(`${this.baseURL}/users`)
  }

}
