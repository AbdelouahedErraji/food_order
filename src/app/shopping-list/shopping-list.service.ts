import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private Ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.Ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.Ingredients.push(ingredient);
    this.ingredientsChanged.next(this.Ingredients.slice());
  }

  addIngredients(ingredient: Ingredient[]) {
    this.Ingredients.push(...ingredient);
    this.ingredientsChanged.next(this.Ingredients.slice());
  }

  constructor() {}
}
