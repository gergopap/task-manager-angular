import { Component, TemplateRef } from '@angular/core';
import { AppModel, AppInterface } from './app.model';
import { SignUpModel } from './sign-up.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public taskModel = new AppModel();

  public appImpl: AppInterface = <AppInterface>{};

  public signUpModel: SignUpModel = new SignUpModel();

  public fullnameInvalid = false;
  public emailInvalid = false;
  public passwordInvalid: 'RED' | 'ORANGE' | 'GREEN' = 'RED';

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) {
  }

  public showNewTask(modalContent: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalContent);
  }

  public editList(index: number) {
    // TODO show popup
  }

  public showAppModelValue(event: AppModel) {
    console.log(event);
  }

  public getColor(checked: boolean): string {
    return checked ? 'green' : 'red';
  }

  public signUp() {

  }

  public validateFullname(event: any) {
    if (!event.target.value) {
      this.fullnameInvalid = true;
      return;
    }
    const fullname = event.target.value;
    this.fullnameInvalid = !(fullname.charAt(0) === fullname.charAt(0).toUpperCase());
  }

  public validateEmail(event: any) {
    if (!event.target.value) {
      this.emailInvalid = true;
      return;
    }
    const email: string = event.target.value;
    this.emailInvalid = !email.match(/[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.com$/g);
  }

  public validatePassword(event: any) {
    if (!event.target.value) {
      this.passwordInvalid = 'RED';
      return;
    }
    const password: string = event.target.value;
    if (password.match(/[a-z]/g) &&
      password.match(/[0-9]/g) && password.length < 8) {
      this.passwordInvalid = 'RED';
    } else if (password.match(/[a-z]/g) &&
      password.match(/[A-Z]/g) &&
      password.match(/[0-9]/g) &&
      (password.length >= 8 && password.length < 14)) {
      this.passwordInvalid = 'ORANGE';
    } else if (password.match(/[a-z]/g) &&
      password.match(/[0-9]/g) && password.match(/[A-Z]/g) &&
      password.match(/(\:|\.|\@|\!)/g) && password.length >= 14) {
      this.passwordInvalid = 'GREEN';
    }
  }

}
