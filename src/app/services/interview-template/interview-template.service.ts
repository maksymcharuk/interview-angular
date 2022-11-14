import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'qs';
import { map, Observable } from 'rxjs';
import { ApiBaseResponse } from 'src/app/models/api-base-response.model';
import { GetInterviewTemplateResponse } from 'src/app/models/get-interview-template-response.model';
import InterviewTemplate from 'src/app/models/interview-template.model';
import { environment } from 'src/environments/environment';
import { NormalizationService } from '../normalization/normalization.service';

@Injectable({
  providedIn: 'root',
})
export class InterviewTemplateService {
  private url = `${environment.strapiUrl}/interview-templates`;
  private readonly defaultQuery = stringify(
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

  constructor(private http: HttpClient, private ns: NormalizationService) {}

  getInterviewTemplates(): Observable<InterviewTemplate[]> {
    return this.http
      .get<ApiBaseResponse<GetInterviewTemplateResponse[]>>(
        `${this.url}?${this.defaultQuery}`
      )
      .pipe(
        map((response) =>
          response.data.map(
            (interviewTemplate) => new InterviewTemplate(interviewTemplate)
          )
        )
      );
  }

  getInterviewTemplate(id: number): Observable<InterviewTemplate> {
    return this.http
      .get<ApiBaseResponse<GetInterviewTemplateResponse>>(
        `${this.url}/${id}?${this.defaultQuery}`
      )
      .pipe(map((response) => new InterviewTemplate(response.data)));
  }
}
