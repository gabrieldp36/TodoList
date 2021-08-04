import './styles.css';

import { Todo, TodoList } from './classes';

const todoList = new TodoList();

const tarea = new Todo('Estudiar JavaScript');

const tarea2 = new Todo('Saludar a Paula');

todoList.nuevoTodo(tarea);

todoList.nuevoTodo(tarea2);

console.log(todoList);
