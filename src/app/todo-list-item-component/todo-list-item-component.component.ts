import { TodoService } from './../shared/services/todo-service';
import { Todo } from './../shared/models/todo';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item-component',
  templateUrl: './todo-list-item-component.component.html',
  providers: [TodoService]
})
export class TodoListItemComponentComponent {

  @Input() todo: Todo;
  @Output() trashEvent = new EventEmitter<Todo>();

  constructor(private _todoService: TodoService) {

  }

  onTrash() {
    this.trashEvent.emit(this.todo);
  }

  onDone() {
    let todo = new Todo(this.todo.description);
    todo.isDone = !this.todo.isDone;
    this._todoService.updateTodo(todo)
      .subscribe(result => {
        if (result) {
          this.todo.isDone = todo.isDone;
        }
      });
  }

}
