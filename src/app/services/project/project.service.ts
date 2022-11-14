import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiBaseResponse } from 'src/app/models/api-base-response.model';
import { GetProjectResponse } from 'src/app/models/get-project-response.model';
import Project from 'src/app/models/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url = `${environment.strapiUrl}/projects`;

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http
      .get<ApiBaseResponse<GetProjectResponse[]>>(this.url)
      .pipe(map((response) => response.data.map((p) => new Project(p))));
  }
}
