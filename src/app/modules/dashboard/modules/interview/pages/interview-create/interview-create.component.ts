import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.scss'],
})
export class InterviewCreateComponent {
  templateId: number | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params: Params) => {
      this.templateId = +params['templateId'];
    });
  }
}
