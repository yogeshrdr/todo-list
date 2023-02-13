
const tasktemplate = (data) => `
        <div id=${data.id} class="task">
            <p>${data.task}</p>
            <button class="delButton">del</button>
        </div>
`;


class MainView{
    constructor(subscriber){
        this.subscriber = subscriber;
        this.todoInput = this.getElement("#taskInput");
        this.todoView = this.getElement("#todoView");
        this.todoButton = this.getElement("#taskButton");
    };

    getElement(selector){
       return document.querySelector(selector);
    };

    displayTodo(todo){
        this.todoView.innerHTML  = "";

        if(todo.length === 0){
            this.todoView.innerHTML = `<div class="notask">No task to Show</div>`;
        }else{
            todo.forEach(ele => {
                const content = tasktemplate(ele);
                this.todoView.innerHTML += content;
            });
        }
    };

    subscribeView(){
        this.subscriber.subscribe("displayTodo", this.displayTodo.bind(this));

        this.todoButton.addEventListener("click", e => {
            e.preventDefault();
            const text = this.todoInput.value;
            this.todoInput.value = "";
            this.subscriber.publisher("addTodo", text);
        });

        this.todoView.addEventListener("click", ({target}) => {
            if (target.className === "delButton") {
                const todoId = target.parentNode.id;
                this.subscriber.publisher("delTodo", todoId);
            }
        });
    };

}

export default MainView;