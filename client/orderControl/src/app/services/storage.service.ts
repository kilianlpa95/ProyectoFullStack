import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Task {
  identifier: string;
  manager: string;
  description: string;
}

const TASKS_KEY = 'keys';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(private storage: Storage) { }

  addTask(task: Task): Promise<any> {
    return this.storage.get(TASKS_KEY).then((tasks: Task[]) => {
      if (tasks) {
        tasks.push(task);
        return this.storage.set(TASKS_KEY, tasks);
      } else {
        return this.storage.set(TASKS_KEY, [task]);
      }
    });
  }

  getTasks(): Promise<Task[]> {
    return this.storage.get(TASKS_KEY);
  }

  updateTask(task: Task): Promise<any> {
    return this.storage.get(TASKS_KEY).then((tasks: Task[]) => {
      if (!tasks || tasks.length === 0) {
        return null;
      }

      const newTasks: Task[] = [];

      for (const i of tasks) {
        if (i.identifier === task.identifier) {
          newTasks.push(task);
<<<<<<< HEAD
          return this.storage.set(TASKS_KEY, tasks);
=======
>>>>>>> develop
        } else {
          newTasks.push(i);
        }
      }

      return this.storage.set(TASKS_KEY, newTasks);
    });
  }

  deleteTask(identifier: string): Promise<Task[]> {
    return this.storage.get(TASKS_KEY).then((tasks: Task[]) => {
      if (!tasks || tasks.length === 0) {
        return null;
      }

      const item: Task[] = [];

      for (const i of tasks) {
        if (i.identifier !== identifier) {
          item.push(i);
        }
      }

      return this.storage.set(TASKS_KEY, item);

    });
  }
}
