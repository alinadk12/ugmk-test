import { IOrganizationRepository } from './IOrganizationRepository';
import { IRepository } from '../../domain/models/repository/IRepository';
import { GIT_URL } from '../../constants';

export class OrganizationRepositoryModel implements IOrganizationRepository {
  repo: IOrganizationRepository['repo'];
  id: IOrganizationRepository['id'];
  homepage: IOrganizationRepository['homepage'];
  description: IOrganizationRepository['description'];
  owner: IOrganizationRepository['owner'];

  constructor(data: IRepository) {
    this.repo = data.name;
    this.id = data.id;
    this.homepage = data.homepage || GIT_URL;
    this.description = data.description;
    this.owner = data.owner.login || '';
  }
}
