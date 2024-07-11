import { Component, OnInit } from '@angular/core';
import { UtilisateursService } from '../messervices/utilisateurs.service';
import { DemandeService } from '../messervices/demande.service';
import { Router } from '@angular/router';
import { Demande } from '../demande';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-listedemande',
  templateUrl: './listedemande.component.html',
  styleUrls: ['./listedemande.component.css']
})
export class ListedemandeComponent implements OnInit{
  demandeupdate: Demande = { id: 0, date_demande: undefined,objet_demande: "" ,configuration: "", etat_demande: "", utilisateur: {
    id: 0,
    nom: '',
    prenom: '',
  },  };
  mybolean: boolean=false;
  mybolean2: boolean=false
  newdemande: Demande = new Demande();
  lesutilisateurs: Utilisateur[] = [];
  demandes?: Demande[]; 
  
  demande: Demande = {
    id: 0,
    date_demande: undefined,
    objet_demande: '',
    configuration: '',
    etat_demande: '',
    utilisateur: {
      id: 0,
      nom: '',
      prenom: '',
    },

  };
  constructor( private utilisateurservice: UtilisateursService ,private demandeservice: DemandeService, private router: Router ){}
  ngOnInit(): void{
    this.utilisateurservice.getallUsers().subscribe(data => {
      this.lesutilisateurs = data;
      console.log(this.lesutilisateurs);
    }, err => {
      console.log(err);
    });
    this.demandeservice.getAllDemande().subscribe(data => {
      this.demandes = data;
      console.log("les demandes :"+this.demandes);
    }, err => {
      console.log(err);
    });
  }
  
  addedemande() {
    console.log(this.newdemande);
    this.demandeservice.ajouterdemande(this.newdemande).subscribe(

      () => {
      
        alert("Demande added successfully");

        this.evaluatebolean();
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Demande:', error);
        alert("Error adding Demande");
      }
    );
  }
  deletdemandebyId(id?:number) {

    this.demandeservice.deletdemandebyId(id).subscribe(
      () => {
        console.log('Demande deleted successfully');
        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting Demande:', error);
      }
    );
  }
  demandeDetails(id?: number){
    this.mybolean2=true;
    this.demandeservice.getdemandebyId(id).subscribe((data: any) => {
      console.log(data);
      this.demandeupdate=data;
      
    });
  
  }
  updatedemande() {
    console.log(this.demandeupdate);
    if (this.demandeupdate?.id) { // check if id has a value
      this.demandeservice.updatedemande(this.demandeupdate.id, this.demandeupdate).subscribe(() => {
        this.mybolean2 = !this.mybolean2;
        alert("Votre mise a jour a été effectuée avec succées")
        this.ngOnInit();
      });
    }
  }


  evaluatebolean(){
    this.mybolean=!this.mybolean;
  }
  evaluatebolean2(){
    
    this.mybolean2 = !this.mybolean2;
  }

}

