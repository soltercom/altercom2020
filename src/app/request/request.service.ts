import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubjectList } from './model/subject-list';
import { Observable } from 'rxjs';
import { IExpert } from './model/expert';
import { map } from 'rxjs/operators';
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
    return this.http.get<IExpert[]>(`${RequestService.botAPIUrl}/employees`).pipe(
      map(it => new ExpertList(it)),
      map(it => new SubjectList(it))
    );
  }

  sendMessage(message: IMessage): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(`${RequestService.botAPIUrl}/message`, JSON.stringify(message), options);
  }

}
