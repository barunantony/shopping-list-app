import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list-app';

  changeTitle (data: { title: string }) {
    this.title = data.title;
  }
}
