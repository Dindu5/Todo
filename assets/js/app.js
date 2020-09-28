const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchForm = document.querySelector(".search input");

// Item Delete and Line- Through
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("title")) {
    e.target.classList.toggle("done");
  } else {
    e.target.querySelector(".title").classList.toggle("done");
  }
});

// New item template
const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="title">${todo}</span>
        <i class="fa fa-trash delete" aria-hidden="true"></i>
    </li>
    `;
  list.innerHTML += html;
};

// Submit item
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};
searchForm.addEventListener("keyup", (e) => {
  const term = searchForm.value.trim().toLowerCase();
  filterTodos(term);
});
