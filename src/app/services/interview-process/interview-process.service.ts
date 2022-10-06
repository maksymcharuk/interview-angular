import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterviewProcessService {
  private url = `${environment.strapiUrl}/interview-processes`;

  constructor(private http: HttpClient) {}

  updateInterviewProcess(id: number, data: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, data);
  }
}
