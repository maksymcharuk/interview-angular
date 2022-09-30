import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InterviewTemplate } from '../../models/interview-template.model';
import { NormalizationService } from '../normalization/normalization.service';

interface StrapiResponse {
  data: any;
}

@Injectable({
  providedIn: 'root',
})
export class InterviewTemplateService {
  private url = `${environment.strapiUrl}/interview-templates`;
  private populateQuestionsParam = {
    params: new HttpParams().set('populate', '*'),
  };

  constructor(private http: HttpClient, private ns: NormalizationService) {}

  getInterviewTemplates(): Observable<InterviewTemplate[]> {
    return this.http
      .get<StrapiResponse>(this.url, this.populateQuestionsParam)
      .pipe(this.ns.restructureArrayedAttributes('questions'));
  }

  getInterviewTemplate(id: number): Observable<InterviewTemplate> {
    return this.http
      .get<StrapiResponse>(`${this.url}/${id}`, this.populateQuestionsParam)
      .pipe(this.ns.restructureAttributes('questions'));
  }
}
