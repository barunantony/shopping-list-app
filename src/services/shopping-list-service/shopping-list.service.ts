import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";
import { Subject, Observer } from "rxjs";

@Injectable({providedIn: 'root'})
export class ShoppingListService {

    private addNewIngredientEvent = new Subject();
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
            const indx = this.ingredients.findIndex((item) => item.name === ingredient.name);
            if (indx === -1) {
                this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount));
            } else {
                this.ingredients[indx].amount +=  ingredient.amount;
            }
            this.addNewIngredientEvent.next();
        }
    }

    addNewIngredientListener (calBkFn: any) {
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

    addNewIngredients (ingrs: Ingredient[]) {
        this.ingredients.push(...ingrs);
        this.ingredients = this.ingredients.reduce((acc, cur) => {
            const indx = acc.findIndex((item) => item.name === cur.name);
            if (indx === -1) {
                acc.push(new Ingredient(cur.name, cur.amount));
            } else {
                acc[indx].amount +=  cur.amount;
            }
            return acc;
        }, []);
        this.addNewIngredientEvent.next();
    }
}