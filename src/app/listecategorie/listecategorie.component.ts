import { Component } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../messervices/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listecategorie',
  templateUrl: './listecategorie.component.html',
  styleUrls: ['./listecategorie.component.css']
})
export class ListecategorieComponent {
  categorieupdate: Categorie = { id: 0, nom: ''};

  moncat: Categorie=new Categorie();
  mybolean: boolean=false;
  mescategorie?: Categorie[];
  mybolean2: boolean=false;
  newcategorie: Categorie=new  Categorie();

  constructor(private mesusers: CategorieService, private router: Router){}
  ngOnInit(): void{
   
    this.mesusers.getAllcategorie().subscribe(data=>{
      this.mescategorie = data;
    }, err=>{
        console.log(err);

    });
  }
  deletcategoriebyid(id?:number) {

      this.mesusers.deletcategoriebyid(id).subscribe(
        () => {
          console.log('Categorie deleted successfully');
          this.ngOnInit();
        },
        (error) => {
          console.error('Error deleting Categorie:', error);
        }
      );
    }
  addcat() {
    console.log(this.newcategorie);
    this.mesusers.ajoutercategorie(this.newcategorie).subscribe(
      () => {
        console.log('Catégorie added successfully');
        alert("Catégorie added successfully");
        this.mybolean = !this.mybolean;
        this.ngOnInit();
      },
      (error) => {
        console.error('Error adding Catégorie:', error);
        alert("Error adding Catégorie");
      }
    );
  }

  categorieDetails(id?: number){
    this.mybolean2=true;
    this.mesusers.getcategoriebyid(id).subscribe((data: any) => {
      console.log(data);
      this.categorieupdate=data;
      
    });
  
  }
  Update() {
    console.log(this.categorieupdate);
    if (this.categorieupdate?.id) { // check if id has a value
      this.mesusers.updatecategorie(this.categorieupdate.id, this.categorieupdate).subscribe(() => {
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
