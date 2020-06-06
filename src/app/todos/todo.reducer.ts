import { createReducer, on } from "@ngrx/store";
import { crear } from "./todo.action";
import { Todo } from "../models/todo";

export const initialState: Todo[] = [
  new Todo("Salvar al mundo"),
  new Todo("Comprar laptop"),
  new Todo("Buscar galeltas"),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
