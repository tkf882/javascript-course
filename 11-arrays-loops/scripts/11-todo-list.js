// const todoList = [];

// const todoList = [
//     {name: 'make dinner', dueDate: '2025-11-26'},
//     {name: 'wash dishes', dueDate: '2025-11-26'},
// ];

const todoList = JSON.parse(localStorage.getItem('list')) || [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="
            todoList.splice(${i}, 1);
            localStorage.setItem('list', JSON.stringify(todoList));
            renderTodoList();
        ">Delete</button>`;
        todoListHTML += html;
    }
    console.log(todoListHTML);
    const todoListElement = document.querySelector('.js-todo-list');
    todoListElement.innerHTML = todoListHTML;
}

function addTodo() {
    const intputElement = document.querySelector('.js-name-input');
    const name = intputElement.value;

    const dueInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dueInputElement.value;

    // todoList.push({
    //     name: name, 
    //     dueDate: dueDate
    // });
    // Use the shorthand shortcut since the names are the same
    todoList.push({
        name, 
        dueDate
    });
    console.log(todoList);
    intputElement.value = '';

    localStorage.setItem('list', JSON.stringify(todoList));
    renderTodoList();
}

