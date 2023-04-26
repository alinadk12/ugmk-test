import { array, boolean, InferType, number, object, string } from 'yup';
import { ValidationError } from 'src/errors/ValidationError';

export interface IRepository extends InferType<typeof repositorySchema> {}

export class Repository implements IRepository {
  allow_forking: IRepository['allow_forking'];
  archived: IRepository['archived'];
  created_at: IRepository['created_at'];
  default_branch: IRepository['default_branch'];
  description: IRepository['description'];
  disabled: IRepository['disabled'];
  fork: IRepository['fork'];
  forks: IRepository['forks'];
  forks_count: IRepository['forks_count'];
  full_name: IRepository['full_name'];
  has_discussions: IRepository['has_discussions'];
  has_downloads: IRepository['allow_forking'];
  has_issues: IRepository['has_issues'];
  has_pages: IRepository['has_pages'];
  has_projects: IRepository['has_projects'];
  has_wiki: IRepository['has_wiki'];
  homepage: IRepository['homepage'];
  id: IRepository['id'];
  is_template: IRepository['is_template'];
  language: IRepository['language'];
  name: IRepository['name'];
  node_id: IRepository['node_id'];
  open_issues: IRepository['open_issues'];
  open_issues_count: IRepository['open_issues_count'];
  owner: IRepository['owner'];
  private: IRepository['private'];
  pushed_at: IRepository['pushed_at'];
  size: IRepository['size'];
  stargazers_count: IRepository['stargazers_count'];
  topics: IRepository['topics'];
  updated_at: IRepository['updated_at'];
  url: IRepository['url'];
  visibility: IRepository['visibility'];
  watchers: IRepository['watchers'];
  watchers_count: IRepository['watchers_count'];
  web_commit_signoff_required: IRepository['web_commit_signoff_required'];

  constructor(data: IRepository) {
    const validatedData = repositorySchema.validateSync(data, {strict: true});

    if (validatedData) {
      this.setData(validatedData);
    } else {
      throw new ValidationError();
    }
  }

  private setData(data: IRepository) {
    this.allow_forking = data.allow_forking;
    this.archived = data.archived;
    this.created_at = data.created_at;
    this.default_branch = data.default_branch;
    this.description = data.description;
    this.disabled = data.disabled;
    this.fork = data.fork;
    this.forks = data.forks;
    this.forks_count = data.forks_count;
    this.full_name = data.full_name;
    this.has_discussions = data.has_discussions;
    this.has_downloads = data.has_downloads;
    this.has_issues = data.has_issues;
    this.has_pages = data.has_pages;
    this.has_projects = data.has_projects;
    this.has_wiki = data.has_wiki;
    this.homepage = data.homepage;
    this.id = data.id;
    this.is_template = data.is_template;
    this.language = data.language;
    this.name = data.name;
    this.node_id = data.node_id;
    this.open_issues = data.open_issues;
    this.open_issues_count = data.open_issues_count;
    this.owner = data.owner;
    this.private = data.private;
    this.pushed_at = data.pushed_at;
    this.size = data.size;
    this.stargazers_count = data.stargazers_count;
    this.topics = data.topics;
    this.updated_at = data.updated_at;
    this.url = data.url;
    this.visibility = data.visibility;
    this.watchers = data.watchers;
    this.watchers_count = data.watchers_count;
    this.web_commit_signoff_required = data.web_commit_signoff_required;
  }
}

const ownerSchema = object({
  name: string().nullable(),
  email: string().nullable(),
  login: string(),
  id: number(),
  node_id: string(),
  avatar_url: string(),
  gravatar_id: string().nullable(),
  url: string(),
  html_url: string(),
  type: string(),
  site_admin: boolean(),
});

const repositorySchema = object({
  allow_forking: boolean(),
  archived: boolean(),
  created_at: string().nullable(),
  default_branch: string(),
  description: string().nullable().defined(),
  disabled: boolean(),
  fork: boolean(),
  forks: number(),
  forks_count: number(),
  full_name: string(),
  has_discussions: boolean(),
  has_downloads: boolean(),
  has_issues: boolean(),
  has_pages: boolean(),
  has_projects: boolean(),
  has_wiki: boolean(),
  homepage: string().nullable(),
  id: number().required().defined(),
  is_template: boolean(),
  language: string().nullable(),
  name: string().required().defined(),
  node_id: string(),
  open_issues: number(),
  open_issues_count: number(),
  owner: ownerSchema,
  private: boolean(),
  pushed_at: string().nullable(),
  size: number(),
  stargazers_count: number(),
  topics: array().of(string()),
  updated_at: string().nullable(),
  url: string(),
  visibility: string(),
  watchers: number(),
  watchers_count: number(),
  web_commit_signoff_required: boolean(),
});
