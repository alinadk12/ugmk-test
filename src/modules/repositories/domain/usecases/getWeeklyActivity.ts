import { IRepositoriesDetailsRepository } from '../../data/details/interfaces/IRepositoriesDetailsRepository';
import { WeeklyActivity } from '../models/WeeklyActivity';

export class GetWeeklyCommitActivityCase {
  constructor(private repository: IRepositoriesDetailsRepository) {}

  async execute(repo: string, owner: string): Promise<WeeklyActivity | null> {
    return await this.repository.getWeeklyActivity(repo, owner);
  }
}
