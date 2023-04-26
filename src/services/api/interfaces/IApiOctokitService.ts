import { Endpoints } from '@octokit/types';

export type RepositoriesResponse = Endpoints["GET /orgs/{org}/repos"]["response"];
export type WeeklyActivityResponse = Endpoints["GET /repos/{owner}/{repo}/stats/participation"]["response"];

export interface IApiOctokitService {
  getRepositories(org: string, per_page: number, page: number): Promise<RepositoriesResponse>;
  getWeeklyActivity(repo: string, owner: string): Promise<WeeklyActivityResponse>;
}
