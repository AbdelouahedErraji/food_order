import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  itemEdit = new Subject<number>();

  private Ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredient(index: number) {
    return this.Ingredients[index];
  }

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

  updateEngredient(index: number, ingredient: Ingredient) {
    this.Ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.Ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.Ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.Ingredients.slice());
  }

  constructor() {}
}
