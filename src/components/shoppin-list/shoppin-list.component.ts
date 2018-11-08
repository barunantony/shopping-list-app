import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListService } from 'src/services/shopping-list-service/shopping-list.service';

@Component({
  selector: 'app-shoppin-list',
  templateUrl: './shoppin-list.component.html',
  styleUrls: ['./shoppin-list.component.css']
})
export class ShoppinListComponent implements OnInit {

  ingredients: Ingredient[];
  ingredientSelected: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { 
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    this.shoppingListService.addNewIngredientListener(() =>
      this.refreshIngredients(this.shoppingListService.getIngredients())
    );

    this.shoppingListService.removeIngredientListener(() =>
      this.refreshIngredients(this.shoppingListService.getIngredients())
    );
  }

  loadIngredient (ingr: Ingredient) {
    this.ingredientSelected = ingr;
  }

  refreshIngredients (ingrnts: Ingredient[]) {
    this.ingredients = ingrnts;
  }
}
