import { createReducer, on } from "@ngrx/store";
import { crear } from "./todo.action";
import { Todo } from "../models/todo";

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)])
);

export function counterReducer(state, action) {
  return _todoReducer(state, action);
}
