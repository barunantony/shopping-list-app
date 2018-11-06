import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../receipe-list/receipe.model';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.css']
})
export class ReceipeDetailsComponent implements OnInit, OnChanges {

  @Input() recipeDetails: Recipe;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
