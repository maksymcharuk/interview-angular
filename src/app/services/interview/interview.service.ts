import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'qs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NormalizationService } from '../normalization/normalization.service';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  private url = `${environment.strapiUrl}/interviews`;

  constructor(private http: HttpClient, private ns: NormalizationService) {}

  getInterviews(): Observable<any> {
    const query = stringify(
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

    return this.http.get(`${this.url}?${query}`);
  }

  getInterview(id: number): Observable<any> {
    const query = stringify(
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

    return this.http.get(`${this.url}/${id}?${query}`);
  }
}
