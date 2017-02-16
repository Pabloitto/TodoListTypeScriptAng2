import { Todo } from './shared/models/todo';
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  description: string;
  todos:Todo[];

  constructor() {
    this.todos = new Array<Todo>();
  }

  addTodo() {
    let todo = new Todo(this.description);
    this.todos.push(todo);
    this.description = "";
  }

}
