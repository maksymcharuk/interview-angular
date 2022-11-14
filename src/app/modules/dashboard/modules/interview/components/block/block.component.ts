import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BlockComponent as BlockComponentModel } from 'src/app/models/block-component.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockComponent {
  @Input() block = new BlockComponentModel();
  // TODO(accordion-rerendering): find another soluton to save accordions toogle state during rerenering
  @Input() activeState: boolean[] = [];
  @Output() onBlockChange = new EventEmitter<any>();
  @Output() activeStateChange = new EventEmitter<boolean[]>();

  onQuestionChange(question: any) {
    this.onBlockChange.emit(question);
  }
}
