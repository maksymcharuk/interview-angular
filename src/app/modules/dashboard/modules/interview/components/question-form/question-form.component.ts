import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit, AfterViewInit {
  @Input() question: any;
  @Output() onQuestionChange = new EventEmitter<any>();

  notesControl = new FormControl();

  public scores = [1, 2, 3, 4, 5];
  public selectedScore: any = null;

  public notes = '';

  ngOnInit(): void {
    this.notesControl.valueChanges.pipe(debounceTime(1000)).subscribe((res) => {
      this.question.notes = res;
      this.onQuestionChange.emit(this.question);
    });
  }

  ngAfterViewInit(): void {
    this.selectedScore = this.question.score;
    this.notesControl.setValue(this.question.notes, { emitEvent: false });
  }

  onChange(event: any): void {
    this.question.score = event.value;
    this.onQuestionChange.emit(this.question);
  }
}
