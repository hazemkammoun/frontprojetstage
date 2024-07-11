import { Utilisateur } from "./Utilisateur";
import { Salle } from "./salle";

export class Reservation{

    id?: number;
	typemeeting?: String;
	date_du_resrvation?: Date;
    date_fin?: Date;
    utilisateur?: Utilisateur;
    salle?: Salle ;
    message?: string;
}