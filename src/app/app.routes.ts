import { Routes } from '@angular/router';
import { Fragrances } from './fragrances/fragrances';
import { AddFragrance } from './add-fragrance/add-fragrance';
import { UpdateFragrance } from './update-fragrance/update-fragrance';

export const routes: Routes = [
    {path: "fragrances", component : Fragrances},
    {path: "add-fragrance", component : AddFragrance},
    {path: "updateFragrance/:id", component: UpdateFragrance},
    {path: "", redirectTo: "fragrances", pathMatch: "full"}
];
