import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipes } from "../recipes";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipes: Recipes;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alrtctrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("recipeId")) {
        return;
      }
      const recipeId = paramMap.get("recipeId");

      this.loadedRecipes = this.recipesService.getRecipe(recipeId);
      console.log(this.loadedRecipes);
    });
    // this.loadedRecipes = this.recipesService.getRecipe(
    //   this.activatedRoute.snapshot.params.recipeId
    // );
  }

  onDeleteRecipe() {
    this.alrtctrl
      .create({
        header: "are you sure",
        message: "do you really want to delete ?",
        buttons: [
          {
            text: "cancel",
            role: "cancel",
          },
          {
            text: "Delete",
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipes.id);
              this.router.navigate(["/recipes"]);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }
}
