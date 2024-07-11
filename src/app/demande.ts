import { Utilisateur } from "./Utilisateur";
import { Equipement } from "./equipement";
import { TypeEquipement } from "./listequipemet/type-equipement.enum";

export class Demande{

    id?: number;
    date_demande?:Date;
	objet_demande?: String;
	configuration?: String;
    etat_demande?: String;
    utilisateur? : Utilisateur;
    
}