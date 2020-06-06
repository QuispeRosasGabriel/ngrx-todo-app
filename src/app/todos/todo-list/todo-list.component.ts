import { Component, OnInit } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducer";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private store: Store<AppState>) {
    this.store.select("todos").subscribe((todos) => (this.todos = todos));
  }

  ngOnInit() {}
}
