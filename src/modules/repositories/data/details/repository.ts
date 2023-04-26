import { IApiOctokitService } from 'src/services/api/interfaces/IApiOctokitService';
import { ApiError } from 'src/errors/ApiError';
import { WeeklyActivity } from '../../domain/models/WeeklyActivity';
import { IRepositoriesDetailsRepository } from './interfaces/IRepositoriesDetailsRepository';

export class RepositoriesDetailsRepository implements IRepositoriesDetailsRepository{
  constructor(private api: IApiOctokitService) {}

  async getWeeklyActivity(repo: string, owner: string): Promise<WeeklyActivity | null> {
    try {
      const response = await this.api.getWeeklyActivity(repo, owner);

      if (response && response.data) {
        return new WeeklyActivity(response.data);
      }

      return null;
    } catch (err) {
      throw new ApiError(err);
    }
  }
}
