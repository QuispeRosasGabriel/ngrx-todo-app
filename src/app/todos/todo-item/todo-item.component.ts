import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { FormControl, Validators } from "@angular/forms";

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

  constructor() {}

  ngOnInit() {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    console.log(this.txtInputFisico);
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
