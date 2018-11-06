import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { ReceipeDetailsComponent } from '../components/receipe-details/receipe-details.component';
import { ReceipeListComponent } from '../components/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from '../components/receipe-item/receipe-item.component';
import { ShoppinListComponent } from '../components/shoppin-list/shoppin-list.component';
import { ShoppinListEditComponent } from '../components/shoppin-list-edit/shoppin-list-edit.component';
import { RootComponent } from '../components/root/root.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipeDetailsComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    RootComponent,
    ShoppinListComponent,
    ShoppinListEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
