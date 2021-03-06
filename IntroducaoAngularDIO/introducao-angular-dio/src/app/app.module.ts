import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { CourseListComponent } from './course/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AlertasComponent } from './alertas/alertas.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { CourseClosedComponent } from './course-closed/course-closed.component';
import { CourseOpenedComponent } from './course-opened/course-opened.component';


//fim icones bootstrap

@NgModule({
  declarations: [
    AppComponent, 
    CourseListComponent, 
    StarComponent, 
    ReplacePipe, 
    NavBarComponent, 
    Error404Component, 
    CourseInfoComponent, 
    EntrarComponent, 
    CadastrarComponent, 
    AlertasComponent, 
    NewCourseComponent, CourseClosedComponent, CourseOpenedComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ModalModule.forRoot(), 
    HttpClientModule, 
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'entrar', pathMatch: 'full'
      },
      {
        path: 'entrar', component: EntrarComponent
      },
      {
        path: 'cadastrar', component: CadastrarComponent
      },
      {
        path: 'courses', component: CourseListComponent
      },
     
      {
        path:'courses/info/:id', component: CourseInfoComponent
      },
      {
        path:'new-course', component: NewCourseComponent
      },
      {
        path:'course-opened', component: CourseOpenedComponent
      },
      {
        path:'course-closed', component: CourseClosedComponent
      },

      // ele tem quer por último, do contrário toda nova rota irá apontar para ele
      {
        path: '**', component: Error404Component
      },
    ]),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
