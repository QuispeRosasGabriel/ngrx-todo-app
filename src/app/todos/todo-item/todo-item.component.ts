import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { FormControl, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducer";
import * as actions from "../todo.action";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild("inputFisico", { static: true })
  txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    //detectar el cambio en el radio button
    this.chkCompletado.valueChanges.subscribe((valor) =>
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    );
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1000);
  }

  terminarEdicion() {
    this.editando = false;
  }
}
