import { request } from '@octokit/request';
import { IApiService } from './models/IApiService';

const GIT_TOKEN = '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';

export class ApiOctokitService implements IApiService {
  private static _instance: ApiOctokitService;

  private constructor() {}

  public static getInstance(): ApiOctokitService {
    if (!ApiOctokitService._instance) {
      ApiOctokitService._instance = new ApiOctokitService();
    }

    return ApiOctokitService._instance;
  }

  public get = async (path: string, params?: Record<string, string>) => {
    return await request(`GET ${path}`, {
      headers: {
        authorization: `token ${GIT_TOKEN}`,
      },
      ...params,
    });
  }
}

export const API = ApiOctokitService.getInstance();
