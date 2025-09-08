export interface Repository {
  id: number;
  name: string;
  html_url: string;
  language: string | null;
  forks_count: number;
  description: string | null;
  stargazers_count: number;
}
