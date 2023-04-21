export interface IOrganizationRepository {
  id: number,
  repo: string,
  description: string | null,
  homepage: string | null,
  owner: string,
}
