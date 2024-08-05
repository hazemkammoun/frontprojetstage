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
 username:any;
 accessToken!:any;

  constructor(private http :HttpClient, private router :Router) { }
  public login(prenom:string,password:string){
    let options ={
      headers:new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
     
    }
    
    let params =new HttpParams().set("prenom",prenom).set("password",password);
    return this.http.post("http://localhost:8080/auth/login",params,options)
  } 
  loadProfile(data : any){
this.isAuthenticated=true;
    this.accessToken = data['access-token'];
    let decodedJwt:any=jwtDecode(this.accessToken);
    this.username=decodedJwt.sub;
    this.roles=decodedJwt.scope;
    window.localStorage.setItem("accessToken",this.accessToken);  
    console.log(this.roles);

  }
  logout(){
    window.localStorage.setItem("accessToken",'');  
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
