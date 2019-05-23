import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class GetprojectsService {
  apiUrl = 'http://68.183.79.24/projects/';

  constructor(private http: HttpClient) { }
  getProjects() {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
