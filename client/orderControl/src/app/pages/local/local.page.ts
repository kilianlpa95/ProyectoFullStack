import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Platform, ToastController } from '@ionic/angular';
import { StorageService, Task } from '../../services/storage.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements OnInit {

  tasks: Task[] = [];
  localForm: FormGroup;
  newTask: Task = <Task>{};
  paramTask: Task;
  validationMessages = {
    identifier: [
      { type: 'required', message: 'To do is required.' },
      { type: 'minlength', message: 'To do must be at least 5 characters long.' },
      { type: 'maxlength', message: 'To do cannot be more than 25 characters long.' },
    ],
    description: [
      { type: 'required', message: 'Description is required.' },
      { type: 'minlength', message: 'Description must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Description cannot be more than 200 characters long.' },
    ],
    manager: [
      { type: 'required', message: 'Manager is required.' },
      { type: 'minlength', message: 'Manager must be at least 5 characters long.' }
    ]
  };

  constructor(private storageService: StorageService,
              private formBuilder: FormBuilder,
              private toast: ToastController,
              private platform: Platform) {
    this.platform.ready().then(() => {
      this.loadTasks();
    });
  }

  async chargeForm() {

    this.localForm = this.formBuilder.group({
      identifier: new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.required
      ])),
      manager: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(200),
        Validators.minLength(5)
      ]))
    });
  }

  addTask(values) {
    this.newTask = {
      identifier: values.identifier,
      manager: values.manager,
      description: values.description
    };
    this.storageService.addTask(this.newTask).then(task => {
      this.toast.create({
        message: 'Task created successfully',
        duration: 3000
      }).then((toastData) => {
        toastData.present();
      });
      this.loadTasks();
    });
  }

  loadTasks() {
    this.storageService.getTasks().then(tasks => {
      this.tasks = tasks;
    });
  }

  putTask(task) {
    this.paramTask = task;
    this.localForm.patchValue({
      identifier: this.paramTask.identifier,
      manager: this.paramTask.manager,
      description: this.paramTask.description
    });
  }

  updateTask(task: Task, values) {
    task.manager = values.manager;
    task.description = values.description;
    this.storageService.updateTask(task).then(_ => {
      this.toast.create({
        message: 'Task updated successfully',
        duration: 3000
      }).then((toastData) => {
        toastData.present();
      });
      this.loadTasks();
    });
  }

  deleteTask(task: Task) {
    this.storageService.deleteTask(task.identifier).then(_ => {
      this.toast.create({
        message: 'Task deleted',
        duration: 3000
      }).then((toastData) => {
        toastData.present();
      });
      this.loadTasks();
    });
  }

  ngOnInit() {
    this.chargeForm();
  }

}
