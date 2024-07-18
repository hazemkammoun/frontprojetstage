import { Component, OnInit } from '@angular/core';
import { DeplacementService } from '../messervices/deplacement.service';

@Component({
  selector: 'app-deplacement',
  templateUrl: './deplacement.component.html',
  styleUrls: ['./deplacement.component.css']
})
export class DeplacementComponent implements OnInit {
  lesdeplacement:any;
  mybolean:boolean=false;
  constructor (private deplacement:DeplacementService){}
  ngOnInit(): void {
    this.deplacement.getAlldepl().subscribe(data => {
      this.lesdeplacement = data;
      console.log(this.lesdeplacement);
    }, err => {
      console.log(err);
    });
  }
  changeboolean(){
    this.mybolean=!this.mybolean;
  }
  
  

}
