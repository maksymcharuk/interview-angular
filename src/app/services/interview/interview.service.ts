import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'qs';
import { map, Observable, ReplaySubject } from 'rxjs';
import { ApiBaseResponse } from 'src/app/models/api-base-response.model';
import { GetInterviewResponse } from 'src/app/models/get-interview-response.model';
import Interview from 'src/app/models/interview.model';
import { QuestionUpdateableData } from 'src/app/models/question-updeatable-data.model';
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

  getInterviews(): Observable<Interview[]> {
    return this.http
      .get<ApiBaseResponse<GetInterviewResponse[]>>(
        `${this.url}?${this.baseQuery}`
      )
      .pipe(
        map((response) =>
          response.data.map((interview) => new Interview(interview))
        )
      );
  }

  getInterview(id: number): Observable<Interview> {
    return this.http
      .get<ApiBaseResponse<GetInterviewResponse>>(
        `${this.url}/${id}?${this.baseQuery}`
      )
      .pipe(map((response) => new Interview(response.data)));
  }

  updateInterview(id: number, data: any): Observable<Interview> {
    return this.http
      .put<ApiBaseResponse<GetInterviewResponse>>(
        `${this.url}/${id}?${this.baseQuery}`,
        data
      )
      .pipe(map((response) => new Interview(response.data)));
  }

  updateQuestion(
    interviewId: number,
    questionId: number,
    data: QuestionUpdateableData
  ): Observable<Interview> {
    return this.http
      .post<GetInterviewResponse>(`${this.url}/update-question`, {
        interviewId,
        questionId,
        data,
      })
      .pipe(map((response) => new Interview(response)));
  }
}
