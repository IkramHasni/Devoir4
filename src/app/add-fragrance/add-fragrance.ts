import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Fragrance } from '../model/fragrance.model';
import { FragranceService } from '../services/fragrance.service';
import { FamilleOlfactive } from '../model/famille-olfactive.model';

@Component({
  selector: 'app-add-fragrance',
  imports: [FormsModule],
  templateUrl: './add-fragrance.html',
  styleUrl: './add-fragrance.css'
})
export class AddFragrance implements OnInit {

  newFragrance = new Fragrance();

  familles! : FamilleOlfactive[];
  newIdFam! : number;
  newFamille! : FamilleOlfactive;

  constructor(private fragranceService: FragranceService,
              private router: Router) {}

  ngOnInit() {
    this.familles = this.fragranceService.listeFamilles();
  }

  addFragrance(){
   this.newFamille = this.fragranceService.consulterFamille(this.newIdFam);
   this.newFragrance.famille = this.newFamille;
   this.fragranceService.ajouterFragrance(this.newFragrance);
   this.router.navigate(['fragrances']);
  }
}
