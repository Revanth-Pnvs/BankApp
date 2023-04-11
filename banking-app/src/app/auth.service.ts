import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  authUser(user: any){
    let UserArray: any[] =[];
    if(localStorage.getItem('User')){

    }
    return UserArray.find(p=>p.email===user.email && p.password === user.password)
  }
}
