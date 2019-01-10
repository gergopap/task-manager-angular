import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateEditTaskComponent } from './create-edit-task/create-edit-task.component';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';
import { TaskMapperService } from './services/task-mapper.service';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: '', component: AppComponent, children: [
    { path: 'login', component: LoginComponent, data: {title: 'Login'} },
    { path: 'signup', component: SignupComponent, data: {title: 'Registration'} },
    { path: 'tasklist', component: TaskListComponent }
  ] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    CreateEditTaskComponent,
    LoginComponent,
    SignupComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [TaskService, TaskMapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
