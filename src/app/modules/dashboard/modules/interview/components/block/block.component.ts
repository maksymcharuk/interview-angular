import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent {
  @Input() block: any;
  @Output() onBlockChange = new EventEmitter<any>();

  onQuestionChange(question: any) {
    this.onBlockChange.emit(question);
  }
}
