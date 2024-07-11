import { Component } from '@angular/core';
import { Reservation } from '../reservation';
import { ReservationService } from '../messervices/reservation.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../Utilisateur';
import { Salle } from '../salle';
import { SalleService } from '../messervices/salle.service';
import { UtilisateursService } from '../messervices/utilisateurs.service';

@Component({
  selector: 'app-listereservation',
  templateUrl: './listereservation.component.html',
  styleUrls: ['./listereservation.component.css']
})
export class ListereservationComponent {
  

  reservationupdate: Reservation = { id: 0, typemeeting: '', date_du_resrvation:undefined ,date_fin:undefined };

  mybolean2: boolean=false;
  messalles: Salle[] = [];
  lesutilisateurs: Utilisateur[] = [];
  monreserv: Reservation=new Reservation();
  mybolean: boolean=false;
  mesreservation?: Reservation[];
  newres: Reservation=new  Reservation();

  constructor(private mesusers: ReservationService, private router: Router , private salleservice: SalleService, private utilisateurservice: UtilisateursService){}
  ngOnInit(): void{
   
    this.mesusers.getAllreservation().subscribe(data=>{
      this.mesreservation = data;
      console.log(this.mesreservation);
    }, err=>{
        console.log(err);

    });
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
  deletreservationbyid(id?:number) {

      this.mesusers.deletreservationbyid(id).subscribe(
        () => {
          console.log('Reservation deleted successfully');
          this.ngOnInit();
        },
        (error) => {
          console.error('Error deleting Reservation:', error);
        }
      );
    }

  
 

  addRes() {
    console.log(this.newres);
    this.mesusers.ajouterreservation(this.newres).subscribe(
      () => {
        console.log('Réservation added successfully');
        alert("Réservation added successfully");
        this.mybolean = !this.mybolean;
      
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Réservation:', error);
        alert("Error adding Réservation");
      }
    );
  }

  evaluatebolean(){
    this.mybolean=!this.mybolean;
  }
  reservationDetails(id?: number){
    this.mybolean2=true;
    this.mesusers.getreservationbyid(id).subscribe((data: any) => {
      console.log(data);
      this.reservationupdate=data;
      
    });
  
  }
  Update() {
    console.log(this.reservationupdate);
    if (this.reservationupdate?.id) { // check if id has a value
      this.mesusers.updatereservation(this.reservationupdate.id, this.reservationupdate).subscribe(() => {
        this.mybolean2 = !this.mybolean2;
        alert("Votre mise a jour a été effectuée avec succées")
        this.ngOnInit();
      });
    }
  }
  evaluatebolean2(){
    
    this.mybolean2 = !this.mybolean2;
  }
}
