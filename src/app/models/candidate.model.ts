import BaseEntity, { BaseEntityParams } from './base-entity.model';

export interface CandidateParams extends BaseEntityParams {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export default class Candidate extends BaseEntity {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;

  constructor(data?: CandidateParams) {
    super(data);
    this.id = data?.id ?? null;
    this.firstName = data?.firstName ?? null;
    this.lastName = data?.lastName ?? null;
    this.email = data?.email ?? null;
  }
}
