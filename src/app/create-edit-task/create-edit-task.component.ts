import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppModel } from '../app.model';

@Component({
  selector: 'app-create-edit-task',
  templateUrl: './create-edit-task.component.html',
  styleUrls: ['./create-edit-task.component.css']
})
export class CreateEditTaskComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('model') appModel: AppModel;

  // tslint:disable-next-line:no-output-rename
  @Output('save') showModelValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public showAppModelValue() {
    this.showModelValue.emit(Object.assign({}, this.appModel));
  }

}
