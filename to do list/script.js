const button = document.querySelector(".input-container button")
const input = document.querySelector(".input-container input")
const list = document.querySelector(".todo-list")

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.className = "todo-list__item";
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "todo-list__button"
    li.innerText = input.value;
    list.appendChild(li);
    li.appendChild(deleteButton);
    input.value = "";

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
    })
})