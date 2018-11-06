import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shoppin-list-edit',
  templateUrl: './shoppin-list-edit.component.html',
  styleUrls: ['./shoppin-list-edit.component.css']
})
export class ShoppinListEditComponent implements OnInit {

  @ViewChild('inputName') inputNameRef: ElementRef;
  @ViewChild('inputAmount') inputAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientDeleted = new EventEmitter<Ingredient>();
  @Input() loadIngredient: Ingredient;

  constructor() { }

  ngOnInit() {
    this.loadIngredient = this.loadIngredient || new Ingredient('', 0);
  }

  addIngredient() {
    this.ingredientAdded.emit({
      name: this.inputNameRef.nativeElement.value,
      amount: parseInt(this.inputAmountRef.nativeElement.value),
    });
  }

  clearLoadedIngredient() {
    this.loadIngredient = new Ingredient('', 0);
  }

  deleteIngredient() {
    this.ingredientDeleted.emit(this.loadIngredient);
  }

}
