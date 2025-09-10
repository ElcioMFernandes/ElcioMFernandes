import { useMemo } from "react";
import { StatCard } from "./StatCard";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useGithubStats } from "@/hooks/useGithubStats";
import { Users, GitCommit, BookMarked, GitPullRequest } from "lucide-react";

export const GithubStats = () => {
  const { stats, loading } = useGithubStats();
  const screenSize = useScreenSize();

  const statItems = useMemo(() => {
    const isSmallScreen = screenSize === "sm";
    return [
      {
        Icon: GitCommit,
        label: isSmallScreen ? "Commits" : "Total Commits",
        value: stats?.contributions,
      },
      {
        Icon: GitPullRequest,
        label: isSmallScreen ? "PRs" : "Pull Requests",
        value: stats?.pull_requests,
      },
      {
        Icon: BookMarked,
        label: isSmallScreen ? "Contribs" : "Contributed to",
        value: stats?.repositoriesContributedTo,
      },
      {
        Icon: Users,
        label: "Followers",
        value: stats?.followers,
      },
    ];
  }, [screenSize, stats]);

  return (
    <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {statItems.map((item) => (
        <StatCard
          key={item.label}
          Icon={item.Icon}
          label={item.label}
          value={
            loading || item.value === undefined
              ? "..."
              : item.value.toLocaleString()
          }
          loading={loading}
        />
      ))}
    </div>
  );
};
