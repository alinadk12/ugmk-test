import { makeObservable, observable, action, computed, toJS, runInAction } from 'mobx';
import { WeeklyActivity } from '../../domain/models/WeeklyActivity';
import { IUseCases } from './interfaces/IUseCases';

export class DetailsViewModel {
  @observable public isLoading: boolean = false;

  @observable private _weeklyCommitActivity: WeeklyActivity;

  constructor(private usecases: IUseCases) {
    makeObservable(this);
  }

  @action private setLoading = (isLoading: boolean): void => {
    if (this.isLoading !== isLoading) {
      this.isLoading = isLoading;
    }
  }

  @computed get weeklyCommitActivity(): WeeklyActivity {
    return toJS(this._weeklyCommitActivity);
  }

  @action public getWeeklyCommitActivity = async (repo: string, owner: string) => {
    if (this.isLoading) return;

    this.setLoading(true);

    try {
      const data = await this.usecases.getWeeklyCommitActivityCase.execute(repo, owner);

      if (data) {
        runInAction(() => this._weeklyCommitActivity = data);
      }
    } finally {
      this.setLoading(false);
    }
  }
}
