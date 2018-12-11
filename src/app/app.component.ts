import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SHOPPING LIST APP';

  constructor(private store: Store<{shoppingList: any}>) {
    store.select('shoppingList')
      .subscribe((body) => {console.log(body)});
  }

  changeTitle (data: { title: string }) {
    this.title = data.title;
    this.store.dispatch({type: 'sometype', payload: 'some payload'});
  }

  logMessage (msg: string, infoType: string) {
    console.log(`log- ${infoType}|${Date.now}: ${msg}`);
  }
}
