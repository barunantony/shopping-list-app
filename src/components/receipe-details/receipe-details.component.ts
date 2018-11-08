import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../receipe-list/receipe.model';
import { ShoppingListService } from 'src/services/shopping-list-service/shopping-list.service';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit, OnChanges {

  @Input() recipeDetails: Recipe;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

  addRecipeIngredientToShoppingList () {
    this.recipeDetails.ingredients.forEach((ingr) => {
      this.shoppingListService.addNewIngredient(ingr);
    });
  }

}
