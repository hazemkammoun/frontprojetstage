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
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      cin: ['', Validators.required],
      matricule: ['', Validators.required],
      poste: ['', Validators.required],
      email: ['User', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  inscrire() {
    this.authService.register(this.formRegister.value).subscribe(
      data => {
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
