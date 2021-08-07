export class TodoList {

    todos;

    constructor() {

        this.todos = [];
    };

    nuevoTodo(todo) {

        this.todos.push(todo);

    };

    eliminarTodo(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {

                const numeroIndice = this.todos.indexOf(todo)

                this.todos.splice(numeroIndice, 1);
                break;
            };
        };
    };

    marcarCompletado(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {

                todo.completado =  !todo.completado;
                break;
            };
        };
    };

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado)

    };

};

