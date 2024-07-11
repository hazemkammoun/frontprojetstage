import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../messervices/reservation.service';
import { Router } from '@angular/router';
import { Salle } from '../salle';
import { Utilisateur } from '../Utilisateur';
import { UtilisateursService } from '../messervices/utilisateurs.service';
import { SalleService } from '../messervices/salle.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-reserver-salle',
  templateUrl: './reserver-salle.component.html',
  styleUrls: ['./reserver-salle.component.css']
})
export class ReserverSalleComponent implements OnInit {

  newres: Reservation = new Reservation();
  messalles: Salle[] = [];
  lesutilisateurs: Utilisateur[] = [];
  
  reserv: Reservation = {
    id: 0,
    typemeeting: '',
    date_du_resrvation: undefined,
    date_fin: undefined,
    salle: {
      id: 0,
      nom: '',
      nombre_des_places: 0,
    },
    utilisateur: {
      id: 0,
      nom: '',
      prenom: '',
    },
  };
  errorMessage: string | null = null;

  constructor(private mesusers: ReservationService, private salleservice: SalleService, private utilisateurservice: UtilisateursService, private router: Router, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.salleservice.getAllsalle().subscribe(data => {
      this.messalles = data;
      console.log(this.messalles);
    }, err => {
      console.log(err);
    });

    this.utilisateurservice.getallUsers().subscribe(data => {
      this.lesutilisateurs = data;
      console.log(this.lesutilisateurs);
    }, err => {
      console.log(err);
    });
  }

  validateDates(): boolean {
    if (this.reserv.date_du_resrvation && this.reserv.date_fin) {
      const startDate = new Date(this.reserv.date_du_resrvation);
      const endDate = new Date(this.reserv.date_fin);
      if (endDate < startDate) {
        this.errorMessage = 'La date de fin ne peut pas être antérieure à la date de début.';
        return false;
      }
    }
    return true;
  }

  addRes() {
    if (!this.validateDates()) {
      alert(this.errorMessage); // Afficher le message d'erreur
      return;
    }

    console.log(this.reserv);
    this.mesusers.ajouterreservation(this.reserv).subscribe(
      (response) => {
        if (response.message) {
          this.errorMessage = response.message; // Définir le message d'erreur à partir de la réponse
          alert(this.errorMessage); // Afficher le message d'erreur
        } else {
          this.notificationService.addNotification('reservation', 'Nouvelle réservation de salle');
          console.log('Réservation ajoutée avec succès');
          alert('Réservation ajoutée avec succès');
          this.errorMessage = null; // Effacer tout message d'erreur précédent
          this.ngOnInit();
        }
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de la réservation:', error);
        this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer plus tard.';
        alert(this.errorMessage); // Afficher un message d'erreur générique
      }
    );
  }
}
