import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  private socket!: Socket

  constructor() {
    this.socket = io("http://localhost:3000",{
      withCredentials:true
    })
   }

   emit<T>(event: string, data:T){
    this.socket.emit(event,data)
   }

   on<T>(event: string):Observable<T>{
    return new Observable(observer=>{
      this.socket.on(event,(response:T)=>{
        observer.next(response)
      })
    })
   }

}
