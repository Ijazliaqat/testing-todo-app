// const todoInput = document.getElementById("taskInput");
// const todoList = document.getElementById("taskList");

// function createTask() {
//   if (todoInput.value.trim() === "") return;

//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   span.textContent = todoInput.value.trim();

//   const actions = document.createElement("div");
//   actions.classList.add("actions");

//   const completeBtn = document.createElement("button");
//   completeBtn.textContent = "✔️";
//   completeBtn.classList.add("complete-btn");
//   completeBtn.onclick = () => {
//     span.classList.toggle("completed");
//   };

//   const editBtn = document.createElement("button");
//   editBtn.textContent = "✏️";
//   editBtn.classList.add("edit-btn");
//   editBtn.onclick = () => {
//     const newValue = prompt("Edit Task Value", span.textContent);
//     if (newValue !== null && newValue.trim() !== "") {
//       span.textContent = newValue.trim();
//     }
//   };

//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "❌";
//   deleteBtn.classList.add("delete-btn");
//   deleteBtn.onclick = () => li.remove();

//   console.log(actions);

//   actions.append(completeBtn, editBtn, deleteBtn);
//   li.append(span, actions);
//   todoList.appendChild(li);
//   todoInput.value = "";
// }

const openBtn = document.querySelector(".open-modal-btn");
const modalOverlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
  modalOverlay.style.display = "flex";
  document.title = "Modal Opened";
});

window.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.style.display = "none";
    document.title = "Modal Closed";
  }
});

closeBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  document.title = "Modal Closed";
});



// repo: 
// clone: remote repo
// stage: 
// commit:
// branch
// merge
// conflict
// pull
// push