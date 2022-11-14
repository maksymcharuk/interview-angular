import BaseEntity, { BaseEntityParams } from './base-entity.model';
import Block, { BlockParams } from './block.model';
import Tag, { TagParams } from './tag.model';

interface InterviewTemplateParams extends BaseEntityParams {
  id: number;
  notes: string;
  description: string;
  name: string;
  public: boolean;
  blocks: BlockParams[];
  tags: TagParams[];
}

export default class InterviewTemplate extends BaseEntity {
  id: number;
  notes: string | null;
  description: string | null;
  name: string | null;
  public: boolean | null;
  blocks: Block[];
  tags: Tag[];

  constructor(data?: InterviewTemplateParams) {
    super(data);
    this.id = data?.id ?? 0;
    this.notes = data?.notes ?? null;
    this.description = data?.description ?? null;
    this.name = data?.name ?? null;
    this.public = data?.public ?? null;
    this.blocks = data?.blocks ? data.blocks.map((b) => new Block(b)) : [];
    this.tags = data?.tags ? data.tags.map((b) => new Tag(b)) : [];
  }
}
