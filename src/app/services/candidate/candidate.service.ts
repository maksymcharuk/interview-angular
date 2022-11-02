import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private url = `/candidates`;

  constructor(private api: ApiService) {}

  getCadidates(): Observable<any> {
    return this.api.get(this.url);
  }
}
