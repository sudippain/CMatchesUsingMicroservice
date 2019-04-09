import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { AuthenticationService } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  lastLenngth:number;
  barValue:number
  newUser: User = new User();
  constructor(private authService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.barValue=0;
    this.lastLenngth=0
  }
 getFirstName(fname){
   if(fname.length<3 && this.lastLenngth<fname.length){
    this.barValue=this.barValue+12.5;
   }
   
   if(fname.length<2 && fname.length>=0 && this.lastLenngth>fname.length){
    this.barValue=this.barValue-12.5;
   }

   if(fname.length==0){
     this.barValue=0;
   }
   
   this.lastLenngth=fname.length;
   
 }

 getLastName(lname){
   this.lastLenngth=0;
  if(lname.length<3 && this.lastLenngth<lname.length){
    this.barValue=this.barValue+12.5;
   }
   
   if(lname.length<2 && lname.length>=0 && this.lastLenngth>lname.length){
    this.barValue=this.barValue-12.5;
   }
   if(lname.length==0){
    this.barValue=25;
  }
   this.lastLenngth=lname.length;
 }
 getUserId(userid){
  this.lastLenngth=0;
  if(userid.length<6 && this.lastLenngth<userid.length){
    this.barValue=this.barValue+5;
   }
   
   if(userid.length<5 && userid.length>=0 && this.lastLenngth>userid.length){
    this.barValue=this.barValue-5;
   }
   if(userid.length==0){
    this.barValue=50;
  }
   
   this.lastLenngth=userid.length;
 }
 getPassword(pass){
  this.lastLenngth=0;
  if(pass.length<9 && this.lastLenngth<pass.length){
    this.barValue=this.barValue+3.125;
   }
   
   if(pass.length<8 && pass.length>=0 && this.lastLenngth>pass.length){
    this.barValue=this.barValue-3.125;
   }
   if(pass.length==0){
     this.barValue=75;
   }
   
   this.lastLenngth=pass.length;
 }
  registerUser() {
    console.log("Register User data:", this.newUser);
    this.authService.registerUser(this.newUser).subscribe(data => {
      console.log("User registered", data);
      this.router.navigate(['/login']);
    });
  }
}
