import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  chkCompletado: FormControl;

  constructor() {}

  ngOnInit() {}
}
