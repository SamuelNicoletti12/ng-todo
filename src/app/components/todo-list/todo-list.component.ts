import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TODOS } from '../../data/todos';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos: Todo[] = TODOS;

  completa(id: number) {
    console.log('richiesta eliminazione:', id);

    const todo = this.todos.find(t => t.id == id);
    if (todo) {
      const i = this.todos.indexOf(todo);
      this.todos[i].completed = true;
    }
  }

  getDaCompletare() {
    return this.todos.filter(t => !t.completed).length;
  }
}
