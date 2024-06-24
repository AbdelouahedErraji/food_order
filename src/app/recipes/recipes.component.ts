import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent {
  // recipeSelected: Recipe;

  constructor() {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.recipeSelected = recipe;
    // });
  }
}