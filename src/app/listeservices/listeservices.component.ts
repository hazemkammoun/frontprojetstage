import { Component } from '@angular/core';
import { Leservice } from '../Leservice';
import { Direction } from '../direction';
import { MesusersService } from '../mesusers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listeservices',
  templateUrl: './listeservices.component.html',
  styleUrls: ['./listeservices.component.css']
})
export class ListservicesComponent {
  monservice: Leservice = {
    id: 0,
    nom: '',
    description: '',
    direction: {
      id: 0,
      nom: '',
      description: '',
    },
  };
  mesdirections: Direction[]=[];
  mybolean: boolean=false;
  mybolean2: boolean=false;
  messerv: Leservice=new Leservice();
  messervices?: Leservice[];
  constructor(private mesusers: MesusersService, private router: Router , private route: ActivatedRoute){}
  ngOnInit(): void{
    this.mesusers.getAlldirection().subscribe(data=>{
      this.mesdirections = data;
      console.log(this.mesdirections);
    }, err=>{
        console.log(err);

    });
   
    this.mesusers.getAllServices().subscribe(data=>{
      this.messervices=data;
      
    }, err=>{
        console.log(err);

    });
    
  }
  


 
  deletservicebyid(id?:number) {

    this.mesusers.deletservicebyid(id).subscribe(
   () => {
     console.log('Service deleted successfully');
     this.ngOnInit();
   },
   (error) => {
     console.error('Error deleting Service:', error);
   }
 );
}




  onSubmit() {
    console.log(this.monservice);
    this.mesusers.ajouterservice(this.monservice).subscribe(
      () => {
        console.log('Service added successfully');
        alert(this.monservice.nom + " added successfully");

        this.mybolean = !this.mybolean;
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Service:', error);
        alert("Error adding Service:");
      }
    );
  }




  serviceDetails(id?: number){
    this.mybolean2=true;
    this.mesusers.getServbyId(id).subscribe((data: any) => {
      console.log(data);
      this.monservice=data;
      
    });
  
  }
  Update() {
    console.log(this.monservice);
    if (this.monservice?.id) { // check if id has a value
      this.mesusers.updateservice(this.monservice.id, this.monservice).subscribe(() => {
        this.mybolean2 = !this.mybolean2;
        alert("Votre mise a jour a été effectuée avec succées")
        this.ngOnInit();
      });
    }
  }

  evaluateboleann(){
    this.mybolean=!this.mybolean;
  }
  evaluatebolean2(){
    
    this.mybolean2 = !this.mybolean2;
  }
}
