import { IApiOctokitService } from 'src/services/api/interfaces/IApiOctokitService';
import { ApiError } from 'src/errors/ApiError';
import { IRepository, Repository } from '../../domain/models/Repository';
import { IRepositoriesListRepository } from './interfaces/IRepositoriesListRepository';

export class RepositoriesListRepository implements IRepositoriesListRepository{
  constructor(private api: IApiOctokitService) {}

  async getList(org: string, per_page: number, page: number): Promise<Repository[]> {
    try {
      const response = await this.api.getRepositories( org, per_page, page );

      if (response && response.data) {
        return response.data.map((item: IRepository) => new Repository(item));
      }

      return [];
    } catch (err) {
      throw new ApiError(err);
    }
  }
}
