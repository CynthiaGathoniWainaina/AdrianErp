import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commercialtask } from '../models/commercialtask';
import { Procurementtask } from '../models/procurementtask';
import { Civiltask } from '../models/civiltask';


@Injectable({
  providedIn: 'root'
})
export class FetchtasksService {

  url = 'http://68.183.79.24/';

  constructor(private http: HttpClient) { }

  getCommercialTasks() {
    return this.http.get<Commercialtask[]>(`${this.url}commercialteamtasks/`);
  }

  getProcurementTasks() {
    return this.http.get<Procurementtask[]>(`${this.url}procurementteamtasks/`);
  }
}
