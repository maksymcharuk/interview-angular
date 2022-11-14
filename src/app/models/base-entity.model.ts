export interface BaseEntityParams {
  createdAt: string;
  updatedAt: string;
}

export default abstract class BaseEntity {
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(data?: BaseEntityParams) {
    this.createdAt = data?.createdAt ? new Date(data.createdAt) : null;
    this.updatedAt = data?.updatedAt ? new Date(data.updatedAt) : null;
  }
}
