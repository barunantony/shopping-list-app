import { Component, OnInit } from '@angular/core';
import { Recipe } from './receipe.model';
import { RecipeService } from 'src/services/recipe-service/recipe.service';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipes: Recipe[];

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.subscribeToRecipeSelected(() => {
      this.selectedRecipe = this.recipeService.getRecipeSelected();
    });
  }
}
