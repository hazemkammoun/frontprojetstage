import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Utilisateur } from '../Utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  isAuthenticated:boolean=false;
 public roles:any; 
 prenom:any;
 accessToken!:any;

  constructor(private http :HttpClient, private router :Router) { }
  public login(prenom: string, password: string) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const body = { prenom, password };
    return this.http.post("http://localhost:8080/auth/login", body, { headers });
  }
  loadProfile(data : any){
    console.log("in load")
this.isAuthenticated=true;
    this.accessToken = data['accessToken'];
    console.log(data)
    let decodedJwt:any=jwtDecode(this.accessToken);
    console.log(decodedJwt)
    this.prenom=decodedJwt.sub;
    this.roles=decodedJwt.scope;
    window.localStorage.setItem("accessToken",this.accessToken);  
    console.log(this.roles);

  }
  logout(){
  this.isAuthenticated=false;
    window.localStorage.removeItem("accessToken");
  }
  loadUserfromLocalStorage() {
    let token =window.localStorage.getItem("accessToken");
    if(token){
     this.loadProfile({"access-token": token});
     this.router.navigateByUrl("/admin/acceuil");
    }
  }
  register(user: Utilisateur): Observable<Utilisateur>{
    console.log(user)
    console.log("im in register")
    return this.http.post("http://localhost:8080/auth/register",user);
  
  }
 
}
