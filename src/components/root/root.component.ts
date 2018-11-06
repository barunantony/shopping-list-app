import { Component, Input, EventEmitter, Output } from '@angular/core';

import { recipe, shopping } from '../../utils/constants';

@Component ({
  selector: 'root',
  templateUrl:  './root.component.html',
})
export class RootComponent {
 @Input('appTitle') appName: string;
 recipeChosen: boolean = false;
 shoppingChosen: boolean = false;

 // the type of data passed to the event are mentioned between the angle brackets '< >'
 @Output() titleChanged = new EventEmitter<{title: string}>();


 onInputName(event) {
   if (event.keyCode == '13') {
     this.titleChanged.emit({ title: event.target.value });
   }
 }

 onSelectionMade(event) {
   switch(event) {
    case recipe : 
      this.shoppingChosen = false;
      this.recipeChosen = true;
      break;
    case shopping : 
      this.shoppingChosen = true;
      this.recipeChosen = false;
      break;
    default:
      this.shoppingChosen = true;
      this.recipeChosen = true;
      break;
   }
 }

}
