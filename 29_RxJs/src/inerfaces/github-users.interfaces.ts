import { GitHubUser } from './github-user.interface';
export interface GitHubUsersResponse {
    total_count:        number;
    incomplete_results: boolean;
    items:              GitHubUser[];
}