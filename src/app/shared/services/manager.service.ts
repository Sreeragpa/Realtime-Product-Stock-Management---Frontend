import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserLogin } from '../../models/userModel';
import { IResponse } from '../../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private baseURL: string = "http://localhost:3000/manager"
  constructor(private http: HttpClient) { }

  login(data: IUserLogin){
    return this.http.post<IResponse<string>>(`${this.baseURL}/login`,data)
  }
}
