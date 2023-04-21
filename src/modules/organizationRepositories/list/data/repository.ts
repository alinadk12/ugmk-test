import { IApiService } from '../../../../services/api/models/IApiService';
import { API_ORGANIZATION_REPOSITORIES_LIST } from '../constants';
import { RepositoryModel } from '../domain/models/repository/RepositoryModel';
import { IRepository } from '../domain/models/repository/IRepository';

export class OrganizationRepository {
  constructor(private API: IApiService) {}

  public getOrganizationRepositories = async (org: string, per_page: number, page: number) => {
    const response = await this.API.get(API_ORGANIZATION_REPOSITORIES_LIST, { org, per_page, page });

    return {
      data: (response.data.map((item: IRepository) => new RepositoryModel(item)) as IRepository[]),
    }
  }
}
