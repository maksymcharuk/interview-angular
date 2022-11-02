import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url = `/projects`;

  constructor(private api: ApiService) {}

  getProjects(): Observable<any> {
    return this.api.get(this.url);
  }
}
