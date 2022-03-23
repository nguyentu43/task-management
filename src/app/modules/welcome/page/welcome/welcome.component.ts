import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

  constructor(private auth:AuthService, private router:Router) {
    
  }

  login(){
    if(this.auth.isAuthenticated())
    {
      this.router.navigate(['/home']);
      return;
    }
    this.auth.login();
  }
}
