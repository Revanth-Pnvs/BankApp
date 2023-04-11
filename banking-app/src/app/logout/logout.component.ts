import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router) { }

  logout() {
    // Clear the user session and redirect to the login page
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  

}
