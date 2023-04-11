import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
  constructor(private authservice:AuthService,){}
  ngOnInit(): void { 
  }

  onLogin(loginForm:NgForm){
    console.log(loginForm.value)
    const token =this.authservice.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token', token.email)
      console.log('Login Successful');
    }else{
      console.log('Login Failed');
    }
  }

}
