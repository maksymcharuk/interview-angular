import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiBaseResponse } from 'src/app/models/api-base-response.model';
import Candidate from 'src/app/models/candidate.model';
import { GetCandidateResponse } from 'src/app/models/get-candidate-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private url = `${environment.strapiUrl}/candidates`;

  constructor(private http: HttpClient) {}

  getCadidates(): Observable<Candidate[]> {
    return this.http
      .get<ApiBaseResponse<GetCandidateResponse[]>>(this.url)
      .pipe(map((response) => response.data.map((c) => new Candidate(c))));
  }
}
