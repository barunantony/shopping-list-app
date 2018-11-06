import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shoppin-list',
  templateUrl: './shoppin-list.component.html',
  styleUrls: ['./shoppin-list.component.css']
})
export class ShoppinListComponent implements OnInit, OnDestroy {

  static ingredientSaved: Ingredient [] = [
    new Ingredient("Apples", 8),
    new Ingredient("Tomatoes", 4),
  ];
  ingredients: Ingredient[];
  ingredientSelected: Ingredient;

  constructor() { 
    this.ingredients = ShoppinListComponent.ingredientSaved;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    ShoppinListComponent.ingredientSaved = this.ingredients;
  }

  addNewIngredient (event) {
    this.ingredients.push(new Ingredient(event.name, event.amount));
  }

  loadIngredient (ingr: Ingredient) {
    this.ingredientSelected = ingr;
  }

  removeIngredient(ingr: Ingredient) {
    let indexFound = this.ingredients.findIndex((item) => 
        item.name === ingr.name && item.amount === ingr.amount); 
    if (indexFound > -1) {
      this.ingredients.splice(indexFound, 1);
    }
  }

}
