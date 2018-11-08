import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../receipe-list/receipe.model';
import { RecipeService } from 'src/services/recipe-service/recipe.service';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelectItem () {
    this.recipeService.onRecipeSelected(this.recipe);
  }

}
