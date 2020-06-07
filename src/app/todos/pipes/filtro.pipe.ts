import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "src/app/models/todo";
import { filtrosValidos } from "src/app/filtro/filtro.action";

@Pipe({
  name: "filtroTodo",
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case "completados":
        return todos.filter((todo) => todo.completado);
      case "pendientes":
        return todos.filter((todo) => !todo.completado);

      default:
        return todos;
    }
  }
}
