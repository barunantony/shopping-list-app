import { Injectable } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {

    private ingredients: Ingredient [] = [
        new Ingredient("Apples", 8),
        new Ingredient("Tomatoes", 4),
      ];

    getIngredients () {
        return this.ingredients.slice();
    }

    addNewIngredient (ingredient: Ingredient) {
        this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
        return this.ingredients;
    }
    
    removeIngredient(ingr: Ingredient) {
        let indexFound = this.ingredients.findIndex((item) => 
            item.name === ingr.name && item.amount === ingr.amount); 
        if (indexFound > -1) {
            this.ingredients.splice(indexFound, 1);
        }
        return this.ingredients;
    }
}