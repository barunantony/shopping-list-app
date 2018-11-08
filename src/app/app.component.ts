import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SHOPPING LIST APP';

  changeTitle (data: { title: string }) {
    this.title = data.title;
  }

  logMessage (msg: string, infoType: string) {
    console.log(`log- ${infoType}|${Date.now}: ${msg}`);
  }
}
