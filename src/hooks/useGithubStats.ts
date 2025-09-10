
import * as React from "react";

interface GithubStats {
  stars: number;
  public_repos: number;
  pull_requests: number;
  contributions: number;
  repositoriesContributedTo: number;
  followers: number;
}

export const useGithubStats = () => {
  const [stats, setStats] = React.useState<GithubStats | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);

  const username = "ElcioMFernandes";
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

  React.useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        const graphqlQuery = {
          query: `
            query($username: String!) {
              user(login: $username) {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                  }
                }
                pullRequests {
                  totalCount
                }
                repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: STARGAZERS, direction: DESC}) {
                  totalCount
                  nodes {
                    stargazers {
                      totalCount
                    }
                  }
                }
                repositoriesContributedTo(first: 1, contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) {
                  totalCount
                }
                followers {
                  totalCount
                }
              }
            }
          `,
          variables: {
            username,
          },
        };

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${githubToken}`,
          },
          body: JSON.stringify(graphqlQuery),
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch GitHub stats: ${response.statusText}`);
        }

        const { data } = await response.json();
        const user = data.user;

        const totalStars = user.repositories.nodes.reduce(
          (acc: number, repo: { stargazers: { totalCount: number } }) =>
            acc + repo.stargazers.totalCount,
          0
        );

        setStats({
          stars: totalStars,
          public_repos: user.repositories.totalCount,
          pull_requests: user.pullRequests.totalCount,
          contributions: user.contributionsCollection.contributionCalendar.totalContributions,
          repositoriesContributedTo: user.repositoriesContributedTo.totalCount,
          followers: user.followers.totalCount,
        });
      } catch (e) {
        if (e instanceof Error) setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [githubToken]);

  return { stats, loading, error };
};
