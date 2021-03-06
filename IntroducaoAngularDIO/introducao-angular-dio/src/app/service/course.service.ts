import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  idUser: number= environment.id;

  baseUrl: string= 'http://localhost:8080/usuario/';

  token= {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  findAllCourses(): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl.concat(`${this.idUser}/cursos`), this.token)
  }

  filterByNome(nome: string): Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl.concat(`${this.idUser}/cursos/pesquisa-curso-por/${nome}`), this.token)
  }

  saveCourse(course: Course): Observable<Course>{
    return this.http.post<Course>(this.baseUrl.concat(`${this.idUser}/cursos/cadastrar`), course, this.token)
  }

  findCourseById(courseId: number): Observable<Course>{
    return this.http.get<Course>(this.baseUrl.concat(`${this.idUser}/cursos/buscaPorId/${courseId}`), this.token)
  }

  putCourse(course: Course): Observable<Course>{
    return this.http.put<Course>(this.baseUrl.concat(`${this.idUser}/cursos/alterar`), course, this.token)
  }
  
  getCourseOpenedUser():Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl.concat(`${this.idUser}/cursos/pendente`), this.token)
  }

  getCourseClosedUser():Observable<Course[]>{
    return this.http.get<Course[]>(this.baseUrl.concat(`${this.idUser}/cursos/finalizados`), this.token)
  }
}
