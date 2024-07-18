import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AcceuilcnstnComponent } from './acceuilcnstn/acceuilcnstn.component';
import { GestioncaisseformsComponent } from './gestioncaisseforms/gestioncaisseforms.component';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { LienutileComponent } from './lienutile/lienutile.component';
import { ListservicesComponent } from './listeservices/listeservices.component';
import { ListdirectionComponent } from './listdirection/listdirection.component';
import { FooterComponent } from './footer/footer.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Forms2Component } from './forms2/forms2.component';
import { ListesalleComponent } from './listesalle/listesalle.component';
import { ListequipemetComponent } from './listequipemet/listequipemet.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { ListereservationComponent } from './listereservation/listereservation.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { AdmintemplateComponent } from './admintemplate/admintemplate.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ActualiteComponent } from './actualite/actualite.component';
import { ReserverSalleComponent } from './reserver-salle/reserver-salle.component';
import { DemandeEquipementComponent } from './demande-equipement/demande-equipement.component';
import { AdminNotificationsComponent } from './admin-notifications/admin-notifications.component';
import { ListedemandeComponent } from './listedemande/listedemande.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DeplacementComponent } from './deplacement/deplacement.component'; // Import FullCalendar




@NgModule({
  declarations: [

    AppComponent,
    FooterComponent,
    ContactComponent,
    PresentationComponent,
    GallerieComponent,
    AcceuilcnstnComponent,
    GestioncaisseformsComponent,
    GestionuserComponent,
    LienutileComponent,
    ListservicesComponent,
    ListdirectionComponent,
    Forms2Component,
    ListesalleComponent,
    ListequipemetComponent,
    ListecategorieComponent,
    ListereservationComponent,
    LoginComponent,
    RegisterComponent,
    AdmintemplateComponent,
    NotauthorizedComponent,
    ActualiteComponent,
    ReserverSalleComponent,
    DemandeEquipementComponent,
    AdminNotificationsComponent,
    ListedemandeComponent,
    DeplacementComponent,

    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,RouterLinkActive,RouterOutlet,FormsModule,ReactiveFormsModule,HttpClientModule, MatListModule, MatDividerModule, MatButtonModule, MatToolbarModule , MatCardModule,
    MatFormFieldModule,MatNativeDateModule,MatPseudoCheckboxModule, MatInputModule  ,  CommonModule, BrowserAnimationsModule,Ng2SearchPipeModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatNativeDateModule,
    FullCalendarModule
    ],
  providers: [{
 provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
