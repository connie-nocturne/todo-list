// todo-list.component.ts
import { Component, Input } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodo: string = '';

  addTodo() {
    if(this.newTodo.trim() !== '') {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    // if (index !== -1) {
    if (index >= 0 && index < this.todos.length) {
     this.todos.splice(index, 1);
    }
  }
}
