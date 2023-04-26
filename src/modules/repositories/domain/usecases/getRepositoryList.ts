import { Repository } from '../models/Repository';
import { IRepositoriesListRepository } from '../../data/list/interfaces/IRepositoriesListRepository';

export class GetRepositoryListCase {
  constructor(private repository: IRepositoriesListRepository) {}

  async execute (org: string, per_page: number, page: number): Promise<Repository[]> {
    return await this.repository.getList(org, per_page, page);
  }
}
