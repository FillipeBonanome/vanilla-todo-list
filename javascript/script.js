let todoList = [];
let counter = 1;

function addTodo() {
    const titleInput = document.getElementById('task-name').value;
    const descInput = document.getElementById('task-desc').value;

    const todo = {
        id: counter++,
        title: titleInput,
        description: descInput,
        finished: false
    };

    todoList.push(todo);
    renderTodoList();
}

function removeTodo(id) {
    todoList = todoList.filter(todo => todo.id !== id);
    renderTodoList();
}

function updateTodo(id) {
    const todo = todoList.find(todo => todo.id === id);

    if (!todo) return;

    const newTitle = document.getElementById('task-name').value;
    const newDesc = document.getElementById('task-desc').value;

    if (newTitle) todo.title = newTitle;
    if (newDesc) todo.description = newDesc;

    renderTodoList();
}

function finishTodo(id) {
    const todo = todoList.find(todo => todo.id === id);
    if (!todo) return;
    todo.finished = !todo.finished;
    renderTodoList();
}

function renderTodoList() {
    const tableBody = document.getElementById('todo-table');

    tableBody.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ação</th>
        </tr>
    `;

    todoList.forEach(todo => {
        const row = document.createElement('tr');

        if (todo.finished) {   
            row.className = 'finished';   
        }

        row.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.description}</td>
            <td class="todo-action">
                <span title="finish" onclick="finishTodo(${todo.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"/></svg>
                </span>
                <span title="delete" onclick="removeTodo(${todo.id})">
                    <svg class="icon-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
                </span>
                <span title="edit" onclick="updateTodo(${todo.id})">
                    <svg class="icon-edit"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z"/></svg>
                </span>
            </td>
        `
        tableBody.appendChild(row);
    })

}