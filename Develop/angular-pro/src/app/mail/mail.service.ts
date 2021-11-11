import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Mail } from './models/mail.interface';

@Injectable()
export class MailService {
  constructor(private http: HttpClient) {}
  getFolder(folder: string): Observable<Mail[]> {
    return this.http.get<Mail[]>(`http://localhost:3000/messages?folder=${folder}`);
  }
  getMessage(id: string): Observable<Mail> {
    return this.http.get<Mail>(`http://localhost:3000/messages/${id}`);
  }
}