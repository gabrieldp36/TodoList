// Importaciones y exportaciones.

import { Todo } from "../classes";

import { todoList } from "../index";

// Referencias HTML.

const divTodoList = document.querySelector('.todo-list');

const txtInput = document.querySelector('.new-todo');

const btnBorrar = document.querySelector('.clear-completed');

const ulFilters = document.querySelector(".filters");

const anchorFilter = document.querySelectorAll(".filtro");

export const crearTodoHtml = (todo) => {

    const htmlTodo = 
     `<li class= "${ (todo.completado) ? "completed" : '' }" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
                <label>${todo.tarea}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
};

// Eventos.

txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && event.target.value.length > 0) {

        const nuevoTodo = new Todo (event.target.value);

        todoList.nuevoTodo(nuevoTodo);

        crearTodoHtml(nuevoTodo);

        event.target.value = '';

    };
  
});

divTodoList.addEventListener('click', (event) => {

    const nombreElelemnto = event.target.localName;

    const todoElemento = event.target.parentElement.parentElement;

    const todoId = todoElemento.getAttribute('data-id');

    if ( nombreElelemnto.includes('input') ) { 
        
        todoList.marcarCompletado(todoId);

        todoElemento.classList.toggle('completed');

    } else if (nombreElelemnto.includes('button') ) {

        todoList.eliminarTodo(todoId);

        todoElemento.remove();
        
    };

});

btnBorrar.addEventListener('click', () => {
    
    todoList.eliminarCompletados();

    const todoCompletados = document.querySelectorAll('.completed')

    todoCompletados.forEach( completado => {
        
        completado.remove();
    });
});

ulFilters.addEventListener('click', (event) =>{

    const filtro = event.target.text;

    if (!filtro) { return; };

    for ( const elemento of anchorFilter) {

        elemento.classList.remove('selected');

        event.target.classList.add('selected');
    };

    for ( const elemento of divTodoList.children) {

        elemento.classList.remove('hidden');

        const completado = elemento.classList.contains('completed');

        switch (filtro) {

            case 'Pendientes':

                if (completado) {

                    elemento.classList.add('hidden');
                };
            break;

            case 'Completados':

                if (!completado) {

                    elemento.classList.add('hidden');
                };
            break;
        };
    };
});
