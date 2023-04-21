import { makeObservable, observable, action, computed, toJS, runInAction } from 'mobx';
import { IUsecases } from './models/IUsecases';
import { IWeeklyActivity } from '../domain/models/weeklyCommitActivity/IWeeklyActivity';

export class DetailsViewModel {
  @observable public isLoading: boolean = false;

  @observable private _weeklyCommitActivity: IWeeklyActivity;

  constructor(private usecases: IUsecases) {
    makeObservable(this);
  }

  @action private setLoading = (isLoading: boolean): void => {
    if (this.isLoading !== isLoading) {
      this.isLoading = isLoading;
    }
  }

  @computed get weeklyCommitActivity(): IWeeklyActivity {
    return toJS(this._weeklyCommitActivity);
  }

  @action public getWeeklyCommitActivity = async (repo: string, owner: string) => {
    this.setLoading(true);

    try {
      const { data } = await this.usecases.getWeeklyCommitActivityCase?.getWeeklyCommitActivity(repo, owner) || {};

      if (data) {
        runInAction(() => this._weeklyCommitActivity = data);
      }
    } finally {
      this.setLoading(false);
    }
  }
}
