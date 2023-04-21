import { OrganizationRepository } from '../../data/repository';

export class GetOrganizationRepositoriesCase {
  constructor(private repository: OrganizationRepository) {}

  public getOrganizationRepositories = async (org: string, per_page: number, page: number) => {
    return await this.repository.getOrganizationRepositories(org, per_page, page);
  }
}
