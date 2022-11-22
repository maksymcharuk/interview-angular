import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { BlockComponent as BlockComponentModel } from 'src/app/models/block-component.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockComponent implements OnInit {
  @Input() block = new BlockComponentModel();
  // TODO(accordion-rerendering): find another soluton to save accordions toogle state during rerenering
  @Input() activeState: boolean[] = [];
  @Output() onBlockChange = new EventEmitter<any>();
  @Output() activeStateChange = new EventEmitter<boolean[]>();

  public maxScore = 0;
  public progressScore = 0;

  ngOnInit() {
    this.maxScore = this.block.questions.filter((q) => !!q.score).length * 5;
    this.progressScore = this.block.score
      ? Math.round((this.block.score / this.maxScore) * 100)
      : 0;
  }

  onQuestionChange(question: any) {
    this.onBlockChange.emit(question);
  }
}
