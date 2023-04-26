import { request } from '@octokit/request';
import { IApiOctokitService, RepositoriesResponse, WeeklyActivityResponse } from './interfaces/IApiOctokitService';

export class ApiOctokitService implements IApiOctokitService {
  private static _instance: ApiOctokitService;

  private constructor() {}

  public static getInstance(): ApiOctokitService {
    if (!ApiOctokitService._instance) {
      ApiOctokitService._instance = new ApiOctokitService();
    }

    return ApiOctokitService._instance;
  }

  async getRepositories(org: string, per_page: number, page: number): Promise<RepositoriesResponse> {
    return await request('GET /orgs/{org}/repos', {
      org, per_page, page
    });
  }

  async getWeeklyActivity(repo: string, owner: string): Promise<WeeklyActivityResponse> {
    return await request('GET /repos/{owner}/{repo}/stats/participation', {
      repo, owner
    });
  }
}

export const API = ApiOctokitService.getInstance();
