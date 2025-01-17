const button = document.querySelector(".input-container button")
const input = document.querySelector(".input-container input")
const list = document.querySelector(".todo-list")

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.className = "todo-list__item";
    li.innerText = input.value;
    input.value = "";
    const btn = document.createElement("button");
    btn.className = "delete-btn";
    btn.innerText = "delete";
    li.appendChild(btn);
    const done = document.createElement("input");
    done.type = "checkbox";
    done.className = "todo-list__button";
    li.appendChild(done);
    list.appendChild(li);

    done.addEventListener("click", () => {
        // Перевіряємо поточний стан textDecoration
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none"; // Прибираємо закреслення
        } else {
            li.style.textDecoration = "line-through"; // Додаємо закреслення
        }
    });
    
    btn.addEventListener("click", () => {
        list.removeChild(li);
    })
})