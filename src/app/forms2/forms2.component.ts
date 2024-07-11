import { Component, OnInit } from '@angular/core';
import jsondata from '../../data/procedures.json';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css']
})
export class Forms2Component implements OnInit {
  procedures: any[] = jsondata.procedures;
  searchText: any; 
  src: string = "../../data/formulaires/";
  constructor() { }

  ngOnInit(): void {
    console.log('Données des procédures:', this.procedures);
  }
  
}