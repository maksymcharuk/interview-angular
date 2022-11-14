import BaseEntity, { BaseEntityParams } from './base-entity.model';

export interface ProjectParams extends BaseEntityParams {
  id: number;
  name: string;
  description: string;
}

export default class Project extends BaseEntity {
  id: number | null;
  name: string | null;
  description: string | null;

  constructor(data?: ProjectParams) {
    super(data);
    this.id = data?.id ?? null;
    this.name = data?.name ?? null;
    this.description = data?.description || null;
  }
}
