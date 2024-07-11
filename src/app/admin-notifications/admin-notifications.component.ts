// admin-notifications.component.ts
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-admin-notifications',
  templateUrl: './admin-notifications.component.html',
  styleUrls: ['./admin-notifications.component.css']
})
export class AdminNotificationsComponent implements OnInit {
  equipmentNotifications: string[] = [];
  reservationNotifications: string[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.notifications$.subscribe(notifications => {
      this.equipmentNotifications = notifications
        .filter(notification => notification.type === 'equipment')
        .map(notification => notification.message);
      this.reservationNotifications = notifications
        .filter(notification => notification.type === 'reservation')
        .map(notification => notification.message);
    });
  }

  clearNotifications() {
    this.notificationService.clearNotifications();
  }
}
