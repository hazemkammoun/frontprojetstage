import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PresentationComponent } from './presentation/presentation.component';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AcceuilcnstnComponent } from './acceuilcnstn/acceuilcnstn.component';
import { GestionuserComponent } from './gestionuser/gestionuser.component';
import { LienutileComponent } from './lienutile/lienutile.component';
import { ListservicesComponent } from './listeservices/listeservices.component';
import { ListdirectionComponent } from './listdirection/listdirection.component';
import { Forms2Component } from './forms2/forms2.component';
import { ListesalleComponent } from './listesalle/listesalle.component';
import { ListecategorieComponent } from './listecategorie/listecategorie.component';
import { ListereservationComponent } from './listereservation/listereservation.component';
import { ListequipemetComponent } from './listequipemet/listequipemet.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdmintemplateComponent } from './admintemplate/admintemplate.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthorizationGuard } from './guards/authorization.guard';
import { NotauthorizedComponent } from './notauthorized/notauthorized.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { DemandeEquipementComponent } from './demande-equipement/demande-equipement.component';
import { ReserverSalleComponent } from './reserver-salle/reserver-salle.component';
import { AdminNotificationsComponent } from './admin-notifications/admin-notifications.component';
import { ListedemandeComponent } from './listedemande/listedemande.component';
import { DeplacementComponent } from './deplacement/deplacement.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: "login", pathMatch: "full" },
  { path: 'login/register', component: RegisterComponent },
  {
    path: 'admin', component: AdmintemplateComponent,canActivate: [AuthenticationGuard],
    
 
     children: [
      { path: 'actualite',component: ActualiteComponent},
      { path: 'presentation', component: PresentationComponent },
      { path: 'mesforms', component: Forms2Component },
      { path: 'contact', component: ContactComponent},
      { path: 'gallerie', component: GallerieComponent},
      { path: 'acceuil', component: AcceuilcnstnComponent},
      { path: 'deplacement',component : DeplacementComponent},
      { path: '', redirectTo: "acceuil", pathMatch: "full" },
     
       // Redirection vers acceuilcnstn
     
    
      { path: 'gestionusers', component: GestionuserComponent ,canActivate :[AuthorizationGuard], data :{role:"ADMIN"} },
      { path: 'lienutile', component: LienutileComponent},
      { path: 'gestionservices', component: ListservicesComponent ,canActivate :[AuthorizationGuard], data :{role:"ADMIN"} },
      { path: 'gestiondirections', component: ListdirectionComponent,canActivate :[AuthorizationGuard], data :{role:"ADMIN"}  },
      { path: 'gestionsalles', component: ListesalleComponent},
      { path: 'gestioncategorie', component: ListecategorieComponent,canActivate :[AuthorizationGuard], data :{role:"ADMIN"}  },
      { path: 'gestionequipement', component: ListequipemetComponent ,canActivate :[AuthorizationGuard], data :{role:"ADMIN"} },
      {path: 'notification' , component: AdminNotificationsComponent,canActivate:[AuthorizationGuard], data :{role:"ADMIN"}},
      {path: 'demande', component: ListedemandeComponent/* ,canActivate:[AuthorizationGuard], data :{role:"ADMIN"} */},
      { path: 'gestionreservation', component: ListereservationComponent},
      { path: 'demande-equipement',component :DemandeEquipementComponent},
      { path: 'reserver-salle',component : ReserverSalleComponent},
      {path : 'notauthorized' , component :NotauthorizedComponent}
    ]
  },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
