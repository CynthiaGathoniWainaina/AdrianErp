import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commercialprogress } from '../models/commercialprogress';
import { Procurementprogress } from '../models/procurementprogress';
import { ClassCivilprogress} from '../models/class-civilprogress';

@Injectable({
  providedIn: 'root'
})
export class TaskprogressService {

  constructor(private http: HttpClient) { }

  getTaskOneProgress() {
    return this.http.get<Commercialprogress>(`http://68.183.79.24/commercialprogress/6`);
  }
  getTaskTwoProgress() {
    return this.http.get<Procurementprogress>(`http://68.183.79.24/procurementprogress/6`);
  }
  getTaskThreeProgress() {
    return this.http.get<ClassCivilprogress>(`http://68.183.79.24/civilprogress/6`);
  }
}
