import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { TodoListItemComponentComponent } from './todo-list-item-component/todo-list-item-component.component';

import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponentComponent,
    TodoListItemComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
