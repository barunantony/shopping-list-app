import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../receipe-list/receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() selectItem = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectItem () {
    this.selectItem.emit(this.recipe);
  }

}
