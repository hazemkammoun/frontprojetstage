import { Utilisateur } from "./Utilisateur";

export class Deplacement{

    id?: number;
	nom?: String;
	fonction?: String;
	service?: String;
    direction?: String;
    sous_direction?: String;
    instituttion?: String;
    mission?: String;
    type_mission?: String;
    description_mission?: String;
    activite?: String;
    date_debut?:Date;
    heure_depart1?:Date;
    heure_arrive1?:Date;
    date_fin?:Date;
    heure_depart2?:Date;
    heure_arrive2?:Date;
    but?:number;
    date_premier_signature?:Date;
    utilisateur? : Utilisateur;
}




