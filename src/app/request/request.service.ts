import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { SubjectList } from './model/subject-list';
import { Observable, throwError } from 'rxjs';
import { IExpert } from './model/expert';
import { catchError, map, } from 'rxjs/operators';
import { ExpertList } from './model/expert-list';
import { IMessage } from './model/message';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  private static get botAPIUrl(): string {
    return 'http://localhost:8080';
  }

  get subjectList(): Observable<SubjectList> {
    return this.http.get<IExpert[]>(`${RequestService.botAPIUrl}/employees`)
      .pipe(
        map(it => new ExpertList(it)),
        map(it => new SubjectList(it)),
        catchError<any, any>(this.handleError)
      );
  }

  sendMessage(message: IMessage): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(`${RequestService.botAPIUrl}/message`, JSON.stringify(message), options)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Возникла ошибка:', error.error.message);
    } else {
      console.error(
        `Код ответа сервера ${error.status}, ` +
        `Текст ответа: ${error.error}`);
    }

    return throwError('Ошибка соединения. Попробуйте еще раз.');
  }

}
