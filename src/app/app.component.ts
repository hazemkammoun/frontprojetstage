import { Component, OnInit } from '@angular/core';


import { MesusersService } from './mesusers.service';
import { AuthService } from './messervices/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private authserv: AuthService, private router:Router){

  }
  title = 'intranetcnstn';

  ngOnInit(): void {
    this.authserv.loadUserfromLocalStorage();
    

  }
  
  
 

 
}
