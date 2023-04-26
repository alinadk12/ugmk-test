import { Repository } from '../../../domain/models/Repository';

export class RepositoryListItem {
  id: number;
  repo: string;
  description: string | null;
  owner: string;

  constructor(data: Repository) {
    this.repo = data.name;
    this.id = data.id;
    this.description = data.description;
    this.owner = data.owner.login || '';
  }
}
