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
  }

  addNewIngredient (event) {
    if(event.name && event.amount) {
      this.ingredients = this.shoppingListService.addNewIngredient(
        new Ingredient(event.name, event.amount)
      );
    }
    return this.ingredients;
  }

  loadIngredient (ingr: Ingredient) {
    this.ingredientSelected = ingr;
  }

  removeIngredient(ingr: Ingredient) {
    this.ingredients = this.shoppingListService.removeIngredient(ingr);
  }

}
