import { TodoService } from './../shared/services/todo-service';
import { Todo } from './../shared/models/todo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  providers: [TodoService]
})
export class TodoListComponentComponent {

  @Input() todos: Todo[];

  constructor(private _todoService: TodoService) {
  }

  onTrash(todo: Todo) {
    this._todoService.deleteTodo(todo)
      .subscribe(result => {
        if (result) {
          this.onDeleteFinish(todo);
        }
      });
  }

  private onDeleteFinish(todo: Todo) {
    let index = this.todos.indexOf(todo);
    todo.isRemoved = true;
    setTimeout(() => this.todos.splice(index, 1), 500);
  }

}
