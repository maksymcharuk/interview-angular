import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'qs';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';
import { NormalizationService } from '../normalization/normalization.service';

@Injectable({
  providedIn: 'root',
})
export class InterviewUtilsService {
  private url = `/interview-utils`;

  constructor(private api: ApiService, private ns: NormalizationService) {}

  createInterviewFromTemplate(data: {
    templateId: string;
    candidateId: string;
    projectId: string;
    notes: string;
  }): Observable<any> {
    return this.api.post(`${this.url}/create-interview-from-template`, {
      data,
    });
  }
}
