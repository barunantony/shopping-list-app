import { Injectable } from "@angular/core";
import { Recipe } from "src/components/receipe-list/receipe.model";

@Injectable({providedIn: 'root'})
export class RecipeService {
   private recipes: Recipe[] = [
        new Recipe (
            'test recipe', 
            'description to prepare test recipe', 
            'https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_010.jpg',
            'details for recipe 1....'
        ),
        new Recipe (
            'test recipe 2', 
            'description to prepare test recipe 2', 
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
            'details fro recipe 2 ..............'
        ),
    ];

    getRecipes () {
        return this.recipes.slice();
    }
}