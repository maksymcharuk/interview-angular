import BaseEntity, { BaseEntityParams } from './base-entity.model';
import { BlockComponent, BlockComponentParams } from './block-component.model';

export interface InterviewProcessParams extends BaseEntityParams {
  id: number;
  score: number;
  blocks: BlockComponentParams[];
}

export class InterviewProcess extends BaseEntity {
  id: number;
  score: number | null;
  blocks: BlockComponent[];

  constructor(data?: InterviewProcessParams) {
    super(data);
    this.id = data?.id ?? 0;
    this.score = data?.score ?? null;
    this.blocks = data?.blocks
      ? data.blocks.map((b) => new BlockComponent(b))
      : [];
  }
}
