/* eslint-disable import/no-cycle */
import './style.css';
import { Task } from './Task';
import { TaskList } from './tasklist';

const localStoragedata = JSON.parse(localStorage.getItem('library'));
const newTasklist = new TaskList(localStoragedata || []);
newTasklist.ShowTasks();
// localStorage.clear();
function addTasks() {
  const taskText = document.getElementById('TaskInput');
  const TaskId = Math.floor(Math.random() * 1000); // idGenerate();
  const newTask = new Task(taskText.value, false, TaskId);
  taskText.value = '';
  newTasklist.addTask(newTask);
  newTasklist.addTostorage();
}
// eslint-disable-next-line no-unused-vars
function clearCompleted() {
  newTasklist.clearCompleted();
}
const clearAll = document.getElementById('clearall');
clearAll.onclick = clearCompleted;
const TasksInput = document.getElementById('TaskInput');
TasksInput.addEventListener('change', () => {
  addTasks();
});

// eslint-disable-next-line import/prefer-default-export
export { newTasklist };