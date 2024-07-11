import { TypeEquipement } from "./listequipemet/type-equipement.enum";

export class Equipement{

    id?: number;
    date_acquisition?:Date;
	configuration?: String;
	etat?: String;
    reservable?:Boolean;
    typeEquipement? : TypeEquipement;

}