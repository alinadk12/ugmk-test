import { IApiService } from 'src/services/api/models/IApiService';
import { API_WEEKLY_COMMIT_ACTIVITY } from '../constants';
import { WeeklyActivityModel } from '../domain/models/weeklyCommitActivity/WeeklyActivityModel';
import { IWeeklyActivity } from '../domain/models/weeklyCommitActivity/IWeeklyActivity';

export class DetailsRepository {
  constructor(private API: IApiService) {}

  public getWeeklyCommitActivity = async (repo: string, owner: string) => {
    const response = await this.API.get(API_WEEKLY_COMMIT_ACTIVITY, {repo, owner});

    return {
      data:  new WeeklyActivityModel(response.data as IWeeklyActivity)
    };
  }
}
