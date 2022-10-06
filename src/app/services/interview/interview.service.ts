import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'qs';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NormalizationService } from '../normalization/normalization.service';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  public interview$ = new ReplaySubject<any>();

  private url = `${environment.strapiUrl}/interviews`;
  private baseQuery = stringify(
    {
      populate: {
        project: true,
        candidate: true,
        interviewProcess: {
          populate: {
            blocks: {
              populate: {
                questions: true,
              },
            },
          },
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  constructor(private http: HttpClient, private ns: NormalizationService) {}

  getInterviews(): Observable<any> {
    return this.http.get(`${this.url}?${this.baseQuery}`);
  }

  getInterview(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}?${this.baseQuery}`);
  }

  updateInterview(id: number, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}?${this.baseQuery}`, data);
  }
}
