import { Injectable } from '@angular/core';
import { AppModel, Category } from '../app.model';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskMapperService {

  constructor() { }

  public toTaskModel(appModel: AppModel) {
    if (!appModel) {
      return null;
    }
    return new TaskModel(
      null,
      appModel.title,
      appModel.text,
      );
  }

  public toAppModel(taskModel: TaskModel) {
    if (!taskModel) {
      return null;
    }
    return new AppModel(
      taskModel.name,
      false,
      Category.BILLING,
      taskModel.message
    );
  }
}
