import { Component, OnInit } from '@angular/core';
import { DeplacementService } from '../messervices/deplacement.service';
import { Deplacement } from '../Deplacement';
import { Utilisateur } from '../Utilisateur';
import { UtilisateursService } from '../messervices/utilisateurs.service';

@Component({
  selector: 'app-deplacement',
  templateUrl: './deplacement.component.html',
  styleUrls: ['./deplacement.component.css']
})
export class DeplacementComponent implements OnInit {
  lesutilisateurs: any;
  newdeplacement: Deplacement = new Deplacement();
  lesdeplacement:any;
  mybolean:boolean=false;
  
  constructor (private deplacement:DeplacementService,private user:UtilisateursService ){}
  ngOnInit(): void {
    this.deplacement.getAlldepl().subscribe(data => {
      this.lesdeplacement = data;
      console.log(this.lesdeplacement);
    }, err => {
      console.log(err);
    });

  // Assuming you want to fetch all users on initialization
  this.user.getallUsers().subscribe(
    data => {
      this.lesutilisateurs = data;
      console.log(this.lesutilisateurs);
    },
    errr => {
      console.error('Error fetching users:', errr);
    }
  );

  }
  changeboolean(){
    this.mybolean=!this.mybolean;
  }
  adddeplacement()
  {
    console.log(this.newdeplacement);
    this.deplacement.adddepl(this.newdeplacement).subscribe(data=>
      () => {
      
      },
      (error) => {
        console.error('Error adding Deplacement:', error);
        alert("Error adding Deplacement");
      }
    );
  }
  

}
