// eslint-disable-next-line import/no-cycle
import { newTasklist } from './index';
// eslint-disable-next-line import/prefer-default-export
export function checkSelect(Task) {
  const TaskP = document.getElementById(Task.id * 2);
  if (Task.status === false) {
    TaskP.style.color = 'rgba(0, 0, 0, 0.45)';
    TaskP.style.textDecoration = 'line-through';
  } else {
    TaskP.style.textDecoration = 'none';
    TaskP.style.color = 'black';
  }
  Task.status = !Task.status;
  newTasklist.addTostorage();
}