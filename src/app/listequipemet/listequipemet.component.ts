import { Component } from '@angular/core';
import { Equipement } from '../equipement';
import { EquipementService } from '../messervices/equipement.service';
import { Router } from '@angular/router';
import { TypeEquipement } from './type-equipement.enum'; 

@Component({
  selector: 'app-listequipemet',
  templateUrl: './listequipemet.component.html',
  styleUrls: ['./listequipemet.component.css']
})
export class ListequipemetComponent {
  equipementupdate: Equipement = { id: 0, date_acquisition: undefined, configuration: "", etat: "", reservable: false };
  equip: Equipement=new Equipement();
  mybolean: boolean=false;
  mybolean2: boolean=false
  equipement?: Equipement[];
  newequipe: Equipement=new  Equipement();
  typeEquipementOptions: TypeEquipement[] = Object.values(TypeEquipement); 
  constructor(private mesusers: EquipementService, private router: Router){}
  ngOnInit(): void{
   
    this.mesusers.getAllequipement().subscribe(data=>{
      this.equipement = data;
    }, err=>{
        console.log(err);

    });
  }
  deletequipementbyid(id?:number) {

      this.mesusers.deletequipementbyid(id).subscribe(
        () => {
          console.log('Equipement deleted successfully');
          this.ngOnInit();
        },
        (error) => {
          console.error('Error deleting Equipement:', error);
        }
      );
    }

  
  

  addequipe() {
    console.log(this.newequipe);
    this.mesusers.ajouterequipement(this.newequipe).subscribe(

      () => {
        console.log('Equipement added successfully');
        alert("Equipement added successfully");

        this.mybolean = !this.mybolean;
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Equipement:', error);
        alert("Error adding Equipement");
      }
    );
  }
  equipDetails(id?: number){
    this.mybolean2=true;
    this.mesusers.getequipementbyid(id).subscribe((data: any) => {
      console.log(data);
      this.equipementupdate=data;
      
    });
  
  }
  Update() {
    console.log(this.equipementupdate);
    if (this.equipementupdate?.id) { // check if id has a value
      this.mesusers.updateequipement(this.equipementupdate.id, this.equipementupdate).subscribe(() => {
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
