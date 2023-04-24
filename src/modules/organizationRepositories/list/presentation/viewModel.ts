import { makeObservable, observable, action, computed, toJS, runInAction } from 'mobx';
import { IOrganizationRepository } from './models/IOrganizationRepository';
import { IUsecases } from './models/IUsecases';
import { LIMIT_PER_PAGE, ORGANIZATION_NAME } from '../constants';
import { OrganizationRepositoryModel } from './models/OrganizationRepositoryModel';

export class OrganizationViewModel {
  @observable private _repositories: IOrganizationRepository[] = [];

  @observable public isLoading: boolean = false;
  @observable public page: number = 1;
  @observable public organization: string = ORGANIZATION_NAME;

  constructor(private usecases: IUsecases) {
    makeObservable(this);
  }

  @computed get repositories(): IOrganizationRepository[] {
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
      const { data } = await this.usecases.getOrganizationRepositoriesCase?.getOrganizationRepositories(this.organization, LIMIT_PER_PAGE, this.page) || {};

      if (data) {
        runInAction(() => {
          this._repositories = data.map((item) => new OrganizationRepositoryModel(item));
        });
      }
    } finally {
      this.setLoading(false);
    }
  }
}
