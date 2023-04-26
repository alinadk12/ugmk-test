import { Repository } from '../../../domain/models/Repository';

export interface IRepositoriesListRepository {
  getList(org: string, per_page: number, page: number): Promise<Repository[]>;
}
