import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { EquipementService } from '../messervices/equipement.service';
import { Equipement } from '../equipement';
import { Router } from '@angular/router';
import { UtilisateursService } from '../messervices/utilisateurs.service';
import { DemandeService } from '../messervices/demande.service';
import { Utilisateur } from '../Utilisateur';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-demande-equipement',
  templateUrl: './demande-equipement.component.html',
  styleUrls: ['./demande-equipement.component.css']
})

export class DemandeEquipementComponent implements OnInit {
  newdemande: Demande = new Demande();
  lesutilisateurs: Utilisateur[] = [];
  equipement?: Equipement[];

  constructor(
    private utilisateurservice: UtilisateursService,
    private demandeservice: DemandeService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.utilisateurservice.getallUsers().subscribe(data => {
      this.lesutilisateurs = data;
      console.log(this.lesutilisateurs);
    }, err => {
      console.log(err);
    });
  }

  addequip() {
    // Définir la date de demande à la date actuelle
    this.newdemande.date_demande = new Date();
    
    console.log(this.newdemande);
    this.demandeservice.ajouterdemande(this.newdemande).subscribe(
      () => {
        this.notificationService.addNotification('equipment', 'Nouvelle demande d\'équipement');
        alert("Demande added successfully");
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Demande:', error);
        alert("Error adding Demande");
      }
    );
  }
}
