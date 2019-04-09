import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();

  constructor(private authService: AuthenticationService, private router: Router,private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  loginUser() {
    console.log("Login user", this.user);
    this.authService.loginUser(this.user).subscribe(data => {
      console.log("Login successful");
      if(data['token']) {
        this.authService.setToken(data['token']);
        this.router.navigate(['/UserLanding']);
      }
      
    },
    (error)=>{
      if(error.status===500){
        let message = `System Down , Please try after sometime`;
        this.snackbar.open(message, '', {
          duration: 1000
      });
      }
      if(error.status===401){
        let message = `Bad Credential`;
        this.snackbar.open(message, '', {
          duration: 1000
      });
      }
     
  }
    )  
}
    
}