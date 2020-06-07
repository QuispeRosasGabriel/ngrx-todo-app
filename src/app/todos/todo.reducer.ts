import { createReducer, on } from "@ngrx/store";
import { crear, toggle, editar, borrar, toggleAll } from "./todo.action";
import { Todo } from "../models/todo";

export const initialState: Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Comprar laptop"),
  new Todo("Buscar galeltas"),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggle, (state, { id }) => {
    return state.map((todo: any) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, { completado }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo: any) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
