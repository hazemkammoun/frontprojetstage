import { Component } from '@angular/core';
import { AuthService } from '../messervices/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-admintemplate',
  templateUrl: './admintemplate.component.html',
  styleUrls: ['./admintemplate.component.css']
})
export class AdmintemplateComponent {
  notifications: { type: string, message: string }[] = [];
  constructor(public authService: AuthService, private router: Router,private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.notifications$.subscribe(
      notifications => this.notifications = notifications
    );
  }
  

  handleLogout() {
    console.log("testtttttttttttttttttttttt");
    this.authService.logout();
        this.router.navigateByUrl("/login");
  
  

}
}