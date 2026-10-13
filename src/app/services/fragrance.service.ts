import { Injectable } from '@angular/core';
import { Fragrance } from '../model/fragrance.model';
import { FamilleOlfactive } from '../model/famille-olfactive.model';

@Injectable({
  providedIn: 'root'
})
export class FragranceService {
  fragrances : Fragrance[]; //un tableau de Fragrance

  fragrance! : Fragrance;
  familles : FamilleOlfactive[];

  constructor() {
    this.familles = [
      { idFam : 1, nomFam : "Boisé"},
      { idFam : 2, nomFam : "Floral"},
      { idFam : 3, nomFam : "Oriental"},
      { idFam : 4, nomFam : "Frais"}
    ];

    this.fragrances = [
      { idFragrance : 1, nomFragrance : "Sauvage", marque : "Dior", volumeMl : 100, prixFragrance : 380, dateCreation : new Date("08/01/2015"), famille : { idFam : 4, nomFam : "Frais"}},
      { idFragrance : 2, nomFragrance : "Bleu de Chanel", marque : "Chanel", volumeMl : 100, prixFragrance : 420, dateCreation : new Date("09/01/2010"), famille : { idFam : 1, nomFam : "Boisé"}},
      { idFragrance : 3, nomFragrance : "La Vie Est Belle", marque : "Lancôme", volumeMl : 75, prixFragrance : 310.500, dateCreation : new Date("09/01/2012"), famille : { idFam : 2, nomFam : "Floral"}},
      { idFragrance : 4, nomFragrance : "Aventus", marque : "Creed", volumeMl : 100, prixFragrance : 1100, dateCreation : new Date("01/01/2010"), famille : { idFam : 4, nomFam : "Frais"}},
      { idFragrance : 5, nomFragrance : "Black Opium", marque : "Yves Saint Laurent", volumeMl : 90, prixFragrance : 340, dateCreation : new Date("09/01/2014"), famille : { idFam : 3, nomFam : "Oriental"}},
      { idFragrance : 6, nomFragrance : "Acqua di Giò", marque : "Giorgio Armani", volumeMl : 100, prixFragrance : 290.750, dateCreation : new Date("01/01/1996"), famille : { idFam : 4, nomFam : "Frais"}}
    ];
   }

    listeFragrances():Fragrance[] {
      return this.fragrances;
    }

    ajouterFragrance( frag: Fragrance){
      this.fragrances.push(frag);
    }

    supprimerFragrance( frag: Fragrance){
      //supprimer la fragrance frag du tableau fragrances
       const index = this.fragrances.indexOf(frag, 0);
       if (index > -1) {
         this.fragrances.splice(index, 1);
       }
     }

     consulterFragrance(id:number): Fragrance{
      this.fragrance =  this.fragrances.find(f => f.idFragrance == id)!;
        return this.fragrance;
     }

     trierFragrances(){
      this.fragrances = this.fragrances.sort((n1,n2) => {
        if (n1.idFragrance! > n2.idFragrance!) {
            return 1;
        }
       if (n1.idFragrance! < n2.idFragrance!) {
            return -1;
        }
      return 0;
    });
    }

    updateFragrance(f:Fragrance)
    {
      this.supprimerFragrance(f);
      this.ajouterFragrance(f);
      this.trierFragrances();
    }

    listeFamilles():FamilleOlfactive[] {
      return this.familles;
    }

    consulterFamille(id:number): FamilleOlfactive {
      return this.familles.find(fam => fam.idFam == id)!;
    }
}
