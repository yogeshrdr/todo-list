class MainModel{
    constructor(subscriber){
        this.todo = JSON.parse(localStorage.getItem("todo")) || [];
        this.subscriber = subscriber;
    };

    subscribeModel(){
        this.subscriber.publisher("displayTodo", this.todo);
        this.subscriber.subscribe("addTodo", this.addTodo.bind(this));
        this.subscriber.subscribe("delTodo", this.deleteTodo.bind(this));
    };

    addTodo(task){
        var id = 'id' + (new Date()).getTime();
        this.todo.push({id, task});
        this.setLocal(this.todo);
    };

    deleteTodo(id){
        const todoList = this.todo.filter(e => e.id!=id);
        this.todo = todoList;
        this.setLocal(this.todo);
    };

    setLocal(todo){
        this.subscriber.publisher("displayTodo", this.todo);
        localStorage.setItem("todo", JSON.stringify(todo));
    };
    
};

export default MainModel;