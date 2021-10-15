import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        this.cargarLocalStorage();
    };

    nuevoTodo(todo) {

        this.todos.push(todo);
        this.guardarLocalStorage();

    };

    eliminarTodo(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {

                const numeroIndice = this.todos.indexOf(todo)

                this.todos.splice(numeroIndice, 1);
                this.guardarLocalStorage();
                break;
            };
        };
    };

    marcarCompletado(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {

                todo.completado =  !todo.completado;
                this.guardarLocalStorage();
                break;
            };
        };
    };

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();

    };

    guardarLocalStorage() {

        localStorage.setItem( 'todo', JSON.stringify( this.todos) );

    };

    cargarLocalStorage() {
        
        this.todos = ( localStorage.getItem('todo') ) 
                        ? JSON.parse( localStorage.getItem('todo') )
                            : [];
        
        this.todos = this.todos.map( objeto => Todo.fromJson(objeto) );
    };   
};

