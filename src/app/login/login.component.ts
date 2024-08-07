import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../messervices/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin! :FormGroup;
  constructor(private fb :FormBuilder , private authService :AuthService, private router: Router) { }

  // tslint:disable-next-line:typedef 
  ngOnInit(): void{
  this.formLogin=this.fb.group({
  prenom:this.fb.control(""),
  password:this.fb.control("")
})
  }

  handleLogin(){
    console.log("res1")
    console.log(this.formLogin.value);
    console.log("*****")
    let prenom=this.formLogin.value.prenom;

    let pwd=this.formLogin.value.password;  
    
    this.authService.login(prenom,pwd).subscribe({
    
      next:data=>{
     this.authService.loadProfile(data);
     this.router.navigateByUrl("/admin");

      },
      error:err=>{
        console.log("eror1")
        console.log(err);
        console.log("eror")
      }

    })
  
  
  }

}
