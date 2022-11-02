import { saveTask, getTasks, onGetTasks } from "./firestore.js";

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");

window.addEventListener('DOMContentLoaded', async () => {

  onGetTasks((querySnapshot) => {
    const taks = document.createElement('div')

    querySnapshot.forEach((doc) => {
      let datos = doc.data()

      taks.innerHTML += `
      
      <div class="card text-center" style="width: 18rem;">
        <h5 class="card-title"${datos.title}</h5>
        
        <div class="card-body">
        <img src="${datos.image}" class="card-img-top" alt="...">
          <p class="card-text">${datos.description}</p>
          <button href="#" class="btn btn-danger">Eliminar</button>
        </div>
      </div>
        `
      tasksContainer.appendChild(taks)
    });
  })
})

taskForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];
  const image = taskForm["imagen"];

  saveTask(title.value, description.value, image.value);

  taskForm.reset();
})

