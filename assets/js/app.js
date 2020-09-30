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

const switchTheme = (e) => {
  console.log();
  const button = document.querySelector(".theme-switcher i");
  document.documentElement.classList.toggle("dark-mode");
  if (button.classList.contains("fa-toggle-on")) {
    button.classList.remove("fa-toggle-on");
    button.classList.add("fa-toggle-off");
  } else {
    button.classList.remove("fa-toggle-off");
    button.classList.add("fa-toggle-on");
  }
};
// const before = new Date("September 28 2020 7:15:50");
// const now = new Date();
// console.log(now);

// // Years
// console.log(now.getTime() - before.getTime());

// const diff = now.getTime() - before.getTime();

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(mins / 60);
// const days = Math.round(hours / 24);
// console.log(mins, hours, days);

// console.log(new Date(before.getTime()));
