import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";

@Injectable({providedIn: 'root'})
export class ShoppingListService {

    private addNewIngredientEvent = new EventEmitter();
    private removeNewIngredientEvent = new EventEmitter();

    private ingredients: Ingredient [] = [
        new Ingredient("Apples", 8),
        new Ingredient("Tomatoes", 4),
      ];

    getIngredients () {
        return this.ingredients.slice();
    }

    addNewIngredient (ingredient: Ingredient) {
        if (ingredient.name && ingredient.amount) {
            this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
            this.addNewIngredientEvent.emit();
        }
    }

    addNewIngredientListener (calBkFn: Function) {
        this.addNewIngredientEvent.subscribe(calBkFn);
    }
    
    removeIngredient(ingr: Ingredient) {
        let indexFound = this.ingredients.findIndex((item) => 
            item.name === ingr.name && item.amount === ingr.amount); 
        if (indexFound > -1) {
            this.ingredients.splice(indexFound, 1);
        }
        this.removeNewIngredientEvent.emit();
    }

    removeIngredientListener (calBkFn: Function) {
        this.removeNewIngredientEvent.subscribe(calBkFn);
    }
}