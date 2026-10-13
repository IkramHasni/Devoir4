import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Fragrance } from '../model/fragrance.model';
import { FragranceService } from '../services/fragrance.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fragrances',
  imports: [CommonModule, RouterLink],
  templateUrl: './fragrances.html',
  styleUrl: './fragrances.css'
})
export class Fragrances implements OnInit {
  fragrances! : Fragrance[]; //un tableau de Fragrance
  constructor(private fragranceService: FragranceService ) {
    this.fragrances = fragranceService.listeFragrances();
  }

  ngOnInit() {
  }

  supprimerFragrance(f: Fragrance)
  {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.fragranceService.supprimerFragrance(f);
  }
}
