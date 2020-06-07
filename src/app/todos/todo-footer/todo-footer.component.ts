import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.reducer";
import { Store } from "@ngrx/store";
import * as actions from "src/app/filtro/filtro.action";
import { limpiarTodos } from "../todo.action";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styleUrls: ["./todo-footer.component.css"],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: actions.filtrosValidos;
  filtros: actions.filtrosValidos[] = ["todos", "completados", "pendientes"];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) {
    // this.store.select("filtro").subscribe((data) => (this.filtroActual = data));
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.completado).length;
    });
  }

  ngOnInit() {}

  cambiarFiltro(filtro: actions.filtrosValidos) {
    this.store.dispatch(actions.setFiltro({ filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarTodos());
  }
}
