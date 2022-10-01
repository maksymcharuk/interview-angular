import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'qs';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NormalizationService } from '../normalization/normalization.service';

@Injectable({
  providedIn: 'root',
})
export class InterviewTemplateService {
  private url = `${environment.strapiUrl}/interview-templates`;

  constructor(private http: HttpClient, private ns: NormalizationService) {}

  getInterviewTemplates(): Observable<any> {
    const query = stringify(
      {
        populate: {
          blocks: {
            populate: {
              questions: true,
            },
          },
          tags: true,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    return this.http.get(`${this.url}?${query}`);
  }

  getInterviewTemplate(id: number) {
    const query = stringify(
      {
        populate: {
          blocks: {
            populate: {
              questions: true,
            },
          },
          tags: true,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );

    return this.http.get(`${this.url}/${id}?${query}`);
  }
}
