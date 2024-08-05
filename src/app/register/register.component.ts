import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../messervices/auth.service';
import { Router } from '@angular/router';
// Import your AuthService here

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister!: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      cin: [''],
      matricule: [''],
      poste: [''],
      email: ['User'],
      adresse: [''],
      telephone: [''],
      password: [''],
      confirmPassword: ['']
    });
  }

  inscrire() {
    this.authService.register(this.formRegister.value).subscribe(
      data => {
        console.log("hellooooooooooooo");
        console.log(data);
        // Handle successful registration here
        this.router.navigateByUrl("login")
      },
      err => {
        console.log(err);
        // Handle registration error here
      }
    );
  }
}
