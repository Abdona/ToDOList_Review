// eslint-disable-next-line import/no-cycle
import { newTasklist } from './index';
// eslint-disable-next-line import/prefer-default-export
export function editContent(Task) {
  const taskText = document.getElementById(Task.id * 2);
  Task.description = taskText.value;
  newTasklist.addTostorage();
}