import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "src/components/receipe-list/receipe.model";
import { Ingredient } from "src/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list-service/shopping-list.service";

@Injectable({providedIn: 'root'})
export class RecipeService {

   private recipes: Recipe[] = [
        new Recipe (
            'Teriyaki Chicken', 
            'description to prepare test recipe', 
            'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg',
            'details for recipe 1....',
            [
                new Ingredient('Chicken', 2),
                new Ingredient('Rice', 1),
                new Ingredient('Lettuce', 1),
            ]
        ),
        new Recipe (
            'Veg Pan pizza', 
            'description to prepare test recipe 2', 
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
            'details fro recipe 2 ..............',
            [
                new Ingredient('Tomatoes', 1),
                new Ingredient('Cheese', 1),
                new Ingredient('Wheat Four', 1),
                new Ingredient('Salt', 1),
            ]
        ),
    ];
    private recipeSelectedEvent = new EventEmitter();
    private recipeSelected: Recipe;

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes () {
        return this.recipes.slice();
    }

    getRecipeSelected () {
        return this.recipeSelected;
    }

    onRecipeSelected (recipe: Recipe) {
        this.recipeSelected = recipe;
        this.recipeSelectedEvent.emit();
    }

    subscribeToRecipeSelected (callBackFunc: Function) {
        this.recipeSelectedEvent.subscribe(callBackFunc);
    }

    addRecipeIngredientToShoppingList (ingredients : Ingredient[]) {
        this.shoppingListService.addNewIngredients(ingredients);
    }

}