let todoInput = document.getElementById("todoInput");
let addBtn = document.getElementById("addBtn");
let todoList = document.getElementById("todo-list");
let todos = ["hello"];

function renderTodo() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", (e) => {
      deleteTodo(index);
    });
    li.innerText = todo;
    todoList.appendChild(li);
    todoList.appendChild(deleteBtn);
  });
}

function createTodo() {
  const value = todoInput.value.trim();

  if (value) {
    todos.push(value);
    todoInput.value = "";
    renderTodo();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodo();
}

addBtn.addEventListener("click", () => {
  createTodo();
});

renderTodo();
