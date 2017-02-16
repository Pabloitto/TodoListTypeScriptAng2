import { Todo } from './../shared/models/todo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html'
})
export class TodoListComponentComponent {

  @Input() todos: Todo[];

  constructor() {
  }

  onTrash(todo: Todo) {
    let index = this.todos.indexOf(todo);
    todo.isRemoved = true;
    setTimeout(() => this.todos.splice(index, 1), 500);
  }

}
