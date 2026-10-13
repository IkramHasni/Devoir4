import { FamilleOlfactive } from "./famille-olfactive.model";

export class Fragrance {
    idFragrance? : number;
    nomFragrance? : string;
    marque? : string;
    volumeMl? : number;
    prixFragrance? : number;
    dateCreation? : Date ;
    famille! : FamilleOlfactive;
}
