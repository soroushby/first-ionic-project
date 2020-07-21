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

    {
      id: "r2",
      title: "schintz44",
      imageUrl: null,
      ingredients: ["french fries", "salad"],
    },
  ];
  constructor() {}
  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
