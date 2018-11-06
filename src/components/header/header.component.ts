import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { recipe, shopping } from '../../utils/constants';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('selectionMade') selectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipes () {
    this.selectedEvent.emit(recipe);
  }

  selectShoppingList () {
    this.selectedEvent.emit(shopping);
  }

  selectRecipeBook () {
    this.selectedEvent.emit('recipeBook');
  }
}
