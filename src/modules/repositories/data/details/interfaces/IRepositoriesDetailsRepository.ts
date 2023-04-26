import { WeeklyActivity } from '../../../domain/models/WeeklyActivity';

export interface IRepositoriesDetailsRepository {
  getWeeklyActivity(repo: string, owner: string): Promise<WeeklyActivity | null>;
}
