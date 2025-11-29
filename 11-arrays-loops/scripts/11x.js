const todoList = JSON.parse(localStorage.getItem('list')) || [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    const todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = todoListHTML;
}

function addTodo() {
    const intputElement = document.querySelector('.js-name-input');
    const name = intputElement.value;
    todoList.push(name);
    console.log(todoList);
    intputElement.value = '';

    renderTodoList();
    localStorage.setItem('list', JSON.stringify(todoList));
}

