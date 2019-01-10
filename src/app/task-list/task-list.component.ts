import { Component, OnInit, TemplateRef } from '@angular/core';
import { AppModel, AppInterface } from '../app.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { TaskService } from '../services/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  public modalRef: BsModalRef;

  public taskModel = new AppModel();

  public appImpl: AppInterface = <AppInterface>{};

  public tasks: AppModel[] = [];



  constructor(
    private modalService: BsModalService,
    private taskService: TaskService
  ) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((response) => {
      this.tasks = response;
    });
  }


  public showNewTask(modalContent: TemplateRef<any>) {
    this.taskModel = new AppModel();
    this.modalRef = this.modalService.show(modalContent);
  }

  public editList(index: number, modalContent: TemplateRef<any>) {
    this.taskModel = this.tasks[index];
    this.modalRef = this.modalService.show(modalContent);
  }

  public showAppModelValue(event: AppModel) {
    this.modalRef.hide();
    this.tasks.push(event);
  }
}
