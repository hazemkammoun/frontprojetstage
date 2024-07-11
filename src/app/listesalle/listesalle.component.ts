import { Component } from '@angular/core';
import { Salle } from '../salle';
import { SalleService } from '../messervices/salle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listesalle',
  templateUrl: './listesalle.component.html',
  styleUrls: ['./listesalle.component.css']
})
export class ListesalleComponent {
  salleupdate: Salle = { id: 0, nom: '', nombre_des_places: 0 };

  monsal: Salle=new Salle();
  mybolean: boolean=false;
  mybolean2: boolean=false;
  messalle?: Salle[];
  newsalle: Salle=new  Salle();
  constructor(private messalles: SalleService, private router: Router){}
  ngOnInit(): void{
   
    this.messalles.getAllsalle().subscribe(data=>{
      this.messalle = data;
    }, err=>{
        console.log(err);

    });
  }


  deletsallebyid(id?:number) {

    this.messalles.deletsallebyid(id).subscribe(
      () => {
        console.log('Salle deleted successfully');
       

        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting Salle:', error);
        alert("Error adding Salle:");
      }
    );
  }




  adduser() {
    console.log(this.newsalle);
    this.messalles.ajoutersalle(this.newsalle).subscribe(
      () => {
        console.log('Salle added successfully');
        alert("Salle added successfully");
        this.mybolean = !this.mybolean;
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Salle:', error);
      }
    );
  }
  

  salleDetails(id?: number){
    this.mybolean2=true;
    this.messalles.getsallebyid(id).subscribe((data: any) => {
      console.log(data);
      this.salleupdate=data;
      
    });
  
  }
  Update() {
    console.log(this.salleupdate);
    if (this.salleupdate?.id) { // check if id has a value
      this.messalles.updatesalle(this.salleupdate.id, this.salleupdate).subscribe(() => {
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
