// notification.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Notification {
  type: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<Notification[]>([]);
  notifications$ = this.notificationSubject.asObservable();

  addNotification(type: string, message: string) {
    const currentNotifications = this.notificationSubject.value;
    this.notificationSubject.next([...currentNotifications, { type, message }]);
  }

  clearNotifications() {
    this.notificationSubject.next([]);
  }
}
