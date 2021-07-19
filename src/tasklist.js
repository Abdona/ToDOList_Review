import MyImage from './images/3-vertical-dots.svg';
import { dragDrop } from './Drag_Drop';
// eslint-disable-next-line import/no-cycle
import { checkSelect } from './StatusUpdate';
// eslint-disable-next-line no-unused-vars
import { Task } from './Task';
// eslint-disable-next-line import/no-cycle
import { editContent } from './ContentUpdate';
// eslint-disable-next-line import/prefer-default-export
export class TaskList {
  constructor(Tasks) {
    this.taskListcollection = Tasks;
    this.Task1 = [];
    this.length = 0;
  }

  // eslint-disable-next-line class-methods-use-this
  addTask(Task, flag = true) {
    if (flag === true) {
      this.length += 1;
      this.taskListcollection.push(Task);
    }
    const newListitem = document.createElement('li');
    newListitem.setAttribute('id', Task.id);
    newListitem.setAttribute('class', 'ListItem');
    const newListtask = document.createElement('textarea');
    newListtask.setAttribute('maxlength', '255');
    newListtask.setAttribute('contenteditable', 'true');
    newListtask.addEventListener('change', () => { editContent(Task); });
    newListtask.innerHTML = Task.description;
    if (Task.status === true) {
      newListtask.style.color = 'rgba(0, 0, 0, 0.45)';
    }
    newListtask.setAttribute('id', Task.id * 2);
    const newListcheck = document.createElement('input');
    newListcheck.setAttribute('type', 'checkbox');
    newListcheck.setAttribute('id', Task.id * 3);
    newListcheck.addEventListener('click', () => { checkSelect(Task); });
    const newListdots = document.createElement('img');
    newListdots.setAttribute('src', MyImage);
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('id', 'taskcont');
    document.getElementById('ListContainer').appendChild(newListitem).appendChild(newListcheck);
    document.getElementById('ListContainer').appendChild(newListitem).appendChild(taskDiv).appendChild(newListtask);
    document.getElementById('ListContainer').appendChild(newListitem).appendChild(newListdots);
    dragDrop();
  }

  clearCompleted() {
    const newTasklist = this.taskListcollection.filter((task) => task.status === false);
    this.length = newTasklist.length;
    localStorage.setItem('length', JSON.stringify(this.length));
    // eslint-disable-next-line no-restricted-syntax
    for (const i in this.taskListcollection) {
      if (this.taskListcollection[i].status === true) {
        document.getElementById(this.taskListcollection[i].id).remove();
      }
    }
    this.taskListcollection = newTasklist;
    localStorage.setItem('library', JSON.stringify(this.taskListcollection));
  }

  // eslint-disable-next-line class-methods-use-this
  checkSelectonrefresh(Task) {
    const TaskP = document.getElementById(Task.id * 2);
    const newCheckBox = document.getElementById(Task.id * 3);
    if (Task.status === true) {
      newCheckBox.checked = true;
      TaskP.style.textDecoration = 'line-through';
    }
  }

  addTostorage() {
    localStorage.setItem('length', JSON.stringify(this.length));
    localStorage.setItem('library', JSON.stringify(this.taskListcollection));
  }
  /* eslint-disable */
    ShowTasks() {
      for (const i in this.taskListcollection) {
        this.length +=1 ;
        this.addTask(this.taskListcollection[i],false);
        this.checkSelectonrefresh(this.taskListcollection[i]);
      }
    }
  }