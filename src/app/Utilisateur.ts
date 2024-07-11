import { Leservice } from "./Leservice";
import { Equipement } from "./equipement";
import { Reservation } from "./reservation";

export class Utilisateur{

    id?: number;
	nom?: String;
	prenom?: String;
	cin?: number;
	matricule?: String;
	poste?: String;
	email?: String;
	adresse?: String;
	telephone?: number;
	password?: String;
	leservice?: Leservice;
    equipement?: Equipement;
reservation?: Reservation;
}  