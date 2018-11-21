import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';
import { ShoppingListService } from 'src/services/shopping-list-service/shopping-list.service';

@Component({
  selector: 'app-shoppin-list-edit',
  templateUrl: './shoppin-list-edit.component.html',
  styleUrls: ['./shoppin-list-edit.component.css']
})
export class ShoppinListEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;
  @Input() ingredientSelected: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredientSelected = this.ingredientSelected || null;
  }

  addIngredient() {
    this.shoppingListService.addNewIngredient(
      new Ingredient(this.inputNameRef.nativeElement.value, 
        parseInt(this.inputAmountRef.nativeElement.value)
      ));
  }

  clearLoadedIngredient() {
    this.ingredientSelected = null;
    this.inputNameRef.nativeElement.value = '';
    this.inputAmountRef.nativeElement.value = '';
  }

  deleteIngredient() {
    this.shoppingListService.removeIngredient(
      new Ingredient(this.inputNameRef.nativeElement.value, 
        parseInt(this.inputAmountRef.nativeElement.value)
      )
    );
  }

}
