import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component ({
  selector: 'root',
  templateUrl:  './root.component.html',
})
export class RootComponent {
 @Input('appTitle') appName: string;
 @Output() titleChanged = new EventEmitter<{title: string}>();


 onInputName(event) {
   if (event.keyCode == '13') {
     this.titleChanged.emit({ title: event.target.value });
   }
 }

}
