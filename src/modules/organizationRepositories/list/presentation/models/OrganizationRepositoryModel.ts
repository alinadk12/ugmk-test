import { IOrganizationRepository } from './IOrganizationRepository';
import { IRepository } from '../../domain/models/repository/IRepository';
import { GIT_URL } from '../../constants';

export class OrganizationRepositoryModel implements IOrganizationRepository {
  name: IOrganizationRepository['name'];
  id: IOrganizationRepository['id'];
  homepage: IOrganizationRepository['homepage'];
  description: IOrganizationRepository['description'];

  constructor(data: IRepository) {
    this.name = data.name;
    this.id = data.id;
    this.homepage = data.homepage || GIT_URL;
    this.description = data.description;
  }
}
