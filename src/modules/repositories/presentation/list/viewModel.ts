import { makeObservable, observable, action, computed, toJS, runInAction } from 'mobx';
import { IUseCases } from './interfaces/IUseCases';
import { RepositoryListItem } from './models/RepositoryListItem';

const LIMIT_PER_PAGE = 20;
const ORGANIZATION_NAME = 'facebook';

export class RepositoryListViewModel {
  @observable private _repositories: RepositoryListItem[] = [];

  @observable public isLoading: boolean = false;
  @observable public page: number = 1;
  @observable public organization: string = ORGANIZATION_NAME;

  constructor(private usecases: IUseCases) {
    makeObservable(this);
  }

  @computed get repositories(): RepositoryListItem[] {
    return toJS(this._repositories);
  }

  @action private setLoading = (isLoading: boolean): void => {
    if (this.isLoading !== isLoading) {
      this.isLoading = isLoading;
    }
  }

  @action public getOrganizationRepositories = async () => {
    if (this.isLoading) return;

    this.setLoading(true);

    try {
      const data = await this.usecases.getRepositoryListCase.execute(this.organization, LIMIT_PER_PAGE, this.page);

      if (data) {
        runInAction(() => {
          this._repositories = data.map((item) => new RepositoryListItem(item));
        });
      }
    } finally {
      this.setLoading(false);
    }
  }
}
