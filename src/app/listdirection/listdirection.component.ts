import { Component } from '@angular/core';
import { MesusersService } from '../mesusers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Direction } from '../direction';

@Component({
  selector: 'app-listdirection',
  templateUrl: './listdirection.component.html',
  styleUrls: ['./listdirection.component.css']
})
export class ListdirectionComponent {
  mondirection: Direction = {
    nom: '',
    description: '',
    service: {
      id: 0,
      nom: '',
      description: '',
    },
  };
  mondirec: Direction=new Direction();
  mybolean: boolean=false;
  mybolean2: boolean=false;
  mesdirections?: Direction[];
  newdirec: Direction=new  Direction();
  constructor( private mesusers: MesusersService, private router: Router ,private route: ActivatedRoute){

  }
  ngOnInit(): void{
   
    this.mesusers.getAlldirection().subscribe(data=>{
      this.mesdirections = data;
      console.log(this.mesdirections);
    }, err=>{
        console.log(err);

    });
  }
  
  deletdirecbyid(id?:number) {

    this.mesusers.deletdirecbyid(id).subscribe(
      () => {
        console.log('Direction deleted successfully');
        this.ngOnInit();
      },
      (error) => {
        console.error('Error deleting Direction:', error);
        alert("Error adding Direction");
      }
    );
  }




adddirec() {
  console.log(this.newdirec);
  this.mesusers.ajouterdirec(this.newdirec).subscribe(
    () => {
      console.log('Direction added successfully');
      alert(this.newdirec.nom + " added successfully");
      this.mybolean = !this.mybolean;
      this.ngOnInit();
    },
    (error) => {
      console.error('Error adding Direction:', error);
    }
  );
}

directionDetails(id?: number){
  this.mybolean2=true;
  this.mesusers.getDirecbyId(id).subscribe((data: any) => {
    console.log(data);
    this.mondirection=data;
    
  });

}
Update() {
  console.log(this.mondirection);
  if (this.mondirection?.id) { // check if id has a value
    this.mesusers.updatedirection(this.mondirection.id, this.mondirection).subscribe(() => {
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
