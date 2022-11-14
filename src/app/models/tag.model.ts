import BaseEntity, { BaseEntityParams } from './base-entity.model';

export interface TagParams extends BaseEntityParams {
  id: number;
  slug: string;
  title: string;
}

export default class Tag extends BaseEntity {
  id: number | null;
  slug: string | null;
  title: string | null;

  constructor(data?: TagParams) {
    super(data);
    this.id = data?.id ?? null;
    this.slug = data?.slug ?? null;
    this.title = data?.title ?? null;
  }
}
