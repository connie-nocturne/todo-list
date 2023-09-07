// todo-item.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() remove = new EventEmitter<void>();

  removeTodo() {
    this.remove.emit();
  }

  constructor(private todoList: TodoListComponent) {}
}
