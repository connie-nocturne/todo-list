import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
// import { TodoListManagerComponent } from './todo-list-manager/todo-list-manager.component';
import { RouterModule, Routes } from '@angular/router';
// import { TodoListService } from './todo-list.service'; // Import the service

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    // TodoListManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  // providers: [TodoListService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
