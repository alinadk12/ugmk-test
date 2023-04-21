import { DetailsRepository } from '../../data/repository';

export class GetWeeklyCommitActivityCase {
  constructor(private repository: DetailsRepository) {}

  public getWeeklyCommitActivity = async (repo: string, owner: string) => {
    return await this.repository.getWeeklyCommitActivity(repo, owner);
  }
}
