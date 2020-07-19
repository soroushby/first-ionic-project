import { Injectable } from "@angular/core";
import { Recipes } from "./recipes";

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  recipes: Recipes[] = [
    {
      id: "r1",
      title: "schintzel",
      imageUrl: null,
      ingredients: ["french fries", "salad"],
    },
  ];
  constructor() {}
}
